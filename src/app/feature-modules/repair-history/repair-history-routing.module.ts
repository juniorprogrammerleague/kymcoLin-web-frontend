import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RepairHistoryComponent } from './repair-history/repair-history.component';

const routes: Routes = [
  {
    path: '',
    component: RepairHistoryComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RepairHistoryRoutingModule { }
