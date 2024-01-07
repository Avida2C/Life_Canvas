/**
 * Imports necessary modules and services for the Angular component.
 * @module Component
 * @module Input
 * @module OnInit
 * @module Preferences
 * @module FileService
 * @module ActivatedRoute
 * @module Router
 * @requires @angular/core
 * @requires @capacitor/preferences
 * @requires ../service/file.service
 * @requires @angular/router
 */
import { Component, Input, OnInit } from '@angular/core';
import { Preferences } from '@capacitor/preferences';
import { FileService } from '../service/file.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  /**
   * Represents a class with a public property "name" that can be assigned a string or null value.
   * Also contains a public property "journal" that is a Promise that resolves to any value.
   * @property {string | null} name - The name property that can hold a string or null value.
   * @property {Promise<any>} journal - The journal property that is a Promise that resolves to any value.
   */
  @Input() public name: string | null;
  public journal: Promise<any>;

  /**
   * Constructs a new instance of the class.
   * @param {FileService} fileService - The file service used for file operations.
   * @param {Router} router - The router used for navigation.
   * @param {ActivatedRoute} route - The route used for accessing route parameters.
   */
  constructor(private fileService: FileService, private router: Router, private route: ActivatedRoute) {}

  /**
   * Initializes the component and performs necessary setup tasks.
   * - Subscribes to changes in query parameters and updates the 'name' property accordingly.
   * - If the 'name' query parameter is not present, retrieves the 'name' value from the Preferences API and updates the 'name' property.
   * - Loads the journal data.
   * - Subscribes to changes in route parameters and reloads the journal data.
   * @returns None
   */
  ngOnInit() {
    this.route.queryParamMap.subscribe(params => {
      const name = params.get('name');
      /**
       * Sets the value of the "name" property based on the provided name parameter or the value retrieved from the Preferences API.
       * @param {string} name - The name to set the "name" property to.
       * @returns None
       */
      if(name)
        this.name = name;
      else {
        Preferences.get({key: "name"}).then(({value}) => {
          this.name = value;
        })
      }
    });
    
    this.loadJournal();

    /**
     * Subscribes to changes in the route parameters and triggers the loadJournal() method.
     * @returns None
     */
    this.route.params.subscribe(() => {
      this.loadJournal();
    });
  }

  /**
   * Opens the journal page with the specified ID.
   * @param {string} id - The ID of the journal to open.
   * @returns None
   */
  openJournal(id: string) {
    this.router.navigateByUrl('/journal?id=' + id);
  }

  /**
   * Loads the journal by reading it from the file service.
   * @returns None
   */
  loadJournal() {
    this.journal = this.fileService.readJournal();
  }
}
