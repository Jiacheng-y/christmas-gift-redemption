import { RedemptionMapping, RedemptionModel } from "../models/redemption"

export class RedemptionController {

    redemptionModel: RedemptionModel

    public constructor() {
        this.redemptionModel = RedemptionModel.createRedemptionModel() as RedemptionModel
    }
    
    public async verifyRedemption(team: string): Promise<boolean> {
        return await this.redemptionModel.hasRedeemed(team)
    }

    public async getRedemption(team: string): Promise<RedemptionMapping> {
        try {
            const response:RedemptionMapping|undefined =  await this.redemptionModel.getRedemption(team)
            if (response === undefined) {
                return {staff_pass_id: "", team_name: "", redeemed_at: 0}
            } else {
                return response
            }
        } catch (e: unknown) {
            console.log(e)
            return {staff_pass_id: "", team_name: "", redeemed_at: 0}
        }
    }

    public async addRedemption(team: string, staff_id: string): Promise<RedemptionMapping> {
        return await this.redemptionModel.addRedemption(staff_id, team)
    }
}