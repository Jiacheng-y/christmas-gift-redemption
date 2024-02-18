/**
 * // delete/modify before submission
 * The Controller receives user input and decides what to do with it. 
 * It’s a system that manages the data flow into the model object and updates the view 
 * whenever data changes.
 */

import { RedemptionMapping, RedemptionModel } from "../models/redemption"

export class RedemptionController {

    redemptionModel: RedemptionModel

    private constructor() {
        this.redemptionModel = RedemptionModel.createRedemptionModel() as RedemptionModel
    }
    
    public async verifyRedemption(team: string): Promise<boolean> {
        return await this.redemptionModel.hasRedeemed(team)
    }

    public async getRedemption(team: string): Promise<RedemptionMapping|undefined> {
        try {
            return await this.redemptionModel.getRedemption(team)
        } catch (e: unknown) {
            console.log(e)
        }
    }

    public async addRedemption(team: string, staff_id: string): Promise<boolean> {
        return await this.redemptionModel.addRedemption(staff_id, team)
    }
}