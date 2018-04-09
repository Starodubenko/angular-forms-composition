import {AbstractControl, FormArray, Validator} from '@angular/forms';
import {isEmpty, keys, omitBy, reduce} from 'lodash-es';
import {AbstractFormComponent} from './AbstractForm';

export class AbstractFormArrayComponent<E> extends AbstractFormComponent<FormArray, E> implements Validator {

  constructor(formFields) {
    super(FormArray, formFields);
  }

  validate(c: AbstractControl): { [key: string]: any } {
    return reduce(
      keys(this.form.controls),
      (acc, fieldName) => {
        if (this.form.get(fieldName).errors) {
          acc[fieldName] = this.form.get(fieldName).errors;
        }
        return acc;
      },
      {}
    );
  }
}
