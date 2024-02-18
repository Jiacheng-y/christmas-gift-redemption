import { Command } from "./commands/command"
import { LookUpCommand } from "./commands/look-up-command"

export class ControlParser {
    parseChoice(response:string):number {
        let command:Command
        const choice = parseInt(response)
        if (choice === 1) {
        }
        return 0
    }

    parserArguments(response:string):string{
        return""
    }
}