import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainLayoutComponent } from './shared/layouts/layouts/main-layout/main-layout.component';
import { LoginComponent } from './feature-modules/login/login.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      {
        // 首頁
        path: 'home',
        loadChildren: './feature-modules/home/home.module#HomeModule'
      },
      {
        // 維修紀錄管理
        path: 'repair-main',
        loadChildren: './feature-modules/repair-main/repair-main.module#RepairMainModule'
      },
      {
        // 維修月結查詢
        path: 'repair-history',
        loadChildren: './feature-modules/repair-history/repair-history.module#RepairHistoryModule'
      },
      {
        // 維修項目設定
        path: 'repair-item',
        loadChildren: './feature-modules/repair-item/repair-item.module#RepairItemModule'
      }
    ]
  },
  {
    path: 'login',
    component: LoginComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
