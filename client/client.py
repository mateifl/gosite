import requests
import os
import sgf
import json


path_to_sgfs = "/home/mateifl/go/sgfs/"
rest_url = "http://127.0.0.1:8000/rest/kifu/"
# read and parse the sgf file


def parse_file(file_name):
    with open(file_name) as f:
        game_text = f.read()
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
    return None


def post_content(data):
    payload = json.dumps(data, indent=2)
    print(payload)
    r = requests.post(rest_url, json=payload)
    print(r.status_code)

if __name__ == "__main__":
    # send the data using the API

    files = os.listdir(path_to_sgfs)

    for file in files:
        d = parse_file(path_to_sgfs + file)
        if d is None:
            continue
        else:
            post_content(d)

