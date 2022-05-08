import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { Content } from '../models/content.model';
import { ContentService } from '../services/content.service';
import { ImagemodalComponent } from './imagemodal/imagemodal.component';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {
  public folder: string;
  public thisContent: Content[];

  constructor(
    private activatedRoute: ActivatedRoute,
    private contentService: ContentService,
    private modalCtrl: ModalController
  ) {}

  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id');
    this.thisContent = this.contentService.getContent(this.folder);
  }

  onImageClick(image: string) {
    this.modalCtrl
      .create({
        component: ImagemodalComponent,
        componentProps: { image: image },
        cssClass: 'modal-fullscreen',
      })
      .then((modalEl) => {
        modalEl.present();
      });
  }
}
