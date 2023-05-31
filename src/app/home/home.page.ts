import { Component, OnInit } from '@angular/core';
import { AlertController, MenuController } from '@ionic/angular';
import { Preferences } from '@capacitor/preferences';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  theme: any
  user_profile: any
  sub_theme: any;
  constructor(private menu: MenuController, private alertController: AlertController) { }
  
  async ngOnInit() {
 
    await Preferences.remove({ key: 'clean_style' })
    let Init: any = await Preferences.get({ key: 'user_profile' })
    this.user_profile = JSON.parse(Init.value)

    // if (!this.user_profile) {
    //   window.location.href = "/login";
    // }
    // this.alertCreate('', '', JSON.stringify(this.user_profile), 'OK')
    this.theme = ''
    console.log(this.user_profile);

  }
  changeTheme(layout: any) {
    this.theme = layout
    this.menuClose()
    this.addSubTheme('')
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
  menuClose() {
    this.menu.close();
  }

  async logOut() {
    await Preferences.remove({ key: 'user_profile' })
    window.location.href = "/login"
  }

  addSubTheme(sub_theme: any){
    this.sub_theme = sub_theme
  }

}
