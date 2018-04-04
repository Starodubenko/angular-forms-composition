import { AbstractEntity } from "../AbstractEntity";

export interface IPet {
    type: string;
    name: string;
    color: string;
}

export class Pet extends AbstractEntity implements IPet {
    public type: string = '';
    public name: string = '';
    public color: string = '';

    constructor(data: IPet) {
        this.type = data.type;
        this.name = data.name;
        this.color = data.color;
    }
}