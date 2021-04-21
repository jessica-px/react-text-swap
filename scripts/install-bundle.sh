#!/bin/bash

echo "Updating ./examples/node_modules/react-text-swap"

# remove package folder and contents
rm -rf ./examples/node_modules/react-text-swap

# create new empty package folder
mkdir -p ./examples/node_modules/react-text-swap

# copy contents of ./dist to new package folder
cp ./dist/* ./examples/node_modules/react-text-swap
