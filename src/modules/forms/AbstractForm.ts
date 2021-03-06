import {forwardRef, OnInit} from '@angular/core';
import {AbstractControl, ControlValueAccessor, NG_VALIDATORS, NG_VALUE_ACCESSOR} from '@angular/forms';
import {isEmpty, keys, omitBy, reduce} from 'lodash-es';
import {AbstractEntity} from './AbstractEntity';

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
});

export const getFormStyles = (ownStyles) => {
  const styles = [
    '/Users/heng/Documents/ng-tests/nested-forms/src/modules/forms/AbstractForm.css',
    ...ownStyles
  ];

  return {
    styleUrls: styles
  };
};

export class AbstractFormComponent<T extends AbstractControl, V extends AbstractEntity> implements OnInit, ControlValueAccessor {
  form: T;

  onChange = (value: any) => {};
  onTouched = () => {};

  constructor(FormType, formControls) {
    this.form = new FormType(formControls);
    this.form.valueChanges.subscribe((value) => {
      this.onChange(value);
    });
  }

  ngOnInit() {

  }

  writeValue(value: any): void {
    this.form.setValue(value);
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
    this.form.updateValueAndValidity(); //to make its parrent run revalidatation.
  }

  handleTouch() {
    this.onTouched();
  }

  getFormData() {
    return this.form.value;
  }

  getFormStatus() {
    return this.form.status;
  }
}
