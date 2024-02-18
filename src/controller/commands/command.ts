export interface Command {
    command_index:number
    arguments:Array<any>

    execute():void
}