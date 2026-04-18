/**
 * Import necessary modules and dependencies for an Angular component.
 * @module Angular
 * @component Component
 * @implements OnInit
 * @param {Router} Router - The Angular router module.
 * @param {Preferences} Preferences - The Capacitor preferences module.
 */
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Preferences } from '@capacitor/preferences';

@Component({
  standalone: false,
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage implements OnInit, OnDestroy {

  /**
   * Represents the state of the theme toggle and the name property.
   * @property {boolean} themeToggle - Indicates whether the theme is toggled on or off.
   * @property {any} name - The name property.
   */
  themeToggle = false;
  name: any;

  private prefersDarkMq?: MediaQueryList;
  private readonly onSystemThemeChange = (e: MediaQueryListEvent) =>
    this.applyTheme(e.matches, { followSystem: true });

  /**
   * Constructs a new instance of the class.
   * @param {Router} router - The router object used for navigation.
   */
  constructor(private router: Router) {}

  ngOnDestroy(): void {
    this.prefersDarkMq?.removeEventListener('change', this.onSystemThemeChange);
  }

  /**
   * Initializes the component by retrieving preferences and setting up the dark theme.
   * @returns None
   */
  ngOnInit() {
    Preferences.get({ key: 'darkmode' }).then(({ value }) => {
      const unset = value == null || value === '';
      if (unset) {
        this.prefersDarkMq = window.matchMedia('(prefers-color-scheme: dark)');
        this.applyTheme(this.prefersDarkMq.matches, { followSystem: true });
        this.prefersDarkMq.addEventListener('change', this.onSystemThemeChange);
      } else {
        // Stored as String(true/false); Boolean("false") is wrongly true in JavaScript.
        const isDark = value === 'true';
        this.applyTheme(isDark, { followSystem: false });
      }
    });

    /**
     * Retrieves the value of the 'name' key from the Preferences storage and assigns it to the 'name' property of the current object.
     */
    Preferences.get({key: 'name'}).then(({value}) => {
      this.name = value;
    });
    
  }

  /**
   * Applies light/dark appearance on {@code document.body}.
   * When the user chose light mode while the OS is dark, {@code body.light} opts out of
   * {@code prefers-color-scheme} rules in {@code variables.scss}.
   */
  private applyTheme(
    isDark: boolean,
    options: { followSystem: boolean },
  ): void {
    this.themeToggle = isDark;
    document.body.classList.toggle('dark', isDark);
    const forceLightUi = !isDark && !options.followSystem;
    document.body.classList.toggle('light', forceLightUi);
  }

  /**
   * Toggles the dark theme based on the value of the checkbox.
   * @param {any} ev - The event object containing the checkbox value.
   * @returns None
   */
  toggleChange(ev: any) {
    const isDark = !!ev.detail?.checked;
    this.applyTheme(isDark, { followSystem: false });
    void Preferences.set({
      key: 'darkmode',
      value: String(isDark),
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
