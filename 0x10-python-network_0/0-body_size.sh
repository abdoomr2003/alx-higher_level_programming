#!/bin/bash
# Script to get the size of the body of a URL response in bytes

URL=$1  # The first argument is the URL

# Use curl to get the content-length header which contains the size of the body in bytes
size=$(curl -s -I "$URL" | grep -i Content-Length | awk '{print $2}' | tr -d '\r')

echo "$size"
