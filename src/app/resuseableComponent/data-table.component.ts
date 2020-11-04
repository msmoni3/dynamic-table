import { Component, ViewChild, Input, OnChanges, Output, EventEmitter, OnInit, DoCheck } from '@angular/core';
import { MatPaginator, MatTableDataSource, PageEvent } from '@angular/material';

@Component({
  selector: 'app-cust-data-table',
  templateUrl: 'data-table.component.html'
})
export class CustDataTableComponent implements OnChanges, OnInit {
  @Input() displayedColumns: string[];
  @Input() receivedData: any;
  @Input() tableTitle: string;
  @Input() columns: any[] = [];
  @Input() metaCount: number;

  @Output() clickedItem = new EventEmitter();
  @Output() pageEvent = new EventEmitter<PageEvent>();

  dataSource: MatTableDataSource<any>;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  pageIndex = 0;
  pageSize = 25;
  length;

  ngOnInit() {
 
  }

  ngOnChanges() {
    //     console.log("something")
    // console.log(this.receivedData)
    if (this.columns !== undefined || this.columns !== null) {
      // if (this.metaCount) {
      //   this.dataSource = new MatTableDataSource(this.receivedData);
      //   this.displayedColumns = this.columns.map(x => x.columnDef);

      //   this.length = this.metaCount;
      //   this.paginator.length = this.metaCount;

        // IMPORTANT! Do NOT use below if you are getting pagination from API Call. This is only for letting material figure out pagination
        // this.dataSource.paginator = this.paginator;
      // } else {
        this.dataSource = new MatTableDataSource(this.receivedData);

        this.displayedColumns = this.columns.map(x => x.columnDef);
        this.dataSource.paginator = this.paginator;

        this.dataSource.paginator.pageSize = this.pageSize;
        this.dataSource.paginator.pageIndex = this.pageIndex;

        this.dataSource.paginator.length = this.receivedData.length;
      // }
    }
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  updateProductsTable(event: PageEvent) {
    this.pageSize = event.pageSize;
    this.pageIndex = event.pageIndex + 1; // API starts 1, Mat-Table starts at 0

    this.pageEvent.emit(event);
  }

  viewItem(guid) {
    this.clickedItem.emit(guid);
  }
}
