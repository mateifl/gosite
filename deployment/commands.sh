!#/bin/bash
cd ~/gosite
find . -name "*.html" | xargs ls -lG | awk '{print $4 " " $8}' > files.txt
find . -name "*.py" | xargs ls -lG | awk '{print $4 " " $8}' > files.txt

