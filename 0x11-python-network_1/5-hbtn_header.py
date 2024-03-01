#!/usr/bin/python3
"""script fetch URL, send req, display X-Request-Id value in the resp header"""
import requests
import sys
"""
You must use the packages requests and sys
You are not allowed to import other packages than requests and sys
The value of this variable is different for each request
You don’t need to check script arguments (number and type)
"""

if __name__ == "__main__":
    url = sys.argv[1]
    response = requests.get(url)

    print(response.headers.get('X-Request-Id'))
