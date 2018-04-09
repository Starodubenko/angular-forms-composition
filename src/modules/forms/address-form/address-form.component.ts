import {Component} from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {isEmpty, omitBy} from 'lodash-es';

import {getFormProviders} from '../AbstractForm';
import {AbstractFormGroupComponent} from '../AbstractFormGroup';
import {IAddress} from './address.model';

@Component({
  selector: 'address-form',
  templateUrl: './address-form.component.html',
  styleUrls: ['./address-form.component.css'],
  ...getFormProviders(AddressFormComponent)
})
export class AddressFormComponent extends AbstractFormGroupComponent<IAddress> {
  constructor() {
    super({
      city: new FormControl('', Validators.required),
      street: new FormControl({
        value: '',
        disabled: true,
      }, Validators.required),
      building: new FormControl('', Validators.required),
      flat: new FormControl('', Validators.required),
    });
  }
}
