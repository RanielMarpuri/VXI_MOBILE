import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  @Input() user_profile: any;

  profileModule: any
  constructor( private alertController: AlertController) { }

  modules_list = [
    {name: 'Employee Information', module: 'emp_info', notif_count: 0},
    {name: 'Attendance', module: 'scheduler', notif_count: 0},
    {name: 'Credit Look Up', module: 'credit_look_up', notif_count: 0},
    {name: 'Policies', module: 'policies', notif_count: 3},
    {name: 'Payroll', module: 'payroll', notif_count: 0},
  ]
  list: any
  ngOnInit() {
    this.profileModule = ''
    //this.alertCreate('','',JSON.stringify(this.user_profile),'OK')
    this.list = true
  }
  async alertCreate(h: any, sh: any, m: any, b: any) {
    let alert = await this.alertController.create({
      header: h,
      subHeader: sh,
      message: m,
      buttons: [b],
    });
    await alert.present();
  }
  changeModule(mod: any) {
    this.profileModule = mod;
  }

  updateProfile(userData: any){
    this.user_profile = userData;
  }

  defaultAlert() {
    this.alertCreate('Notice', 'Please be advised.', 'This feature is under construction.', 'OK');
  }

  toggleList(){
    this.list = !this.list
  }
}
