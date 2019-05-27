import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RepairRecordRoutingModule } from './repair-record-routing.module';
import { RepairRecordComponent } from './repair-record/repair-record.component';

@NgModule({
  declarations: [RepairRecordComponent],
  imports: [
    CommonModule,
    RepairRecordRoutingModule
  ]
})
export class RepairRecordModule { }
