import { Component, OnInit } from "@angular/core";

import { FormGroup, FormControl, Validators } from "@angular/forms";

import { data } from "./data";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html"
})
export class AppComponent implements OnInit {
  // varible declaration
  productSearchForm: FormGroup;
  showProgress = false;
  showTableResults = false;

  results = data;
  allResults = data;

  fakeData1;
  fakeData;

  columns1: any[] = [
    {
      columnDef: "productName1",
      header: "Product Name1",
      dataName: row => `${row.name}`
    },
    {
      columnDef: "productDescription1",
      header: "Description1",
      dataName: row => `${row.description}`
    },
    {
      columnDef: "detailBtn",
      header: "View/Edit",
      dataName: row => `${row.guid}`
    }
  ];
  
  columns: any[] = [
    {
      columnDef: "productName",
      header: "Product Name",
      dataName: row => `${row.name}`
    },
    {
      columnDef: "productDescription",
      header: "Description",
      dataName: row => `${row.description}`
    },
    {
      columnDef: "detailBtn",
      header: "View/Edit",
      dataName: row => `${row.guid}`
    }
  ];
  pageIndex = 1;
  pageSize = 25;
  metaCount: number;

  constructor() {
    this.fakeData1 = data;
    this.fakeData = data;
  }

  ngOnInit() {
    this.productSearchForm = new FormGroup({
      productSearchBox: new FormControl("", {
        validators: [Validators.required]
      })
    });
  }
  onSubmit() {
    this.getProductsSearched(this.productSearchForm.value.productSearchBox);
  }

  getProductsSearched(searchTerm) {
    this.allResults = this.fakeData1;
    this.allResults = this.fakeData;
  }

  getAllProducts(pageIndex: number, pageSize: number) {
    this.allResults = this.fakeData1;
    this.allResults = this.fakeData;
    this.metaCount = this.results.length;
  }

  tabClick(tab) {
    if ((tab.index = 1)) {
      this.getAllProducts(this.pageIndex, this.pageSize);
    }
  }

  updatePagination(event) {
    const correctedIndex = event.pageIndex + 1;
    this.getAllProducts(correctedIndex, event.pageSize);
  }

  viewItem(guid) {
    console.log(guid);
  }
}
