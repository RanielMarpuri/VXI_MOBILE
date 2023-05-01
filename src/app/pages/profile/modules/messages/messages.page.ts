import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Preferences } from '@capacitor/preferences';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.page.html',
  styleUrls: ['./messages.page.scss'],
})
export class MessagesPage implements OnInit {
  @Output() sub_profile = new EventEmitter<string>();
  filter: any;
  reading: any
  open_message: any
  user_profile: any
  sample_msg: any = [
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
        {
          ID: '5',
          isRead: 0,
          from: '4225726',
          to: 'HR',
          Body: 'Thank you.',
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
  constructor() { }

  async ngOnInit() {
    this.filter = 'all'
    this.reading = false
    let Init: any = await Preferences.get({ key: 'user_profile' })
    this.user_profile = JSON.parse(Init.value)
  }

  changeFilter(filter: any) {
    this.filter = filter
  }

  read(msg: any, i: any) {
    this.reading = true
    this.sub_profile.emit('reading');
    this.open_message = msg
    this.sample_msg[i].messages.forEach(msg => {
      msg.isRead = 1
    });
  }

  back(){
    this.reading = false
    this.sub_profile.emit('');
  }
}