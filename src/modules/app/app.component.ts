import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Address } from '../forms/address-form/address.model';
import { values } from 'lodash-es';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  fg: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(){
    this.fg = this.formBuilder.group({
      address: new Address(),
      name: ''
    })

    this.fg.valueChanges.subscribe((value) => {
      console.log(this.fg);
    })
  }

  formToString() {
    console.log(this.fg.getRawValue());
  }

  getControls(){
    return values(this.fg.controls);
  }

  toggleForm() {
    this.fg.enabled ? this.fg.disable() : this.fg.enable();
    console.log(`fg enabled: ${this.fg.enabled}`);
  }
}
