import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Preferences } from '@capacitor/preferences';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.page.html',
  styleUrls: ['./loader.page.scss'],
})
export class LoaderPage implements OnInit {
  newsStatus: any
  attendanceStatus: any
  tiktalkStatus: any
  payrollStatus: any
  loading: any

  modules: any = [
    {name: 'News Data', statusName: 'newsStatus', value: '', function: 'fetchNews'},
    {name: 'Attendance Data', statusName: 'attendanceStatus', value: '', function: 'fetchAttendance'},
    {name: 'Payroll Data', statusName: 'payrollStatus', value: '', function: 'fetchPayroll'},
    {name: 'TikTalk Concerns', statusName: 'tiktalkStatus', value: '', function: 'fetchTikTalk'},
  ]
  modules_done: any
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.fetchAll()

  }

  fetchAll(){
    this.loading = true
    this.modules_done = 0
    this.modules.forEach((m) => {
        this[m.function]()
        this.modules_done = this.modules_done + 1
    })

    let y = setInterval(() => {
      console.log(this.modules_done, this.modules.length)
      if(this.modules_done == this.modules.length ){
        window.location.href = '/home';
        this.loading = false
        clearInterval(y);
      }
    }, 300)

  }

  complete(name: any){
    this.modules.forEach((m) => {
      if(name === m.statusName){
        m.value = 'done'
        this[name] = m.value
      }
    })
    console.log(this.modules)
  }

  fetchNews() {
    let url = 'https://vxione.com/ems_api/API/ManageNews/Index'
    this.http.get(url).subscribe({
      next: async (data: any) => {
        // this.slider_data = data;
        await Preferences.set({
          key: 'slider_data',
          value: JSON.stringify(data),
        });
        this.complete('newsStatus')
        console.log(data, "slider data");
      },
      error: err => {
        console.log(err);
      },

    });
  }

  async fetchAttendance() {
    let sample_dates = [
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
    await Preferences.set({
      key: 'attendance',
      value: JSON.stringify(sample_dates),
    });
    this.complete('attendanceStatus')
  }

  async fetchPayroll() {
    let slider_data = [
      { date: '04/28/2023', pay: 'P14,230', month: 'Apr', day: '17 - 28', year: '2023', details: [{ name: 'SSS1', val: '(1300)' }, { name: 'PagIbig1', val: '(1100)' }, { name: 'Phil1', val: '(1240)' }] },
      { date: '04/14/2023', pay: 'P14,575', month: 'Apr', day: '03 - 14', year: '2023', details: [{ name: 'SSS2', val: '(4300)' }, { name: 'PagIbig2', val: '(4100)' }, { name: 'Phil2', val: '(1266)' }] },
      { date: '03/31/2023', pay: 'P14,000', month: 'Mar', day: '20 - 31', year: '2023', details: [{ name: 'SSS3', val: '(1200)' }, { name: 'PagIbig3', val: '(2100)' }, { name: 'Phil3', val: '(1230)' }] },
      { date: '03/17/2023', pay: 'P15,000', month: 'Mar', day: '06 - 17', year: '2023', details: [{ name: 'SSS4', val: '(1400)' }, { name: 'PagIbig4', val: '(1400)' }, { name: 'Phil4', val: '(1220)' }] },
    ]
    await Preferences.set({
      key: 'payroll',
      value: JSON.stringify(slider_data),
    });

    this.complete('payrollStatus')
  }

  async fetchTikTalk() {
   let sample_msg = [
      {
        ID: '3',
        Subject: 'Mental Health Concerns',
        CreatedBy: '4225726',
        CreatedAt: '04/15/2023',
        Status: 'open',
        messages: [
          {
            ID: '1',
            isRead: 1,
            from: '4225726',
            to: 'HR',
            Body: 'Dear HR,\nI would like to inform you, that I am no longer fit to work in this environment for I am concerned with my mental health.\nThank you,',
            MessageID: '3',
            CreatedAt: '04/15/2023'
          },
          {
            ID: '2',
            isRead: 1,
            from: 'HR',
            to: '4225726',
            Body: 'Dear ma\'am/sir,\nThank you for reaching out, may we ask a particular incident sparking your decision to declare not-fit-to-work?\nWe value our employees and would like to hear more about the issue.\nRegards,',
            MessageID: '3',
            CreatedAt: '04/16/2023',
          },
          {
            ID: '3',
            isRead: 1,
            from: '4225726',
            to: 'HR',
            Body: 'Yes. But can I discuss this further in your office maam.\nThank you.',
            MessageID: '3',
            CreatedAt: '04/17/2023',
          },
          {
            ID: '4',
            isRead: 0,
            from: 'HR',
            to: '4225726',
            Body: 'Anytime, and please always remember, you are not alone.\nThank you.',
            MessageID: '3',
            CreatedAt: '04/17/2023',
          },
        ]
      },
      {
        ID: '2',
        Subject: 'Welcome to VXI!',
        CreatedBy: '4225726',
        CreatedAt: '04/14/2023',
        Status: 'open',
        messages: [
          {
            ID: '1',
            isRead: 1,
            from: 'HR',
            to: '4225726',
            Body: 'Welcome to VXI ma\'am/sir,\nWe would like to congratulate you on your new journey! And we wish you luck on your past endeavors.',
            MessageID: '2',
            CreatedAt: '04/14/2023'
          }
        ]
      },
      {
        ID: '1',
        Subject: 'Interview - Feb 18, 2023',
        CreatedBy: '4225726',
        CreatedAt: '02/10/2023',
        Status: 'resolved',
        messages: [
          {
            ID: '1',
            isRead: 1,
            from: 'HR',
            to: '4225726',
            Body: 'Welcome to VXI ma\'am/sir,\nWe would like to invite to a scheduled face-to-face interview this February 18, 2023.\nThank you,',
            MessageID: '1',
            CreatedAt: '02/10/2023'
          }
        ]
      }
    ]

    await Preferences.set({
      key: 'tiktalk',
      value: JSON.stringify(sample_msg),
    });

    this.complete('tiktalkStatus')
  }
}
