import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { MatTableComponent } from './ui/mat-table/mat-table.component';
import { MatTableModule, MatPaginatorModule, MatSortModule } from '@angular/material';
import { CdkTableModule } from '@angular/cdk/table';

@NgModule({
  declarations: [
    MatTableComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    CdkTableModule,
  ],
  exports: [
    MatTableComponent,
    MatTableModule,
  ]
})
export class SharedModule { }
