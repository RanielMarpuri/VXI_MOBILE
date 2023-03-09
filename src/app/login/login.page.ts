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

  fetchUser() {

    
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
    let url = 'https://innovation.vxione.com/itech-api/api/v1/employees/GetByWidOrHrid/' + this.hrid + '/VXIPHP';
    // const { Http } = Plugins;
    // return from (Http.request(
    //   method: 'GET',
    //   url 
    // ))

    this.http.get('https://cors-anywhere.herokuapp.com/' + url, options).subscribe({
      next: (data: any) => {
        this.user = data;
        console.log(this.user);
        if (this.user == null) {
          this.alertCreate('Login Failed!', 'No Match...', 'Try again.', 'OK');
        } else if (this.hire_date == data.HireDate) {
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
          this.alertCreate('Login Failed!', 'No Match...', 'Try again.', 'OK');
        }
        this.loading = false;
      },
      error: err => {
        console.log(err);
        this.alertCreate('ERROR', 'Cant Connect to Server', '500', 'Cancel');
        this.loading = false;
      },
    })
  }
}
