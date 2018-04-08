import { Component, OnInit, forwardRef, Input } from '@angular/core';
import { FormGroup, FormControl, Validators, NgControl, NG_VALUE_ACCESSOR, NG_VALIDATORS, ControlValueAccessor, AbstractControl, Validator } from '@angular/forms';
import { omitBy, isEmpty, reduce, keys } from 'lodash-es';
import { AbstractEntity } from './AbstractEntity';

export const getFormProviders = (component) => ({
    providers: [{
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => component),
            multi: true
        },
        {
            provide: NG_VALIDATORS,
            useExisting: forwardRef(() => component),
            multi: true,
        }
    ]
})

export const getFormStyles = (ownStyles) => {
  const styles = [
    '/Users/heng/Documents/ng-tests/nested-forms/src/modules/forms/AbstractForm.css',
    ...ownStyles
  ]
  debugger
  return {
    styleUrls: styles
  }
};

export class AbstractFormComponent<T extends AbstractControl, V extends AbstractEntity> implements OnInit, ControlValueAccessor {
  form: T;

  onChange = (value: any) => {};
  onTouched = () => {};

  constructor(FormType, formControls) {
    this.form = new FormType(formControls);
    this.form.valueChanges.subscribe((value) => {
      this.onChange(value);
    })
  }

  ngOnInit() {
    
  }

  writeValue(value: any): void {
    this.form.setValue(value)
  }

  registerOnChange(fn: (value: any) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    isDisabled ?
    this.form.disable({onlySelf: true, emitEvent: false}) :
    this.form.enable({onlySelf: true, emitEvent: false});
  }

  getFormData(){
    return this.form.value;
  }

  getFormStatus(){
    return this.form.status;
  }
}
