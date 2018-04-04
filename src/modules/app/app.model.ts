import { AbstractEntity } from "../forms/AbstractEntity";
import { IUser, User } from "../forms/user-form/user-form.model";
import { IAddress, Address } from "../forms/address-form/address.model";
import { IPetList, PetList } from "../forms/pets-list-form/pets-list-form.model";

export interface IApplication {
    user: IUser;
    address: IAdress;
    petList: IPetList;
}

export class Application extends AbstractEntity implements IApplication {
    user: IUser = new User();
    address: IAdress = new Address();
    petList: IPetList = new PetList();

    constructor(data: IApplication) {
        this.user = new User(data.user);
        this.address = new Address(data.address);
        this.petList = new PetList(data.petList);
    }
}

