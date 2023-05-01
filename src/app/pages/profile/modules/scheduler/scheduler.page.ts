import { Component, OnInit } from '@angular/core';
import { Preferences } from '@capacitor/preferences';
import { clearTimeout } from 'timers';

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
  show_calendar: boolean = false;
  multiple: boolean = true;
  toggle: number
  constructor() { }
  public sample_dates = [
    {
      payout: '04/14/2023', dates: [
        {
          "employeeID": 4225726,
          "firstName": "RANIEL DENICE",
          "lastName": "MARPURI",
          "date": "3/19/2023 12:00:00 AM",
          "day": "Sunday",
          "status": "OFF",
          "login": null,
          "logout": null,
          "shiftLength": null
        },
        {
          "employeeID": 4225726,
          "firstName": "RANIEL DENICE",
          "lastName": "MARPURI",
          "date": "3/20/2023 12:00:00 AM",
          "day": "Monday",
          "status": "OFF",
          "login": null,
          "logout": null,
          "shiftLength": null
        },
        {
          "employeeID": 4225726,
          "firstName": "RANIEL DENICE",
          "lastName": "MARPURI",
          "date": "3/21/2023 12:00:00 AM",
          "day": "Tuesday",
          "status": "P",
          "login": "3/21/2023 1:00:00 AM",
          "logout": "3/21/2023 10:00:00 AM",
          "shiftLength": "9"
        },
        {
          "employeeID": 4225726,
          "firstName": "RANIEL DENICE",
          "lastName": "MARPURI",
          "date": "3/22/2023 12:00:00 AM",
          "day": "Wednesday",
          "status": "P",
          "login": "3/22/2023 12:28:37 AM",
          "logout": "3/22/2023 10:29:17 AM",
          "shiftLength": "10"
        },
        {
          "employeeID": 4225726,
          "firstName": "RANIEL DENICE",
          "lastName": "MARPURI",
          "date": "3/23/2023 12:00:00 AM",
          "day": "Thursday",
          "status": "P",
          "login": "3/23/2023 12:27:38 AM",
          "logout": "3/23/2023 10:05:39 AM",
          "shiftLength": "10"
        },
        {
          "employeeID": 4225726,
          "firstName": "RANIEL DENICE",
          "lastName": "MARPURI",
          "date": "3/24/2023 12:00:00 AM",
          "day": "Friday",
          "status": "L",
          "login": "3/24/2023 12:37:10 AM",
          "logout": "3/24/2023 10:03:32 AM",
          "shiftLength": "10"
        },
        {
          "employeeID": 4225726,
          "firstName": "RANIEL DENICE",
          "lastName": "MARPURI",
          "date": "3/25/2023 12:00:00 AM",
          "day": "Saturday",
          "status": "P",
          "login": "3/25/2023 12:32:20 AM",
          "logout": "3/25/2023 10:03:17 AM",
          "shiftLength": "10"
        },
        {
          "employeeID": 4225726,
          "firstName": "RANIEL DENICE",
          "lastName": "MARPURI",
          "date": "3/26/2023 12:00:00 AM",
          "day": "Sunday",
          "status": "OFF",
          "login": null,
          "logout": null,
          "shiftLength": null
        },
        {
          "employeeID": 4225726,
          "firstName": "RANIEL DENICE",
          "lastName": "MARPURI",
          "date": "3/27/2023 12:00:00 AM",
          "day": "Monday",
          "status": "OFF",
          "login": null,
          "logout": null,
          "shiftLength": null
        },
        {
          "employeeID": 4225726,
          "firstName": "RANIEL DENICE",
          "lastName": "MARPURI",
          "date": "3/28/2023 12:00:00 AM",
          "day": "Tuesday",
          "status": "A",
          "login": "3/28/2023 12:25:51 AM",
          "logout": "3/28/2023 10:06:23 AM",
          "shiftLength": "10"
        },
        {
          "employeeID": 4225726,
          "firstName": "RANIEL DENICE",
          "lastName": "MARPURI",
          "date": "3/29/2023 12:00:00 AM",
          "day": "Wednesday",
          "status": "P",
          "login": "3/29/2023 12:45:45 AM",
          "logout": "3/29/2023 10:02:29 AM",
          "shiftLength": "10"
        },
        {
          "employeeID": 4225726,
          "firstName": "RANIEL DENICE",
          "lastName": "MARPURI",
          "date": "3/30/2023 12:00:00 AM",
          "day": "Thursday",
          "status": "P",
          "login": "3/30/2023 12:36:52 AM",
          "logout": "3/30/2023 10:28:38 AM",
          "shiftLength": "10"
        },
        {
          "employeeID": 4225726,
          "firstName": "RANIEL DENICE",
          "lastName": "MARPURI",
          "date": "3/31/2023 12:00:00 AM",
          "day": "Friday",
          "status": "P",
          "login": "3/31/2023 12:27:05 AM",
          "logout": "3/31/2023 10:06:46 AM",
          "shiftLength": "10"
        },
        {
          "employeeID": 4225726,
          "firstName": "RANIEL DENICE",
          "lastName": "MARPURI",
          "date": "4/1/2023 12:00:00 AM",
          "day": "Saturday",
          "status": "P",
          "login": "4/1/2023 12:31:46 AM",
          "logout": "4/1/2023 10:19:02 AM",
          "shiftLength": "10"
        }
      ]
    },
    {
      payout: '04/28/2023', dates: [
        {
          "employeeID": 4225726,
          "firstName": "RANIEL DENICE",
          "lastName": "MARPURI",
          "date": "4/2/2023 12:00:00 AM",
          "day": "Sunday",
          "status": "OFF",
          "login": null,
          "logout": null,
          "shiftLength": null
        },
        {
          "employeeID": 4225726,
          "firstName": "RANIEL DENICE",
          "lastName": "MARPURI",
          "date": "4/3/2023 12:00:00 AM",
          "day": "Monday",
          "status": "OFF",
          "login": null,
          "logout": null,
          "shiftLength": null
        },
        {
          "employeeID": 4225726,
          "firstName": "RANIEL DENICE",
          "lastName": "MARPURI",
          "date": "4/4/2023 12:00:00 AM",
          "day": "Tuesday",
          "status": "P",
          "login": "4/4/2023 12:31:13 AM",
          "logout": "4/4/2023 10:08:37 AM",
          "shiftLength": "10"
        },
        {
          "employeeID": 4225726,
          "firstName": "RANIEL DENICE",
          "lastName": "MARPURI",
          "date": "4/5/2023 12:00:00 AM",
          "day": "Wednesday",
          "status": "P",
          "login": "4/5/2023 12:35:30 AM",
          "logout": "4/5/2023 11:20:43 AM",
          "shiftLength": "11"
        },
        {
          "employeeID": 4225726,
          "firstName": "RANIEL DENICE",
          "lastName": "MARPURI",
          "date": "4/6/2023 12:00:00 AM",
          "day": "Thursday",
          "status": "P",
          "login": "4/6/2023 12:50:02 AM",
          "logout": "4/6/2023 10:41:56 AM",
          "shiftLength": "10"
        },
        {
          "employeeID": 4225726,
          "firstName": "RANIEL DENICE",
          "lastName": "MARPURI",
          "date": "4/7/2023 12:00:00 AM",
          "day": "Friday",
          "status": "P",
          "login": "4/7/2023 12:34:19 AM",
          "logout": "4/7/2023 10:16:53 AM",
          "shiftLength": "10"
        },
        {
          "employeeID": 4225726,
          "firstName": "RANIEL DENICE",
          "lastName": "MARPURI",
          "date": "4/8/2023 12:00:00 AM",
          "day": "Saturday",
          "status": "P",
          "login": "4/8/2023 12:33:26 AM",
          "logout": "4/8/2023 10:49:38 AM",
          "shiftLength": "10"
        },
        {
          "employeeID": 4225726,
          "firstName": "RANIEL DENICE",
          "lastName": "MARPURI",
          "date": "4/9/2023 12:00:00 AM",
          "day": "Sunday",
          "status": "OFF",
          "login": null,
          "logout": null,
          "shiftLength": null
        },
        {
          "employeeID": 4225726,
          "firstName": "RANIEL DENICE",
          "lastName": "MARPURI",
          "date": "4/10/2023 12:00:00 AM",
          "day": "Monday",
          "status": "REG HOL",
          "login": null,
          "logout": null,
          "shiftLength": null
        },
        {
          "employeeID": 4225726,
          "firstName": "RANIEL DENICE",
          "lastName": "MARPURI",
          "date": "4/11/2023 12:00:00 AM",
          "day": "Tuesday",
          "status": "P",
          "login": "4/11/2023 12:48:21 AM",
          "logout": "4/11/2023 10:04:55 AM",
          "shiftLength": "10"
        },
        {
          "employeeID": 4225726,
          "firstName": "RANIEL DENICE",
          "lastName": "MARPURI",
          "date": "4/12/2023 12:00:00 AM",
          "day": "Wednesday",
          "status": "P",
          "login": "4/12/2023 12:37:08 AM",
          "logout": "4/12/2023 10:11:21 AM",
          "shiftLength": "10"
        },
        {
          "employeeID": 4225726,
          "firstName": "RANIEL DENICE",
          "lastName": "MARPURI",
          "date": "4/13/2023 12:00:00 AM",
          "day": "Thursday",
          "status": "P",
          "login": "4/13/2023 12:33:34 AM",
          "logout": "4/13/2023 10:03:59 AM",
          "shiftLength": "10"
        },
        {
          "employeeID": 4225726,
          "firstName": "RANIEL DENICE",
          "lastName": "MARPURI",
          "date": "4/14/2023 12:00:00 AM",
          "day": "Friday",
          "status": "P",
          "login": "4/14/2023 12:35:54 AM",
          "logout": "4/14/2023 10:36:38 AM",
          "shiftLength": "10"
        },
        {
          "employeeID": 4225726,
          "firstName": "RANIEL DENICE",
          "lastName": "MARPURI",
          "date": "4/15/2023 12:00:00 AM",
          "day": "Saturday",
          "status": "P",
          "login": "4/15/2023 12:35:26 AM",
          "logout": "4/15/2023 10:04:29 AM",
          "shiftLength": "10"
        }
      ]
    },
    {
      payout: '05/12/2023', dates: [
        {
          "employeeID": 4225726,
          "firstName": "RANIEL DENICE",
          "lastName": "MARPURI",
          "date": "4/16/2023 12:00:00 AM",
          "day": "Sunday",
          "status": "OFF",
          "login": null,
          "logout": null,
          "shiftLength": null
        },
        {
          "employeeID": 4225726,
          "firstName": "RANIEL DENICE",
          "lastName": "MARPURI",
          "date": "4/17/2023 12:00:00 AM",
          "day": "Monday",
          "status": "OFF",
          "login": null,
          "logout": null,
          "shiftLength": null
        },
        {
          "employeeID": 4225726,
          "firstName": "RANIEL DENICE",
          "lastName": "MARPURI",
          "date": "4/18/2023 12:00:00 AM",
          "day": "Tuesday",
          "status": "P",
          "login": "4/18/2023 12:32:14 AM",
          "logout": "4/18/2023 10:03:54 AM",
          "shiftLength": "10"
        },
        {
          "employeeID": 4225726,
          "firstName": "RANIEL DENICE",
          "lastName": "MARPURI",
          "date": "4/19/2023 12:00:00 AM",
          "day": "Wednesday",
          "status": "P",
          "login": "4/19/2023 12:29:03 AM",
          "logout": "4/19/2023 10:04:22 AM",
          "shiftLength": "10"
        },
        {
          "employeeID": 4225726,
          "firstName": "RANIEL DENICE",
          "lastName": "MARPURI",
          "date": "4/20/2023 12:00:00 AM",
          "day": "Thursday",
          "status": "P",
          "login": "4/20/2023 12:40:18 AM",
          "logout": "4/20/2023 10:03:18 AM",
          "shiftLength": "10"
        },
        {
          "employeeID": 4225726,
          "firstName": "RANIEL DENICE",
          "lastName": "MARPURI",
          "date": "4/21/2023 12:00:00 AM",
          "day": "Friday",
          "status": "P",
          "login": "4/21/2023 12:35:54 AM",
          "logout": "4/21/2023 10:59:00 AM",
          "shiftLength": "10"
        },
        {
          "employeeID": 4225726,
          "firstName": "RANIEL DENICE",
          "lastName": "MARPURI",
          "date": "4/22/2023 12:00:00 AM",
          "day": "Saturday",
          "status": "P",
          "login": "4/22/2023 12:32:27 AM",
          "logout": "4/22/2023 10:02:27 AM",
          "shiftLength": "10"
        },
        {
          "employeeID": 4225726,
          "firstName": "RANIEL DENICE",
          "lastName": "MARPURI",
          "date": "4/23/2023 12:00:00 AM",
          "day": "Sunday",
          "status": "OFF",
          "login": null,
          "logout": null,
          "shiftLength": null
        },
        {
          "employeeID": 4225726,
          "firstName": "RANIEL DENICE",
          "lastName": "MARPURI",
          "date": "4/24/2023 12:00:00 AM",
          "day": "Monday",
          "status": "OFF",
          "login": null,
          "logout": null,
          "shiftLength": null
        },
        {
          "employeeID": 4225726,
          "firstName": "RANIEL DENICE",
          "lastName": "MARPURI",
          "date": "4/25/2023 12:00:00 AM",
          "day": "Tuesday",
          "status": "P",
          "login": "4/25/2023 12:36:59 AM",
          "logout": null,
          "shiftLength": null
        },
        {
          "employeeID": 4225726,
          "firstName": "RANIEL DENICE",
          "lastName": "MARPURI",
          "date": "4/26/2023 12:00:00 AM",
          "day": "Wednesday",
          "status": "OFF",
          "login": null,
          "logout": null,
          "shiftLength": null
        },
        {
          "employeeID": 4225726,
          "firstName": "RANIEL DENICE",
          "lastName": "MARPURI",
          "date": "4/27/2023 12:00:00 AM",
          "day": "Thursday",
          "status": "OFF",
          "login": null,
          "logout": null,
          "shiftLength": null
        },
        {
          "employeeID": 4225726,
          "firstName": "RANIEL DENICE",
          "lastName": "MARPURI",
          "date": "4/28/2023 12:00:00 AM",
          "day": "Friday",
          "status": "OFF",
          "login": null,
          "logout": null,
          "shiftLength": null
        },
        {
          "employeeID": 4225726,
          "firstName": "RANIEL DENICE",
          "lastName": "MARPURI",
          "date": "4/29/2023 12:00:00 AM",
          "day": "Saturday",
          "status": "OFF",
          "login": null,
          "logout": null,
          "shiftLength": null
        }
      ]
    }
  ]
  caught_dates: any
  highlighted_dates_details: any
  highlighted_dates: any

  myDate: any
  async ngOnInit() {
    this.myDate = '2022-04-21T00:00:00'
    this.show_calendar = true
    // this.style.getElementsByTagName('head')[0].getElementsByTagName('style')[10].remove()
    // this.setClean()
    // console.log("Init")
    // let x = 0
    // let y = setInterval(() => {
    //   x = x + 25
    //   this.initSpin(x)
    //   if (x == 100) {
    //     clearInterval(y);
    //   }
    // }, 2000)
  }

  tryCatch(e: any) {
    console.log(e)
    // this.multiple = true
    // this.caught_dates = []
    let x = e.target.value.length
    let y
    if(!this.multiple){
      y = e.target.value
    }else{
     y = e.target.value[x - 1]
    }
    this.caught_dates = y
    this.highlighted_dates = []
    this.highlighted_dates_details = []
    this.toggleShow(2)

    setTimeout(() => {
      this.multiple = false
    }, 10)

    console.log(x , y)
  }

  higlightDates(date: any) {
    this.highlighted_dates_details.push(date)
    let date_format = new Date(date.date)
    date_format.setHours(8)
    let final_date = date_format.toISOString()

    let y = final_date.split('T')
    
    if (date.status === 'P') {
      this.highlighted_dates.push({
        date: y[0],
        textColor: '#09721b',
        backgroundColor: '#c8e5d0',
      })
    } else if (date.status === 'L') {
      this.highlighted_dates.push({
        date: y[0],
        textColor: '#94782f',
        backgroundColor: '#f5d176',
      })
    } else if (date.status === 'A') {
      this.highlighted_dates.push({
        date: y[0],
        textColor: '#5f0d0d',
        backgroundColor: '#ff5252',
      })
    } else if (date.status === 'REG HOL') {
      this.highlighted_dates.push({
        date: y[0],
        textColor: '#fff',
        backgroundColor: '#6f6afc',
      })
    }
  }



  catchDates(e: any) {
    this.multiple = true
    console.log(e.target.value)
    this.caught_dates = []
    this.highlighted_dates = []
    this.highlighted_dates_details = []
    this.sample_dates.forEach((sample) => {
      if (sample.payout === e.target.value) {


        sample.dates.forEach((date) => {
          
          if (date.status == 'OFF') {
            let date_format = new Date(date.date)
            date_format.setHours(8)
            let final_date = date_format.toISOString()

            this.caught_dates.push(final_date)
          } else {
            this.higlightDates(date)
          }
        })
        console.log("caught dates", this.caught_dates)
        console.log(this.highlighted_dates_details)

      }
    })
    this.toggleShow(2);
    this.myDate = new Date(this.caught_dates[0]).toISOString()
    let day = this.myDate.split(".")
    this.myDate = day[0]
  }

  toggleShow(toggle: any) {
    let interval = setInterval(() => {
      if (toggle > 0) {
        this.show_calendar = !this.show_calendar
        toggle = toggle - 1
      } else {
        clearInterval(interval)
      }
    }, 10)
  }

  async setClean() {
    this.style = document.documentElement;
    let clean: any
    let Init: any = await Preferences.get({ key: 'clean_style' })
    if (Init.value != null) {
      console.log("Init is not null")
      clean = Init.value
      await Preferences.set({
        key: 'clean_style',
        value: clean,
      });

    } else {
      if (!Init.value) {
        clean = this.style.getElementsByTagName('head')[0].getElementsByTagName('style')[10]

      }
      // this.clean = clean.innerHTML
      await Preferences.set({
        key: 'clean_style',
        value: clean.innerHTML,
      });
    }
    console.log(Init.value)

  }

  async initSpin(val: any) {


    let progress = 410 - (3.1 * val)
    let secs = 2 * (val / 100);

    let orig = document.createElement('style')

    let Init: any = await Preferences.get({ key: 'clean_style' })
    let x = 'circle{ animation: spin ' + secs + 's linear forwards; } @keyframes spin { 100% { stroke-dashoffset: ' + progress + '; }';

    orig.append(Init.value)
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
