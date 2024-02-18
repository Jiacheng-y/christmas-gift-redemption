
export class RedemptionModel {

    /**
     * Looks up the given staff pass id against the mapping table in the database to retrieve corresponding information of the staff 
     * @param staff_id unique string representing staff_pass_id
     * @returns returns [staff_pass_id, team_name, created_at] corresponding to given staff_id
     */
    public getStaffIDMapping(staff_id: string): Array<string | number> {
        return []
    }

    /**
     * Verifies whether the team has already redeemed their gift using the redeemed table in the database
     * @param staff_id unique string representing staff_pass_id who has come to redeem the gift
     * @returns true if anyone in the team has already redeemed the gift previously, false otherwise
     */
    public hasRedeemed(staff_id: string): boolean {
        return false
    }

    /**
     * Adds a new entry into the redeemed table in the database if the team is able to successfully redeem their gift
     * @param staff_id unique string representing the staff_pass_id of the staff that is redeeming the gift for their team
     * @returns true if new redemption entry is added successfully, false otherwise
     */
    public addRedemption(staff_id: string): boolean {
        
        const curr_time: number = new Date().getTime()
        return false
    }
}