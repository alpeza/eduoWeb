curdir="$(pwd)"
srcImg="imgs"
tmpdir="/tmp/svgs"
folder=$1
size=$2


procImage(){
    name=$1
    tmpsvg="/tmp/"$name".svg" 
    scour "$name" "$tmpsvg" > /dev/null
    d="$(cat "$tmpsvg" | grep d= | awk -F '=' '{ print $3}' | sed 's/\/>//g' | sed 's/\"//g' )"
    echo '{ "name": "'$( echo $name | awk -F "." '{ print $1}' )'","tamano" : "'$size'", "d":"'$d'" }' > /tmp/eduodata.json
    echo -ne '\n\n\n'
    j2  "../../svg.txt" "/tmp/eduodata.json" --format=json
    rm -f "$tmpsvg"
}

cd "$srcImg/$folder" 
rm -f "$tmpdir"
for img in $(ls )
do
   procImage "$img" >> "$tmpdir"
done

cat "$tmpdir"
