import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { RepairItemDialogComponent } from '../repair-item-dialog/repair-item-dialog.component';

@Component({
  selector: 'app-repair-detail',
  templateUrl: './repair-detail.component.html',
  styleUrls: ['./repair-detail.component.scss']
})
export class RepairDetailComponent implements OnInit {

  constructor(private itemDialog: MatDialog) { }

  ngOnInit() {
  }

  addRepairDetail() {
    const dialogRef = this.itemDialog.open(RepairItemDialogComponent, {
      panelClass: 'repair-item-dialog',
      data: ''
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
    });
  }
}
