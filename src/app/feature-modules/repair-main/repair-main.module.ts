import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RepairMainRoutingModule } from './repair-main-routing.module';
import { RepairMainComponent } from './repair-main/repair-main.component';
import { RepairManagementComponent } from './repair-management/repair-management.component';
import { MatTabsModule, MatTableModule } from '@angular/material';
import { ScooterDetailComponent } from './scooter-detail/scooter-detail.component';
import { RepairRecordComponent } from './repair-record/repair-record.component';
import { RepairDetailComponent } from './repair-detail/repair-detail.component';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    RepairMainComponent,
    RepairManagementComponent,
    ScooterDetailComponent,
    RepairRecordComponent,
    RepairDetailComponent
  ],
  imports: [
    CommonModule,
    RepairMainRoutingModule,
    HttpClientModule,
    SharedModule,
    MatTabsModule,
  ]
})
export class RepairMainModule { }
