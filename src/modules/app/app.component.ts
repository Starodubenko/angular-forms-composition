import {Component, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormGroup, FormControl} from '@angular/forms';
import {Address} from '../forms/address-form/address.model';
import {values} from 'lodash-es';
import {User} from '../forms/user-form/user-form.model';
import { Pet } from '../forms/pet-form/pet-form.model';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';

const data = {
  user: {
    firstName: 'Ivan',
    lastName: 'Ivanov',
    middleName: 'Ivananovich',
  },
  address: {
    city: 'Moscow',
    street: 'Lenina',
    building: '5',
    flat: '25',
  },
  petList: [
    {
      type: 'dog',
      name: 'sharick',
      color: '',
    },
    {
      type: 'cat',
      name: 'barsick',
      color: '',
    }
  ]
};

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  fg: FormGroup;
  user: FormControl;
  address: FormControl;
  petList: FormArray;

  shouldUpdate = new BehaviorSubject(true);

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.user = this.formBuilder.control(new User(data.user));
    this.address = this.formBuilder.control(new Address(data.address));
    this.petList = this.formBuilder.array(data.petList);

    this.fg = this.formBuilder.group({
      user: this.user,
      address: this.address,
      petList: this.petList,
    });
  }

  addPet(){
    this.petList.push(
      this.formBuilder.control(new Pet())
    );
  }

  removePet(index){
    this.petList.removeAt(index);
  }

  getStatus() {
    console.log(`AppForm status: ${this.fg.status}`);
  }

  getValue() {
    console.log(`AppForm value:`);
    console.log(this.fg.value);
  }

  disableAppForm() {
    this.fg.enabled ? this.fg.disable() : this.fg.enable();
  }
  disableUserForm() {
    this.user.enabled ? this.user.disable() : this.user.enable();
    this.user.updateValueAndValidity();
  }
  disableAddressForm() {
    this.address.enabled ? this.address.disable() : this.address.enable();
    this.address.updateValueAndValidity();
  }
  disablePetListForm() {
    this.petList.enabled ? this.petList.disable() : this.petList.enable();
  }
  petUpdateValueAndValidity() {
    this.petList.updateValueAndValidity();
  }
  togglePetFormUpdate() {
    this.shouldUpdate.next(true);
  }
}
