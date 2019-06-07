import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RepairItemMainComponent } from './repair-item-main/repair-item-main.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'repair-item-main'
  },
  {
    // 維修項目主頁
    path: 'repair-item-main',
    component: RepairItemMainComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RepairItemRoutingModule { }
