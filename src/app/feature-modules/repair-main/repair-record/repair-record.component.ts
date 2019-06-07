import { Component, OnInit } from '@angular/core';
import { RepairManagementService } from '../repair-management.service';
import { ColumnDef } from 'src/app/shared/ui/mat-table/column-def';

@Component({
  selector: 'app-repair-record',
  templateUrl: './repair-record.component.html',
  styleUrls: ['./repair-record.component.scss']
})
export class RepairRecordComponent implements OnInit {
  record$: any;
  displayedColumns: [];

  constructor(private service: RepairManagementService) { }

  ngOnInit() {
    // this.service.getRepairRecord().subscribe(res => { this.record$ = res; });
  }

  getOptions() {
    return {
      type: 'POST',
      url: `api/Repair/GetByLicensePlateNo`,
      searchBody: { licensePlateNo: 'HU7-683' },
      columns: [
        { columnDef: 'repairDate', header: '維修日期', cell: (element: any) => `${element.repairDate}` },
        { columnDef: 'mile', header: '里程數', cell: (element: any) => `${element.mile}` },
        { columnDef: 'totalPrice', header: '總金額', cell: (element: any) => `${element.totalPrice}` },
        { columnDef: 'discountPrice', header: '折扣金額', cell: (element: any) => `${element.discountPrice}` },
        { columnDef: 'inputName', header: '維修人員', cell: (element: any) => `${element.inputName}` },
      ]
    };
  }
}
