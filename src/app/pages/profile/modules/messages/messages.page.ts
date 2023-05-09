import { Component, OnInit, Output, EventEmitter, AfterViewChecked, ElementRef, ViewChild } from '@angular/core';
import { Preferences } from '@capacitor/preferences';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.page.html',
  styleUrls: ['./messages.page.scss'],
})
export class MessagesPage implements OnInit, AfterViewChecked {
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
  changing: boolean = false;

  constructor( private platform: Platform ) {
    this.platform.backButton.subscribeWithPriority(10, () => {
      this.back()
    });
  }

  ngAfterViewChecked() {
    if (!this.changing) {
      this.scrollToBottom();
    } else {
      this.scrollToTop();

    }
  }

  async ngOnInit() {
    this.creating = false
    this.filter = 'open'
    this.reading = false
    let Init: any = await Preferences.get({ key: 'user_profile' })
    this.user_profile = JSON.parse(Init.value)
    this.sample_msg = [
      {
        ID: '3',
        Subject: 'Mental Health Concerns',
        CreatedBy: '',
        CreatedAt: '04/15/2023',
        Status: 'open',
        messages: [
          {
            ID: '1',
            isRead: 1,
            from: this.user_profile.ID,
            to: 'HR',
            Body: 'Dear HR,\nI would like to inform you, that I am no longer fit to work in this environment for I am concerned with my mental health.\nThank you,',
            MessageID: '3',
            CreatedAt: '04/15/2023'
          },
          {
            ID: '2',
            isRead: 1,
            from: 'HR',
            to: this.user_profile.ID,
            Body: 'Dear ma\'am/sir,\nThank you for reaching out, may we ask a particular incident sparking your decision to declare not-fit-to-work?\nWe value our employees and would like to hear more about the issue.\nRegards,',
            MessageID: '3',
            CreatedAt: '04/16/2023',
          },
          {
            ID: '3',
            isRead: 1,
            from: this.user_profile.ID,
            to: 'HR',
            Body: 'Yes. But can I discuss this further in your office maam.\nThank you.',
            MessageID: '3',
            CreatedAt: '04/17/2023',
          },
          {
            ID: '4',
            isRead: 0,
            from: 'HR',
            to: this.user_profile.ID,
            Body: 'Anytime, and please always remember, you are not alone.\nThank you.',
            MessageID: '3',
            CreatedAt: '04/17/2023 10:00:00 PM',
          },
          {
            ID: '4',
            isRead: 0,
            from: 'HR',
            to: this.user_profile.ID,
            Body: 'God bless. We are excited to hear from you.',
            MessageID: '3',
            CreatedAt: '04/17/2023 10:00:00 PM',
          },
          {
            ID: '4',
            isRead: 0,
            from: 'HR',
            to: this.user_profile.ID,
            Body: 'Hello?',
            MessageID: '3',
            CreatedAt: '04/17/2023 10:12:00 PM',
          },
        ]
      },
      {
        ID: '2',
        Subject: 'Welcome to VXI!',
        CreatedBy: '',
        CreatedAt: '04/14/2023',
        Status: 'open',
        messages: [
          {
            ID: '1',
            isRead: 1,
            from: 'HR',
            to: this.user_profile.ID,
            Body: 'Welcome to VXI ma\'am/sir,\nWe would like to congratulate you on your new journey! And we wish you luck on your past endeavors.',
            MessageID: '2',
            CreatedAt: '04/14/2023'
          }
        ]
      },
      {
        ID: '1',
        Subject: 'Interview - Feb 18, 2023',
        CreatedBy: '',
        CreatedAt: '02/10/2023',
        Status: 'resolved',
        messages: [
          {
            ID: '1',
            isRead: 1,
            from: 'HR',
            to: this.user_profile.ID,
            Body: 'Welcome to VXI ma\'am/sir,\nWe would like to invite to a scheduled face-to-face interview this February 18, 2023.\nThank you,',
            MessageID: '1',
            CreatedAt: '02/10/2023'
          }
        ]
      },
      {
        ID: '1',
        Subject: 'Interview - Feb 18, 2023',
        CreatedBy: '',
        CreatedAt: '02/10/2023',
        Status: 'resolved',
        messages: [
          {
            ID: '1',
            isRead: 1,
            from: 'HR',
            to: this.user_profile.ID,
            Body: 'Welcome to VXI ma\'am/sir,\nWe would like to invite to a scheduled face-to-face interview this February 18, 2023.\nThank you,',
            MessageID: '1',
            CreatedAt: '02/10/2023'
          }
        ]
      },
      {
        ID: '1',
        Subject: 'Interview - Feb 18, 2023',
        CreatedBy: '',
        CreatedAt: '02/10/2023',
        Status: 'resolved',
        messages: [
          {
            ID: '1',
            isRead: 1,
            from: 'HR',
            to: this.user_profile.ID,
            Body: 'Welcome to VXI ma\'am/sir,\nWe would like to invite to a scheduled face-to-face interview this February 18, 2023.\nThank you,',
            MessageID: '1',
            CreatedAt: '02/10/2023'
          }
        ]
      },
      {
        ID: '1',
        Subject: 'Interview - Feb 18, 2023',
        CreatedBy: '',
        CreatedAt: '02/10/2023',
        Status: 'resolved',
        messages: [
          {
            ID: '1',
            isRead: 1,
            from: 'HR',
            to: this.user_profile.ID,
            Body: 'Welcome to VXI ma\'am/sir,\nWe would like to invite to a scheduled face-to-face interview this February 18, 2023.\nThank you,',
            MessageID: '1',
            CreatedAt: '02/10/2023'
          }
        ]
      },
      {
        ID: '1',
        Subject: 'Interview - Feb 18, 2023',
        CreatedBy: '',
        CreatedAt: '02/10/2023',
        Status: 'resolved',
        messages: [
          {
            ID: '1',
            isRead: 1,
            from: 'HR',
            to: this.user_profile.ID,
            Body: 'Welcome to VXI ma\'am/sir,\nWe would like to invite to a scheduled face-to-face interview this February 18, 2023.\nThank you,',
            MessageID: '1',
            CreatedAt: '02/10/2023'
          }
        ]
      },
      {
        ID: '1',
        Subject: 'Interview - Feb 18, 2023',
        CreatedBy: '',
        CreatedAt: '02/10/2023',
        Status: 'resolved',
        messages: [
          {
            ID: '1',
            isRead: 1,
            from: 'HR',
            to: this.user_profile.ID,
            Body: 'Welcome to VXI ma\'am/sir,\nWe would like to invite to a scheduled face-to-face interview this February 18, 2023.\nThank you,',
            MessageID: '1',
            CreatedAt: '02/10/2023'
          }
        ]
      },
      {
        ID: '1',
        Subject: 'Interview - Feb 18, 2023',
        CreatedBy: '',
        CreatedAt: '02/10/2023',
        Status: 'resolved',
        messages: [
          {
            ID: '1',
            isRead: 1,
            from: 'HR',
            to: this.user_profile.ID,
            Body: 'Welcome to VXI ma\'am/sir,\nWe would like to invite to a scheduled face-to-face interview this February 18, 2023.\nThank you,',
            MessageID: '1',
            CreatedAt: '02/10/2023'
          }
        ]
      },
      {
        ID: '1',
        Subject: 'Interview - Feb 18, 2023',
        CreatedBy: '',
        CreatedAt: '02/10/2023',
        Status: 'resolved',
        messages: [
          {
            ID: '1',
            isRead: 1,
            from: 'HR',
            to: this.user_profile.ID,
            Body: 'Welcome to VXI ma\'am/sir,\nWe would like to invite to a scheduled face-to-face interview this February 18, 2023.\nThank you,',
            MessageID: '1',
            CreatedAt: '02/10/2023'
          }
        ]
      },
      {
        ID: '1',
        Subject: 'Interview - Feb 18, 2023',
        CreatedBy: '',
        CreatedAt: '02/10/2023',
        Status: 'resolved',
        messages: [
          {
            ID: '1',
            isRead: 1,
            from: 'HR',
            to: this.user_profile.ID,
            Body: 'Welcome to VXI ma\'am/sir,\nWe would like to invite to a scheduled face-to-face interview this February 18, 2023.\nThank you,',
            MessageID: '1',
            CreatedAt: '02/10/2023'
          }
        ]
      },
      {
        ID: '1',
        Subject: 'Interview - Feb 19, 2023',
        CreatedBy: '',
        CreatedAt: '02/10/2023',
        Status: 'resolved',
        messages: [
          {
            ID: '1',
            isRead: 1,
            from: 'HR',
            to: this.user_profile.ID,
            Body: 'Welcome to VXI ma\'am/sir,\nWe would like to invite to a scheduled face-to-face interview this February 18, 2023.\nThank you,',
            MessageID: '1',
            CreatedAt: '02/10/2023'
          }
        ]
      },
      {
        Status: 'resolved',
        messages: [{ Body: 'hide' }]
      },
      {
        Status: 'open',
        messages: [{ Body: 'hide' }]
      },
      {
        Status: 'all',
        messages: [{ Body: 'hide' }]
      }

    ]
  }

  changeFilter(filter: any) {
    this.changing = true;
    this.filter = filter
    this.scrollToTop()
  }

  read(msg: any, i: any) {
    this.reading = true
    this.sub_profile.emit('reading');
    this.open_message = msg
    if (this.user_profile.ID != this.sample_msg[i].messages[this.sample_msg[i].messages.length - 1].from) {
      this.changing = false

      // this.scrollToBottom();
      this.sample_msg[i].messages[this.sample_msg[i].messages.length - 1].isRead = 1
    }

  }

  reply() {
    let msg =
    {
      ID: '1',
      isRead: 0,
      from: this.user_profile.ID,
      to: 'HR',
      Body: this.reply_msg,
      MessageID: this.open_message.ID,
      CreatedAt: new Date()
    }
    console.log(this.open_message)
    this.open_message.messages.push(msg)
    this.reply_msg = null
    this.changing = false
    this.scrollToBottom();
  }

  create() {
    this.changing = false
    this.creating = true
    this.body_line = "Dear HR,\n"
  }

  submit() {
    let msg = {
      ID: '10',
      Subject: this.subject_line,
      CreatedBy: '',
      CreatedAt: new Date(),
      Status: 'open',
      messages: []
    }

    msg.messages.push({
      ID: '15',
      isRead: 0,
      from: this.user_profile.ID,
      to: 'HR',
      Body: this.body_line,
      MessageID: '10',
      CreatedAt: new Date()
    });
    this.sample_msg.unshift(msg)
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
  }

  scrollToBottom(): void {
    try {
      this.myScrollContainer.nativeElement.scrollTop = this.myScrollContainer.nativeElement.scrollHeight;
    } catch (err) { }
  }

  scrollToTop(): void {
    console.log("try top")
    try {
      this.myScrollContainer.nativeElement.scrollTop = 0;
    } catch (err) { }
  }
}
