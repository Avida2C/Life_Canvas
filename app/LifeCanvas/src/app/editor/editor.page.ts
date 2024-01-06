import { Component, OnInit } from '@angular/core';
import Editor from 'ckeditor5-custom-build/build/ckeditor';
import { FileService } from '../service/file.service';
import { ActivatedRoute, Router } from '@angular/router';
import * as _ from 'underscore';

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
  constructor(private route: ActivatedRoute, private fileService: FileService, private router: Router) { }

  ngOnInit() {
    this.route.queryParamMap.subscribe(params => {
      const type = params.get('type');
      const id = params.get('id');
      console.log(type);
      this.type = type;
      if(!id) {
        this.title = 'New ' + type;
      } else {
        this.title = 'Edit ' + type;
        this.id = id;
        switch(type) {
          case 'notes': {
            this.fileService.readNotes().then(notes => {
              let note = _.find(notes, function(n) { return n.id == id });
              this.model.title = note.title;
              this.model.editorData = note.data;
              this.model.id = note.id;
            });
            break;
          }
          case 'journal': {
            this.fileService.readJournal().then(journal => {
              let entry = _.find(journal, function(n) { return n.id == id });
              this.model.title = entry.title;
              this.model.editorData = entry.data;
              this.model.id = entry.id;
            });
          }
        }
      }
    });
  }

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
