/**
 * Imports necessary modules and dependencies for an Angular component.
 * @module Component
 * @module OnInit
 * @module Editor
 * @module FileService
 * @module ActivatedRoute
 * @module Router
 * @module _
 */
import { Component, OnInit } from '@angular/core';
import Editor from 'ckeditor5-custom-build/build/ckeditor';
import { FileService } from '../service/file.service';
import { ActivatedRoute, Router } from '@angular/router';
import * as _ from 'underscore';

/**
 * Represents the EditorPage component.
 * @component
 * @selector app-editor
 * @templateUrl ./editor.page.html
 * @styleUrls ['./editor.page.scss']
 */
@Component({
  selector: 'app-editor',
  templateUrl: './editor.page.html',
  styleUrls: ['./editor.page.scss'],
})

export class EditorPage implements OnInit {

  public title = '';
  public id: string;
  public editor = Editor;
  public type: string | null = 'notes';
  public model = {
    editorData: '',
    title: '',
    id: null
  };

  /**
   * Constructs a new instance of the class.
   * @param {ActivatedRoute} route - The ActivatedRoute service used for retrieving route parameters.
   * @param {FileService} fileService - The FileService used for file operations.
   * @param {Router} router - The Router service used for navigation.
   */
  constructor(private route: ActivatedRoute, private fileService: FileService, private router: Router) { }

  /**
   * Initializes the component and subscribes to the queryParamMap observable to
   * retrieve the query parameters from the URL. Based on the type and id parameters,
   * it sets the appropriate title and retrieves the corresponding data from the file service.
   * @returns None
   */
  ngOnInit() {
    this.route.queryParamMap.subscribe(params => {
      if(this.model) {
        // Reset model properties if it already exists
        this.model.editorData = '';
        this.model.id = null;
        this.model.title = '';
      }
      // Get the 'type' and 'id' query parameters from the route
      const type = params.get('type');
      const id = params.get('id');
      console.log(type);
      // Store the 'type' in a class property
      this.type = type;
      if(!id) {
        // If 'id' is not provided, set the 'title' to indicate a new item
        this.title = 'New ' + type;
      } else {
         // If 'id' is provided, set the 'title' to indicate editing and handle different 'type' cases
        this.title = 'Edit ' + type;
        this.id = id;
        switch(type) {
          case 'notes': {
            this.fileService.readNotes().then(notes => {
              // Find the note with the matching 'id'
              let note = _.find(notes, function(n) { return n.id == id });
              // Update the model properties with note data
              this.model.title = note.title;
              this.model.editorData = note.data;
              this.model.id = note.id;
            });
            break;
          }
          case 'journal': {
            this.fileService.readJournal().then(journal => {
              let entry = _.find(journal, function(n) { return n.id == id });
              // Find the journal entry with the matching 'id'
              this.model.title = entry.title;
              this.model.editorData = entry.data;
              this.model.id = entry.id;
            });
          }
        }
      }
    });
  }

  /**
   * Saves the editor content based on the type of editor.
   * If the type is "notes", it saves the note using the file service and navigates to the notes tab.
   * If the type is "journal", it saves the journal using the file service and navigates to the journal tab.
   * @returns None
   */
  async saveEditor(){
    switch(this.type) {
      case("notes"): {
        await this.fileService.saveNote(this.model.editorData, this.model.title, this.model.id);
        this.router.navigateByUrl('/tabs/tab2?open=notes');
        break;
      }
      case("journal"): {
        await this.fileService.saveJournal(this.model.editorData, this.model.title, this.model.id);
        this.router.navigateByUrl('/tabs/tab1');
        break;
      }
    }
  }
}
