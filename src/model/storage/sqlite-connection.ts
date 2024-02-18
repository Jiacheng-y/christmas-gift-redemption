// referenced from: https://www.digitalocean.com/community/tutorials/how-to-read-and-write-csv-files-in-node-js-using-node-csv#step-1-setting-up-the-project-directory

import fs = require("fs")
import { Database } from "sqlite3";
import { DBConnection } from "./db-connection";

export class SQLiteConnection implements DBConnection {
  static db: Database

  private constructor(path: string) {
    SQLiteConnection.db = this.connectToDatabase(path)
  }

  public static createDBConnection(): Database {
    const filepath: string = "./redemption.db"
    if (SQLiteConnection.db != null) {
      return SQLiteConnection.db
    } else { 
      new SQLiteConnection(filepath)
      return SQLiteConnection.db
    }
  }

  public getDatabase(): Database {
    return SQLiteConnection.createDBConnection()
  }

  connectToDatabase (filepath: string) {
    const path = filepath as fs.PathLike
    if (fs.existsSync(path)) {
      return new Database(filepath)
    } else {
      const db = new Database(filepath, (err: Error | null) => {
        if (err) {
          return console.error(err.message)
        }
        this.createTeamsTable(db)
        this.createRedeemedTable(db)
        console.log("Connected to the database successfully")
      });
      return db;
    }
  }

  private createTeamsTable (db: Database) {
      db.exec(`
      CREATE TABLE teams
      (
        staff_pass_id    VARCHAR(50) NOT NULL,
        team_name        VARCHAR(50),
        created_at       INT,
        PRIMARY KEY(staff_pass_id)
      )
    `);
    }

    private createRedeemedTable (db: Database) {
      db.exec(`
      CREATE TABLE redeemed
      (
        staff_pass_id    VARCHAR(50) NOT NULL,
        team_name        VARCHAR(50) NOT NULL,
        redeemed_at       INT,
        PRIMARY KEY(team_name)
      )
    `);
    }
}