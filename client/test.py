import sgf
import pprint


def parse_file(file_name):
    printer = pprint.PrettyPrinter(indent = 2)

    with open(file_name) as f:
        collection = sgf.parse(f.read())
        print(len(collection.children))
        for child in collection.children:
            # printer.pprint(child.nodes[0].properties)
            if "PB" in child.nodes[0].properties:
                print(child.nodes[0].properties["PB"])
            if "PW" in child.nodes[0].properties:
                print(child.nodes[0].properties["PW"])


if __name__ == "__main__":
    parse_file("HashimotoUtaro-HayashiYutaro.sgf")
    parse_file("gokyo_shumyo_1.sgf")
