import { Component, OnInit, forwardRef, Input } from '@angular/core';
import { FormGroup, FormControl, Validators, NgControl, NG_VALUE_ACCESSOR, NG_VALIDATORS, ControlValueAccessor, AbstractControl, Validator } from '@angular/forms';
import { omitBy, isEmpty } from 'lodash-es';

import { getFormProviders } from '../AbstractForm';
import { AbstractFormGroupComponent } from '../AbstractFormGroup';
import { IPet } from './pet-form.model';

@Component({
  selector: 'pet-form',
  templateUrl: './pet-form.component.html',
  styleUrls: ['./pet-form.component.css'],
  ...getFormProviders(PetFormComponent)
})
export class PetFormComponent extends AbstractFormGroupComponent<IPet> {

  constructor() {
    super({
      type: new FormControl('', Validators.required),
      name: new FormControl('', Validators.required),
      color: new FormControl('', Validators.required),
    })

    this.form.valueChanges.subscribe((value) => {
      
    })
  }
}
