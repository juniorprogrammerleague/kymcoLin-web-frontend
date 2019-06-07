import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-repair-management',
  templateUrl: './repair-management.component.html',
  styleUrls: ['./repair-management.component.scss']
})
export class RepairManagementComponent implements OnInit {
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
  constructor() { }

  ngOnInit() {
  }

}
