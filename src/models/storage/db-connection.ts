import { Database } from "sqlite3";


export interface DBConnection {
    getDatabase(): Database
}