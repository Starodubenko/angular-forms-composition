import { AbstractEntity } from "../AbstractEntity";

export interface IAddress {
    city: string;
    street: string;
    building: string;
    flat: string;
}

export class Address extends AbstractEntity implements IAddress {
    public city: string = '';
    public street: string = '';
    public building: string = '';
    public flat: string = '';

    constructor() {
    
    }

    constructor(data: IAddress) {
        super();
        this.city = data.city;
        this.street = data.street;
        this.building = data.building;
        this.flat = data.flat;
    }
}