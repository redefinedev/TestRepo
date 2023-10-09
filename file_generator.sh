#!/bin/bash

for i in {1..501}; do
    file_name="file_$i.txt"
    file_path="./$file_name"
    echo "This is file $i." > "$file_path"
done