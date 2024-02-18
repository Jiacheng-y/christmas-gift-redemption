import { response } from "express"
import { StaffMapping, StaffModel } from "../models/staff"

export class StaffController {
    staffModel: StaffModel

    public constructor() {
        this.staffModel = StaffModel.createStaffModel() as StaffModel
    }

    public async getStaffIDMapping(staff_id: string): Promise<StaffMapping> {
        try {
            const response:StaffMapping|undefined = await this.staffModel.getStaffIDMapping(staff_id)
            if (response === undefined) {
                return {staff_pass_id: "", team_name: "", created_at: 0}
            } else {
                return response
            }
        } catch (e: unknown) {
            console.log(e)
            return {staff_pass_id: "", team_name: "", created_at: 0}
        }
    }
}