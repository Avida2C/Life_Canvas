/**
 * Represents an Angular component that implements the OnInit interface.
 * @module @angular/core
 * @class Component
 * @implements OnInit
 */
import { Component, OnInit } from '@angular/core';
/**
 * Imports the FileService from the '../service/file.service' module.
 * @returns The FileService object.
 */
import { FileService } from '../service/file.service';
/**
 * Import the `ActivatedRoute` and `Router` modules from the `@angular/router` package.
 */
import { ActivatedRoute, Router } from '@angular/router';
/**
 * Import the entire underscore library and assign it to the variable '_'.
 * This allows you to use all the functions provided by the underscore library.
 */
import * as _ from 'underscore';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {

  /**
   * The current segment of the planner.
   * @type {string}
   */
  public plannerSegment = 'calendar';
  /**
   * A promise that resolves to any value.
   * @returns A promise that resolves to any value.
   */
  public notes: Promise<any>;
  /**
   * The tasks property of the class.
   * @type {any}
   */
  public tasks: any;
  
  /**
   * Constructs a new instance of the class.
   * @param {FileService} fileService - The file service used for file operations.
   * @param {Router} router - The router used for navigation.
   * @param {ActivatedRoute} route - The route used for accessing route parameters.
   */
  constructor(private fileService: FileService, private router: Router, private route: ActivatedRoute) {}

  /**
   * Initializes the component and subscribes to the queryParamMap of the route.
   * Retrieves the 'open' parameter from the query parameters and assigns it to the 'plannerSegment' property if it exists.
   * Reads the notes from the file service and assigns them to the 'notes' property.
   * Reads the tasks from the file service and assigns them to the 'tasks' property.
   * Logs the retrieved tasks to the console.
   * @returns None
   */
  ngOnInit() {
    this.route.queryParamMap.subscribe(params => {
      const segment = params.get('open');
      if(segment) this.plannerSegment = segment;
      this.notes = this.fileService.readNotes();
      this.fileService.readTasks().then((value) => {
        this.tasks = value;
        console.log(value);
      });
    });
  }

  /**
   * Opens a note with the specified ID.
   * @param {string} id - The ID of the note to open.
   * @returns None
   */
  openNote(id: string) {
    this.router.navigateByUrl('/note?id=' + id);
  }

  /**
   * Redirects the user to the task editor page with the specified task ID.
   * @param {string} id - The ID of the task to edit.
   * @returns None
   */
  editTask(id: string) {
    this.router.navigateByUrl('/task-editor?id=' + id);
  }

  /**
   * Deletes a task with the given ID.
   * @param {string} id - The ID of the task to delete.
   * @returns None
   */
  deleteTask(id: string) {
    this.fileService.deleteTask(id).then(() => {
      this.fileService.readTasks().then(value => this.tasks = value);
    });
  }

  /**
   * Finds a task with the given taskid in the tasks array and checks if it has changed.
   * @param {string} taskid - The id of the task to check.
   * @param {string} id - The id of the task to compare with.
   * @returns The task object if found, otherwise undefined.
   */
  chkChanged(taskid: string, id: string) {
    var task = _.find(this.tasks, function(task) {
      return task.id == taskid;
    });

    /**
     * Updates the status of a task with the given ID and saves the updated task to the file service.
     * @param {number} id - The ID of the task to update.
     * @param {Task} task - The task object containing the list of tasks.
     * @returns None
     */
    _.each(task.tasks, function(t){
      if(t.id == id) {
        t.done = !t.done;
      }
    })
    this.fileService.saveTask(task);
  }
}
