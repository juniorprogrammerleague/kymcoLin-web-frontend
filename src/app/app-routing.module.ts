import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainLayoutComponent } from './shared/layouts/layouts/main-layout/main-layout.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'repair-record',
    pathMatch: 'full'
  },
  {
    path: 'repair-record',
    component: MainLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: './feature-modules/repair-record/repair-record.module#RepairRecordModule'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
