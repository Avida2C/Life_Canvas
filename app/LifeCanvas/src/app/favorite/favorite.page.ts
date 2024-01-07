/**
 * Represents a component that is initialized when the Angular application starts.
 * @class
 * @implements {OnInit}
 */
import { Component, OnInit } from '@angular/core';
/**
 * Imports the FileService from the '../service/file.service' module.
 * @returns The FileService object.
 */
import { FileService } from '../service/file.service';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.page.html',
  styleUrls: ['./favorite.page.scss'],
})
/**
 * Represents a favorite page component that displays quotes and affirmations.
 * @class FavoritePage
 * @implements {OnInit}
 */
export class FavoritePage implements OnInit {
  /**
   * The segment that is currently being inspired. 
   * @type {string}
   */
  inspireSegment = 'affirmations';
  /**
   * The quotes property of an object.
   * @type {any | undefined}
   */
  quotes: any | undefined;
  /**
   * An optional property that represents a collection of affirmations.
   * @type {any | undefined}
   */
  affirmations: any | undefined;

  /**
   * Creates a new instance of the class.
   * @param {FileService} fileService - The file service used by the class.
   */
  constructor(private fileService: FileService) { }

  /**
   * Initializes the component by reading affirmations and quotes from the file service.
   * @returns None
   */
  async ngOnInit() {
    this.affirmations = await this.fileService.readAffirmations();
    this.quotes = await this.fileService.readQuotes();
  }

  /**
   * Deletes a quote from the file service and updates the list of quotes.
   * @param {any} quote - The quote to be deleted.
   * @returns None
   */
  deleteQuote(quote: any) {
    this.fileService.deleteQuotes(quote).then(() => 
      this.fileService.readQuotes().then((value) => {
         this.quotes = value;
        }));
  }

  /**
   * Deletes an affirmation from the file service and updates the list of affirmations.
   * @param {any} affirmation - The affirmation to delete.
   * @returns None
   */
  deleteAffirmation(affirmation: any) {
    this.fileService.deleteAffirmation(affirmation.quote).then(() => this.fileService.readAffirmations().then((value) => {
       this.affirmations = value;
    }));
  }
}
