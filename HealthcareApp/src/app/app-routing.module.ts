import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { generate } from 'rxjs';
import { GenerateStaffListComponent } from './generate-staff-list/generate-staff-list.component';

export const routes: Routes = [
  { path: 'config', component: GenerateStaffListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
