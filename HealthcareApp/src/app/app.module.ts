import { NgModule, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CalendarModule, MOMENT } from 'angular-calendar';
import { SchedulerModule } from 'angular-calendar-scheduler';
import moment from 'moment';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CalendarModule.forRoot(),
    SchedulerModule.forRoot({ locale: 'en', headerDateFormat: 'daysRange' })
  ],
  providers: [
        { provide: LOCALE_ID, useValue: 'en-US' },
        { provide: MOMENT, useValue: moment }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
