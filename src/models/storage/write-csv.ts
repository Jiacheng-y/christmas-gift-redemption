import fs = require("fs");
import { stringify } from "csv-stringify";
import { SQLiteConnection } from "./sqlite-connection";

const filename: string = "redemeption-log.csv";
const writableStream = fs.createWriteStream(filename);
const database_connection = SQLiteConnection.createDBConnection()

const columns = [
  "team_name", 
  "redeemed_staff_id", 
  "redeemed_at",
];

const stringifier = stringify({ header: true, columns: columns });
database_connection.getDatabase().each(`select * from redeemed`, (error: Error, row: Array<any>) => {
  if (error) {
    return console.log(error.message);
  }
  stringifier.write(row);
});
stringifier.pipe(writableStream);
console.log("Finished writing data");