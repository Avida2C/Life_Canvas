import { Component, OnInit } from '@angular/core';
import { ApisService } from '../service/apis.service';
import { FileService } from '../service/file.service';
import * as _ from 'underscore';

@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page implements OnInit {
  inspireSegment = 'affirmations';
  quotes: any | undefined;
  affirmations: any | undefined;
  savedAffirmations: any;
  savedQuotes: any;

  constructor(private apis: ApisService, private fileService: FileService) { }

  async ngOnInit() {
    this.savedAffirmations = await this.fileService.readAffirmations();
    this.savedQuotes = await this.fileService.readQuotes();
    this.apis.getQuotes().then((value) => { 
      let that = this;
      _.each(value, function(q) { if(_.some(that.savedQuotes, q.quoteText)) q.exists = true; });
      this.quotes = value;
    });
    this.apis.GetAffirmations().then((value) => {
      let that = this;
      _.each(value, function(q) { if(_.some(that.savedAffirmations, q.quote)) q.exists = true; });
      this.affirmations = value;
      });
  }

  saveQuote(quote: any) {
    this.fileService.saveQuote(quote.quoteText, quote.quoteAuthor).then(() => this.fileService.readQuotes().then((value) => {
      this.savedQuotes = value;
      this.quotes = this.quotes;
      quote.exists = true;
     }));
  }

  deleteQuote(quote: any) {
    this.fileService.deleteQuotes(quote.quoteText).then(() => 
      this.fileService.readQuotes().then((value) => {
         this.savedQuotes = value;
         quote.exists = false;
        }));
  }

  saveAffirmation(affirmation: any) {
    this.fileService.saveAffirmation(affirmation).then(() => this.fileService.readAffirmations().then((value) => {
      this.savedAffirmations = value;
      affirmation.exists = true;
    }));
  }

  deleteAffirmation(affirmation: any) {
    this.fileService.deleteAffirmation(affirmation).then(() => this.fileService.readAffirmations().then((value) => {
       this.savedAffirmations = value;
       affirmation.exists = false;
    }));
  }
}
