import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { GraphComponent } from './components/graph.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    GraphComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [GraphComponent]
})
export class GraphModule { 
  showFiller = false;
}
