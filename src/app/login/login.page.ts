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
   // window.location.href = '/home'

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
    let x = this.hrid.replace('/', '%2F');
    let url = 'https://vxione.com/ems_api/API/LogIn/GetByHrid?ntAcct=' + x //CLOUD API
    // let url = 'https://localhost:44354/API/LogIn/GetByHrid/' + this.hrid; // LOCAL API

    let postData = {
      "ntAcct": this.hrid
    }


    this.http.post(url, postData, options).subscribe({
      next: (data: any) => {
        this.user = data;
        let hireDate: any;
        console.log(data)
        if (this.user != null) {
          let temp = this.user.HireDate
          
          hireDate = temp.replace('/', '');
          hireDate = hireDate.replace('/', '');
          let x = hireDate.trimRight();

          console.log(x, "hireDate attempt", temp);
          if (this.hire_date == x) {
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
          this.alertCreate('Error!!', 'Fetching Failed...', 'Try again.', 'OK');
        }
        this.loading = false;
      },
      error: err => {
        console.log(err);
        this.alertCreate('Error!!', 'Fetching Failed...', 'Try again.', 'OK');
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
    if (this.user.Email == "null") {
      window.location.href = 'login/reg';
    } else {
      window.location.href = 'login/otp';
    }
  }

}
