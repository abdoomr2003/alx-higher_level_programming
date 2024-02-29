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

    peak = list_of_integers[0]
    for num in list_of_integers[1:]:
        if num > peak:
            peak = num

    return peak

