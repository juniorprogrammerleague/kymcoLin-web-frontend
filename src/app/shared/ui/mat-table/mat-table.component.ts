import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { ColumnDef } from './column-def';
import { HttpClient } from '@angular/common/http';
import { MatSort } from '@angular/material';
import { MatPaginator, PageEvent, MatPaginatorIntl } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';


@Component({
  selector: 'app-mat-table',
  templateUrl: './mat-table.component.html',
  styleUrls: ['./mat-table.component.scss']
})
export class MatTableComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @Input() options: any;

  dataSource = new MatTableDataSource<any>();
  columns: any;
  displayedColumns: string[];
  totalCount: number;
  requestByPage: (page: PageEvent) => void;

  constructor(private http: HttpClient,
    private matPaginatorIntl: MatPaginatorIntl) { }

  ngOnInit() {
    this.initOption();
    this.initMatPaginator();


  }

  initMatPaginator() {

    // register pageEvent
    this.paginator.page.subscribe((page: PageEvent) => {
      this.requestByPage(page);
    });

    // set paginator text 
    this.matPaginatorIntl.getRangeLabel = (page: number, pageSize: number, length: number): string => {
      if (length === 0 || pageSize === 0) {
        return `第 0 筆、共 ${length} 筆`;
      }

      length = Math.max(length, 0);
      const startIndex = page * pageSize;
      const endIndex = startIndex < length ? Math.min(startIndex + pageSize, length) : startIndex + pageSize;

      return `第 ${startIndex + 1} - ${endIndex} 筆、共 ${length} 筆`;
    }

    this.matPaginatorIntl.itemsPerPageLabel = '每頁筆數：';
    this.matPaginatorIntl.nextPageLabel = '下一頁';
    this.matPaginatorIntl.previousPageLabel = '上一頁';
  }

  initOption() {
    switch (this.options.type) {
      case 'POST':
        this.requestByPage = (page: PageEvent) => {
          this.options.searchBody.pageIndex = page.pageIndex;
          this.options.searchBody.pageSize = page.pageSize;
          this.httpPost();
        }
        this.options.searchBody.pageIndex = 0;
        this.options.searchBody.pageSize = 5;
        this.httpPost();
        break;
      case 'GET':
      default:
        this.http
          .get<any>(this.options.url)
          .subscribe(res => this.dataSource.data = res.result);
        break;
    }

    this.columns = this.options.columns;
    this.displayedColumns = this.columns.map(x => x.columnDef);
  }

  httpPost() {
    this.http
      .post<any>(this.options.url,
        this.options.searchBody)
      .subscribe(res => {
        this.dataSource.data = res.result;
        this.paginator.length = res.totalCount;
      });
  }

  loadData(pageIndex, pageSize) {

  }



}
