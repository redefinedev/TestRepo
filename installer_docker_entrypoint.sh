#!/bin/bash

# a docker container exits after the entrypoint script finishes
# this makes sure it stays up and running so we can query it from the tests
while true; do sleep 1000; done
