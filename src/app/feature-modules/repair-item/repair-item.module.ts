import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RepairItemRoutingModule } from './repair-item-routing.module';
import { RepairItemMainComponent } from './repair-item-main/repair-item-main.component';
import { RepairItemTypeComponent } from './repair-item-type/repair-item-type.component';
import { MatDialogModule, MatToolbarModule, MatButtonToggleModule } from '@angular/material';
import { RepairItemListComponent } from './repair-item-list/repair-item-list.component';


@NgModule({
  declarations: [RepairItemMainComponent, RepairItemTypeComponent, RepairItemListComponent],
  imports: [
    CommonModule,
    RepairItemRoutingModule,
    MatDialogModule,
    MatToolbarModule,
    MatButtonToggleModule
  ]
})
export class RepairItemModule { }
