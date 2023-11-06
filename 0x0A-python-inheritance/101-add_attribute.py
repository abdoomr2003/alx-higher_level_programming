#!/usr/bin/python3
"""101-add_attribute.py"""


def add_new_attribute(obj, attr, value):
    """Raise a TypeError exception, with the message
    can't add new attribute if the object can’t have new attribute
    """
    if hasattr(obj, '__dict__'):
        obj.__dict__[attr] = value
    else:
        raise TypeError("can't add new attribute")