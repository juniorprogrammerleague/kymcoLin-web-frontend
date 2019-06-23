import { Injectable, SimpleChanges } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RepairManagementService } from '../repair-management.service';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RepairDetailService {
  /** cache data */
  repairDetail$: Observable<any>;
  /** record for identified */
  lincenseNo$: string;
  constructor(private http: HttpClient,
    private managementService: RepairManagementService) { }

  getRepairDetail(): Observable<any> {
    if (!this.repairDetail$ || this.lincenseNo$ != this.managementService.licensePlateNo) {
      this.repairDetail$ = this.http.post<any>('api/Repair/GetRepairDetail',
        { licensePlateNo: this.managementService.licensePlateNo });
    }
    return this.repairDetail$;
  }
  saveCache(value: { [key: string]: any }) {
    this.repairDetail$ = of(value);
    this.lincenseNo$ = value['licensePlateNo'];
  }
}
