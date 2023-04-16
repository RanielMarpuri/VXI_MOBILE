import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProfilePage } from './profile.page';

const routes: Routes = [
  {
    path: '',
    component: ProfilePage
  },
  {
    path: 'employee-info',
    loadChildren: () => import('./modules/employee-info/employee-info.module').then( m => m.EmployeeInfoPageModule)
  },  {
    path: 'scheduler',
    loadChildren: () => import('./modules/scheduler/scheduler.module').then( m => m.SchedulerPageModule)
  },
  {
    path: 'payroll',
    loadChildren: () => import('./modules/payroll/payroll.module').then( m => m.PayrollPageModule)
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfilePageRoutingModule {}
