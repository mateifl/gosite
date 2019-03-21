import logging


class LoggerMixin:
    logger = logging.getLogger('cst')


def check_string_has_value(s):
    if s is None or len(s) == 0:
        return False
    return True


def check_string_has_value_dict(d, key):
    if key in d and check_string_has_value(d[key]):
        return d[key]
    return None
