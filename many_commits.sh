#!/bin/bash

# Loop to create 101 commits
for i in {1..101}; do
  echo "Commit $i" > commit.txt
  git add commit.txt
  git commit -m "Commit $i"
done
