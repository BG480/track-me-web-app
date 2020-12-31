import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadingSpinnerComponent } from './components/loading-spinner/loading-spinner.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { MustMatch } from './validators/must-match';



@NgModule({
  declarations: [LoadingSpinnerComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    LoadingSpinnerComponent
  ]
})
export class SharedModule { }
