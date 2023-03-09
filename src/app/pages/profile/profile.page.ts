import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  @Input() user_profile: any;

  module: any
  constructor() { }

  ngOnInit() {
    this.module = ''
  }

  changeModule(mod: any) {
    this.module = mod;
  }
}
