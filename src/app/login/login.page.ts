import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private http: HttpClient, private alertController: AlertController, private storage: Storage) { }
  hrid: any;
  hire_date: any;
  user: any;
  loading: any;
  ngOnInit() {
    console.log("initiating app login");

    this.storage.create();
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
      'Access-Control-Allow-Origin': '*',
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
        console.log(this.user);
        let hireDate = String(data.HireDate).replace('/', '')
        hireDate = String(hireDate).replace('/', '')
        if (this.user == null) {
          this.alertCreate('Login Failed!!', 'No Match...' + hireDate, 'Try again.', 'OK');
        } else if (this.hire_date == hireDate) {
          let success: any = {
            text: 'OK',
            role: 'confirm',
            handler: () => {
              this.storage.set('user_profile', data);

              window.location.href = '/home';
            }
          };
          this.alertCreate('Login Success!', '', 'Welcome.', success);
        } else {
          this.alertCreate('Login Failed!!', 'No Match...' + hireDate, 'Try again.', 'OK');
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
    window.location.href = "/login"
  }
}
