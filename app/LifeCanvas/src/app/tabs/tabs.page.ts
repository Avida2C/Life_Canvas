/**
 * Import necessary modules and dependencies for an Angular component.
 * @module Angular
 * @component Component
 * @implements OnInit
 * @param {Router} Router - The Angular router module.
 * @param {Preferences} Preferences - The Capacitor preferences module.
 */
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Preferences } from '@capacitor/preferences';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage implements OnInit {

  /**
   * Represents the state of the theme toggle and the name property.
   * @property {boolean} themeToggle - Indicates whether the theme is toggled on or off.
   * @property {any} name - The name property.
   */
  themeToggle = false;
  name: any;

  /**
   * Constructs a new instance of the class.
   * @param {Router} router - The router object used for navigation.
   */
  constructor(private router: Router) {}

  /**
   * Initializes the component by retrieving preferences and setting up the dark theme.
   * @returns None
   */
  ngOnInit() {
    // Use matchMedia to check the user preference
    Preferences.get({key: 'darkmode'}).then(({value}) => {
      let prefersDark;
      /**
       * Initializes the dark theme based on the given value or the user's preference.
       * @param {boolean | null} value - The value indicating whether to use the dark theme. If null, the user's preference will be used.
       */
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

    /**
     * Retrieves the value of the 'name' key from the Preferences storage and assigns it to the 'name' property of the current object.
     */
    Preferences.get({key: 'name'}).then(({value}) => {
      this.name = value;
    });
    
  }

  /**
   * Initializes the dark theme based on the provided value.
   * @param {any} isDark - The value indicating whether the dark theme should be enabled.
   * @returns None
   */
  initializeDarkTheme(isDark: any) {
    this.themeToggle = isDark;
    this.toggleDarkTheme(isDark);
  }

  /**
   * Toggles the dark theme based on the value of the checkbox.
   * @param {any} ev - The event object containing the checkbox value.
   * @returns None
   */
  toggleChange(ev: any) {
    this.toggleDarkTheme(ev.detail.checked);
  }

  /**
   * Toggles the dark theme on or off based on the provided boolean value.
   * @param {boolean} shouldAdd - Indicates whether the dark theme should be added (true) or removed (false).
   * @returns None
   */
  async toggleDarkTheme(shouldAdd: boolean) {
    document.body.classList.toggle('dark', shouldAdd);
    Preferences.set({
      key: 'darkmode',
      value: String(shouldAdd),
    });
  }

  /**
   * Saves the name value to the preferences and navigates to the tab1 page with the updated name parameter.
   * @returns None
   */
  saveName() {
    Preferences.set({
      key: 'name',
      value: this.name,
    }).then(() => {
      this.router.navigateByUrl('/tabs/tab1?name=' + this.name);
    });
  }

  /**
   * Opens the editor page based on the given type.
   * @param {string} type - The type of editor to open.
   * @returns None
   */
  openEditor(type:string)
  {
    this.router.navigateByUrl('/editor?type=' + type);
  }

  /**
   * Opens the task editor page by navigating to the '/task-editor' URL.
   * @returns None
   */
  openTaskEditor()
  {
    this.router.navigateByUrl('/task-editor');
  }

  /**
   * Navigates to the "Favorite" page in the application.
   * @returns None
   */
  openFavorites(){
    this.router.navigate(['/tabs/favorite']);
  }

}
