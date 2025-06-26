import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ViewSchedulerComponent } from './components/view-scheduler/view-scheduler.component';
import { AttendanceComponent } from './components/attendance/attendance.component';

const routes: Routes = [
  {
    path: "viewscheduler", component: ViewSchedulerComponent
  },
  {
    path: "attendance", component: AttendanceComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
