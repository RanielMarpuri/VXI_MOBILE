import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ElementRef } from '@angular/core';
import { Component, OnInit, ViewChild } from '@angular/core';

import { Preferences } from '@capacitor/preferences';
import { NavController } from '@ionic/angular';


@Component({
  selector: 'app-otp',
  templateUrl: './otp.page.html',
  styleUrls: ['./otp.page.scss'],
})
export class OtpPage implements OnInit {
  otp_credentials: any
  otp: any
  user_profile: any
  available_time: any
  available_time_mins: any
  available_time_secs: any

  public digits = [
    { name: 'digi0', value: '' },
    { name: 'digi1', value: '' },
    { name: 'digi2', value: '' },
    { name: 'digi3', value: '' },
    { name: 'digi4', value: '' },
    { name: 'digi5', value: '' },
  ]
  red: any;
  input_otp: any;
  asterisk_email: string;
  email_sent: any
  constructor(private navctrl: NavController, private http: HttpClient) { }

  async ngOnInit() {
    this.email_sent = false
    let Inits: any = await Preferences.get({ key: 'temp_profile' })
    this.user_profile = Inits.value

    let Init: any = await Preferences.get({ key: 'otp_credentials' })
    let Init1: any = await Preferences.get({ key: 'temp_profile' })
   // console.log(!Init, Init)
    if(Init.value == null){
      this.otp_credentials = JSON.parse(Init1.value)
    }else{
      this.otp_credentials = JSON.parse(Init.value)
    }
   

    this.asterisk_email = this.distortEmail()

    this.emailer(false)
  }


  initiateTimer() {
    this.available_time = 120
    // do{
    setInterval(() => {
      if (this.available_time != 0) {
        this.available_time = this.available_time - 1

        if (this.available_time >= 60) {
          this.available_time_mins = 1;
          this.available_time_secs = (this.available_time - 59) - 1
        } else {
          this.available_time_mins = 0;
          this.available_time_secs = this.available_time
        }
      }
    }, 1000)
  }
  enterDigit(i: any, e: any) {
    setTimeout(() => {
      // this.deleteDigit(i)
      let y: any
      if (i == 5) { y = 0 }
      else { y = i + 1 }
      console.log(this.digits)
      let x = document.getElementById(this.digits[y].name)
      let a = (<HTMLInputElement>document.getElementById(this.digits[i].name))

      this.digits[i].value = e.data
      x.focus();

      let val: any = ''
      this.digits.forEach(digi => {
        val = val + digi.value
        a.value = digi.value
      })

      console.log(val)
      this.input_otp = val
      this.validateOTP(val, i)

    }, 10)
  }

  deleteDigit(curr: any){
    setTimeout(() => {
      let x =  curr - 1
      let y = document.getElementById(this.digits[x].name) 
      
      y.focus();
    }, 10)
  }

  validateOTP(otp: any, pos) {
    if (otp.length == 6) {
      if (pos == 5) {
        setTimeout(() => {
          if (otp == this.otp) {
            this.submitOTP(otp)
          } else {
            this.red = true
            setTimeout(() => {
              this.red = false
            }, 500)
          }
        }, 250);
      } else {
        setTimeout(() => {
          if (otp == this.otp) {
            this.submitOTP(otp)
          }
        }, 250);
      }
    }
  }

  async submitOTP(otp: any) {
    await Preferences.remove({ key: 'temp_profile' })
    if (this.available_time != 0) {
      await Preferences.set({
        key: 'user_profile',
        value: this.user_profile,
      });
      // this.saveEmail()
      // window.location.href = 'login/loader';
      window.location.href = '/home'
    }
  }

  emailer(reset: boolean) {
    const header = new HttpHeaders()
    this.otp_credentials.OTP = this.genOTP();

    this.otp = JSON.stringify(this.otp_credentials.OTP)

    let url = "https://vxione.com/ems_api/API/LogIn/OtpEmailer"

    header.append('Accept', 'application/json');

    const options: any = {
      headers: header,
    };

    this.http.post(url, this.otp_credentials, options).subscribe(data => {
      this.email_sent = true;
      console.log(data, "after emailer", this.otp_credentials)
      if (reset) {
        this.available_time = 120;
      } else {
        this.initiateTimer()
      }
    })
  }

  resendOTP() {
    this.email_sent = false;
    this.emailer(true)
  }

  genOTP() {
    var minm = 100000;
    var maxm = 999999;
    return Math.floor(Math.random() * (maxm - minm + 1)) + minm;
  }

  saveEmail() {
    const header = new HttpHeaders()
    this.email_sent= false;
    console.log(this.user_profile, " before()")
    let x = JSON.parse(this.user_profile)
    x.PersonalEmail = this.otp_credentials.PersonalEmail
    x.ContactNumber = this.otp_credentials.ContactNumber
    let url = 'https://vxione.com/ems_api/API/LogIn/SaveUser' //CLOUD API
    
    console.log(x, " saveEmail()")

    header.append('Accept', 'application/json');

    const options: any = {
      headers: header,
    };

    this.http.post(url, x, options).subscribe(data => {
      this.email_sent = true;
      console.log("email saved")
    })

  }

  distortEmail() {
    let catch_email = this.otp_credentials.PersonalEmail.split('@')
    var asterisk = "*".repeat(catch_email[0].length - 4);
    var newStr = catch_email[0].replace(/(.{2}).*(.{2})/, '$1' + asterisk + '$2');

    return newStr + '@' + catch_email[1];
  }

}
