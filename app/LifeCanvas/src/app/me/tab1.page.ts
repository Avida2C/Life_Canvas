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

  @Input() public name: string | null;
  public journal: Promise<any>;
  constructor(private fileService: FileService, private router: Router, private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.queryParamMap.subscribe(params => {
      const name = params.get('name');
      if(name)
        this.name = name;
      else {
        Preferences.get({key: "name"}).then(({value}) => {
          this.name = value;
        })
      }
    });
    
    this.loadJournal();

    this.route.params.subscribe(() => {
      this.loadJournal();
    });
  }

  openJournal(id: string) {
    this.router.navigateByUrl('/journal?id=' + id);
  }

  loadJournal() {
    this.journal = this.fileService.readJournal();
  }

}
