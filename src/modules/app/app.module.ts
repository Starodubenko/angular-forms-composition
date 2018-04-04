import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule } from '../forms/forms.module';
import { ReactiveFormsModule } from '@angular/forms';

import { AddressFormComponent } from '../forms/address-form/address-form.component';
import { UserFormComponent } from '../forms/user-form/user-form.component';
import { PetFormComponent } from '../forms/pet-form/pet-form.component';
import { PetsListFormComponent } from '../forms/pets-list-form/pets-list-form.component';


@NgModule({
  declarations: [
    AppComponent,
    UserFormComponent
    AddressFormComponent,
    PetFormComponent,
    PetsListFormComponent,
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
