import { Component, OnInit } from '@angular/core';
import { Preferences } from '@capacitor/preferences';

@Component({
  selector: 'app-scheduler',
  templateUrl: './scheduler.page.html',
  styleUrls: ['./scheduler.page.scss'],
})
export class SchedulerPage implements OnInit {
  progress: any;
  clean: any;
  style: any
  reset: any = false
  constructor() { }

  ngOnInit() {
    this.setClean()

    this.initSpin(100)
  }

  async setClean() {
    this.style = document.documentElement;

    this.clean = this.style.getElementsByTagName('head')[0].getElementsByTagName('style')[10]

    await Preferences.set({
      key: 'clean_style',
      value: this.clean.innerHTML,
    });
  }

  async initSpin(val: any) {
    let progress = 410 - (3.1 * val)
    let secs = 2 * (val / 100);

    let Init: any = await Preferences.get({ key: 'clean_style' })
    let orig = document.createElement('style')
    orig.append(Init.value)
    let x = 'circle{ animation: spin ' + secs + 's linear forwards; } @keyframes spin { 100% { stroke-dashoffset: ' + progress + '; }';
    orig.append(x)

    this.style.getElementsByTagName('head')[0].getElementsByTagName('style')[10].remove()

    console.log("this is orig ", orig)

    setTimeout(() => {
      this.style.getElementsByTagName('head')[0].append(orig)
      let start = 0
      this.progress = 0

      let count: any = setInterval(() => {
        start = start + 0.02
        this.progress = this.progress + 1

        if (start >= secs) {
          clearInterval(count);
        }

      }, 20);

    }, 100)

  }

}
