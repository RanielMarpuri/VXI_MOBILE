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

  constructor(private navctrl: NavController) { }

  async ngOnInit() {
    let Init: any = await Preferences.get({ key: 'otp_credentials' })
    let Inits: any = await Preferences.get({ key: 'temp_profile' })
    this.otp_credentials = JSON.parse(Init.value)
    this.user_profile = Inits.value
    this.otp = JSON.stringify(this.otp_credentials.otp)
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
    let y: any
    if (i == 5) { y = 0 }
    else { y = i + 1 }

    let x = document.getElementById(this.digits[y].name)
    // setTimeout(() => {
      this.digits[i].value = ''
    // }, 10)

    this.digits[i].value = e.data

    setTimeout(() => {
      x.focus();
    }, 10)

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
      window.location.href = '/home'
    }
  }

  getMinSec(at) {
    this.available_time_mins = Math.trunc(at / 60);
    this.available_time_secs = Math.floor(((at / 60) - this.available_time_mins) * 60)
  }

  async resendOTP() {
    let x = JSON.parse(this.user_profile);
    let otp_credentials: any = {
      'hrid': x.ID,
      'otp': this.genOTP(),
      'date': Date()
    }

    await Preferences.set({
      key: 'otp_credentials',
      value: JSON.stringify(otp_credentials),
    });

    let Init: any = await Preferences.get({ key: 'otp_credentials' })
    this.otp_credentials = JSON.parse(Init.value)
    this.otp = JSON.stringify(this.otp_credentials.otp)

  }

  genOTP() {
    var minm = 100000;
    var maxm = 999999;
    return Math.floor(Math
      .random() * (maxm - minm + 1)) + minm;
  }

  async setStorage() {

  }



}
