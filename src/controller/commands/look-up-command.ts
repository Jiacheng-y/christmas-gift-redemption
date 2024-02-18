import { Command } from "./command";
import { StaffController } from "../staff-controller"
import { StaffMapping } from "../../models/staff";
import { RedemptionView } from "../../view/redemption-view";

export class LookUpCommand implements Command {
    command_index: number = 1
    arguments: any[]

    public constructor(staff_id:string) {
        this.arguments = [staff_id]
    }

    public async execute() {
        const controller:StaffController = new StaffController()
        try {
            const response:StaffMapping = await controller.getStaffIDMapping(this.arguments[0])
            const view:RedemptionView = new RedemptionView()
            view.lookup_response(response.staff_pass_id, response.team_name, response.created_at)
        } catch (e) {
            console.log(e)
        }
    }
}