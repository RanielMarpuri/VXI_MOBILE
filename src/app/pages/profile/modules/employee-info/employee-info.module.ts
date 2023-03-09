import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EmployeeInfoPageRoutingModule } from './employee-info-routing.module';

import { EmployeeInfoPage } from './employee-info.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EmployeeInfoPageRoutingModule
  ],
  exports: [EmployeeInfoPage],
  declarations: [EmployeeInfoPage]
})
export class EmployeeInfoPageModule {}
