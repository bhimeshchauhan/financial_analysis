import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { TableComponent } from './components/table.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    TableComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [TableComponent]
})
export class TableModule { 
  showFiller = false;
}
