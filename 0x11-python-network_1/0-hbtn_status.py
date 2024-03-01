#!/usr/bin/python3
from urllib import request

print(dir(request))
request.urlunparse("https://alx-intranet.hbtn.io/status")