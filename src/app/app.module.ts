import { NgModule } from '@angular/core';

import { MatNativeDateModule } from '@angular/material/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { MatSliderModule } from '@angular/material/slider';
import {MatDatepickerModule} from '@angular/material/datepicker'; 
import {MatFormFieldModule} from '@angular/material/form-field'; 
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MAT_FORM_FIELD_DEFAULT_OPTIONS} from '@angular/material/form-field';


import { AppComponent } from './app.component';


@NgModule({
  imports:      [ BrowserModule, FormsModule, MatSliderModule, MatDatepickerModule, MatFormFieldModule, MatNativeDateModule, MatInputModule, BrowserAnimationsModule],
  declarations: [ AppComponent],
  bootstrap:    [ AppComponent ],
  providers: [
    {provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: {floatLabel: 'always'}}
  ]
  
})
export class AppModule { }


