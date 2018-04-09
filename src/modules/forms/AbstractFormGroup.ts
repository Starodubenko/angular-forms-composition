import {AbstractControl, FormGroup, Validator} from '@angular/forms';
import {isEmpty, keys, omitBy, reduce} from 'lodash-es';
import {AbstractFormComponent} from './AbstractForm';

export class AbstractFormGroupComponent<E> extends AbstractFormComponent<FormGroup, E> implements Validator {

  constructor(formFields) {
    super(FormGroup, formFields);
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
