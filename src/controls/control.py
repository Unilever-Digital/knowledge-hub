import pyodbc
import json
import pymongo
import schedule
import time
from datetime import datetime
from src.utils.function import read_table_json

def sqlserver_connection_windowauthen(server, database):
    try:
        # Establishing the connection
        conn = pyodbc.connect(driver="{SQL Server}", 
                              server=server, 
                              database=database)
        return conn
    except Exception as e:
        print("Error connecting to SQL Server:", e)
        return None


def sqlserver_connection_user_method(server, database, username, password):
    try:
        # Establishing the connection
        try:
            conn = pyodbc.connect(driver = "SQL Server", 
                              server=server, 
                              user=username,
                              password=password, 
                              database=database,
                              port= 1433)
        except:
            conn = pyodbc.connect(driver="SQL Server",
                                  server=server,
                                  database=database,
                                  port=1433)
        return conn
    except Exception as e:
        print("Error connecting to SQL Server:", e)
        return None
    
def cloud_database_cursor(database, table):
    try:
        # load secret key
        with open("src/secret.json", "r") as file:
            key = json.load(file)
        uri = key.get("cloud")
        
        # Establishing the connection
        conn = pymongo.MongoClient(uri)
        db =  conn[database]
        table = db[table]
        return table
    except Exception as e:
        print("Error connecting to MongoDB:", e)
        return None


def nosql_transform(rows):
    """tranform Sql table to tree Node json
    Args:
        table (dataframe)): sql table
    """
    try:
        # Convert rows to a list of dictionaries
        results = []
        for row in rows:
            results.srcend(dict(row))

        # Convert the list of dictionaries to JSON
        return json.dumps(results)
    except Exception as e:
        print(e)


def database_cursor(conn, table_name, columns):
    """
    Fetch data from a SQL Server table and convert it to JSON format.
    Args:
        conn (connection): Connection object to the SQL Server database.
        table_name (str): Name of the table from which to fetch data.
        columns (list): List of column names in the table.
    Returns:
        str: JSON representation of the fetched data.
    Raises:
        Exception: If an error occurs during the execution.
    """
    try:
        cursor = conn.cursor()
        cursor.execute(f"SELECT * FROM {table_name}")
        rows = cursor.fetchall()

        # Convert rows to a list of dictionaries
        results = []
        for row in rows:
            result_dict = {col: value for col, value in zip(columns, row)}
            results.srcend(result_dict)
        # Convert the list of dictionaries to JSON
        return results
    except Exception as e:
        print(e)
        raise


def database_fetch_cursor(collection, query=None, projection=None):
    """
    Fetch data from a MongoDB collection and convert it to JSON format.
    Args:
        collection (pymongo.collection.Collection): Collection object from which to fetch data.
        query (dict): Query to filter documents (optional).
        projection (dict): Projection to include/exclude fields in the result (optional).
    Returns:
        str: JSON representation of the fetched data.
    Raises:
        Exception: If an error occurs during the execution.
    """
    try:
        # Fetch documents from the collection
        if query is None:
            query = {}
        if projection is None:
            projection = {}
        cursor = collection.find(query, projection)
        rows = list(cursor)
        
        # Remove _id field from each document
        for doc in rows:
            doc.pop('_id', None)
            
        # Convert the list of dictionaries to JSON
        return rows
    except Exception as e:
        print(e)
        raise
    

def database_fetch_100line(collection, query=None, projection=None):
    """
    Fetch 100 rows of data from a MongoDB collection and convert it to JSON format.

    Args:
        collection (pymongo.collection.Collection): Collection object from which to fetch data.
        query (dict): Query to filter documents (optional).
        projection (dict): Projection to include/exclude fields in the result (optional).

    Returns:
        str: JSON representation of the fetched data.

    Raises:
        Exception: If an error occurs during the execution.
    """
    try:
        # Fetch documents from the collection
        if query is None:
            query = {}
        if projection is None:
            projection = {}
        
        cursor = collection.find(query, projection).limit(
            100)  # Limit to 100 rows
        rows = list(cursor)
        
        # Remove _id field from each document
        for doc in rows:
            doc.pop('_id', None)

        # Convert the list of dictionaries to JSON
        return rows
    except Exception as e:
        print(e)
        raise


def central_processing():
    try:
       realtime_rocessing()
    except Exception as e:
        print("An error occurred while calling the API:", str(e))


def schedule_api_calls():
    schedule.every(3600*24).seconds.do(central_processing)
    while True:
        schedule.run_pending()
        time.sleep(1)


def table_data_to_cloud(server, database, table, columns):
    """
        push data src stn
    Args:
        server (_type_): _description_
        database (_type_): _description_
        table (_type_): _description_
        columns (_type_): _description_
    """
    conn = sqlserver_connection_windowauthen(server, database)
    cursor = conn.cursor()
    collection = cloud_database_cursor(database, table)
    
    # Query the SQL table
    cursor.execute(f"SELECT {', '.join(columns)} FROM {table}")
    rows = cursor.fetchall()

    # Insert data into MongoDB
    for row in rows:
        # Assuming columns and row data are compatible
        data = dict(zip(columns, row))
        collection.insert_one(data)
        

def realtime_rocessing_data_hcl_stn():
    """ realtime porcessing data of STN
    
    """
    data = read_table_json()
    for item in data:
        table = item['table']
        columns = item['column']
        print(table)
        conn = sqlserver_connection_windowauthen("DESKTOP-DGEHS9H", "U-CheckDate-Barcode")
        cursor = conn.cursor()
        collection = cloud_database_cursor("U-CheckDate-Barcode", table)
        # Query the SQL table
        
        cursor.execute(f"SELECT {', '.join(columns)} FROM {table}")
        rows = cursor.fetchall()
        # Insert data into MongoDB
        for row in rows:
            # Assuming columns and row data are compatible
            data = dict(zip(columns, row))
            collection.insert_one(data)

######## processing in client dashboard src #################
def query_data_deoc_hcl_stn(start, end, table):
    """ Query data Deoc Po2

    Args:
        start (_type_): _description_
        end (_type_): _description_
        table (_type_): _description_

    Returns:
        _type_: _description_
    """
    collection = cloud_database_cursor("U-CheckDate-Barcode", table)
    if start != None & end != None:
        query = {
        "dateField": {
            "$gte": start_date,
            "$lte": end_date
        }
        }
    else:
        start_date = datetime.strptime("2024-04-17T00:00:00", "%Y-%m-%dT%H:%M:%S")
        end_date = datetime.strptime("2024-04-19T23:59:59", "%Y-%m-%dT%H:%M:%S")
        query = {
            "dateField": {
                "$gte": start_date,
                "$lte": end_date
            }
        }
    cursor = collection.find(query)
    return cursor


    

    



