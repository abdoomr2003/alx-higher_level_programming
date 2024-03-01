#!/usr/bin/python3
"""Write a Python script that fetches https://alx-intranet.hbtn.io/status"""
import requests
"""
You must use the package requests
You are not allow to import packages other than requests
The body of the response must be displayed like the following example
(tabulation before -)
"""

if __name__ == "__main__":
    url = 'https://alx-intranet.hbtn.io/status'
    response = requests.get(url)

    print("Body response:")
    print("\t- type:", type(response.text))
    print("\t- content:", response.text)
