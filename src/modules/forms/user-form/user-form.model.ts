export interface IAddress {
    city: string;
    street: string;
    building: string;
    flat: string;
}

export class Address implements IAddress {
    public city: string = '';
    public street: string = '';
    public building: string = '';
    public flat: string = '';
}