import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatGridListModule,
  MatCardModule,
  MatIconModule,
  MatDialogModule,
  MatButtonModule
} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MatGridListModule,
    MatCardModule,
    MatIconModule,
    MatDialogModule,
    MatButtonModule
  ],
  exports: [
    MatGridListModule,
    MatCardModule,
    MatIconModule,
    MatDialogModule,
    MatButtonModule
  ],
  declarations: []
})
export class MyAngularMaterialModule {}
