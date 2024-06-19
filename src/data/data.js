const sql = require('mssql');
const MongoClient = require('mongodb').MongoClient;
const schedule = require('node-schedule');
const fs = require('fs');
const { DateTime } = require('luxon');
const { readTableJson } = require('./src/utils/function');

async function sqlServerConnectionWindowAuth(server, database) {
    try {
        const pool = await sql.connect({
            server: server,
            database: database,
            options: {
                trustedConnection: true
            }
        });
        return pool;
    } catch (err) {
        console.error('Error connecting to SQL Server:', err);
        return null;
    }
}

async function sqlServerConnectionUserMethod(server, database, username, password) {
    try {
        const pool = await sql.connect({
            server: server,
            database: database,
            user: username,
            password: password,
            options: {
                port: 1433
            }
        });
        return pool;
    } catch (err) {
        console.error('Error connecting to SQL Server:', err);
        return null;
    }
}

async function cloudDatabaseCursor(database, collection) {
    try {
        const key = JSON.parse(fs.readFileSync('src/secret.json', 'utf8'));
        const uri = key.cloud;
        const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
        await client.connect();
        const db = client.db(database);
        return db.collection(collection);
    } catch (err) {
        console.error('Error connecting to MongoDB:', err);
        return null;
    }
}

function nosqlTransform(rows) {
    try {
        const results = rows.map(row => ({...row }));
        return JSON.stringify(results);
    } catch (err) {
        console.error(err);
    }
}

async function databaseCursor(conn, tableName, columns) {
    try {
        const request = new sql.Request(conn);
        const result = await request.query(`SELECT ${columns.join(', ')} FROM ${tableName}`);
        return result.recordset.map(row => {
            const resultDict = {};
            columns.forEach((col, i) => resultDict[col] = row[col]);
            return resultDict;
        });
    } catch (err) {
        console.error(err);
        throw err;
    }
}

async function databaseFetchCursor(collection, query = {}, projection = {}) {
    try {
        const rows = await collection.find(query, { projection }).toArray();
        rows.forEach(doc => delete doc._id);
        return rows;
    } catch (err) {
        console.error(err);
        throw err;
    }
}

async function databaseFetch100Line(collection, query = {}, projection = {}) {
    try {
        const rows = await collection.find(query, { projection }).limit(100).toArray();
        rows.forEach(doc => delete doc._id);
        return rows;
    } catch (err) {
        console.error(err);
        throw err;
    }
}

async function centralProcessing() {
    try {
        await realtimeProcessing();
    } catch (err) {
        console.error('An error occurred while calling the API:', err);
    }
}

function scheduleApiCalls() {
    schedule.scheduleJob('0 0 * * *', centralProcessing);
}

async function tableDataToCloud(server, database, table, columns) {
    const conn = await sqlServerConnectionWindowAuth(server, database);
    const collection = await cloudDatabaseCursor(database, table);
    const request = new sql.Request(conn);
    const result = await request.query(`SELECT ${columns.join(', ')} FROM ${table}`);
    const rows = result.recordset;

    rows.forEach(row => {
        const data = columns.reduce((acc, col, i) => {
            acc[col] = row[col];
            return acc;
        }, {});
        collection.insertOne(data);
    });
}

async function realtimeProcessing() {
    const data = readTableJson();
    for (const item of data) {
        const table = item.table;
        const columns = item.column;
        console.log(table);
        const conn = await sqlServerConnectionWindowAuth('DESKTOP-DGEHS9H', 'U-CheckDate-Barcode');
        const collection = await cloudDatabaseCursor('U-CheckDate-Barcode', table);
        const request = new sql.Request(conn);
        const result = await request.query(`SELECT ${columns.join(', ')} FROM ${table}`);
        const rows = result.recordset;

        rows.forEach(row => {
            const data = columns.reduce((acc, col, i) => {
                acc[col] = row[col];
                return acc;
            }, {});
            collection.insertOne(data);
        });
    }
}

async function queryData(start, end, table) {
    const collection = await cloudDatabaseCursor('U-CheckDate-Barcode', table);
    let startDate, endDate;

    if (start && end) {
        startDate = DateTime.fromISO(start);
        endDate = DateTime.fromISO(end);
    } else {
        startDate = DateTime.fromISO('2024-04-17T00:00:00');
        endDate = DateTime.fromISO('2024-04-19T23:59:59');
    }

    const query = {
        dateField: {
            $gte: startDate.toJSDate(),
            $lte: endDate.toJSDate()
        }
    };

    const cursor = await collection.find(query);
    return cursor.toArray();
}


module.exports = {
    sqlServerConnectionWindowAuth,
    sqlServerConnectionUserMethod,
    cloudDatabaseCursor,
    nosqlTransform,
    databaseCursor,
    databaseFetchCursor,
    databaseFetch100Line,
    centralProcessing,
    scheduleApiCalls,
    tableDataToCloud,
    realtimeProcessing,
    queryData
};