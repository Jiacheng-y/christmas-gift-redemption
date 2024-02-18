import { RedemptionMapping } from "../../models/redemption";
import { RedemptionView } from "../../view/redemption-view";
import { RedemptionController } from "../redemption-controller";
import { StaffController } from "../staff-controller";
import { Command } from "./command";

export class AddRedemptionCommand implements Command {
    command_index: number = 2
    arguments: any[]

    public constructor(staff_id:string) {
        this.arguments = [staff_id]
    }

    public async execute() {
        const controller:RedemptionController = new RedemptionController()
        const staff:StaffController = new StaffController()
        const team:string = (await staff.getStaffIDMapping(this.arguments[0])).team_name
        try {
            const response:RedemptionMapping = await controller.addRedemption(this.arguments[0], team)
            const view:RedemptionView = new RedemptionView()
            view.new_redemption_response(response.team_name, response.redeemed_at)
        } catch (e) {
            console.log(e)
        }
    }
}