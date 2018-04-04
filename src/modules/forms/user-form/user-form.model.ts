import { AbstractEntity } from "../AbstractEntity";

export interface IUser {
    firstName: string;
    lastName: string;
    middleName: string;
}

export class User extends AbstractEntity implements IUser {
    public firstName: string = '';
    public lastName: string = '';
    public middleName: string = '';

    constructor(data: IUser) {
        this.firstName = data.firstName;
        this.lastName = data.lastName;
        this.middleName = data.middleName;
    }
}