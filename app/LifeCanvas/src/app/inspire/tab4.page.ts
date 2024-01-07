/**
 * Represents an Angular component that implements the OnInit interface.
 * @module @angular/core
 * @class Component
 * @implements OnInit
 */
import { Component, OnInit } from '@angular/core';
/**
 * Imports the ApisService from the '../service/apis.service' module.
 * @returns The ApisService object.
 */
import { ApisService } from '../service/apis.service';
/**
 * Imports the FileService from the '../service/file.service' module.
 * @returns The FileService object.
 */
import { FileService } from '../service/file.service';
/**
 * Import the entire underscore library and assign it to the variable '_'.
 * This allows you to use all the functions and utilities provided by underscore.
 */
import * as _ from 'underscore';

@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page implements OnInit {
  /**
   * Represents a segment of inspiration, such as affirmations or quotes.
   * @property {string} inspireSegment - The segment of inspiration, such as "affirmations".
   * @property {any | undefined} quotes - The quotes associated with the inspiration segment.
   * @property {any | undefined} affirmations - The affirmations associated with the inspiration segment.
   * @property {any} savedAffirmations - The saved affirmations for the inspiration segment.
   * @property {any} savedQuotes - The saved quotes for the inspiration segment.
   */
  inspireSegment = 'affirmations';
  quotes: any | undefined;
  affirmations: any | undefined;
  savedAffirmations: any;
  savedQuotes: any;

  /**
   * Constructs a new instance of the class.
   * @param {ApisService} apis - The ApisService instance to use.
   * @param {FileService} fileService - The FileService instance to use.
   */
  constructor(private apis: ApisService, private fileService: FileService) { }

  /**
   * Initializes the component by fetching saved affirmations and quotes from the file service,
   * and fetching quotes and affirmations from the APIs. It then updates the component's state
   * with the fetched data.
   * @returns None
   */
  async ngOnInit() {
    this.savedAffirmations = await this.fileService.readAffirmations();
    this.savedQuotes = await this.fileService.readQuotes();
    this.apis.getQuotes().then((value) => { 
      let that = this;
      /**
       * Iterates over each element in the `value` array and checks if the `quoteText` property of each element exists in the `savedQuotes` array. 
       * If a match is found, the `exists` property of the element is set to `true`.
       * @param {Array} value - The array of elements to iterate over.
       * @returns None
       */
      _.each(value, function(q) { if(_.some(that.savedQuotes, q.quoteText)) q.exists = true; });
      this.quotes = value;
    });
    /**
     * Retrieves affirmations from the API and updates the component's state with the retrieved data.
     * @returns None
     */
    this.apis.GetAffirmations().then((value) => {
      let that = this;
      _.each(value, function(q) { if(_.some(that.savedAffirmations, q.quote)) q.exists = true; });
      this.affirmations = value;
      });
  }

  /**
   * Saves a quote to the file system.
   * @param {any} quote - The quote object to be saved.
   * @returns None
   */
  saveQuote(quote: any) {
    this.fileService.saveQuote(quote.quoteText, quote.quoteAuthor).then(() => this.fileService.readQuotes().then((value) => {
      this.savedQuotes = value;
      this.quotes = this.quotes;
      quote.exists = true;
     }));
  }

  /**
   * Deletes a quote from the list of saved quotes.
   * @param {any} quote - The quote object to delete.
   * @returns None
   */
  deleteQuote(quote: any) {
    this.fileService.deleteQuotes(quote.quoteText).then(() => 
      this.fileService.readQuotes().then((value) => {
         this.savedQuotes = value;
         quote.exists = false;
        }));
  }

  /**
   * Saves an affirmation to the file service and updates the list of saved affirmations.
   * @param {any} affirmation - The affirmation to save.
   * @returns None
   */
  saveAffirmation(affirmation: any) {
    this.fileService.saveAffirmation(affirmation).then(() => this.fileService.readAffirmations().then((value) => {
      this.savedAffirmations = value;
      affirmation.exists = true;
    }));
  }

  /**
   * Deletes an affirmation from the list of saved affirmations.
   * @param {any} affirmation - The affirmation object to delete.
   * @returns None
   */
  deleteAffirmation(affirmation: any) {
    this.fileService.deleteAffirmation(affirmation).then(() => this.fileService.readAffirmations().then((value) => {
       this.savedAffirmations = value;
       affirmation.exists = false;
    }));
  }
}
