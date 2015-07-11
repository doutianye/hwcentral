# This file provides the utility methods to access files from the hwcentral-cabinet repository
# The access urls are built differently depending on the hwcentral settings DEBUG flag
import base64
import json
import os

from django.core.signing import Signer
from django.utils.http import urlsafe_base64_encode
import requests

from core.utils.constants import QuestionDataType
from core.view_models.question import QuestionContainer, QuestionPart
from core.view_models.submission import Submission
from hwcentral import settings


GITHUB_HEADERS = {
    'Authorization': 'token a7823130e1c75e9541134aa742f26346a0d6ead8',
    'Accept': 'application/vnd.github.v3.object'
}

CABINET_GITHUB_ENDPOINT = 'https://api.github.com/repos/oasisvali/hwcentral-cabinet/contents/'
CABINET_NGINX_ENDPOINT = 'http://localhost:8878/'
SECURE_STATIC_ENDPOINT = 'http://localhost:8000/secure_static/'

USE_GITHUB_CABINET = False
if settings.DEBUG:
    USE_GITHUB_CABINET = False

if USE_GITHUB_CABINET:
    CABINET_ENDPOINT = CABINET_GITHUB_ENDPOINT
    HEADERS = GITHUB_HEADERS
else:
    HEADERS = None
    CABINET_ENDPOINT = CABINET_NGINX_ENDPOINT

CONFIG_FILE_EXTENSION = '.json'
ENCODING_SEPERATOR = ':'

SIGNER = Signer()


def build_question_url_stub(question, question_data_type):
    return os.path.join(CABINET_ENDPOINT, 'questions', question_data_type,
                        str(question.school.board.pk),
                        str(question.school.pk),
                        str(question.standard.number),
                        str(question.subject.pk),
                        str(question.chapter.pk))


def build_question_data_url(question, question_data_type, question_id):
    return os.path.join(build_question_url_stub(question, question_data_type),
                        str(question_id)) + CONFIG_FILE_EXTENSION


def get_resource(url):
    return requests.get(url, headers=HEADERS)


def get_resource_content(url):
    if USE_GITHUB_CABINET:
        return json.loads(base64.b64decode((get_resource(url)).json()['content']))
    else:
        return (get_resource(url)).json()


def get_resource_sha(url):
    return (get_resource(url)).json()['sha']


def get_resource_exists(url):
    if USE_GITHUB_CABINET:
        return get_resource(url).status_code == 200
    else:
        return ((get_resource(url)).json()).get('status', 200) != 404


def get_question(question):
    container_url = build_question_data_url(question, QuestionDataType.CONTAINER, question.pk)
    container = QuestionContainer(get_resource_content(container_url))

    subparts = []
    for i, subpart in enumerate(container.subparts):
        subpart_url = build_question_data_url(question, QuestionDataType.SUBPART, subpart)
        question_part = QuestionPart(get_resource_content(subpart_url))
        assert i == question_part.subpart_index
        subparts.append(question_part)

    return container, subparts


def build_submission_data_url(submission):
    return os.path.join(CABINET_ENDPOINT, 'submissions',
                        str(submission.assignment.subjectRoom.classRoom.school.pk),
                        str(submission.assignment.subjectRoom.classRoom.standard.number),
                        submission.assignment.subjectRoom.classRoom.division,
                        str(submission.assignment.subjectRoom.subject.pk),
                        str(submission.assignment.pk),
                        str(submission.pk)) + CONFIG_FILE_EXTENSION


def get_submission(submission):
    submission_url = build_submission_data_url(submission)

    return Submission(get_resource_content(submission_url))


def create_submission_payload(submission, data):
    return {
        'message': 'Creating submission %s' % submission,
        'content': base64.b64encode(json.dumps(data, indent=2))
    }


def update_submission_payload(submission, data, sha):
    return {
        'message': 'Updating submission %s' % submission,
        'sha': sha,
        'content': base64.b64encode(json.dumps(data, indent=2))
    }


def create_submission(submission, data):
    submission_url = build_submission_data_url(submission)

    if USE_GITHUB_CABINET:
        json_data = create_submission_payload(submission, data)
    else:
        json_data = data

    requests.put(submission_url, headers=HEADERS, json=json_data)


def update_submission(submission, data):
    submission_url = build_submission_data_url(submission)

    if USE_GITHUB_CABINET:
        sha = get_resource_sha(submission_url)
        json_data = update_submission_payload(submission, data, sha)
    else:
        json_data = data

    requests.put(submission_url, headers=HEADERS, json=json_data)


def submission_exists(submission):
    submission_url = build_submission_data_url(submission)
    return get_resource_exists(submission_url)


def get_question_img_url(question, question_data_type, img_filename):
    return os.path.join(build_question_url_stub(question, question_data_type), 'img', img_filename)


def get_question_img_url_secure(user, question, question_data_type, img_filename):
    img_url = get_question_img_url(question, question_data_type, img_filename)
    raw_secure_url = user.username + ENCODING_SEPERATOR + img_url
    signed_secure_url = SIGNER.sign(raw_secure_url)
    return SECURE_STATIC_ENDPOINT + urlsafe_base64_encode(signed_secure_url)

