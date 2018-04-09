import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule } from '../forms/forms.module';
import { ReactiveFormsModule } from '@angular/forms';

import { AddressFormComponent } from '../forms/address-form/address-form.component';
import { UserFormComponent } from '../forms/user-form/user-form.component';
import { PetFormComponent } from '../forms/pet-form/pet-form.component';


@NgModule({
  declarations: [
    AppComponent,
    UserFormComponent,
    AddressFormComponent,
    PetFormComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
