#!/bin/bash
# Make a POST request to 0.0.0.0:5000/catch_me and include a custom header
curl -s -X PUT 'http://0.0.0.0:5000/catch_me' -L -d "user_id=98" -H "Origin: HolbertonSchool" --referer "0.0.0.0:5000/catch_me" | grep -q "You got me!" && printf "You got me!\n" || printf "Failed to catch me.\n"
