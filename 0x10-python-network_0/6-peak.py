#!/usr/bin/python3
"""
This module contains a function to find a peak in a list of unsorted integers.
"""

def find_peak(list_of_integers):
    """
    Find a peak in a list of unsorted integers.

    Args:
        list_of_integers (list): The list of unsorted integers.

    Returns:
        int: A peak value from the list, or None if the list is empty.
    """
    if not list_of_integers:
        return None

    length = len(list_of_integers)
    mid_index = length // 2
    peak = list_of_integers[mid_index]

    if (mid_index == length - 1 or peak >= list_of_integers[mid_index + 1]) and \
       (mid_index == 0 or peak >= list_of_integers[mid_index - 1]):
        return peak

    if mid_index != length - 1 and list_of_integers[mid_index + 1] > peak:
        return find_peak(list_of_integers[mid_index + 1:])
    else:
        return find_peak(list_of_integers[:mid_index])
