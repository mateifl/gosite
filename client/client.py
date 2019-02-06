import requests
import os
import sgf

path_to_sgfs = ""

# read and parse the sgf file


def parse_file(file_name):
    with open(file_name) as f:
        collection = sgf.parse(f.read())


def post_content():
    pass


# send the data using the API
files = os.listdir(path_to_sgfs)

for file in files:
    parse_file(file)

