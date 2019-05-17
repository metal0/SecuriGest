import { NgModule } from '@angular/core';
import {MatDatepickerModule, 
        MatNativeDateModule,
        MatFormFieldModule,
        MatCardModule,
        MatInputModule,
        MatSlideToggleModule
                             } from '@angular/material';


@NgModule({
  imports: [
    MatDatepickerModule, 
    MatNativeDateModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatSlideToggleModule
  ],
  exports: [
    MatDatepickerModule, 
    MatNativeDateModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatSlideToggleModule
  ]
})
export class MaterialModule { }
