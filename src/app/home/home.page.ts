import { Component, OnInit } from '@angular/core';
import { AlertController, MenuController } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  theme: any
  user_profile: any
  constructor(private menu: MenuController, private storage: Storage,  private alertController: AlertController) { }

  ngOnInit() {
    this.storage.create()
    this.storage.get('user_profile').then((user) => {
      // console.log(JSON.stringify(user));
      this.user_profile = user;
      this.alertCreate('Welcome!', '', 'Mr.' + this.user_profile.LastName, 'OK')
    });
   // this.alertCreate('', '', JSON.stringify(this.user_profile), 'OK')
    this.theme = ''
    console.log(this.user_profile);
    
  }
  changeTheme(layout: any) {
    this.theme = layout
    this.menuClose()
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

  logOut() {
    this.storage.remove('user_profile');
    window.location.href = "/login"
  }

}
