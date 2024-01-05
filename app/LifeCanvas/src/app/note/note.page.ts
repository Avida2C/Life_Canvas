import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FileService } from '../service/file.service';
import * as _ from 'underscore';

@Component({
  selector: 'app-note',
  templateUrl: './note.page.html',
  styleUrls: ['./note.page.scss'],
})
export class NotePage implements OnInit {
  public title: string = 'Note';
  public noteContent: string | null;
  public id: string = '';
  constructor(private route: ActivatedRoute, private router: Router, private fileService: FileService) { }

  ngOnInit() {
    this.route.queryParamMap.subscribe(params => {
      const id = params.get('id');
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

  editNote(id: string){
    this.router.navigateByUrl('/editor?type=notes&id=' + id);
  }

  deleteNote(id: string){
    this.fileService.deleteNote(id).then(() => {
      this.router.navigateByUrl('/tabs/tab2?open=notes');
    });
  }

}
