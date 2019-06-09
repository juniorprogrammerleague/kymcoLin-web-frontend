import { Component, OnInit } from '@angular/core';
import { RepairManagementService } from '../repair-management.service';
import { ColumnDef } from 'src/app/shared/ui/mat-table/column-def';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-repair-record',
  templateUrl: './repair-record.component.html',
  styleUrls: ['./repair-record.component.scss']
})
export class RepairRecordComponent implements OnInit {

  constructor(
    private service: RepairManagementService,
    private datePipe: DatePipe) { }

  ngOnInit() { }

  getOptions() {
    return {
      type: 'POST',
      url: `api/Repair/GetByLicensePlateNo`,
      searchBody: { licensePlateNo: this.service.licenseNo },
      columns: [
        { columnDef: 'repairDate', header: '維修日期', cell: (element: any) => this.datePipe.transform(element.repairDate, 'yyyy/MM/dd  HH:mm') },
        { columnDef: 'mile', header: '里程數', cell: (element: any) => element.mile },
        { columnDef: 'totalPrice', header: '總金額', cell: (element: any) => element.totalPrice },
        { columnDef: 'discountPrice', header: '折扣金額', cell: (element: any) => element.discountPrice },
        { columnDef: 'inputName', header: '維修人員', cell: (element: any) => element.inputName },
      ]
    };
  }
}
