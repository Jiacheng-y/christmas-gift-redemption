import fs = require("fs");
import { stringify } from "csv-stringify";
import { SQLiteConnection } from "./storage/sqlite-connection";

const filename = "redemeption-log.csv";
const writableStream = fs.createWriteStream(filename);

const columns = [
  "team_name", 
  "redeemed_staff_id", 
  "redeemed_at",
];

const stringifier = stringify({ header: true, columns: columns });
SQLiteConnection.db.each(`select * from redeemed`, (error: Error, row: Array<any>) => {
  if (error) {
    return console.log(error.message);
  }
  stringifier.write(row);
});
stringifier.pipe(writableStream);
console.log("Finished writing data");