#!/bin/sh
export REDEFINE_GO_PATH=/usr/local/go/bin/go
export REDEFINE_DEBUG_MODE=false
export REDEFINE_ANONYMIZATION=false

cp $1 ./
./go test -json -v ./...
