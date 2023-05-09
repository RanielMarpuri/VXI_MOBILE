import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Preferences } from '@capacitor/preferences';

import { ApexAxisChartSeries, ApexChart, ApexDataLabels, ApexFill, ApexGrid, ApexLegend, ApexMarkers, ApexPlotOptions, ApexStroke, ApexTooltip, ApexXAxis, ApexYAxis, ChartComponent } from 'ng-apexcharts';


export type ChartOptions = {
  chart: ApexChart
  series: ApexAxisChartSeries | any[]
  stroke: ApexStroke
  markers: ApexMarkers
  grid: ApexGrid
  tooltip: ApexTooltip
  colors: any[]
  xaxis: ApexXAxis
  yaxis: ApexYAxis
  plotOptions: ApexPlotOptions
  fill: ApexFill
}

@Component({
  selector: 'app-scheduler',
  templateUrl: './scheduler.page.html',
  styleUrls: ['./scheduler.page.scss'],
})
export class SchedulerPage implements OnInit {
  @ViewChild("myElem") MyProp: ElementRef;
  public options1: Partial<ChartOptions>
  public options2: Partial<ChartOptions>
  public options3: Partial<ChartOptions>

  coordinates1: any = [];
  coordinates2: any = [];

  progress: any = [];
  show_calendar: any;
  multiple: boolean = true;

  constructor() {
    this.spackLine(1)
    this.spackLine(2)
    this.pieChart()
  }
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
          "status": "L",
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
          "status": "L",
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
          "status": "L",
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
          "status": "P",
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
          "status": "P",
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
          "status": "A",
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
          "status": "L",
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
          "status": "L",
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
          "status": "L",
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
    this.show_calendar = ''
    this.calcProgress(this.sample_dates)
  }

  higlightDates(date: any) {
    this.highlighted_dates_details.push(date)

    let date_format1: any
    let date_format2 = new Date(date.logout)
    date_format1 = new Date(date.login)

    date_format1.setHours(8)
    let final_date = date_format1.toISOString()

    let y = final_date.split('T')

    if (date.status === 'P') {
      this.highlighted_dates.push({
        date: y[0],
        textColor: '#09721b',
        backgroundColor: '#c8e5d0',
      })

      date_format1.setHours(new Date(date.login).getHours())
      this.getCoordinates(date_format1, 1)
      this.getCoordinates(date_format2, 2)
    } else if (date.status === 'L') {
      this.highlighted_dates.push({
        date: y[0],
        textColor: '#94782f',
        backgroundColor: '#f5d176',
      })

      date_format1.setHours(new Date(date.login).getHours())
      this.getCoordinates(date_format1, 1)
      this.getCoordinates(date_format2, 2)
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

  calcProgress(dates: any){
  
     dates.forEach(async (date, index) => {
      let progress: any = 0
      await date.dates.forEach((d)=> {
        if(d.status == 'P'){
          progress = progress + 1
        }
      }) 
     this.progress.push(progress)
    })
  }
  catchDates(e: any, i: any) {
    this.MyProp.nativeElement.scrollIntoView({ behavior: "smooth", block: "start" });
    this.multiple = true
    console.log(e.payout)
    this.caught_dates = []
    this.highlighted_dates = []
    this.highlighted_dates_details = []
    this.sample_dates.forEach((sample) => {
      if (sample.payout === e.payout) {

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
        this.coordinates1 = []
        this.coordinates2 = []
        // console.log("caught dates", this.caught_dates)
       

      }
    })
    this.options3.series = [(Number(this.progress[i]) / 10) * 100];
    this.toggleShow(e.payout);
    this.myDate = new Date(this.caught_dates[0]).toISOString()
    let day = this.myDate.split(".")
    this.myDate = day[0]
  }

  toggleShow(toggle: any) {
    if (toggle == this.show_calendar) {
      // this.show_calendar = ''
    } else {
      this.show_calendar = toggle;
    }
  }

  getCoordinates(date: any, i: any) {
    let z = (new Date(date).toLocaleTimeString()).split(':')
    let a: any

    if (z[0] == '12') {
      a = 0 + (Number(z[1]) * 60)
    } else {
      a = (Number(z[0]) * 60 * 60) + (Number(z[1]) * 60)
    }
    this['coordinates' + i].push({
      x: new Date(date).toISOString(),
      y: Number(a)
    })
    // console.log(this['coordinates' + i], " mmy coords " + i)
    this.updateChart(i)
  }

  spackLine(i: any) {
    this['options' + i] = {
      chart: {
        type: 'line',
        height: 80,
        sparkline: {
          enabled: true,

        }
      },
      series: [
        // {
        //   data: [1003, 1030, 1140, 1215,1223, 1032, 1043, 1005, 1002, 1001],
        // },
      ],
      xaxis: {
        type: 'datetime',
      },
      yaxis: {
        reversed: false
      },
      stroke: {
        width: 1,
        curve: 'smooth'
      },
      markers: {
        size: 1
      },
      grid: {
        padding: {
          top: 3,
          bottom: 20
        }
      },
      colors: ['#FF6D10', '#fff', '#000'],
      tooltip: {
        enabled: false,
      }
    }
  }

  pieChart() {
    this.options3 = {
      chart: {
        height: 170,
        type: "radialBar",
      },

      series: [],
      colors: ["#20E647"],
      plotOptions: {
        radialBar: {
          track: {
            background: '#efefef',
          },
          dataLabels: {
            total: {
              show: true,
              label: ''
            },
            value: {
              formatter: function(val) {
                return parseInt(val.toString(), 10).toString();
              },
              offsetY: -7,
              color: "#111",
              fontSize: "30px",
              fontWeight: 700,
              show: true
            }
          },
          
        }
      },
      stroke: {
        lineCap: "round"
      },
    };
  }

  updateChart(i: any) {
    this['options' + i].series = [{
      data: this['coordinates' + i]
    }];
  }

 

  // ngOnInit() {
  //   this.MyProp.nativeElement.scrollIntoView({ behavior: "smooth", block: "start" });
  // }
}
