import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RepairManagementService {
  private repairUrl = 'api/Repair';

  /** 暫存車牌號碼 */
  private licenseNo: string = '';
  get licensePlateNo() {
    return this.licenseNo;
  }
  set licensePlateNo(value: string) {
    this.licenseNo = value;
  }

  constructor(private http: HttpClient) { }


}
