import { Component, OnInit, forwardRef, Input } from '@angular/core';
import { FormGroup, FormControl, Validators, NgControl, NG_VALUE_ACCESSOR, NG_VALIDATORS, ControlValueAccessor, AbstractControl, Validator } from '@angular/forms';
import { omitBy, isEmpty } from 'lodash-es';

import { getFormProviders } from '../AbstractForm';
import { AbstractFormGroupComponent } from '../AbstractFormGroup';

@Component({
  selector: 'user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css'],
  ...getFormProviders(UserFormComponent)
})
export class UserFormComponent extends AbstractFormGroupComponent {

  constructor() {
    super({
      firstname: new FormControl('', Validators.required),
      lastname: new FormControl('', Validators.required),
      middlename: new FormControl('', Validators.required),
    })

    this.form.valueChanges.subscribe((value) => {
      
    })
  }
}
