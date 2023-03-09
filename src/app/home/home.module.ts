import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { NewsPageModule } from '../pages/news/news.module';
import { ProfilePageModule } from '../pages/profile/profile.module';
import { EmployeeInfoPage } from '../pages/profile/modules/employee-info/employee-info.page';

// import SwiperModule from 'swiper/angular';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    NewsPageModule,
    ProfilePageModule,
    // EmployeeInfoPage
    // SwiperModule
  ],
  declarations: [HomePage]
})
export class HomePageModule { }
