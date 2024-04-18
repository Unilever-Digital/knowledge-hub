from pymongo import MongoClient
import pyodbc
import json
import pymongo
import schedule
import time
import requests
from datetime import datetime
import pyodbc
from app.utils.function import *

def connectToSqlServerWindowAuthen(server, database):
    try:
        # Establishing the connection
        conn = pyodbc.connect(driver="{SQL Server}", 
                              server=server, 
                              database=database)
        return conn
    except Exception as e:
        print("Error connecting to SQL Server:", e)
        return None


def connectToSqlServer(server, database, username, password):
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
    
def connectToMongoDB(database, table):
    try:
        uri = "mongodb+srv://unilever-digital:U2024-digital@cluster0.ixcliyp.mongodb.net/"
        # Establishing the connection
        conn = pymongo.MongoClient(uri)
        db =  conn[database]
        table = db[table]
        return table
    except Exception as e:
        print("Error connecting to MongoDB:", e)
        return None


def noSqlTransform(rows):
    """tranform Sql table to tree Node json

    Args:
        table (dataframe)): sql table
    """
    try:
    
        # Convert rows to a list of dictionaries
        results = []
        for row in rows:
            results.append(dict(row))

        # Convert the list of dictionaries to JSON
        return json.dumps(results)
    except Exception as e:
        print(e)


def tableSqlServerFetch(conn, table_name, columns):
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
            results.append(result_dict)

        # Convert the list of dictionaries to JSON
        return results
    except Exception as e:
        print(e)
        raise


def tableMongoDBFetch(collection, query=None, projection=None):
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
    

def tableMongoDBFetch_100data(collection, query=None, projection=None):
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

def tableToAppEngineSTN(server, database, table, columns):
    conn = connectToSqlServerWindowAuthen(server, database)
    cursor = conn.cursor()
    collection = connectToMongoDB(database, table)
    
    # Query the SQL table
    cursor.execute(f"SELECT {', '.join(columns)} FROM {table}")
    rows = cursor.fetchall()

    # Insert data into MongoDB
    for row in rows:
        # Assuming columns and row data are compatible
        data = dict(zip(columns, row))
        collection.insert_one(data)
        

def realtime_rocessing():
    data = read_table_json()
    for item in data:
        table = item['table']
        columns = item['column']
        print(table)
        conn = connectToSqlServerWindowAuthen("DESKTOP-DGEHS9H", "U-CheckDate-Barcode")
        cursor = conn.cursor()
        collection = connectToMongoDB("U-CheckDate-Barcode", table)
        # Query the SQL table
        
        cursor.execute(f"SELECT {', '.join(columns)} FROM {table}")
        rows = cursor.fetchall()
        # Insert data into MongoDB
        for row in rows:
            # Assuming columns and row data are compatible
            data = dict(zip(columns, row))
            collection.insert_one(data)

######## processing in client dashboard app #################

def queryDataDeoc(start, end, table):
    collection = connectToMongoDB("U-CheckDate-Barcode", table)
    start_date = datetime.strptime("2024-04-17T00:00:00", "%Y-%m-%dT%H:%M:%S")

    end_date = datetime.strptime("2024-04-19T23:59:59", "%Y-%m-%dT%H:%M:%S")
    query = {
        "dateField": {
            "$gte": start,
            "$lte": end
        }
    }
    cursor = collection.find(query)
    return cursor
    

    



