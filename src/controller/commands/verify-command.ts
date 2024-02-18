import { RedemptionMapping } from "../../models/redemption";
import { RedemptionView } from "../../view/redemption-view";
import { RedemptionController } from "../redemption-controller";
import { Command } from "./command";

export class VerifyCommand implements Command {
    command_index: number = 2
    arguments: any[]

    public constructor(team:string) {
        this.arguments = [team]
    }

    public async execute() {
        const controller:RedemptionController = new RedemptionController()
        try {
            const response:boolean = await controller.verifyRedemption(this.arguments[0])
            const view:RedemptionView = new RedemptionView()
            view.verification_response(this.arguments[0], response)
        } catch (e) {
            console.log(e)
        }
    }
}