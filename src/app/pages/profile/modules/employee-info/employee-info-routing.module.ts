import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EmployeeInfoPage } from './employee-info.page';

const routes: Routes = [
  {
    path: '',
    component: EmployeeInfoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EmployeeInfoPageRoutingModule {}
