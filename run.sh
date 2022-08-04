#!/bin/sh
export REDEFINE_GO_PATH=/usr/local/go/bin/go
export REDEFINE_DEBUG_MODE=true
export REDEFINE_LOG_PATH=./Logs/

rm ./Logs/*
cp ../../../agents/road_runner/go_test/go ./
./go test -json -v ./...
