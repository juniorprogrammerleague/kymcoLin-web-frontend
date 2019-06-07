import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { ColumnDef } from './column-def';
import { HttpClient } from '@angular/common/http';
import { MatSort } from '@angular/material';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';


@Component({
  selector: 'app-mat-table',
  templateUrl: './mat-table.component.html',
  styleUrls: ['./mat-table.component.scss']
})
export class MatTableComponent implements OnInit {
  @ViewChild(MatPaginator/*, { static: true }*/) paginator: MatPaginator;
  @ViewChild(MatSort/*, { static: true }*/) sort: MatSort;
  @Input() options: any;
  columns: any;
  dataSource: any;
  displayedColumns: string[];

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.initOption();
  }

  initOption() {
    switch (this.options.type) {
      case 'POST':
        this.http
          .post(this.options.url, this.options.searchBody)
          .subscribe(res => this.dataSource = res);
        break;
      case 'GET':
        this.http
          .get(this.options.url)
          .subscribe(res => this.dataSource = res);
        break;
      default:
        break;
    }

    this.columns = this.options.columns;
    this.displayedColumns = this.columns.map(x => x.columnDef);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }


}
