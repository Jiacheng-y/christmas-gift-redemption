import { Database } from "sqlite3"
import { SQLiteConnection } from "./storage/sqlite-connection"
import { model } from "./model"

export class StaffModel implements model{

    db: Database
    static staff: model

    private constructor() {
        const db_connection = SQLiteConnection.createDBConnection()
        this.db = db_connection.getDatabase()
    }

    public static createStaffModel() {
        if (StaffModel.staff != null) {
            return StaffModel.staff
        } else {
            StaffModel.staff = new StaffModel()
            return StaffModel.staff
        }
    }

    /**
     * Looks up the given staff pass id against the mapping table in the database to retrieve corresponding information of the staff 
     * @param staff_id unique string representing staff_pass_id
     * @returns returns [staff_pass_id, team_name, created_at] corresponding to given staff_id
     */
    public async getStaffIDMapping(staff_id: string): Promise<StaffMapping|undefined> {
        try {
            const query = `SELECT * FROM teams WHERE staff_pass_id = ?`
            let query_result: StaffMapping = JSON.parse(String(await this.db.get(query, staff_id)))
            return query_result
        } catch (e) {
            console.log(e)
        }
    }
}

export interface StaffMapping {
    staff_pass_id: string
    team_name: string
    created_at: number
}