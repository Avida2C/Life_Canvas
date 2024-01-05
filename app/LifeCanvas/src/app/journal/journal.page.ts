import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FileService } from '../service/file.service';
import * as _ from 'underscore';

@Component({
  selector: 'app-journal',
  templateUrl: './journal.page.html',
  styleUrls: ['./journal.page.scss'],
})
export class JournalPage implements OnInit {

  public title: string = 'Journal';
  public noteContent: string;
  public id: string;
  constructor(private route: ActivatedRoute, private router: Router, private fileService: FileService) { }

  ngOnInit() {
    this.route.queryParamMap.subscribe(params => {
      const id = params.get('id');
      if(!id) {
        this.router.navigate(['/tabs']);
      } else {
        this.fileService.readJournal().then(journal => {
          let entry = _.find(journal, function(n) { return n.id == id });
          this.noteContent = entry.data;
          this.title = entry.title;
          this.id = entry.id;
        });
      }
    });
  }

  editJournal(id: string){
    this.router.navigateByUrl('/editor?type=journal&id=' + id);
  }

  async deleteJournal(id: string){
    await this.fileService.deleteJournal(id);      
    this.router.navigate(['/tabs/tab1']).then();
  }
}
