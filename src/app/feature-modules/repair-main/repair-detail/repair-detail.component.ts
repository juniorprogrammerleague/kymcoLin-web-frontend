import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { RepairItemDialogComponent } from '../repair-item-dialog/repair-item-dialog.component';
import { RepairManagementService } from '../repair-management.service';
import { RepairDetailService } from './repair-detail.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-repair-detail',
  templateUrl: './repair-detail.component.html',
  styleUrls: ['./repair-detail.component.scss']
})
export class RepairDetailComponent implements OnInit {
  form: FormGroup;
  emptyForm = {
    licensePlateNo: '',
    repairDate: new Date(),
    date: [{ value: this.datePipe.transform(new Date(), 'yyyy/MM/dd'), disabled: true }],
    time: [{ value: this.datePipe.transform(new Date(), 'HH:mm'), disabled: true }],
    inputName: [{ value: 'lesley', disabled: true }],
    lastMile: [{ value: '', disabled: true }],
    mile: ['', { updateOn: 'blur' }],
    drivenMile: [{ value: '', disabled: true }],
    repairMemo: ''
  };

  constructor(
    private fb: FormBuilder,
    private datePipe: DatePipe,
    private service: RepairDetailService,
    private itemDialog: MatDialog) {
    this.initForm();
  }

  ngOnInit() {
    this.loadData();
  }
  ngOnDestroy(): void {
    this.service.saveCache(this.form.getRawValue());
  }

  initForm() {

    this.form = this.fb.group(this.emptyForm);

    /** init associations */
    this.form.controls['mile'].valueChanges
      .subscribe(val => {
        let lastMile = +this.form.getRawValue()['lastMile'];
        this.form.controls['drivenMile'].setValue(+val - lastMile);
      });
  }

  loadData() {
    this.service.getRepairDetail().subscribe(res => {
      this.form.patchValue(res);
    });
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
