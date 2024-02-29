#!/bin/bash
# This script sends a PUT request to 0.0.0.0:5000/catch_me with custom headers to trigger a specific response from the server
curl -s -X PUT -d "user_id=98" -H "Origin: HolbertonSchool" 0.0.0.0:5000/catch_me
