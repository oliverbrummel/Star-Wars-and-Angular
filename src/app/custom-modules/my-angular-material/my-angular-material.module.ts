import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatGridListModule, MatCardModule, MatIconModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MatGridListModule,
    MatCardModule,
    MatIconModule
  ],
  exports: [
    MatGridListModule,
    MatCardModule,
    MatIconModule
  ],
  declarations: []
})
export class MyAngularMaterialModule { }
