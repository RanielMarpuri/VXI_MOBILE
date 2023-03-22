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

  ngOnInit() {
    this.profileModule = ''
    //this.alertCreate('','',JSON.stringify(this.user_profile),'OK')
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
}
