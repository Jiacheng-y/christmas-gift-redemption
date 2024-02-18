/**
 * // delete /modify before submission
 * The view will be responsible for the user interface, 
 * in this case, console logging the tasks.
 */

import { time } from "console"
import { response } from "express"

export class RedemptionView {

    public initialMessage(): void {
        const init_message:string = `Hello! Welcome to the Christmas gift redemption system!\n
        We provide the following services: \n
        1. Search for a representative's team based on their staff pass id\n 
        2. Verify whether a team is eligible for gift redemption\n
        3. Add a new redemption record\n`
        const choice:string|null = prompt("Please choose what you would like to do (numbers 1-3): ")

    }

    public lookup_response(staff_id:string, team:string, time:number): void {
        // display response

        const response = `Staff with staff pass id ${staff_id} is part of team ${team}. \n
        This record was created at ${time}`

        console.log(response)

        this.initialMessage()

    }

    public verification_response(team:string, isEligible:boolean): void {
        // display response
        if (isEligible) {
            const response:string = `${team} can redeem their christmas gift! `
        } else {
            const response:string = `Oh no, ${team} cannot redeem their christmas gift! `
        }
        console.log(response)

        this.initialMessage()
    }

    public new_redemption_response(team:string, time:number): void {
        // display response

        console.log(`New redemption record for team ${team} has been added at ${time}`)

        this.initialMessage()
    }
}