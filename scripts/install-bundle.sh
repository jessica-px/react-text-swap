#!/bin/bash

echo "Updating ./sandbox/node_modules/react-text-swap"

# remove package folder and contents
rm -rf ./sandbox/node_modules/react-text-swap

# create new empty package folder
mkdir -p ./sandbox/node_modules/react-text-swap

# copy contents of ./dist to new package folder
cp ./dist/* ./sandbox/node_modules/react-text-swap
