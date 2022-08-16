res="$(cat q.html | grep "<h3 id=" | awk -F ">" '{ print $2 }' | awk -F "<" '{ print $1"," }' | sort | uniq | xargs | base64 -e)"
python3 icons.py "$res" > out.json
j2  "icontpl.txt" "out.json" --format=json > out.js
cat out.json | jq -r '.icoArray[]'