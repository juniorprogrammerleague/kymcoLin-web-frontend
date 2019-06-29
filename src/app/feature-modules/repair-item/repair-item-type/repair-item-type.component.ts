import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-repair-item-type',
  templateUrl: './repair-item-type.component.html',
  styleUrls: ['./repair-item-type.component.scss']
})
export class RepairItemTypeComponent implements OnInit {
  categories = [
    { name: '油品', url: '#' }, 
    { name: '輪胎', url: '#' },
    { name: '引擎', url: '#' }, 
    { name: '電裝', url: '#' }, 
    { name: '煞車', url: '#' }, 
    { name: '車體', url: '#' }, 
    { name: '驅動系統', url: '#' }, 
    { name: '轉向系統', url: '#' }, 
    { name: '工資', url: '#' }, 
    { name: '其他', url: '#' }, 
    { name: '全部', url: '#' }];

  constructor() { }

  ngOnInit() {
  }

}
