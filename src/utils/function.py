import json

def read_json_from_file(file_path):
    """ Read json file
    Args:
        file_path (.json): .json data file

    Returns:
        data: json string
    """
    try:
        with open(file_path, 'r') as file:
            data = json.load(file)
        return data
    except FileNotFoundError:
        print(f"File '{file_path}' not found.")
        return None
    except json.JSONDecodeError as e:
        print("Error decoding JSON:", e)
        return None

def read_table_json():
    """_summary_

    Returns:
        _type_: _description_
    """
    # Usage example
    file_path = 'app/schema.json'  # Replace 'data.json' with the path to your JSON file
    data = read_json_from_file(file_path)
    return data

def getColumns(table):
    """_summary_

    Args:
        table (_type_): _description_

    Returns:
        _type_: _description_
    """
    data = read_table_json()
    for item in data:
        if item['table'] == table:
            columns = item['column']
    return columns
