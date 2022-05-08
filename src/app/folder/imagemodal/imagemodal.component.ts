import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-imagemodal',
  templateUrl: './imagemodal.component.html',
  styleUrls: ['./imagemodal.component.scss'],
})
export class ImagemodalComponent implements OnInit {
  constructor(private modalCtrl: ModalController) {}
  image: string;

  ngOnInit() {}

  onClose() {
    this.modalCtrl.dismiss();
  }
}
