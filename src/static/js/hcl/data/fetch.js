import { databaseFetch100Line, databaseFetchCursor, queryData } from "../../../../data/data";


async function fetchDataFromLastday(table) {
    curentDate = new Date();
    previousDate = new Date(curentDate);
    previousDate.setDate(previousDate.getDate() - 1);
    data = queryData(previousDate, curentDate, table);
    return data;
};


function dataParetoProduct(table) {
    data = fetchDataFromLastday(table);
    productItem = data;
    return productItem
}