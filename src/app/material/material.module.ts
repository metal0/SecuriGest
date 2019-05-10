import { NgModule } from '@angular/core';
import {MatDatepickerModule, 
        MatNativeDateModule,
        MatFormFieldModule,
        MatCardModule
                             } from '@angular/material';

import { ReactiveFormsModule,
         FormsModule } from '@angular/forms';
@NgModule({
  imports: [
    MatDatepickerModule, 
    MatNativeDateModule,
    MatCardModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    FormsModule
  ],
  exports: [
    MatDatepickerModule, 
    MatNativeDateModule,
    MatCardModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    FormsModule
  ]
})
export class MaterialModule { }
