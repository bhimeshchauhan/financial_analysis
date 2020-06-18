import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AnalysisComponent } from './components/analysis.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AnalysisComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AnalysisComponent]
})
export class AnalysisModule { 
  showFiller = false;
}
