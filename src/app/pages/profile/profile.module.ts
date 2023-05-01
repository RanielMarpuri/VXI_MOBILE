import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProfilePageRoutingModule } from './profile-routing.module';

import { ProfilePage } from './profile.page';
import { EmployeeInfoPageModule } from './modules/employee-info/employee-info.module';
import { SchedulerPageModule } from './modules/scheduler/scheduler.module';
import { PayrollPageModule } from './modules/payroll/payroll.module';
import { MessagesPageModule } from './modules/messages/messages.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProfilePageRoutingModule,
    EmployeeInfoPageModule,
    SchedulerPageModule,
    PayrollPageModule,
    MessagesPageModule
  ],
  exports: [ProfilePage],
  declarations: [ProfilePage]
})
export class ProfilePageModule {}
