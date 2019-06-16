import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RepairManagementComponent } from './repair-management/repair-management.component';
import { ScooterDetailComponent } from './scooter-detail/scooter-detail.component';
import { RepairDetailComponent } from './repair-detail/repair-detail.component';
import { RepairRecordComponent } from './repair-record/repair-record.component';
import { RepairSearchComponent } from './repair-search/repair-search.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'search',
    pathMatch: 'full'
  },
  {
    // 維修紀錄管理_搜尋頁
    path: 'search',
    component: RepairSearchComponent
  },
  {
    // 維修資料管理
    path: 'management',
    component: RepairManagementComponent,
    children: [
      {
        path: '',
        redirectTo: 'repair-detail'
      },
      {
        // 機車資料
        path: 'scooter-detail',
        component: ScooterDetailComponent
      },
      {
        // 維修資料
        path: 'repair-detail',
        component: RepairDetailComponent
      },
      {
        // 維修歷史紀錄
        path: 'repair-record',
        component: RepairRecordComponent
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RepairMainRoutingModule { }
