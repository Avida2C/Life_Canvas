import { Component, OnInit } from '@angular/core';
import { ApisService } from '../service/apis.service';
import { FileService } from '../service/file.service';

@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page implements OnInit {
  inspireSegment = 'affirmations';
  quotes: Promise<any> | undefined;
  affirmations: Promise<any> | undefined;

  constructor(private apis: ApisService, private fileService: FileService) { }

  ngOnInit() {
     this.quotes = this.apis.getQuotes();
     this.affirmations = this.apis.GetAffirmations();
  }

}
