import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RepairRecordComponent } from './repair-record/repair-record.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'repair-record'
  },
  {
    path: 'repair-record',
    component: RepairRecordComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RepairRecordRoutingModule { }
