import json
import os

from django.core.management import call_command

from core.models import Chapter
from core.utils.constants import HWCentralEnv
from hwcentral import settings
from hwcentral.exceptions import InvalidStateError
from hwcentral.settings import PROJECT_ROOT
from scripts.database.enforcer import enforcer_check
from scripts.fixtures.dump_data import snapshot_db, dump_db
from scripts.setup.assignment import setup_assignment

with open(os.path.join(os.path.dirname(os.path.abspath(__file__)), 'question_bank_reloader_config.json'), 'r') as f:
    CONFIG = json.load(f)

HOME_DIR = os.path.expanduser('~')
VAULT_CONTENT_PATH = os.path.join(HOME_DIR, 'hwcentral-vault', 'content')
OUTPUT_CABINET_PATH = os.path.join(HOME_DIR, 'hwcentral-cabinet')


def trim_qb_dump(outfile, trim_chapter, trim_questiontag, trim_question, trim_questionsubpart,
                 trim_assignmentquestionslist):
    with open(outfile, 'r') as f:
        qb_dump = json.load(f)
    trimmed_qb_dump = []

    new_trim_chapter = 0
    new_trim_questiontag = 0
    new_trim_question = 0
    new_trim_questionsubpart = 0
    new_trim_assignmentquestionslist = 0

    for elem in qb_dump:
        elem_model = elem["model"]
        elem_pk = elem["pk"]
        if elem_model == "core.chapter":
            if elem_pk > trim_chapter:
                trimmed_qb_dump.append(elem)
                if elem_pk > new_trim_chapter:
                    new_trim_chapter = elem_pk
        elif elem_model == "core.questiontag":
            if elem_pk > trim_questiontag:
                trimmed_qb_dump.append(elem)
                if elem_pk > new_trim_questiontag:
                    new_trim_questiontag = elem_pk
        elif elem_model == "core.question":
            if elem_pk > trim_question:
                trimmed_qb_dump.append(elem)
                if elem_pk > new_trim_question:
                    new_trim_question = elem_pk
        elif elem_model == "core.questionsubpart":
            if elem_pk > trim_questionsubpart:
                trimmed_qb_dump.append(elem)
                if elem_pk > new_trim_questionsubpart:
                    new_trim_questionsubpart = elem_pk
        elif elem_model == "core.assignmentquestionslist":
            if elem_pk > trim_assignmentquestionslist:
                trimmed_qb_dump.append(elem)
                if elem_pk > new_trim_assignmentquestionslist:
                    new_trim_assignmentquestionslist = elem_pk
        else:
            raise InvalidStateError("Unexpected model %s in qb dump" % elem_model)

    with open(outfile, 'w') as f:
        json.dump(trimmed_qb_dump, f, indent=4)

    return new_trim_chapter, new_trim_questiontag, new_trim_question, new_trim_questionsubpart, new_trim_assignmentquestionslist


def process_block(question_bank_block, trim_chapter, trim_questiontag, trim_question, trim_questionsubpart,
                  trim_assignmentquestionslist):
    # first add the chapters
    for chapter in question_bank_block['chapters']:
        new_chapter = Chapter(name=chapter)
        new_chapter.save()

    # now use the assignment setup script to set up the aql and its dependencies
    aql_ids = []
    for assignment in question_bank_block['assignments']:
        try:
            assignment_chapter = Chapter.objects.get(name=assignment['chapter'])
        except Chapter.DoesNotExist:
            # create new chapter entry
            new_chapter = Chapter(name=assignment['chapter'])
            new_chapter.save()
            assignment_chapter = new_chapter

        aql_id = setup_assignment(
            VAULT_CONTENT_PATH,
            OUTPUT_CABINET_PATH,
            question_bank_block['board'],
            question_bank_block['school'],
            question_bank_block['standard'],
            question_bank_block['subject'],
            assignment_chapter.pk,
            assignment['number']
        )

        aql_ids.append(aql_id)

    # now dump the changes made to the database selectively to the right file
    outfile_dir = os.path.join(PROJECT_ROOT, 'core', 'fixtures', 'qb')
    if len(aql_ids) == 1:
        outfile_name = str(aql_ids[0])
    else:
        outfile_name = str(aql_ids[0]) + 'to' + str(
            aql_ids[-1])

    outfile = os.path.join(outfile_dir, outfile_name + '.json')
    dump_db(outfile, ['core.chapter', 'core.questiontag', 'core.question', 'core.questionsubpart',
                      'core.assignmentquestionslist'])

    # trim the file to only contain data relevant to the current block
    return trim_qb_dump(outfile, trim_chapter, trim_questiontag, trim_question, trim_questionsubpart,
                        trim_assignmentquestionslist)


def run():
    assert settings.ENVIRON == HWCentralEnv.LOCAL

    snapshot_db()

    # first truncate the questiontag, question, chapter and aql tables
    # flush full database and start from clean state
    call_command('flush', '--noinput')
    call_command('loaddata', 'skeleton')
    call_command('loaddata', 'qa_school')

    trim_chapter = 0
    trim_questiontag = 0
    trim_question = 0
    trim_questionsubpart = 0
    trim_assignmentquestionslist = 0

    # now reload the entire config
    for question_bank_block in CONFIG['blocks']:
        trim_chapter, trim_questiontag, trim_question, trim_questionsubpart, trim_assignmentquestionslist = \
            process_block(question_bank_block, trim_chapter, trim_questiontag, trim_question, trim_questionsubpart,
                          trim_assignmentquestionslist)

    enforcer_check()
