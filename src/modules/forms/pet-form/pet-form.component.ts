import { Component, Output, EventEmitter, ChangeDetectorRef } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {isEmpty, omitBy} from 'lodash-es';

import {getFormProviders} from '../AbstractForm';
import {AbstractFormGroupComponent} from '../AbstractFormGroup';
import {IPet} from './pet-form.model';

@Component({
  selector: 'pet-form',
  templateUrl: './pet-form.component.html',
  styleUrls: ['./pet-form.component.css'],
  ...getFormProviders(PetFormComponent),
})
export class PetFormComponent extends AbstractFormGroupComponent<IPet> {
  @Output() onRemove = new EventEmitter();

  type;
  name;
  color;

  constructor(private cd: ChangeDetectorRef) {
    super({
      type: new FormControl('', Validators.required),
      name: new FormControl('', Validators.required),
      color: new FormControl('', Validators.required),
    });
    this.type = this.form.get('type');
    this.name = this.form.get('name');
    this.color = this.form.get('color');
  }

  isFullForm() {
    return this.type.value && this.name.value && this.color.value;
  }

  remove() {
    this.onRemove.emit(null);
  }
}
