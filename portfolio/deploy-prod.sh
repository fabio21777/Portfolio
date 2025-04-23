#!/bin/bash

# Check if dist directory exists before deleting
if [ -d "dist" ]; then
    echo "Directory dist exists. Deleting..."
    rm -r dist
else
    echo "Directory dist does not exist, nothing to delete."
fi



