from core.utils.constants import VIEWMODEL_KEY
from core.utils.labels import get_user_label


class VM(object):
    """
    Abstract class that is used to provide as_context functionality to page-level view models
    """

    def as_context(self):
        return {VIEWMODEL_KEY: self}


class FormViewModel(VM):
    def __init__(self, form, form_action_url_name):
        self.form = form
        self.form.action_url_name = form_action_url_name

class AuthenticatedBody(object):
    """
    Abstract class that is used to store any common data between the bodies of all the authenticated views
    """


class AuthenticatedVM(VM):
    """
    Class that is used to provide sidebar view model to all page-level view models for authenticated pages
    """

    def __init__(self, user, sidebar, authenticated_body):
        self.userinfo = UserInfo(user)
        self.sidebar = sidebar
        self.authenticated_body = authenticated_body


class BaseFormBody(AuthenticatedBody):
    """
    Abstract class that provides the most basic functionality for a form-defined viewmodel -> it wraps a form object
    """

    def __init__(self, form):
        self.form = form


class FormBody(BaseFormBody):
    """
    Abstract class that is used to store common logic for all form view models
    """

    def __init__(self, form, form_action_url_name):
        """
        @param form: django form object that the template this viewmodel is passed to will render
        @param form_action_url_name: url name for the POST endpoint for the form of this body
        """
        super(FormBody, self).__init__(form)
        self.form.action_url_name = form_action_url_name


class ReadOnlyFormBody(BaseFormBody):
    """
    Assumes that the form passed in has the read-only functionality and applies it so that a read-only form can be rendered
    """
    pass


class UserInfo(object):
    """
    Container for storing user info
    """

    def __init__(self, user):
        self.name = get_user_label(user)
        self.user_id = user.pk
        self.announcement_count =