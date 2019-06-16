import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-repair-item-dialog',
  templateUrl: './repair-item-dialog.component.html',
  styleUrls: ['./repair-item-dialog.component.scss']
})
export class RepairItemDialogComponent implements OnInit {
  categories = [{ name: '油品', url: '#' }, { name: '輪胎', url: '#' }];


  constructor(public dialogRef: MatDialogRef<RepairItemDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
  }

}
