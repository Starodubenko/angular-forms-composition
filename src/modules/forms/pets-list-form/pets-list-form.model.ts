import { AbstractEntity } from "../AbstractEntity";
import { IPet } from "../pet-form/pet-form.model";

export interface IPetList {
    list: IPetList[];
}

export class PetList extends Array implements IPetList {
    constructor(data: IPet[]) {
        super();
        this.push(...data);
    }
}