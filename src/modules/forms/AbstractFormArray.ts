import { Component, OnInit, forwardRef, Input } from '@angular/core';
import { FormControl, Validators, NgControl, NG_VALUE_ACCESSOR, NG_VALIDATORS, ControlValueAccessor, AbstractControl, Validator, FormArray } from '@angular/forms';
import { omitBy, isEmpty, reduce, keys } from 'lodash-es';
import { AbstractFormComponent } from './AbstractForm';

export class AbstractFormArrayComponent<E> extends AbstractFormComponent<FormArray,E> implements Validator {

  constructor(formFields) {
    super(FormArray, formFields);
  }

  validate(c: AbstractControl): { [key: string]: any } {
    return reduce(
        keys(this.form.controls),
        (acc, fieldName) => {
            if (this.form.get(fieldName).errors){
                acc[fieldName] = this.form.get(fieldName).errors;
            }
            return acc;
        },
        {}
    )
  }
}
