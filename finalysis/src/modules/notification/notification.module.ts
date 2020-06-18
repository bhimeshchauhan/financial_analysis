import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { NotificationComponent } from './components/notification.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    NotificationComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [NotificationComponent]
})
export class NotificationModule { 
  showFiller = false;
}
