import requests
import os
import sgf
import json


path_to_sgfs = "c:\\dev\\pyws\\gosite\\games\\"
rest_url = "http://127.0.0.1:8000/rest/kifu/"
# read and parse the sgf file


def parse_file(file_name):
    with open(file_name) as f:
        game_text = ""
        line = f.readline()
        while line != "":
            if line[-1] == "\n":
                game_text += line[:-1]
            else:
                game_text += line
            line = f.readline()

        d = dict()
        d['game_text'] = game_text
        collection = sgf.parse(game_text)
        for child in collection.children:
            if "PB" in child.nodes[0].properties and len(child.nodes[0].properties["PB"]) > 0:
                d["black_player"] = child.nodes[0].properties["PB"][0]
            if "PW" in child.nodes[0].properties and len(child.nodes[0].properties["PW"]) > 0:
                d["white_player"] = child.nodes[0].properties["PW"][0]
            if "DT" in child.nodes[0].properties and len(child.nodes[0].properties["DT"]) > 0:
                d["game_date"] = child.nodes[0].properties["DT"][0]
            if "GN" in child.nodes[0].properties and len(child.nodes[0].properties["GN"]) > 0:
                d["one_line_description"] = child.nodes[0].properties["GN"][0]
        return d


def post_content(data, group):
    data["groups"] = group
    data["description"] = None
    data["one_line_description"] = None
    data["game_date"] = None
    payload = json.dumps(data, indent=2)
    print(payload)
    r = requests.post(rest_url, data=payload, headers={'content-type': 'application/json'})
    print(r.status_code)


if __name__ == "__main__":
    # send the data using the API
    desc_file = open(path_to_sgfs + "desc.txt")
    group = desc_file.readline()
    if group[-1] == "\n":
        group = group[:-1]
    files = os.listdir(path_to_sgfs)

    for file in files:
        if not file.endswith("sgf"):
            continue
        print("Parsing: " + path_to_sgfs + file)
        d = parse_file(path_to_sgfs + file)
        if d is None:
            continue
        else:
            post_content(d, group)

