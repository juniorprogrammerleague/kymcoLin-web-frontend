import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RepairHistoryComponent } from './repair-history/repair-history.component';
import { RepairHistoryRoutingModule } from './repair-history-routing.module';

@NgModule({
  declarations: [RepairHistoryComponent],
  imports: [
    CommonModule,
    RepairHistoryRoutingModule
  ]
})
export class RepairHistoryModule { }
