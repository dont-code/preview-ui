export class Command {
  type: CommandType;
  position: string;
  value: any;


  constructor(type: CommandType, position: string, value: any) {
    this.type = type;
    this.position = position;
    this.value = value;
  }
}

export enum CommandType {
 ADD ,UPDATE, DELETE
}
