# -*- coding: utf-8 -*-
from south.db import db
from south.v2 import SchemaMigration
from django.db import models


class Migration(SchemaMigration):
    def forwards(self, orm):
        # Adding model 'SubChapter'
        db.create_table(u'core_subchapter', (
            (u'id', self.gf('django.db.models.fields.AutoField')(primary_key=True)),
            ('name', self.gf('django.db.models.fields.CharField')(unique=True, max_length=255)),
            ('chapter', self.gf('django.db.models.fields.related.ForeignKey')(to=orm['core.Chapter'])),
        ))
        db.send_create_signal(u'core', ['SubChapter'])


        # Changing field 'Assignment.meta'
        db.alter_column(u'core_assignment', 'meta',
                        self.gf('django.db.models.fields.FilePathField')(path='/Users/oasis/hwcentral/core/assignments',
                                                                         max_length=255, match='\\d+.json'))

        # Changing field 'Submission.meta'
        db.alter_column(u'core_submission', 'meta',
                        self.gf('django.db.models.fields.FilePathField')(path='/Users/oasis/hwcentral/core/submissions',
                                                                         max_length=255, match='\\d+.json'))
        # Adding field 'Question.chapter'
        db.add_column(u'core_question', 'chapter',
                      self.gf('django.db.models.fields.related.ForeignKey')(default=1, to=orm['core.Chapter']),
                      keep_default=False)

        # Removing M2M table for field chapters on 'Question'
        db.delete_table(db.shorten_name(u'core_question_chapters'))

        # Adding M2M table for field subchapters on 'Question'
        m2m_table_name = db.shorten_name(u'core_question_subchapters')
        db.create_table(m2m_table_name, (
            ('id', models.AutoField(verbose_name='ID', primary_key=True, auto_created=True)),
            ('question', models.ForeignKey(orm[u'core.question'], null=False)),
            ('subchapter', models.ForeignKey(orm[u'core.subchapter'], null=False))
        ))
        db.create_unique(m2m_table_name, ['question_id', 'subchapter_id'])


        # Changing field 'Question.meta'
        db.alter_column(u'core_question', 'meta',
                        self.gf('django.db.models.fields.FilePathField')(path='/Users/oasis/hwcentral/core/questions',
                                                                         max_length=255, match='\\d+.json'))

    def backwards(self, orm):
        # Deleting model 'SubChapter'
        db.delete_table(u'core_subchapter')


        # Changing field 'Assignment.meta'
        db.alter_column(u'core_assignment', 'meta',
                        self.gf('django.db.models.fields.FilePathField')(path='/Users/oasis/hwcentral/core/assignments',
                                                                         max_length=255, match='\\d+\\.json'))

        # Changing field 'Submission.meta'
        db.alter_column(u'core_submission', 'meta',
                        self.gf('django.db.models.fields.FilePathField')(path='/Users/oasis/hwcentral/core/submissions',
                                                                         max_length=255, match='\\d+\\.json'))
        # Deleting field 'Question.chapter'
        db.delete_column(u'core_question', 'chapter_id')

        # Adding M2M table for field chapters on 'Question'
        m2m_table_name = db.shorten_name(u'core_question_chapters')
        db.create_table(m2m_table_name, (
            ('id', models.AutoField(verbose_name='ID', primary_key=True, auto_created=True)),
            ('question', models.ForeignKey(orm[u'core.question'], null=False)),
            ('chapter', models.ForeignKey(orm[u'core.chapter'], null=False))
        ))
        db.create_unique(m2m_table_name, ['question_id', 'chapter_id'])

        # Removing M2M table for field subchapters on 'Question'
        db.delete_table(db.shorten_name(u'core_question_subchapters'))


        # Changing field 'Question.meta'
        db.alter_column(u'core_question', 'meta',
                        self.gf('django.db.models.fields.FilePathField')(path='/Users/oasis/hwcentral/core/questions',
                                                                         max_length=255, match='\\d+\\.json'))

    models = {
        u'auth.group': {
            'Meta': {'object_name': 'Group'},
            u'id': ('django.db.models.fields.AutoField', [], {'primary_key': 'True'}),
            'name': ('django.db.models.fields.CharField', [], {'unique': 'True', 'max_length': '80'}),
            'permissions': ('django.db.models.fields.related.ManyToManyField', [],
                            {'to': u"orm['auth.Permission']", 'symmetrical': 'False', 'blank': 'True'})
        },
        u'auth.permission': {
            'Meta': {'ordering': "(u'content_type__app_label', u'content_type__model', u'codename')",
                     'unique_together': "((u'content_type', u'codename'),)", 'object_name': 'Permission'},
            'codename': ('django.db.models.fields.CharField', [], {'max_length': '100'}),
            'content_type': (
                'django.db.models.fields.related.ForeignKey', [], {'to': u"orm['contenttypes.ContentType']"}),
            u'id': ('django.db.models.fields.AutoField', [], {'primary_key': 'True'}),
            'name': ('django.db.models.fields.CharField', [], {'max_length': '50'})
        },
        u'auth.user': {
            'Meta': {'object_name': 'User'},
            'date_joined': ('django.db.models.fields.DateTimeField', [], {'default': 'datetime.datetime.now'}),
            'email': ('django.db.models.fields.EmailField', [], {'max_length': '75', 'blank': 'True'}),
            'first_name': ('django.db.models.fields.CharField', [], {'max_length': '30', 'blank': 'True'}),
            'groups': ('django.db.models.fields.related.ManyToManyField', [],
                       {'symmetrical': 'False', 'related_name': "u'user_set'", 'blank': 'True',
                        'to': u"orm['auth.Group']"}),
            u'id': ('django.db.models.fields.AutoField', [], {'primary_key': 'True'}),
            'is_active': ('django.db.models.fields.BooleanField', [], {'default': 'True'}),
            'is_staff': ('django.db.models.fields.BooleanField', [], {'default': 'False'}),
            'is_superuser': ('django.db.models.fields.BooleanField', [], {'default': 'False'}),
            'last_login': ('django.db.models.fields.DateTimeField', [], {'default': 'datetime.datetime.now'}),
            'last_name': ('django.db.models.fields.CharField', [], {'max_length': '30', 'blank': 'True'}),
            'password': ('django.db.models.fields.CharField', [], {'max_length': '128'}),
            'user_permissions': ('django.db.models.fields.related.ManyToManyField', [],
                                 {'symmetrical': 'False', 'related_name': "u'user_set'", 'blank': 'True',
                                  'to': u"orm['auth.Permission']"}),
            'username': ('django.db.models.fields.CharField', [], {'unique': 'True', 'max_length': '30'})
        },
        u'contenttypes.contenttype': {
            'Meta': {'ordering': "('name',)", 'unique_together': "(('app_label', 'model'),)",
                     'object_name': 'ContentType', 'db_table': "'django_content_type'"},
            'app_label': ('django.db.models.fields.CharField', [], {'max_length': '100'}),
            u'id': ('django.db.models.fields.AutoField', [], {'primary_key': 'True'}),
            'model': ('django.db.models.fields.CharField', [], {'max_length': '100'}),
            'name': ('django.db.models.fields.CharField', [], {'max_length': '100'})
        },
        u'core.announcement': {
            'Meta': {'object_name': 'Announcement'},
            'content_type': (
                'django.db.models.fields.related.ForeignKey', [], {'to': u"orm['contenttypes.ContentType']"}),
            u'id': ('django.db.models.fields.AutoField', [], {'primary_key': 'True'}),
            'message': ('django.db.models.fields.CharField', [], {'max_length': '255'}),
            'object_id': ('django.db.models.fields.PositiveIntegerField', [], {}),
            'timestamp': ('django.db.models.fields.DateTimeField', [], {'auto_now_add': 'True', 'blank': 'True'})
        },
        u'core.assignment': {
            'Meta': {'object_name': 'Assignment'},
            'assigned': ('django.db.models.fields.DateTimeField', [], {}),
            'due': ('django.db.models.fields.DateTimeField', [], {}),
            u'id': ('django.db.models.fields.AutoField', [], {'primary_key': 'True'}),
            'meta': ('django.db.models.fields.FilePathField', [],
                     {'path': "'/Users/oasis/hwcentral/core/assignments'", 'max_length': '255',
                      'match': "'\\\\d+.json'"}),
            'questions': ('django.db.models.fields.related.ManyToManyField', [],
                          {'to': u"orm['core.Question']", 'symmetrical': 'False'}),
            'subjectRoom': ('django.db.models.fields.related.ForeignKey', [], {'to': u"orm['core.SubjectRoom']"})
        },
        u'core.board': {
            'Meta': {'object_name': 'Board'},
            u'id': ('django.db.models.fields.AutoField', [], {'primary_key': 'True'}),
            'name': ('django.db.models.fields.CharField', [], {'unique': 'True', 'max_length': '255'})
        },
        u'core.chapter': {
            'Meta': {'object_name': 'Chapter'},
            u'id': ('django.db.models.fields.AutoField', [], {'primary_key': 'True'}),
            'name': ('django.db.models.fields.CharField', [], {'unique': 'True', 'max_length': '255'})
        },
        u'core.classroom': {
            'Meta': {'object_name': 'ClassRoom'},
            'classTeacher': ('django.db.models.fields.related.ForeignKey', [],
                             {'related_name': "'classes_managed_set'", 'to': u"orm['auth.User']"}),
            'division': ('django.db.models.fields.CharField', [], {'max_length': '255'}),
            u'id': ('django.db.models.fields.AutoField', [], {'primary_key': 'True'}),
            'school': ('django.db.models.fields.related.ForeignKey', [], {'to': u"orm['core.School']"}),
            'standard': ('django.db.models.fields.related.ForeignKey', [], {'to': u"orm['core.Standard']"}),
            'students': ('django.db.models.fields.related.ManyToManyField', [],
                         {'related_name': "'classes_enrolled_set'", 'symmetrical': 'False', 'to': u"orm['auth.User']"})
        },
        u'core.group': {
            'Meta': {'object_name': 'Group'},
            u'id': ('django.db.models.fields.AutoField', [], {'primary_key': 'True'}),
            'name': ('django.db.models.fields.CharField', [], {'unique': 'True', 'max_length': '255'})
        },
        u'core.home': {
            'Meta': {'object_name': 'Home'},
            'parent': ('django.db.models.fields.related.OneToOneField', [],
                       {'related_name': "'home'", 'unique': 'True', 'primary_key': 'True', 'to': u"orm['auth.User']"}),
            'students': ('django.db.models.fields.related.ManyToManyField', [],
                         {'related_name': "'homes_enrolled_set'", 'symmetrical': 'False', 'to': u"orm['auth.User']"})
        },
        u'core.question': {
            'Meta': {'object_name': 'Question'},
            'chapter': ('django.db.models.fields.related.ForeignKey', [], {'to': u"orm['core.Chapter']"}),
            u'id': ('django.db.models.fields.AutoField', [], {'primary_key': 'True'}),
            'meta': ('django.db.models.fields.FilePathField', [],
                     {'path': "'/Users/oasis/hwcentral/core/questions'", 'max_length': '255',
                      'match': "'\\\\d+.json'"}),
            'school': ('django.db.models.fields.related.ForeignKey', [], {'to': u"orm['core.School']"}),
            'standard': ('django.db.models.fields.related.ForeignKey', [], {'to': u"orm['core.Standard']"}),
            'subchapters': ('django.db.models.fields.related.ManyToManyField', [],
                            {'to': u"orm['core.SubChapter']", 'symmetrical': 'False'}),
            'subject': ('django.db.models.fields.related.ForeignKey', [], {'to': u"orm['core.Subject']"})
        },
        u'core.school': {
            'Meta': {'object_name': 'School'},
            'admin': ('django.db.models.fields.related.ForeignKey', [], {'to': u"orm['auth.User']"}),
            'board': ('django.db.models.fields.related.ForeignKey', [], {'to': u"orm['core.Board']"}),
            u'id': ('django.db.models.fields.AutoField', [], {'primary_key': 'True'}),
            'name': ('django.db.models.fields.CharField', [], {'max_length': '255'})
        },
        u'core.standard': {
            'Meta': {'object_name': 'Standard'},
            u'id': ('django.db.models.fields.AutoField', [], {'primary_key': 'True'}),
            'number': ('django.db.models.fields.PositiveIntegerField', [], {'unique': 'True'})
        },
        u'core.subchapter': {
            'Meta': {'object_name': 'SubChapter'},
            'chapter': ('django.db.models.fields.related.ForeignKey', [], {'to': u"orm['core.Chapter']"}),
            u'id': ('django.db.models.fields.AutoField', [], {'primary_key': 'True'}),
            'name': ('django.db.models.fields.CharField', [], {'unique': 'True', 'max_length': '255'})
        },
        u'core.subject': {
            'Meta': {'object_name': 'Subject'},
            u'id': ('django.db.models.fields.AutoField', [], {'primary_key': 'True'}),
            'name': ('django.db.models.fields.CharField', [], {'unique': 'True', 'max_length': '255'})
        },
        u'core.subjectroom': {
            'Meta': {'object_name': 'SubjectRoom'},
            'classRoom': ('django.db.models.fields.related.ForeignKey', [], {'to': u"orm['core.ClassRoom']"}),
            u'id': ('django.db.models.fields.AutoField', [], {'primary_key': 'True'}),
            'students': ('django.db.models.fields.related.ManyToManyField', [],
                         {'related_name': "'subjects_enrolled_set'", 'symmetrical': 'False',
                          'to': u"orm['auth.User']"}),
            'subject': ('django.db.models.fields.related.ForeignKey', [], {'to': u"orm['core.Subject']"}),
            'teacher': ('django.db.models.fields.related.ForeignKey', [],
                        {'related_name': "'subjects_managed_set'", 'to': u"orm['auth.User']"})
        },
        u'core.submission': {
            'Meta': {'object_name': 'Submission'},
            'assignment': ('django.db.models.fields.related.ForeignKey', [], {'to': u"orm['core.Assignment']"}),
            'completion': ('django.db.models.fields.FloatField', [], {}),
            u'id': ('django.db.models.fields.AutoField', [], {'primary_key': 'True'}),
            'marks': ('django.db.models.fields.FloatField', [], {'null': 'True'}),
            'meta': ('django.db.models.fields.FilePathField', [],
                     {'path': "'/Users/oasis/hwcentral/core/submissions'", 'max_length': '255',
                      'match': "'\\\\d+.json'"}),
            'student': ('django.db.models.fields.related.ForeignKey', [], {'to': u"orm['auth.User']"}),
            'timestamp': ('django.db.models.fields.DateTimeField', [], {'auto_now': 'True', 'blank': 'True'})
        },
        u'core.userinfo': {
            'Meta': {'object_name': 'UserInfo'},
            'group': ('django.db.models.fields.related.ForeignKey', [], {'to': u"orm['core.Group']"}),
            'school': ('django.db.models.fields.related.ForeignKey', [], {'to': u"orm['core.School']"}),
            'user': ('django.db.models.fields.related.OneToOneField', [],
                     {'to': u"orm['auth.User']", 'unique': 'True', 'primary_key': 'True'})
        }
    }

    complete_apps = ['core']