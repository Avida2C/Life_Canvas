import { Component, OnInit } from '@angular/core';
import { FileService } from '../service/file.service';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.page.html',
  styleUrls: ['./favorite.page.scss'],
})
export class FavoritePage implements OnInit {
  inspireSegment = 'affirmations';
  quotes: any | undefined;
  affirmations: any | undefined;

  constructor(private fileService: FileService) { }

  async ngOnInit() {
    this.affirmations = await this.fileService.readAffirmations();
    this.quotes = await this.fileService.readQuotes();
  }

  deleteQuote(quote: any) {
    this.fileService.deleteQuotes(quote).then(() => 
      this.fileService.readQuotes().then((value) => {
         this.quotes = value;
        }));
  }

  deleteAffirmation(affirmation: any) {
    this.fileService.deleteAffirmation(affirmation.quote).then(() => this.fileService.readAffirmations().then((value) => {
       this.affirmations = value;
    }));
  }
}
