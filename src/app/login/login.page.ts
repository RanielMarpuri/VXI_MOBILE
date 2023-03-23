import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
// import { Storage } from '@ionic/storage-angular';
import { Preferences } from '@capacitor/preferences';
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

  fetchUser(mode: any) {


    // this.alertCreate('ERROR', 'Cant Connect to Server', '500', 'Cancel');
    this.loading = true;
    const headers = new HttpHeaders({
      'Access-Control-Allow-Origin': 'http://localhost:8100, capacitor://localhost, http://localhost',
      'Access-Control-Allow-Methods': 'GET, POST',
      'Access-Control-Allow-Headers': 'X-Requested-With'
    });

    const options: any = {
      headers: headers,
    };
    let extensionURL = 'https://cors-anywhere.herokuapp.com/';
    let url = 'https://innovation.vxione.com/itech-api/api/v1/employees/GetByWidOrHrid/' + this.hrid + '/VXIPHP';
    let finalURL = '';

    if (mode == 1) {
      finalURL = extensionURL + url;
    } else if (mode == 0) {
      finalURL = url
    }

    this.http.get(finalURL, options).subscribe({
      next: (data: any) => {
        this.user = data;
        let hireDate: any;

        if (this.user != null) {
          hireDate = String(data.HireDate).replace('/', '')
          hireDate = String(hireDate).replace('/', '')

          if (this.hire_date == hireDate) {
            let success: any = {
              text: 'OK',
              role: 'confirm',
              handler: async () => {
                // this.storage.set('user_profile', data);
                await Preferences.set({
                  key: 'user_profile',
                  value: JSON.stringify(data),
                });

                if (this.remember) {
                  await Preferences.set({
                    key: 'hrid',
                    value: this.hrid,
                  });
                }else {
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
          this.alertCreate('Login Failed!!', 'No Match...', 'Try again.', 'OK');
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
