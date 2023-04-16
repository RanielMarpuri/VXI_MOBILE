import { Component, OnInit } from '@angular/core';
import { Preferences } from '@capacitor/preferences';

@Component({
  selector: 'app-reg',
  templateUrl: './reg.page.html',
  styleUrls: ['./reg.page.scss'],
})
export class RegPage implements OnInit {
  user_profile: any;
  email: any
  contact: any

  constructor() { }
  
  async ngOnInit() {
    let Init: any = await Preferences.get({ key: 'temp_profile' })
    this.user_profile = JSON.parse(Init.value)
  }

  // genOTP() {
  //   var minm = 100000;
  //   var maxm = 999999;
  //   return Math.floor(Math
  //     .random() * (maxm - minm + 1)) + minm;
  // }

  async sendOTP() {
    let otp_credentials = this.user_profile
    //otp_credentials.OTP = this.genOTP()
    otp_credentials.PersonalEmail = this.email
    otp_credentials.ContactNumber = this.contact

    await Preferences.set({
      key: 'otp_credentials',
      value: JSON.stringify(otp_credentials),
    });
    window.location.href = 'login/otp';
  }
}
