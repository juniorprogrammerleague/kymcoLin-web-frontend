import { Component, OnInit, ViewChild } from '@angular/core';
import { RepairManagementService } from '../repair-management.service';
import { RouterOutlet, Router } from '@angular/router';

@Component({
  selector: 'app-repair-management',
  templateUrl: './repair-management.component.html',
  styleUrls: ['./repair-management.component.scss']
})
export class RepairManagementComponent implements OnInit {
  @ViewChild(RouterOutlet) routerOutlet: RouterOutlet;
  navLinks = [
    {
      path: 'scooter-detail',
      label: '機車資料'
    },
    {
      path: 'repair-detail',
      label: '維修資料'
    },
    {
      path: 'repair-record',
      label: '維修歷史紀錄'
    }]
  constructor(private router: Router,
    public service: RepairManagementService) { }

  ngOnInit() { }
  refresh() {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.router.onSameUrlNavigation = 'reload';
    this.router.navigate([this.router.url]);
  }
}
