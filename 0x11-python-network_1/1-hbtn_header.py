#!/usr/bin/python3
"""Fetches https://intpycoranet.hbtn.io/status"""
import urllib.request
import sys
if __name__ == "__main__":
    with urllib.request.urlopen(sys.argv[1]) as res:
        # print(dir(res.headers))
        print(res.headers.__dict__)
