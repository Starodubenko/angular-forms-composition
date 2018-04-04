import { Component, OnInit, forwardRef, Input } from '@angular/core';
import { FormGroup, FormControl, Validators, NgControl, NG_VALUE_ACCESSOR, NG_VALIDATORS, ControlValueAccessor, AbstractControl, Validator, FormArray } from '@angular/forms';
import { omitBy, isEmpty } from 'lodash-es';

import { getFormProviders } from '../AbstractForm';
import { AbstractFormArrayComponent } from '../AbstractFormArray';
import { PetList } from './pets-list-form.model';

@Component({
  selector: 'pets-list-form',
  templateUrl: './pets-list-form.component.html',
  styleUrls: ['./pets-list-form.component.css'],
  ...getFormProviders(PetsListFormComponent)
})
export class PetsListFormComponent extends AbstractFormArrayComponent<PetList> {
  constructor() {
    super([])

    this.form.valueChanges.subscribe((value) => {
      
    })
  }

  ngOnInit(){
    
  }
}
