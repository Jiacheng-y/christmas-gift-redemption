import { RedemptionMapping } from "../../models/redemption";
import { RedemptionView } from "../../view/redemption-view";
import { RedemptionController } from "../redemption-controller";
import { Command } from "./command";

export class AddRedemptionCommand implements Command {
    command_index: number
    arguments: any[]

    public constructor(command_index:number, team:string, staff_id:string) {
        this.command_index = 2
        this.arguments = [team, staff_id]
    }

    public async execute() {
        const controller:RedemptionController = new RedemptionController()
        try {
            const response:RedemptionMapping = await controller.addRedemption(this.arguments[0], this.arguments[1])
            const view:RedemptionView = new RedemptionView()
            view.new_redemption_response(response.team_name, response.redeemed_at)
        } catch (e) {
            console.log(e)
        }
    }
}