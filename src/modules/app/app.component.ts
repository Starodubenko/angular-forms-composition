import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Address } from '../forms/address-form/address.model';
import { values } from 'lodash-es';
import { User } from '../forms/user-form/user-form.model';
import { PetList } from '../forms/pets-list-form/pets-list-form.model';
import { Application } from './app.model';

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
      color: 'white', 
    },
    {
      type: 'cat', 
      name: 'barsick', 
      color: 'black', 
    }
  ]
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  fg: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(){
    debugger
    this.fg = this.formBuilder.group({
      user: new User(data.user),
      address: new Address(data.address),
      petsList: new PetList(data.petList),
    })

    // this.fg.valueChanges.subscribe((value) => {
    //   console.log(this.fg);
    // })
  }
}
