import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.page.html',
  styleUrls: ['./news.page.scss'],
})

export class NewsPage implements OnInit {

  constructor() { }
  slider_data = [
    { 'id': 'vxi1', 'created_at':'03/03/2021', 'title': "Bain Capital", 'sub_title': "Completes acquisition of VXI Global Solutions", 'img': 'image.png', 'context': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi in sem ut lacus varius tristique a vitae sapien. Integer varius urna sit amet tellus molestie eleifend. Vivamus vel condimentum augue. Cras porttitor at sapien non fermentum. Nulla quam lectus, accumsan ac maximus eget, dapibus vitae arcu. Etiam gravida egestas erat, posuere accumsan lacus hendrerit et. Proin auctor eu ante sed dapibus. Etiam mollis pulvinar enim nec auctor. Maecenas suscipit justo a iaculis condimentum. Phasellus volutpat iaculis rutrum. Nulla tristique dui quis dui scelerisque tempus. In vitae vehicula tellus. Duis a dolor et lacus pulvinar eleifend. Curabitur a viverra nulla.', 'likes': 10, 'shares': 30, 'liked': true, 'shared': false },
    { 'id': 'vxi2', 'created_at':'08/10/2022', 'title': "VXI SM Clark", 'sub_title': "Sample Sample SampleSample Sample Sample", 'img': 'Default.png', 'context': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi in sem ut lacus varius tristique a vitae sapien. Integer varius urna sit amet tellus molestie eleifend. Vivamus vel condimentum augue. Cras porttitor at sapien non fermentum. Nulla quam lectus, accumsan ac maximus eget, dapibus vitae arcu. Etiam gravida egestas erat, posuere accumsan lacus hendrerit et. Proin auctor eu ante sed dapibus. Etiam mollis pulvinar enim nec auctor. Maecenas suscipit justo a iaculis condimentum. Phasellus volutpat iaculis rutrum. Nulla tristique dui quis dui scelerisque tempus. In vitae vehicula tellus. Duis a dolor et lacus pulvinar eleifend. Curabitur a viverra nulla.', 'likes': 20, 'shares': 40, 'liked': false, 'shared': true },
    { 'id': 'vxi3', 'created_at':'01/10/2023', 'title': "VXI India HR Touchpoint", 'sub_title': "SampleSample SampleSample Sample", 'img': 'image.png', 'context': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi in sem ut lacus varius tristique a vitae sapien. Integer varius urna sit amet tellus molestie eleifend. Vivamus vel condimentum augue. Cras porttitor at sapien non fermentum. Nulla quam lectus, accumsan ac maximus eget, dapibus vitae arcu. Etiam gravida egestas erat, posuere accumsan lacus hendrerit et. Proin auctor eu ante sed dapibus. Etiam mollis pulvinar enim nec auctor. Maecenas suscipit justo a iaculis condimentum. Phasellus volutpat iaculis rutrum. Nulla tristique dui quis dui scelerisque tempus. In vitae vehicula tellus. Duis a dolor et lacus pulvinar eleifend. Curabitur a viverra nulla.', 'likes': 30, 'shares': 50, 'liked': true, 'shared': true },
  ]
  modal_data:any = { 'id': '', 'created_at':'', 'title': '', 'sub_title': '', 'img': '', 'context': '', 'likes': 0, 'shares': 0, 'liked': false, 'shared': false };
  all: any;
  ngOnInit() {
    this.all = false
  }

  isModalOpen = false;

  setOpen(isOpen: boolean, data: any) {
    this.isModalOpen = isOpen;
    this.modal_data = data;
  }

  addMinus(x:any, y:any){
    this.modal_data[y] = !this.modal_data[y]
    if(!this.modal_data[y]){
      this.modal_data[x] = this.modal_data[x] - 1 //replace with remove to db
    }else{
      this.modal_data[x] = this.modal_data[x] + 1 //replace with add to db
    }
  }

  showAll(){
    this.all = !this.all;
    console.log('SHOW ALL');
  }
}
