import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-employee-info',
  templateUrl: './employee-info.page.html',
  styleUrls: ['./employee-info.page.scss'],
})
export class EmployeeInfoPage implements OnInit {
  @Input() user_profile: any;

  constructor() { }

  ngOnInit() {
  }

}
