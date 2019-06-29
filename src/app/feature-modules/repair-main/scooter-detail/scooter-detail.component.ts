import { Component, OnInit } from '@angular/core';
import { RepairManagementService } from '../repair-management.service';

@Component({
  selector: 'app-scooter-detail',
  templateUrl: './scooter-detail.component.html',
  styleUrls: ['./scooter-detail.component.scss']
})
export class ScooterDetailComponent implements OnInit {

  constructor(private service: RepairManagementService) { }

  ngOnInit() {
  }

}
