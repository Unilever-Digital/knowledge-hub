import json

def read_json_from_file(file_path):
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
    # Usage example
    file_path = 'app/schema.json'  # Replace 'data.json' with the path to your JSON file
    data = read_json_from_file(file_path)
    return data

def getColumns(table):
    data = read_table_json()
    for item in data:
        if item['table'] == table:
            columns = item['column']
    return columns
    
