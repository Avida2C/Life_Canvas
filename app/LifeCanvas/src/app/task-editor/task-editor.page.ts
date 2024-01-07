/**
 * This component is responsible for handling the initialization and rendering of the Angular application.
 * It imports the necessary modules and services, such as Component, OnInit, and FileService, from the Angular core.
 * It also imports the underscore library as "_".
 * Additionally, it imports the ActivatedRoute and Router modules from the Angular router.
 */
import { Component, OnInit } from '@angular/core';
import * as _ from 'underscore';
import { FileService } from '../service/file.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-task-editor',
  templateUrl: './task-editor.page.html',
  styleUrls: ['./task-editor.page.scss'],
})
export class TaskEditorPage implements OnInit {

  /**
   * Represents a task with a title, task list, and a flag to hide the 'X' button.
   * @property {string} title - The title of the task.
   * @property {any} taskList - The task list object containing an ID and an array of tasks.
   * @property {boolean} hideX - A flag indicating whether to hide the 'X' button. It is set to true if the task list has only one task.
   */
  public title: string = 'New Task';
  public taskList: any = { id: null, tasks: [{id: 0, content: '', done: false}] };
  public hideX: boolean = this.taskList.tasks.length == 1;

  /**
   * Constructs a new instance of the class.
   * @param {FileService} fileService - The file service used for file operations.
   * @param {Router} router - The router used for navigation.
   * @param {ActivatedRoute} route - The route used for accessing route parameters.
   */
  constructor(private fileService: FileService, private router: Router, private route: ActivatedRoute) {}

  /**
   * Initializes the component and subscribes to the queryParamMap observable to retrieve the 'id' parameter from the URL.
   * If the 'id' parameter is present, sets the title to 'Edit Task' and reads the tasks from the file service.
   * Finds the task with the matching 'id' and assigns it to the taskList property.
   * Sets the hideX property to true if the taskList has only one task.
   * @returns None
   */
  ngOnInit() {
    this.route.queryParamMap.subscribe(params => {
      const id = params.get('id');
      if(id) {
        this.title = 'Edit Task';
        this.fileService.readTasks().then(tasks => {
          this.taskList = _.find(tasks, function(n) { return n.id == id });
          this.hideX = this.taskList.tasks.length == 1;
        });
      }
    });
  }

  /**
   * Adds a new task to the task list.
   * @returns None
   */
  addTask() {
    var lastid = _.last(this.taskList.tasks).id;
    this.taskList.tasks.push({id: lastid+1, content: '', done: false});
    this.hideX = this.taskList.tasks.length == 1;
  }

  /**
   * Removes a task from the task list based on its ID.
   * @param {string} id - The ID of the task to remove.
   * @returns None
   */
  removeTask(id: string) {
    this.taskList.tasks = _.reject(this.taskList.tasks, function(t) { return t.id == id; });
    for(var i = 0; i < this.taskList.tasks; i++) {
      this.taskList.tasks[i].id = i;
    }
    this.hideX = this.taskList.tasks.length == 1;
  }

  /**
   * Saves the task list to the file service and navigates to the tasks tab.
   * @returns None
   */
  saveTask(){
    this.fileService.saveTask(this.taskList).then(() => {
      this.router.navigateByUrl('/tabs/tab2?open=tasks');
    });
  }

}
