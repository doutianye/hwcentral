VIEWMODEL_KEY = 'vm'


class HWCentralRegex(object):
    NUMERIC = r'\d+'
    BASE64 = r'[\w\-]+'


class HttpMethod(object):
    GET = 'GET'
    POST = 'POST'
    PUT = 'PUT'
    DELETE = 'DELETE'


class HWCentralQuestionType(object):
    MCSA = 1
    MCMA = 2
    NUMERIC = 3
    TEXTUAL = 4
    CONDITIONAL = 5


class HWCentralAssignmentType(object):
    INACTIVE = 'inactive'
    UNCORRECTED = 'uncorrected'
    CORRECTED = 'corrected'
    STUDENT = 'student'


class HWCentralStudentAssignmentSubmissionType(object):
    UNCORRECTED = 'student'  # type is used for directing to the correct template, and uncorrected student assignments use student.html
    CORRECTED = 'corrected'

class HWCentralQuestionDataType(object):
    CONTAINER = 'containers'
    SUBPART = 'raw'


class HWCentralConditionalAnswerFormat(object):
    TEXTUAL = 1
    NUMERIC = 2


class HWCentralEnv(object):
    PROD = 1
    CIRCLECI = 2
    QA = 3
    LOCAL = 4
