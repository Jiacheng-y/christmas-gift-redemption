
/**
 * // delete/modify before submission
 * The Model represents the data and the rules that govern access to and updates of this data. 
 * It responds to requests for information, processes instructions to change its state, 
 * and communicates with the database.
 */

export class Redemption {

    /**
     * gets redemption information of the team if the team has already redeemed the gift
     * @param team string representing team name
     * @returns array of [team_name, staff_pass_id, redeemed_at]
     */
    public getRedemption(team: string): Array<string|number> {
        return []
    }

    /**
     * Verifies whether the team has already redeemed their gift using the redeemed table in the database
     * @param team team name of the team redeeming the gift
     * @returns true if anyone in the team has already redeemed the gift previously, false otherwise
     */
    public hasRedeemed(team: string): boolean {
        return false
    }

    /**
     * Adds a new entry into the redeemed table in the database if the team is able to successfully redeem their gift
     * @param team team name of the team redeeming their gift
     * @returns true if new redemption entry is added successfully, false otherwise
     */
    public addRedemption(team: string): boolean {

        const curr_time: number = new Date().getTime()
        return false
    }
}