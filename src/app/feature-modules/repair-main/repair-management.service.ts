import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RepairManagementService {
  private repairUrl = 'api/Repair';

  /** 暫存車牌號碼 */
  private _licenseNo: string = 'HU7-683';
  get licenseNo() {
    return this._licenseNo;
  }
  set licenseNo(value: string) {
    this._licenseNo = value;
  }

  constructor(private http: HttpClient) { }


}
