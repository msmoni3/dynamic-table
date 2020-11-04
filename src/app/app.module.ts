import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule , ReactiveFormsModule} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {  
  MatTabsModule,  
  MatTableModule,   
  MatPaginatorModule,  
  MatButtonModule,  
  MatIconModule,
  MatFormFieldModule,
  MatInputModule,
  MatSelectModule, 
  MatProgressSpinnerModule,
  MatCardModule
  } from '@angular/material';

// Reusable Component
import { CustDataTableComponent } from './resuseableComponent/data-table.component';

import { AppComponent } from './app.component';


@NgModule({
  imports:      [ 
    BrowserAnimationsModule,
    BrowserModule, 
    FormsModule,
    ReactiveFormsModule,
    MatTabsModule,  
    MatTableModule,   
    MatPaginatorModule,  
    MatButtonModule,  
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule , 
    MatProgressSpinnerModule,
    MatCardModule
    ],
  declarations: [ AppComponent, CustDataTableComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
