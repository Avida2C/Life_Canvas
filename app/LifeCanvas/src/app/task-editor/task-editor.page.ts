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

  public title: string = 'New Task';
  public taskList: any = { id: null, tasks: [{id: 0, content: '', done: false}] };
  public hideX: boolean = this.taskList.tasks.length == 1;
  constructor(private fileService: FileService, private router: Router, private route: ActivatedRoute) { 
    
  }

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

  addTask() {
    var lastid = _.last(this.taskList.tasks).id;
    this.taskList.tasks.push({id: lastid+1, content: '', done: false});
    this.hideX = this.taskList.tasks.length == 1;
  }

  removeTask(id: string) {
    this.taskList.tasks = _.reject(this.taskList.tasks, function(t) { return t.id == id; });
    for(var i = 0; i < this.taskList.tasks; i++) {
      this.taskList.tasks[i].id = i;
    }
    this.hideX = this.taskList.tasks.length == 1;
  }

  saveTask(){
    this.fileService.saveTask(this.taskList).then(() => {
      this.router.navigateByUrl('/tabs/tab2?open=tasks');
    });
    
  }

}
