// referenced from: https://www.digitalocean.com/community/tutorials/how-to-read-and-write-csv-files-in-node-js-using-node-csv#step-1-setting-up-the-project-directory

import fs = require("fs")
import { Database } from "sqlite3";
import { DBConnection } from "./db-connection";

export class SQLiteConnection implements DBConnection {
  private db: Database
  private static db_connection: DBConnection

  private constructor(path: string) {
    this.db = this.connectToDatabase(path)
  }

  public static createDBConnection(): DBConnection {
    const filepath: string = "./redemption.db"
    if (SQLiteConnection.db_connection != null) {
      return SQLiteConnection.db_connection
    } else { 
      SQLiteConnection.db_connection = new SQLiteConnection(filepath)
      return SQLiteConnection.db_connection
    }
  }

  public getDatabase(): Database {
    return this.db
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