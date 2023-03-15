import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  @Input() user_profile: any;

  profileModule: any
  constructor() { }

  ngOnInit() {
    this.profileModule = ''
  }
  changeModule(mod: any) {
    this.profileModule = mod;
  }
}
