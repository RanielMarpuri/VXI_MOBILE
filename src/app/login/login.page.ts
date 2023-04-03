import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
// import { Storage } from '@ionic/storage-angular';
import { Preferences } from '@capacitor/preferences';

import { lastValueFrom } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private http: HttpClient, private alertController: AlertController) { }
  hrid: any;
  check: any;
  remember: any;
  hire_date: any;
  user: any;
  loading: any;
  async ngOnInit() {
    console.log("initiating app login");
    let Init: any = await Preferences.get({ key: 'user_profile' })
    let hridInit: any = await Preferences.get({ key: 'hrid' })

    this.hrid = hridInit.value;
    this.check = hridInit.value;
    if (Init.value) {
      // this.user_profile = JSON.parse(Init.value)
      window.location.href = '/home'
    }


    // this.storage.create();
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


  async fetchUser(mode: any) {
    const header = new HttpHeaders()
    // .set('Content-Type', 'application/json')
    // header.delete('Accept')
    header.append('Accept', 'application/json');
    header.append('Access-Control-Allow-Headers', 'content-type');
    header.append('Access-Control-Allow-Methods', 'OPTIONS, POST, GET');
    header.append('Access-Control-Allow-Origin', '*');


    const options: any = {
      headers: header,
    };
    // this.alertCreate('ERROR', 'Cant Connect to Server', '500', 'Cancel');
    this.loading = true;

    //let extensionURL = 'https://cors-anywhere.herokuapp.com/';
    let url = 'https://vxione.com/ems_api/API/ManageNews/GetByHrid/' + this.hrid;
    // let url = 'https://vxivdcintweb01.vxi.com.ph/services/test/pexsvc/Employees/' + this.hrid;


    this.http.get(url, options).subscribe({
      next: (data: any) => {
        this.user = data;

        console.log(this.user, "this.user data");

        let hireDate: any;

        if (this.user != null) {
          // let temp = this.user.hireDate.value
          // let tempSplit = temp.split('-');
          // hireDate = tempSplit[1] + tempSplit[2] + tempSplit[0];

          let temp = this.user.HireDate
          hireDate = temp.replace('/', '');
          hireDate = hireDate.replace('/', '');

          console.log(hireDate, "hireDate attempt");

          if (this.hire_date == hireDate) {
            let success: any = {
              text: 'OK',
              role: 'confirm',
              handler: async () => {
                // this.storage.set('user_profile', data);
                await Preferences.set({
                  key: 'user_profile',
                  value: JSON.stringify(this.user),
                });

                if (this.remember) {
                  await Preferences.set({
                    key: 'hrid',
                    value: this.hrid,
                  });
                } else {
                  await Preferences.remove({ key: 'hrid' })
                }
                window.location.href = '/home';
              }
            };
            this.alertCreate('Login Success!', '', 'Welcome.', success);
          } else {
            this.alertCreate('Login Failed!!', 'No Match...', 'Try again.', 'OK');
          }
        } else {
          this.alertCreate('Login Failed!!', 'ERROR UNKNOWN', 'Try again.', 'OK');
        }
        this.loading = false;
      },
      error: err => {
        console.log(err);
        this.alertCreate('ERROR', 'Cant Connect to Server', JSON.stringify(err), 'Cancel');
        this.loading = false;
      },
    })
  }

  redirect() {
    window.location.href = "https://cors-anywhere.herokuapp.com/https://innovation.vxione.com/itech-api/api/v1/employees/GetByWidOrHrid/"
    // window.location.href = "/login"
  }
}
