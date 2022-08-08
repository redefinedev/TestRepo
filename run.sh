#!/bin/sh
export REDEFINE_GO_PATH=$(which go)
echo "Redefine go path to $REDEFINE_GO_PATH"
export REDEFINE_DEBUG_MODE=false
export REDEFINE_ANONYMIZATION=false

cp $1 ./
./go test -json -v ./...
