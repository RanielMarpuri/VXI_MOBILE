import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProfilePageRoutingModule } from './profile-routing.module';

import { ProfilePage } from './profile.page';
import { EmployeeInfoPage } from './modules/employee-info/employee-info.page';
import { EmployeeInfoPageModule } from './modules/employee-info/employee-info.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProfilePageRoutingModule,
    EmployeeInfoPageModule
  ],
  exports: [ProfilePage],
  declarations: [ProfilePage]
})
export class ProfilePageModule {}
