import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RepairItemRoutingModule } from './repair-item-routing.module';
import { RepairItemMainComponent } from './repair-item-main/repair-item-main.component';


@NgModule({
  declarations: [RepairItemMainComponent],
  imports: [
    CommonModule,
    RepairItemRoutingModule
  ]
})
export class RepairItemModule { }
