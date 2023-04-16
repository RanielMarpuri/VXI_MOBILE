import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
// import { Storage } from '@ionic/storage-angular';
import { Preferences } from '@capacitor/preferences';
// import { lastValueFrom } from 'rxjs';

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
  keep: any;
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

      window.location.href = '/home'
    }
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

    header.append('Accept', 'application/json');
    header.append('Access-Control-Allow-Headers', 'content-type');
    header.append('Access-Control-Allow-Methods', 'OPTIONS, POST, GET');
    header.append('Access-Control-Allow-Origin', '*');

    const options: any = {
      headers: header,
    };

    this.loading = true;

    //  let url = 'https://vxione.com/ems_api/API/ManageNews/GetByHrid/' + this.hrid; //CLOUD API
    let url = 'https://localhost:44354/API/LogIn/GetByHrid/' + this.hrid; // LOCAL API

    this.http.get(url, options).subscribe({
      next: (data: any) => {
        this.user = data;
        this.user.PersonalEmail = 'rdnmarps03@gmail.com'
        // console.log(this.user, "this.user data");

        let hireDate: any;

        if (this.user != null) {
          let temp = this.user.HireDate
          hireDate = temp.replace('/', '');
          hireDate = hireDate.replace('/', '');
          // console.log(hireDate, "hireDate attempt");
          if (this.hire_date == hireDate) {
            let success: any = {
              text: 'OK',
              role: 'confirm',
              handler: async () => {
                this.setStorage()
                this.redirect()
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


  async setStorage() {
    await Preferences.set({
      key: 'temp_profile',
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
  }

  redirect() {
    if (this.user.PersonalEmail == 'null') {
      window.location.href = 'login/reg';
    } else {

      window.location.href = 'login/otp';
    }
  }

}
