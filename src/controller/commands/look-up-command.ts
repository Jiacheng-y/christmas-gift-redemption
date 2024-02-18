import { Command } from "./command";
import { StaffController } from "../staff-controller"
import { StaffMapping } from "../../models/staff";
import { RedemptionView } from "../../view/redemption-view";

export class LookUpCommand implements Command {
    command_index: number
    arguments: any[]

    public constructor(command_index:number, staff_id:string) {
        this.command_index = 1
        this.arguments = [staff_id]
    }

    public execute() {
        const controller:StaffController = new StaffController()
        try {
            const response:StaffMapping = controller.getStaffIDMapping(this.arguments[0])
            const view:RedemptionView = new RedemptionView()
            view.lookup_response(response.staff_pass_id, response.team_name, response.created_at)
        } catch (e) {
            console.log(e)
        }
    }
}