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
  constructor(private navctrl: NavController) { }

  async ngOnInit() {
    let Init: any = await Preferences.get({ key: 'otp_credentials' })
    let Inits: any = await Preferences.get({ key: 'temp_profile' })
    this.otp_credentials = JSON.parse(Init.value)
    this.user_profile = Inits.value
    this.otp = JSON.stringify(this.otp_credentials.otp)
    //widow.location.href = '/home';
  }

  digits = [
    { name: 'digi0', value: '' },
    { name: 'digi1', value: '' },
    { name: 'digi2', value: '' },
    { name: 'digi3', value: '' },
    { name: 'digi4', value: '' },
    { name: 'digi5', value: '' },
  ]

  input_otp: any;
  
  enterDigit(i: any, e: any) {
    let y: any
    if (i == 5) { y = 0 }
    else { y = i + 1 }

    let x = document.getElementById(this.digits[y].name)
    // console.log(e.target.value)
    setTimeout(() => {
      x.focus();
    }, 100)
    //  this.overRideDigit(i, e.data)
    this.digits[i].value = e.data
    let val: any
    this.digits.forEach(digi => {
      if (val == null) {
        val = ''
      }
      val = val + digi.value
    })
    console.log(val)
    this.input_otp = val
    this.validateOTP(val, i)
  }

  validateOTP(otp: any, pos) {
    if (otp.length == 6) {
      if (pos == 5) {
        setTimeout(() => {
          if (otp == this.otp) {
            alert('GOOD TO GO');
            this.submitOTP(otp)
          } else {
            alert('WRONG OTP');
          }
        }, 250);
      } else {
        setTimeout(() => {
          if (otp == this.otp) {
            alert('GOOD TO GO');
            window.location.href = '/home'
          }
        }, 250);
      }
    }
  }

  async submitOTP(otp: any) {
    await Preferences.remove({ key: 'temp_profile' })
    await Preferences.set({
      key: 'user_profile',
      value: this.user_profile,
    });

    window.location.href = '/home'
  }
}
