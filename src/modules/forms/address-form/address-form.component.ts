import { Component, OnInit, forwardRef, Input } from '@angular/core';
import { FormGroup, FormControl, Validators, NgControl, NG_VALUE_ACCESSOR, NG_VALIDATORS, ControlValueAccessor, AbstractControl, Validator } from '@angular/forms';
import { omitBy, isEmpty } from 'lodash-es';

import { getFormProviders } from '../AbstractForm';
import { AbstractFormGroupComponent } from '../AbstractFormGroup';
import { IAddress } from './address.model';

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
    })

    this.form.valueChanges.subscribe((value) => {
      console.log('city : ' + this.form.get('city').status);
      console.log('street : ' + this.form.get('street').status);
      console.log('building : ' + this.form.get('building').status);
      console.log('flat : ' + this.form.get('flat').status);
    })
  }
}
