import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-payroll',
  templateUrl: './payroll.page.html',
  styleUrls: ['./payroll.page.scss'],
})
export class PayrollPage implements OnInit {

  constructor() { }
  slider_data: any
  indexer: any = 0
  slide_in: any
  slide_out: any
  slider: any
  go: any = true
  going_right: any = false
  
  ngOnInit() {
    this.fetchPayroll()
    // this.going_right = true
    this.slideInit('unli', 1, 3000)
  }

  fetchPayroll() {
    this.slider_data = [
      { date: '04/28/2023', pay: 'P14,230', month: 'Apr', day: '17 - 28', year: '2023', details: [{ name: 'SSS1', val: '(1300)'},  { name: 'PagIbig1', val: '(1100)'}, { name: 'Phil1', val: '(1240)'} ] },
      { date: '04/14/2023', pay: 'P14,575', month: 'Apr', day: '03 - 14', year: '2023', details: [{ name: 'SSS2', val: '(4300)'},  { name: 'PagIbig2', val: '(4100)'}, { name: 'Phil2', val: '(1266)'} ]  },
      { date: '03/31/2023', pay: 'P14,000', month: 'Mar', day: '20 - 31', year: '2023', details: [{ name: 'SSS3', val: '(1200)'},  { name: 'PagIbig3', val: '(2100)'}, { name: 'Phil3', val: '(1230)'} ]  },
      { date: '03/17/2023', pay: 'P15,000', month: 'Mar', day: '06 - 17', year: '2023', details: [{ name: 'SSS4', val: '(1400)'},  { name: 'PagIbig4', val: '(1400)'}, { name: 'Phil4', val: '(1220)'} ]  },
    ]
  }

  slideInit(count: any, i: any, speed: any) {
    if (this.go) {
      this.slide_in = true
      this.slide_out = false
      this.slider = setInterval(() => {
        if (count > 0) {
          this.moveSliderDirection(i);
          count = count - 1
        } else if (count == 'unli') {
          this.moveSliderDirection(i);
        } else {
          this.going_right = false
          this.slideStop(120, 'unli', 1, 3000)
        }
      }, speed)
    } else {
      this.slideStop(120, '', 1, 3000)
    }
  }

  slideStop(x: any, count: any, i: any, speed: any) {
    clearInterval(this.slider)
    this.go = true
    setTimeout(() => {
      this.slideInit(count, i, speed)
    }, 1000 * x)
  }

  goLeft() {
    this.going_right = false
    this.slideStop(0.1, 1, 1, 600)
  }

  goRight() {
    this.going_right = true
    this.slideStop(0.1, 1, -1, 600)
  }

  moveSliderDirection(i: any) {
    this.slide_in = false
    this.slide_out = true
    setTimeout(() => {
      this.slide_in = false
      this.slide_out = false
      setTimeout(() => {
        this.slide_in = true
        this.slide_out = false
        this.indexer = this.indexer + i
        if (this.indexer >= this.slider_data.length) {
          this.indexer = 0
        } else if (this.indexer < 0) {
          this.indexer = this.slider_data.length - 1
        }
      }, 20)
    }, 500)
  }
}
