import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  theme: any
  user_profile: any
  constructor(private menu: MenuController) {}

  ngOnInit() {
    this.theme = ''
    this.user_profile = {
      hrid:'4225726',
      first_name:'Raniel Denice',
      middle_name:'Nucum',
      last_name:'Marpuri',
      position:'Innovation Specialist',
      department:'Sup',
      region: 'PH',
      team: 'INNOVATION AND TECHNOLOGY',
      sv_id: '123123',
      site:'VXI Clark, Pampanga',
      hire_date: '02/17/2023',
      gender: 'Male',
      sss: '1234567',
      tin: '12345898',
      phic: '13345'
    }
  }
  changeTheme(layout: any){
    this.theme = layout
    this.menuClose()
  }

  menuClose() {
    this.menu.close();
    }
}
