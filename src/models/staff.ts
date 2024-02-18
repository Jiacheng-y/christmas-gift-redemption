
export class StaffModel {

    /**
     * Looks up the given staff pass id against the mapping table in the database to retrieve corresponding information of the staff 
     * @param staff_id unique string representing staff_pass_id
     * @returns returns [staff_pass_id, team_name, created_at] corresponding to given staff_id
     */
    public getStaffIDMapping(staff_id: string): Array<string | number> {
        return []
    }
}