import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit, Output, EventEmitter, AfterViewChecked, ElementRef, ViewChild, OnDestroy } from '@angular/core';
import { Preferences } from '@capacitor/preferences';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.page.html',
  styleUrls: ['./messages.page.scss'],
})
export class MessagesPage implements OnInit, AfterViewChecked, OnDestroy {
  @ViewChild('scrollMe') private myScrollContainer: ElementRef;
  @Output() sub_profile = new EventEmitter<string>();
  filter: any;
  reading: any
  creating: any
  subject_line: any
  body_line: any
  open_message: any = []
  user_profile: any
  sample_msg: any
  reply_msg: any
  today = new Date();
  changing: any;
  event: any
  distro: any;
  constructor(private platform: Platform, private http: HttpClient) {
    this.event = this.platform.backButton.subscribeWithPriority(10, () => {
      this.back()
    });
  }

  ngAfterViewChecked() {
    if (this.changing == false) {
      this.scrollToBottom();
    } else if (this.changing == true) {
      this.scrollToTop();
    }
  }

  ngOnDestroy() {
    // Remove the event listener when component is destroyed
    if (this.event) {
      this.event.remove();
    }
  }
  async ngOnInit() {
    this.distro = '4221541';
    this.creating = false
    this.filter = 'open'
    this.reading = false
    let Init: any = await Preferences.get({ key: 'user_profile' })
    this.user_profile = JSON.parse(Init.value)
    // this.sample_msg = [
    //   {
    //     ID: '3',
    //     Subject: 'Mental Health Concerns',
    //     CreatedBy: '',
    //     CreatedAt: '04/15/2023',
    //     Status: 'open',
    //     messages: [
    //       {
    //         ID: '1',
    //         isRead: 1,
    //         from: this.user_profile.ID,
    //         to: 'HR',
    //         Body: 'Dear HR,\nI would like to inform you, that I am no longer fit to work in this environment for I am concerned with my mental health.\nThank you,',
    //         MessageID: '3',
    //         CreatedAt: '04/15/2023'
    //       },
    //       {
    //         ID: '2',
    //         isRead: 1,
    //         from: 'HR',
    //         to: this.user_profile.ID,
    //         Body: 'Dear ma\'am/sir,\nThank you for reaching out, may we ask a particular incident sparking your decision to declare not-fit-to-work?\nWe value our employees and would like to hear more about the issue.\nRegards,',
    //         MessageID: '3',
    //         CreatedAt: '04/16/2023',
    //       },
    //       {
    //         ID: '3',
    //         isRead: 1,
    //         from: this.user_profile.ID,
    //         to: 'HR',
    //         Body: 'Yes. But can I discuss this further in your office maam.\nThank you.',
    //         MessageID: '3',
    //         CreatedAt: '04/17/2023',
    //       },
    //       {
    //         ID: '4',
    //         isRead: 0,
    //         from: 'HR',
    //         to: this.user_profile.ID,
    //         Body: 'Anytime, and please always remember, you are not alone.\nThank you.',
    //         MessageID: '3',
    //         CreatedAt: '04/17/2023 10:00:00 PM',
    //       },
    //       {
    //         ID: '4',
    //         isRead: 0,
    //         from: 'HR',
    //         to: this.user_profile.ID,
    //         Body: 'God bless. We are excited to hear from you.',
    //         MessageID: '3',
    //         CreatedAt: '04/17/2023 10:00:00 PM',
    //       },
    //       {
    //         ID: '4',
    //         isRead: 0,
    //         from: 'HR',
    //         to: this.user_profile.ID,
    //         Body: 'Hello?',
    //         MessageID: '3',
    //         CreatedAt: '04/17/2023 10:12:00 PM',
    //       },
    //     ]
    //   },
    //   {
    //     ID: '2',
    //     Subject: 'Welcome to VXI!',
    //     CreatedBy: '',
    //     CreatedAt: '04/14/2023',
    //     Status: 'open',
    //     messages: [
    //       {
    //         ID: '1',
    //         isRead: 1,
    //         from: 'HR',
    //         to: this.user_profile.ID,
    //         Body: 'Welcome to VXI ma\'am/sir,\nWe would like to congratulate you on your new journey! And we wish you luck on your past endeavors.',
    //         MessageID: '2',
    //         CreatedAt: '04/14/2023'
    //       }
    //     ]
    //   },
    //   {
    //     ID: '1',
    //     Subject: 'Interview - Feb 18, 2023',
    //     CreatedBy: '',
    //     CreatedAt: '02/10/2023',
    //     Status: 'resolved',
    //     messages: [
    //       {
    //         ID: '1',
    //         isRead: 1,
    //         from: 'HR',
    //         to: this.user_profile.ID,
    //         Body: 'Welcome to VXI ma\'am/sir,\nWe would like to invite to a scheduled face-to-face interview this February 18, 2023.\nThank you,',
    //         MessageID: '1',
    //         CreatedAt: '02/10/2023'
    //       }
    //     ]
    //   },
    //   {
    //     ID: '1',
    //     Subject: 'Interview - Feb 18, 2023',
    //     CreatedBy: '',
    //     CreatedAt: '02/10/2023',
    //     Status: 'resolved',
    //     messages: [
    //       {
    //         ID: '1',
    //         isRead: 1,
    //         from: 'HR',
    //         to: this.user_profile.ID,
    //         Body: 'Welcome to VXI ma\'am/sir,\nWe would like to invite to a scheduled face-to-face interview this February 18, 2023.\nThank you,',
    //         MessageID: '1',
    //         CreatedAt: '02/10/2023'
    //       }
    //     ]
    //   },
    //   {
    //     ID: '1',
    //     Subject: 'Interview - Feb 18, 2023',
    //     CreatedBy: '',
    //     CreatedAt: '02/10/2023',
    //     Status: 'resolved',
    //     messages: [
    //       {
    //         ID: '1',
    //         isRead: 1,
    //         from: 'HR',
    //         to: this.user_profile.ID,
    //         Body: 'Welcome to VXI ma\'am/sir,\nWe would like to invite to a scheduled face-to-face interview this February 18, 2023.\nThank you,',
    //         MessageID: '1',
    //         CreatedAt: '02/10/2023'
    //       }
    //     ]
    //   },
    //   {
    //     ID: '1',
    //     Subject: 'Interview - Feb 18, 2023',
    //     CreatedBy: '',
    //     CreatedAt: '02/10/2023',
    //     Status: 'resolved',
    //     messages: [
    //       {
    //         ID: '1',
    //         isRead: 1,
    //         from: 'HR',
    //         to: this.user_profile.ID,
    //         Body: 'Welcome to VXI ma\'am/sir,\nWe would like to invite to a scheduled face-to-face interview this February 18, 2023.\nThank you,',
    //         MessageID: '1',
    //         CreatedAt: '02/10/2023'
    //       }
    //     ]
    //   },
    //   {
    //     ID: '1',
    //     Subject: 'Interview - Feb 18, 2023',
    //     CreatedBy: '',
    //     CreatedAt: '02/10/2023',
    //     Status: 'resolved',
    //     messages: [
    //       {
    //         ID: '1',
    //         isRead: 1,
    //         from: 'HR',
    //         to: this.user_profile.ID,
    //         Body: 'Welcome to VXI ma\'am/sir,\nWe would like to invite to a scheduled face-to-face interview this February 18, 2023.\nThank you,',
    //         MessageID: '1',
    //         CreatedAt: '02/10/2023'
    //       }
    //     ]
    //   },
    //   {
    //     ID: '1',
    //     Subject: 'Interview - Feb 18, 2023',
    //     CreatedBy: '',
    //     CreatedAt: '02/10/2023',
    //     Status: 'resolved',
    //     messages: [
    //       {
    //         ID: '1',
    //         isRead: 1,
    //         from: 'HR',
    //         to: this.user_profile.ID,
    //         Body: 'Welcome to VXI ma\'am/sir,\nWe would like to invite to a scheduled face-to-face interview this February 18, 2023.\nThank you,',
    //         MessageID: '1',
    //         CreatedAt: '02/10/2023'
    //       }
    //     ]
    //   },
    //   {
    //     ID: '1',
    //     Subject: 'Interview - Feb 18, 2023',
    //     CreatedBy: '',
    //     CreatedAt: '02/10/2023',
    //     Status: 'resolved',
    //     messages: [
    //       {
    //         ID: '1',
    //         isRead: 1,
    //         from: 'HR',
    //         to: this.user_profile.ID,
    //         Body: 'Welcome to VXI ma\'am/sir,\nWe would like to invite to a scheduled face-to-face interview this February 18, 2023.\nThank you,',
    //         MessageID: '1',
    //         CreatedAt: '02/10/2023'
    //       }
    //     ]
    //   },
    //   {
    //     ID: '1',
    //     Subject: 'Interview - Feb 18, 2023',
    //     CreatedBy: '',
    //     CreatedAt: '02/10/2023',
    //     Status: 'resolved',
    //     messages: [
    //       {
    //         ID: '1',
    //         isRead: 1,
    //         from: 'HR',
    //         to: this.user_profile.ID,
    //         Body: 'Welcome to VXI ma\'am/sir,\nWe would like to invite to a scheduled face-to-face interview this February 18, 2023.\nThank you,',
    //         MessageID: '1',
    //         CreatedAt: '02/10/2023'
    //       }
    //     ]
    //   },
    //   {
    //     ID: '1',
    //     Subject: 'Interview - Feb 18, 2023',
    //     CreatedBy: '',
    //     CreatedAt: '02/10/2023',
    //     Status: 'resolved',
    //     messages: [
    //       {
    //         ID: '1',
    //         isRead: 1,
    //         from: 'HR',
    //         to: this.user_profile.ID,
    //         Body: 'Welcome to VXI ma\'am/sir,\nWe would like to invite to a scheduled face-to-face interview this February 18, 2023.\nThank you,',
    //         MessageID: '1',
    //         CreatedAt: '02/10/2023'
    //       }
    //     ]
    //   },
    //   {
    //     ID: '1',
    //     Subject: 'Interview - Feb 19, 2023',
    //     CreatedBy: '',
    //     CreatedAt: '02/10/2023',
    //     Status: 'resolved',
    //     messages: [
    //       {
    //         ID: '1',
    //         isRead: 1,
    //         from: 'HR',
    //         to: this.user_profile.ID,
    //         Body: 'Welcome to VXI ma\'am/sir,\nWe would like to invite to a scheduled face-to-face interview this February 18, 2023.\nThank you,',
    //         MessageID: '1',
    //         CreatedAt: '02/10/2023'
    //       }
    //     ]
    //   },
    //   {
    //     Status: 'resolved',
    //     messages: [{ Body: 'hide' }]
    //   },
    //   {
    //     Status: 'open',
    //     messages: [{ Body: 'hide' }]
    //   },
    //   {
    //     Status: 'all',
    //     messages: [{ Body: 'hide' }]
    //   }

    // ]

    const header = new HttpHeaders()

    header.append('Accept', 'application/json');
    header.append('Access-Control-Allow-Headers', 'content-type');
    header.append('Access-Control-Allow-Methods', 'OPTIONS, POST, GET');
    header.append('Access-Control-Allow-Origin', '*');

    const options: any = {
      headers: header,
    };

    let url = 'https://vxione.com/ems_api/API/TikTalk/GetAllMessages?Hrid=' + this.user_profile.Hrid//CLOUD API

    this.http.get(url, options).subscribe({
      next: (data: any) => {
        this.sample_msg = data
        console.log(this.sample_msg)
      },
      error: err => {
        console.log(err);
      },

    })
  }

  changeFilter(filter: any) {
    this.changing = true;
    this.filter = filter
    // this.scrollToTop()
  }

  read(msg: any, i: any) {
    this.changing = false
    this.reading = true
    this.sub_profile.emit('reading');
    this.open_message = msg
    //console.log(this.open_message, this.reading, this.sample_msg[i].Messages[this.sample_msg[i].Messages.length - 1].Sender)
    if (this.user_profile.Hrid != this.sample_msg[i].Messages[this.sample_msg[i].Messages.length - 1].Sender) {
      this.changing = false

      // this.scrollToBottom();
      this.sample_msg[i].Messages[this.sample_msg[i].Messages.length - 1].isRead = 1
    }

  }

  reply() {
    let msg =
    {
      isRead: 0,
      Sender: this.user_profile.Hrid,
      Recipient: 'HR',
      Body: this.reply_msg,
      TikTalkId: this.open_message.Id,
      CreatedAt: new Date()
    }

    const header = new HttpHeaders()

    header.append('Accept', 'application/json');
    header.append('Access-Control-Allow-Headers', 'content-type');
    header.append('Access-Control-Allow-Methods', 'OPTIONS, POST, GET');
    header.append('Access-Control-Allow-Origin', '*');

    const options: any = {
      headers: header,
    };

    let url = 'https://vxione.com/ems_api/API/TikTalk/Messaging' //CLOUD API

    this.http.post(url, msg, options).subscribe({
      next: (data: any) => {

        let url = 'https://vxione.com/ems_api/API/TikTalk/GetAllMessages?Hrid=' + this.user_profile.Hrid//CLOUD API

        this.http.get(url, options).subscribe({
          next: (data: any) => {
            this.sample_msg = data
            console.log(this.sample_msg)
          },
          error: err => {
            console.log(err);
          },

        })

      },
      error: err => {
        console.log(err);
      },

    })

    console.log(this.open_message)
    this.open_message.Messages.push(msg)
    this.reply_msg = null
    this.changing = false
    this.scrollToBottom();
  }

  create() {
    this.changing = true
    this.creating = true
    this.body_line = "Dear HR,\n"
  }

  submit() {
    let msg = {
      Subject: this.subject_line,
      Status: "Open",
      CreatedBy: this.user_profile.Hrid,
      SentTo: this.distro,
      Sender: this.user_profile.Hrid,
      TikTalkId: "null",
      Recipient: "GC",
      Body: this.body_line,
      IsRead: false,
      // CreatedAt: new Date(),
    }

    const header = new HttpHeaders()

    header.append('Accept', 'application/json');
    header.append('Access-Control-Allow-Headers', 'content-type');
    header.append('Access-Control-Allow-Methods', 'OPTIONS, POST, GET');
    header.append('Access-Control-Allow-Origin', '*');

    const options: any = {
      headers: header,
    };

    let url = 'https://vxione.com/ems_api/API/TikTalk/Messaging' //CLOUD API

    this.http.post(url, msg, options).subscribe({
      next: (data: any) => {

        let url = 'https://vxione.com/ems_api/API/TikTalk/GetAllMessages?Hrid=' + this.user_profile.Hrid//CLOUD API

        this.http.get(url, options).subscribe({
          next: (data: any) => {
            this.sample_msg = data
            console.log(this.sample_msg)
          },
          error: err => {
            console.log(err);
          },

        })

      },
      error: err => {
        console.log(err);
      },

    })

    // this.sample_msg.unshift(msg)
    // this.open_message.push(msg)
    this.creating = false
    this.changing = true
    this.subject_line = null
    this.body_line = null
    this.scrollToTop()
  }

  back() {
    this.reading = false
    this.creating = false
    this.sub_profile.emit('');
    this.scrollToTop()
    this.subject_line = null
    this.body_line = null
    this.reply_msg = null
    this.changing = true
  }

  scrollToBottom(): void {
    try {
      this.myScrollContainer.nativeElement.scrollTop = this.myScrollContainer.nativeElement.scrollHeight;
      //this.changing = '';
    } catch (err) { }
  }

  scrollToTop(): void {
    try {
      this.myScrollContainer.nativeElement.scrollTop = 0;
     // this.changing = '';
    } catch (err) { }
  }
}
