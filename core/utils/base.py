from datetime import timedelta

import django
from django.db.models import Q

from core.models import Announcement


class BaseUtils(object):
    def __init__(self, school):
        self.focus = school.schoolprofile.focus


class UserUtils(BaseUtils):
    RECENT_ANNOUNCEMENT_CONDITION = Q(timestamp__gte=(django.utils.timezone.now() - timedelta(days=7)))
    UTILS_GROUP = None

    def __init__(self, user):
        assert user.userinfo.group == self.UTILS_GROUP  # UTILS_GROUP to be set by subclass
        self.user = user
        super(UserUtils, self).__init__(user.userinfo.school)

    def get_announcements_query(self):
        raise NotImplementedError("Subclass of UserUtils must implement method get_announcements_query")

    def get_announcements(self):
        return Announcement.objects.filter(self.get_announcements_query()).order_by('-timestamp')

    def get_announcements_count(self):
        return Announcement.objects.filter(self.get_announcements_query()).count()
