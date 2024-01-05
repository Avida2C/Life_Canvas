import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Preferences } from '@capacitor/preferences';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage implements OnInit {

  themeToggle = false;
  name: any;
  constructor(private router: Router) {}

  ngOnInit() {
    // Use matchMedia to check the user preference
    Preferences.get({key: 'darkmode'}).then(({value}) => {
      let prefersDark;
      if(value == null) {
        let prefersDarkMedia = window.matchMedia('(prefers-color-scheme: dark)');
        prefersDarkMedia.addEventListener('change', (mediaQuery) => this.initializeDarkTheme(mediaQuery.matches));
        prefersDark = prefersDarkMedia.matches;
      }
      else
        prefersDark = Boolean(value);

      // Initialize the dark theme based on the initial
      // value of the prefers-color-scheme media query
      this.initializeDarkTheme(prefersDark);
    });

    Preferences.get({key: 'name'}).then(({value}) => {
      this.name = value;
    });
    
  }

  initializeDarkTheme(isDark: any) {
    this.themeToggle = isDark;
    this.toggleDarkTheme(isDark);
  }

  // Listen for the toggle check/uncheck to toggle the dark theme
  toggleChange(ev: any) {
    this.toggleDarkTheme(ev.detail.checked);
  }

  // Add or remove the "dark" class on the document body
  async toggleDarkTheme(shouldAdd: boolean) {
    document.body.classList.toggle('dark', shouldAdd);
    Preferences.set({
      key: 'darkmode',
      value: String(shouldAdd),
    });
  }

  saveName() {
    Preferences.set({
      key: 'name',
      value: this.name,
    }).then(() => {
      this.router.navigateByUrl('/tabs/tab1?name=' + this.name);
    });
  }

}
