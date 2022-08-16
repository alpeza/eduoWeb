import sys
import base64,json

input = base64.b64decode(sys.argv[1]).decode("utf-8") 

barr=[]
def toCamel(word):
    warr=[]
    word=word.strip().capitalize()
    ws=word.split("-")
    for e in ws:
        warr.append(e.capitalize())

    warr.append("Icon")
    barr.append("".join(warr))
    return "".join(warr)
        

for e in input.split(","):
    toCamel(e)

print(json.dumps({"icoArray":barr}))