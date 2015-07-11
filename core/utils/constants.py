VIEWMODEL_KEY = 'vm'


class HWCentralRegex(object):
    NUMERIC = r'\d+'
    BASE64 = r'[\w\-]+'


class HttpMethod(object):
    GET = 'GET'
    POST = 'POST'
    PUT = 'PUT'
    DELETE = 'DELETE'


class HWCentralGroup(object):
    STUDENT = 1
    TEACHER = 2
    PARENT = 3
    ADMIN = 4


class HWCentralQuestionType(object):
    MCSA = 1
    MCMA = 2
    REGULAR_NUMERIC = 3
    REGULAR_TEXT = 4
    CONDITIONAL = 5


class AssignmentType(object):
    UNCORRECTED = 'uncorrected'
    CORRECTED = 'corrected'


class QuestionDataType(object):
    CONTAINER = 'containers'
    SUBPART = 'raw'


