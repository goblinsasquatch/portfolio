import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FolderPageRoutingModule } from './folder-routing.module';

import { FolderPage } from './folder.page';
import { ImagemodalComponent } from './imagemodal/imagemodal.component';
import { PdpComponent } from './pdp/pdp.component';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, FolderPageRoutingModule],
  declarations: [FolderPage, ImagemodalComponent, PdpComponent],
})
export class FolderPageModule {}
