#!/usr/bin/python3
"""Fetches https://intranet.hbtn.io/status"""
import urllib.request
with urllib.request.urlopen('https://alx-intranet.hbtn.io/status') as res:
    html = res.read()
    print("Body response:")
    print(f"\t- type: {type(html)}")
    print(f"\t- content: {html}")
    print(f"\t- utf8 content: {html.decode('utf-8')}")
