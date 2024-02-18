import fs = require("fs")
import { parse } from "csv-parse"

import { SQLiteConnection } from './storage/sqlite-connection'

fs.createReadStream("../../data/staff-id-to-team-mapping-long.csv")
  .pipe(parse({ delimiter: ",", from_line: 2 }))
  .on("data", (row: Array<any>) => {
    SQLiteConnection.db.serialize( () => {
      SQLiteConnection.db.run(
        `INSERT INTO teams VALUES (?, ?, ?)`,
        [row[0], row[1], row[2]],
         (error: Error) => {
          if (error) {
            return console.log(error.message);
          }
          console.log(`Inserted a row with the id: ${this}`);
        }
      );
    });
  });