import { AbstractEntity } from "../forms/AbstractEntity";
import { IUser, User } from "../forms/user-form/user-form.model";
import { IAddress, Address } from "../forms/address-form/address.model";
import { IPetList, PetList } from "../forms/pets-list-form/pets-list-form.model";
import { IPet } from "../forms/pet-form/pet-form.model";

export interface IApplication {
    user: IUser;
    address: IAddress;
    petList: Array<IPet>;
}

export class Application extends AbstractEntity implements IApplication {
    user: IUser = new User(null);
    address: IAddress = new Address(null);
    petList = [];

    constructor(data: IApplication) {
        super();
        this.user = new User(data.user);
        this.address = new Address(data.address);
        this.petList = data.petList;
    }
}

