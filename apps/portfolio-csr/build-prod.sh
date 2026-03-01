#!/bin/bash

# Check if dist directory exists before deleting
if [ -d "dist" ]; then
    echo "Directory dist exists. Deleting..."
    rm -r dist
else
    echo "Directory dist does not exist, nothing to delete."
fi

# Run build command
echo "Running build..."
npm run build-only

# Check if dist directory exists before zipping
if [ -d "dist" ]; then
    echo "Creating zip archive..."
    7z a -tzip dist.zip dist/*
    echo "Archive created successfully."
else
    echo "Error: dist directory not found after build. Cannot create zip archive."
    exit 1
fi

echo "Process completed."