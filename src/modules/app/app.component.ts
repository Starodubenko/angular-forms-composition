import {Component, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormGroup} from '@angular/forms';
import {Address} from '../forms/address-form/address.model';
import {values} from 'lodash-es';
import {User} from '../forms/user-form/user-form.model';

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
};

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  fg: FormGroup;
  petFormsArray = new FormArray([]);

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.petFormsArray = this.formBuilder.array(data.petList);

    this.fg = this.formBuilder.group({
      user: new User(data.user),
      address: new Address(data.address),
      petList: this.formBuilder.array(data.petList),
    });
  }

  getStatus() {
    console.log(`AppForm status: ${this.fg.status}`);
  }

  getValue() {
    console.log(`AppForm value:`);
    console.log(this.fg.value);
  }
}
