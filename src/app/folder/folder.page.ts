import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Content } from '../models/content.model';
import { ContentService } from '../services/content.service';

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
    private contentService: ContentService
  ) {}

  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id');
    this.thisContent = this.contentService.getContent(this.folder);
  }
}
