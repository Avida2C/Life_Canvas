import { Component, OnInit } from '@angular/core';
import { FileService } from '../service/file.service';
import { ActivatedRoute, Router } from '@angular/router';
import * as _ from 'underscore';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {
  public plannerSegment = 'calendar';

  public notes: Promise<any>;
  public tasks: any;
  
  constructor(private fileService: FileService, private router: Router, private route: ActivatedRoute) {

  }

  ngOnInit() {
    this.route.queryParamMap.subscribe(params => {
      const segment = params.get('open');
      if(segment) this.plannerSegment = segment;
      this.notes = this.fileService.readNotes();
      this.fileService.readTasks().then((value) => {
        this.tasks = value;
      });
    });
  }

  openNote(id: string) {
    this.router.navigateByUrl('/note?id=' + id);
  }

  editTask(id: string) {
    this.router.navigateByUrl('/task-editor?id=' + id);
  }

  deleteTask(id: string) {
    this.fileService.deleteTask(id).then(() => {
      this.tasks = this.fileService.readTasks();
    });
  }

  chkChanged(taskid: string, id: string) {
    var task = _.find(this.tasks, function(task) {
      return task.id == taskid;
    });

    _.each(task.tasks, function(t){
      if(t.id == id) {
        t.done = !t.done;
      }
    })
    this.fileService.saveTask(task);
  }

}
