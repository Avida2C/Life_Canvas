/**
 * Represents an Angular component that implements the OnInit interface.
 * @module Component
 * @implements OnInit
 * @class
 */
import { Component, OnInit } from '@angular/core';
/**
 * Import the `ActivatedRoute` and `Router` modules from the `@angular/router` package.
 */
import { ActivatedRoute, Router } from '@angular/router';
/**
 * Imports the FileService from the '../service/file.service' module.
 * @returns The FileService object.
 */
import { FileService } from '../service/file.service';
/**
 * Import the entire underscore library and assign it to the variable '_'.
 * This allows you to use all the functions provided by the underscore library.
 */
import * as _ from 'underscore';

@Component({
  selector: 'app-journal',
  templateUrl: './journal.page.html',
  styleUrls: ['./journal.page.scss'],
})
export class JournalPage implements OnInit {

  /**
   * Represents a journal entry.
   * @property {string} title - The title of the journal entry.
   * @property {string} noteContent - The content of the journal entry.
   * @property {string} id - The unique identifier of the journal entry.
   * @property {Date} date - The date of the journal entry.
   */
  public title: string = 'Journal';
  public noteContent: string;
  public id: string;
  public date: Date;
  /**
   * Constructs a new instance of the class.
   * @param {ActivatedRoute} route - The ActivatedRoute instance.
   * @param {Router} router - The Router instance.
   * @param {FileService} fileService - The FileService instance.
   */
  constructor(private route: ActivatedRoute, private router: Router, private fileService: FileService) { }

  /**
   * Initializes the component and retrieves the journal entry based on the query parameters.
   * @returns None
   */
  ngOnInit() {
    this.route.queryParamMap.subscribe(params => {
      const id = params.get('id');
      /**
       * If the given ID is false, navigate to the '/tabs' route using the router.
       * @param {any} id - The ID to check.
       * @returns None
       */
      if (!id) {
        this.router.navigate(['/tabs']);
      /**
       * Else, read the journal file and retrieve the entry with the specified id.
       * Sets the note content, title, id, and date properties based on the retrieved entry.
       * @param {string} id - The id of the entry to retrieve.
       * @returns None
       */
      } else {
        this.fileService.readJournal().then(journal => {
          let entry = _.find(journal, function (n) { return n.id == id });
          this.noteContent = entry.data;
          this.title = entry.title;
          this.id = entry.id;
          this.date = entry.date;
        });
      }
    });
  }

  /**
   * Redirects the user to the journal editor page with the specified ID.
   * @param {string} id - The ID of the journal to edit.
   * @returns None
   */
  editJournal(id: string) {
    this.router.navigateByUrl('/editor?type=journal&id=' + id);
  }

  /**
   * Deletes a journal entry with the specified ID.
   * @param {string} id - The ID of the journal entry to delete.
   * @returns {Promise<void>} - A promise that resolves when the journal entry is successfully deleted.
   */
  async deleteJournal(id: string) {
    await this.fileService.deleteJournal(id);
    this.router.navigate(['/tabs/tab1']).then();
  }
}
