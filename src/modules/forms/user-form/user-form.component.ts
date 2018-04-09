import {Component} from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {isEmpty, omitBy} from 'lodash-es';

import {getFormProviders} from '../AbstractForm';
import {AbstractFormGroupComponent} from '../AbstractFormGroup';
import {IUser} from './user-form.model';

@Component({
  selector: 'user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css'],
  ...getFormProviders(UserFormComponent)
})
export class UserFormComponent extends AbstractFormGroupComponent<IUser> {
  constructor() {
    super({
      firstName: new FormControl('', Validators.required),
      lastName: new FormControl('', Validators.required),
      middleName: new FormControl('', Validators.required),
    });

    this.form.valueChanges.subscribe((value) => {

    });
  }
}
