#!/usr/bin/python3
import urllib.request
import sys
"""Fetches https://intranet.hbtn.io/status"""


with urllib.request.urlopen(sys.argv[1]) as res:
    print(res.headers['X-Request-Id'])
