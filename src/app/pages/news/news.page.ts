import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AlertController, Platform } from '@ionic/angular';

@Component({
  selector: 'app-news',
  templateUrl: './news.page.html',
  styleUrls: ['./news.page.scss'],
})

export class NewsPage implements OnInit {

  constructor(private http: HttpClient, private platform: Platform, private alertController: AlertController) {
    // this.platform.backButton.subscribeWithPriority(1, () => {

    //   this.setOpen(false, [])
    // });
  }
  public slider_data: any
  modal_data: any
  all: any;
  today = new Date().toLocaleDateString('en-GB');;
  async alertCreate(h: any, sh: any, m: any, b: any) {
    let alert = await this.alertController.create({
      header: h,
      subHeader: sh,
      message: m,
      buttons: [b],
    });
    await alert.present();
  }

  ngOnInit() {
    this.all = false
    this.fetchNews()
  }

  isModalOpen = false;
  changeback(isOpen: boolean){
    this.isModalOpen = isOpen;
  }
  setOpen(isOpen: boolean, data: any) {
    let cat = isOpen;
    isOpen = !isOpen;
    this.modal_data = []
    // this.isModalOpen = true;
    this.changeback(false);
 //   this.alertCreate(this.isModalOpen,  '', '', 'OK');
    this.isModalOpen = cat;
    this.modal_data = data;
    
    this.initSlideLNS();

  }

  addMinus(x: any, y: any) {
    this.modal_data[y] = !this.modal_data[y]
    if (!this.modal_data[y]) {
      this.modal_data[x] = this.modal_data[x] - 1 //replace with remove to db
    } else {
      this.modal_data[x] = this.modal_data[x] + 1 //replace with add to db
    }
  }

  slideOptsOne = {
    initialSlide: 0,
    slidesPerView: 1,
    loop: true,
    autoplay: true,
    autoplayDisableOnInteraction: false
  };

  showAll() {
    this.all = !this.all;
    console.log('SHOW ALL');
  }

  initSlideLNS() {
    this.modal_data.likes = 0;
    this.modal_data.liked = false;
    this.modal_data.shares = 0;
    this.modal_data.shared = false;
  }

  fetchNews() {
    let url = 'https://vxione.com/ems_api/API/ManageNews/Index'
    this.http.get(url).subscribe({
      next: (data: any) => {
        this.slider_data = data;

        console.log(data, "slider data");
      },
      error: err => {
        console.log(err);
        //  this.alertCreate('ERROR', 'Cant Connect to Server', JSON.stringify(err), 'Cancel');
        // this.loading = false;
      },

    });
  }
}
