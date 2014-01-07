# -*- coding: utf-8 -*-
from south.db import db
from south.v2 import SchemaMigration


class Migration(SchemaMigration):
    def forwards(self, orm):
        # Adding model 'Standard'
        db.create_table(u'core_standard', (
            (u'id', self.gf('django.db.models.fields.AutoField')(primary_key=True)),
            ('number', self.gf('django.db.models.fields.PositiveIntegerField')(unique=True)),
        ))
        db.send_create_signal(u'core', ['Standard'])

        # Deleting field 'Assignment.chapter'
        db.delete_column(u'core_assignment', 'chapter_id')

        # Deleting field 'Assignment.conf'
        db.delete_column(u'core_assignment', 'conf')

        # Adding field 'Assignment.meta'
        db.add_column(u'core_assignment', 'meta',
                      self.gf('django.db.models.fields.FilePathField')(default='',
                                                                       path='/Users/oasis/hwcentral/core/assignments',
                                                                       max_length=255, match='\\d+\\.xml'),
                      keep_default=False)

        # Deleting field 'Submission.path'
        db.delete_column(u'core_submission', 'path')

        # Adding field 'Submission.meta'
        db.add_column(u'core_submission', 'meta',
                      self.gf('django.db.models.fields.FilePathField')(default='',
                                                                       path='/Users/oasis/hwcentral/core/submissions',
                                                                       max_length=255, match='\\d+\\.xml'),
                      keep_default=False)

        # Deleting field 'Question.conf'
        db.delete_column(u'core_question', 'conf')

        # Adding field 'Question.meta'
        db.add_column(u'core_question', 'meta',
                      self.gf('django.db.models.fields.FilePathField')(default='',
                                                                       path='/Users/oasis/hwcentral/core/questions',
                                                                       max_length=255, match='\\d+\\.xml'),
                      keep_default=False)


        # Renaming column for 'ClassRoom.standard' to match new field type.
        db.rename_column(u'core_classroom', 'standard', 'standard_id')
        # Changing field 'ClassRoom.standard'
        db.alter_column(u'core_classroom', 'standard_id',
                        self.gf('django.db.models.fields.related.ForeignKey')(to=orm['core.Standard']))
        # Adding index on 'ClassRoom', fields ['standard']
        db.create_index(u'core_classroom', ['standard_id'])


    def backwards(self, orm):
        # Removing index on 'ClassRoom', fields ['standard']
        db.delete_index(u'core_classroom', ['standard_id'])

        # Deleting model 'Standard'
        db.delete_table(u'core_standard')


        # User chose to not deal with backwards NULL issues for 'Assignment.chapter'
        raise RuntimeError("Cannot reverse this migration. 'Assignment.chapter' and its values cannot be restored.")

        # The following code is provided here to aid in writing a correct migration        # Adding field 'Assignment.chapter'
        db.add_column(u'core_assignment', 'chapter',
                      self.gf('django.db.models.fields.related.ForeignKey')(to=orm['core.Chapter']),
                      keep_default=False)


        # User chose to not deal with backwards NULL issues for 'Assignment.conf'
        raise RuntimeError("Cannot reverse this migration. 'Assignment.conf' and its values cannot be restored.")

        # The following code is provided here to aid in writing a correct migration        # Adding field 'Assignment.conf'
        db.add_column(u'core_assignment', 'conf',
                      self.gf('django.db.models.fields.FilePathField')(
                          path='/Users/oasis/.virtualenvs/djangopy2env/projects/hwcentral/core/assignments',
                          max_length=255, match='\\d+\\.xml'),
                      keep_default=False)

        # Deleting field 'Assignment.meta'
        db.delete_column(u'core_assignment', 'meta')


        # User chose to not deal with backwards NULL issues for 'Submission.path'
        raise RuntimeError("Cannot reverse this migration. 'Submission.path' and its values cannot be restored.")

        # The following code is provided here to aid in writing a correct migration        # Adding field 'Submission.path'
        db.add_column(u'core_submission', 'path',
                      self.gf('django.db.models.fields.FilePathField')(
                          path='/Users/oasis/.virtualenvs/djangopy2env/projects/hwcentral/core/submissions',
                          max_length=255, match='\\d+\\.xml'),
                      keep_default=False)

        # Deleting field 'Submission.meta'
        db.delete_column(u'core_submission', 'meta')


        # User chose to not deal with backwards NULL issues for 'Question.conf'
        raise RuntimeError("Cannot reverse this migration. 'Question.conf' and its values cannot be restored.")

        # The following code is provided here to aid in writing a correct migration        # Adding field 'Question.conf'
        db.add_column(u'core_question', 'conf',
                      self.gf('django.db.models.fields.FilePathField')(
                          path='/Users/oasis/.virtualenvs/djangopy2env/projects/hwcentral/core/questions',
                          max_length=255, match='\\d+\\.xml'),
                      keep_default=False)

        # Deleting field 'Question.meta'
        db.delete_column(u'core_question', 'meta')


        # Renaming column for 'ClassRoom.standard' to match new field type.
        db.rename_column(u'core_classroom', 'standard_id', 'standard')
        # Changing field 'ClassRoom.standard'
        db.alter_column(u'core_classroom', 'standard', self.gf('django.db.models.fields.PositiveIntegerField')())

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
        u'core.assignment': {
            'Meta': {'object_name': 'Assignment'},
            'assigned': ('django.db.models.fields.DateTimeField', [], {}),
            'created': ('django.db.models.fields.DateTimeField', [], {'auto_now_add': 'True', 'blank': 'True'}),
            'due': ('django.db.models.fields.DateTimeField', [], {'null': 'True'}),
            u'id': ('django.db.models.fields.AutoField', [], {'primary_key': 'True'}),
            'meta': ('django.db.models.fields.FilePathField', [],
                     {'path': "'/Users/oasis/hwcentral/core/assignments'", 'max_length': '255',
                      'match': "'\\\\d+\\\\.xml'"}),
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
            'children': ('django.db.models.fields.related.ManyToManyField', [],
                         {'related_name': "'homes_enrolled_set'", 'symmetrical': 'False', 'to': u"orm['auth.User']"}),
            'parent': ('django.db.models.fields.related.ForeignKey', [],
                       {'related_name': "'homes_managed_set'", 'primary_key': 'True', 'to': u"orm['auth.User']"})
        },
        u'core.question': {
            'Meta': {'object_name': 'Question'},
            'chapter': ('django.db.models.fields.related.ForeignKey', [], {'to': u"orm['core.Chapter']"}),
            u'id': ('django.db.models.fields.AutoField', [], {'primary_key': 'True'}),
            'meta': ('django.db.models.fields.FilePathField', [],
                     {'path': "'/Users/oasis/hwcentral/core/questions'", 'max_length': '255',
                      'match': "'\\\\d+\\\\.xml'"}),
            'school': ('django.db.models.fields.related.ForeignKey', [], {'to': u"orm['core.School']"}),
            'standard': ('django.db.models.fields.PositiveIntegerField', [], {}),
            'subject': ('django.db.models.fields.related.ForeignKey', [], {'to': u"orm['core.Subject']"})
        },
        u'core.school': {
            'Meta': {'object_name': 'School'},
            'admin': ('django.db.models.fields.related.ForeignKey', [], {'to': u"orm['auth.User']"}),
            'board': ('django.db.models.fields.related.ForeignKey', [], {'to': u"orm['core.Board']"}),
            u'id': ('django.db.models.fields.AutoField', [], {'primary_key': 'True'}),
            'name': ('django.db.models.fields.CharField', [], {'unique': 'True', 'max_length': '255'})
        },
        u'core.standard': {
            'Meta': {'object_name': 'Standard'},
            u'id': ('django.db.models.fields.AutoField', [], {'primary_key': 'True'}),
            'number': ('django.db.models.fields.PositiveIntegerField', [], {'unique': 'True'})
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
                      'match': "'\\\\d+\\\\.xml'"}),
            'student': ('django.db.models.fields.related.ForeignKey', [], {'to': u"orm['auth.User']"}),
            'timestamp': ('django.db.models.fields.DateTimeField', [], {'auto_now_add': 'True', 'blank': 'True'})
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