/**
 * // delete/modify before submission
 * The Controller receives user input and decides what to do with it. 
 * It’s a system that manages the data flow into the model object and updates the view 
 * whenever data changes.
 */

export class RedemptionController {
    
    public verifyRedemption(team: string): boolean {
        return false
    }

    public getRedemption(team: string): Array<string | number> {
        return Array()
    }

    public addRedemption(team: string, staff_id: string): boolean {
        return false
    }
}