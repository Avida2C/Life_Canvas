/**
 * Represents an Angular component that implements the OnInit interface.
 * @module @angular/core
 * @class Component
 * @implements OnInit
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
  selector: 'app-note',
  templateUrl: './note.page.html',
  styleUrls: ['./note.page.scss'],
})

export class NotePage implements OnInit {
  /**
   * Represents a note object with a title, content, and ID.
   * @property {string} title - The title of the note.
   * @property {string | null} noteContent - The content of the note, can be null if no content is provided.
   * @property {string} id - The unique ID of the note.
   */
  public title: string = 'Note';
  public noteContent: string | null;
  public id: string = '';

  /**
   * Constructs a new instance of the class.
   * @param {ActivatedRoute} route - The ActivatedRoute instance.
   * @param {Router} router - The Router instance.
   * @param {FileService} fileService - The FileService instance.
   */
  constructor(private route: ActivatedRoute, private router: Router, private fileService: FileService) { }

  /**
   * Initializes the component and retrieves the note content and title based on the query parameters.
   * If the 'id' parameter is not provided, it navigates to the '/tabs' route.
   * @returns None
   */
  ngOnInit() {
    this.route.queryParamMap.subscribe(params => {
      const id = params.get('id');
      /**
       * Checks if an ID exists. If it does, it reads the notes from the file service and
       * retrieves the note with the matching ID. It then sets the note content, title, and ID
       * variables accordingly.
       * If the ID does not exist, it navigates to the '/tabs' route.
       * @param {string} id - The ID to check
       */
      if(!id) {
        this.router.navigate(['/tabs']);
      } else {
        this.fileService.readNotes().then(notes => {
          let note = _.find(notes, function(n) { return n.id == id });
          this.noteContent = note.data;
          this.title = note.title;
          this.id = note.id;
        });
      }
    });
  }

  /**
   * Redirects the user to the note editor page with the specified note ID.
   * @param {string} id - The ID of the note to edit.
   * @returns None
   */
  editNote(id: string){
    this.router.navigateByUrl('/editor?type=notes&id=' + id);
  }

  /**
   * Deletes a note with the specified ID.
   * @param {string} id - The ID of the note to delete.
   * @returns None
   */
  deleteNote(id: string){
    this.fileService.deleteNote(id).then(() => {
      this.router.navigateByUrl('/tabs/tab2?open=notes');
    });
  }
}
