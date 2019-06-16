import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';

import { RepairMainRoutingModule } from './repair-main-routing.module';
import { RepairManagementComponent } from './repair-management/repair-management.component';
import { MatDialogModule, MatToolbarModule, MatAutocompleteModule } from '@angular/material';
import { ScooterDetailComponent } from './scooter-detail/scooter-detail.component';
import { RepairRecordComponent } from './repair-record/repair-record.component';
import { RepairDetailComponent } from './repair-detail/repair-detail.component';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from 'src/app/shared/shared.module';
import { RepairSearchComponent } from './repair-search/repair-search.component';
import { RepairItemDialogComponent } from './repair-item-dialog/repair-item-dialog.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    RepairManagementComponent,
    ScooterDetailComponent,
    RepairRecordComponent,
    RepairDetailComponent,
    RepairSearchComponent,
    RepairItemDialogComponent
  ],
  imports: [
    CommonModule,
    RepairMainRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    SharedModule,
    MatDialogModule,
    MatToolbarModule,
    MatAutocompleteModule
  ],
  providers: [DatePipe],
  entryComponents: [RepairItemDialogComponent]
})
export class RepairMainModule { }
