#!/usr/bin/python3
"""script fetch URL, send req, display X-Request-Id value in the resp header"""
import urllib.request
import sys
"""
You must use the packages urllib and sys
You are not allowed to import packages other than urllib and sys
The value of this variable is different for each request
You don’t need to check arguments passed to the script (number or type)
You must use a with statement
"""

if __name__ == "__main__":
    url = sys.argv[1]

    req = urllib.request.Request(url)

    with urllib.request.urlopen(req) as response:
        print(response.headers.get('X-Request-Id'))
