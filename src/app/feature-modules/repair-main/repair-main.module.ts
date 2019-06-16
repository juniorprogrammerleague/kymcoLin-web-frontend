import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';

import { RepairMainRoutingModule } from './repair-main-routing.module';
import { RepairManagementComponent } from './repair-management/repair-management.component';
import { MatTabsModule, MatTableModule, MatButtonModule } from '@angular/material';
import { ScooterDetailComponent } from './scooter-detail/scooter-detail.component';
import { RepairRecordComponent } from './repair-record/repair-record.component';
import { RepairDetailComponent } from './repair-detail/repair-detail.component';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from 'src/app/shared/shared.module';
import { RepairSearchComponent } from './repair-search/repair-search.component';

@NgModule({
  declarations: [
    RepairManagementComponent,
    ScooterDetailComponent,
    RepairRecordComponent,
    RepairDetailComponent,
    RepairSearchComponent
  ],
  imports: [
    CommonModule,
    RepairMainRoutingModule,
    HttpClientModule,
    SharedModule,
    MatButtonModule,
  ],
  providers: [DatePipe]
})
export class RepairMainModule { }
