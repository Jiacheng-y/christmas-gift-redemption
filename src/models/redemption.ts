import { Database } from "sqlite3"
import { model } from "./model"
import { SQLiteConnection } from "./storage/sqlite-connection"

export class RedemptionModel {

    db: Database
    static redemption: model

    private constructor() {
        const db_connection = SQLiteConnection.createDBConnection()
        this.db = db_connection.getDatabase()
    }

    public static createRedemptionModel() {
        if (RedemptionModel.redemption != null) {
            return RedemptionModel.redemption
        } else {
            RedemptionModel.redemption = new RedemptionModel()
            return RedemptionModel.redemption
        }
    }

    /**
     * gets redemption information of the team if the team has already redeemed the gift
     * @param team string representing team name
     * @returns array of [staff_pass_id, team_name, redeemed_at]
     */
    public async getRedemption(team: string): Promise<RedemptionMapping|undefined> {
        try {
            const query = `SELECT * FROM redeemed WHERE team_name = ?`
            let query_result: RedemptionMapping = JSON.parse(String(await this.db.get(query, team)))
            return query_result
        } catch(e:any) {
            console.log(e)
        }
        
    }

    /**
     * Verifies whether the team has already redeemed their gift using the redeemed table in the database
     * @param team team name of the team redeeming the gift
     * @returns true if anyone in the team has already redeemed the gift previously, false otherwise
     */
    public async hasRedeemed(team: string): Promise<boolean> {
        try {
            const query = `SELECT COUNT(1) FROM redeemed WHERE team_name = ?`
            let query_result: number = parseInt(String(await this.db.get(query, team)))
            if (query_result > 0) {
                return true
            } else {
                return false
            }
        } catch (e) {
            console.log(e)
            return false
        }
    }

    /**
     * Adds a new entry into the redeemed table in the database if the team is able to successfully redeem their gift
     * @param team team name of the team redeeming their gift
     * @returns true if new redemption entry is added successfully, false otherwise
     */
    public async addRedemption(staff_id:string, team: string): Promise<boolean> {
        try {
            if (await this.hasRedeemed(team)) {
                return false
            } else {
                const curr_time: number = new Date().getTime()
                const query = `INSERT INTO redeemed VALUES(?, ?, ?)`
                const result = await this.db.run(query, [staff_id, team, curr_time])
                return true
            }
        } catch (e) {
            console.log(e)
            return false
        }
    }
}

export interface RedemptionMapping {
    staff_pass_id: string
    team_name: string
    redeemed_at: number
}