/**
 * Imports necessary modules and dependencies for an Angular component.
 * @module AngularComponentImports
 * @requires Component
 * @requires OnInit
 * @requires FormBuilder
 * @requires FormControl
 * @requires FormGroup
 * @requires Validators
 * @requires Router
 * @requires Preferences
 */
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Preferences } from '@capacitor/preferences';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  /**
   * Represents a form group for login functionality.
   * @type {FormGroup}
   */
  formLogin: FormGroup;
  
  /**
   * Constructs a new instance of the class.
   * @param {FormBuilder} fb - The FormBuilder instance used for creating forms.
   * @param {Router} route - The Router instance used for navigating between routes.
   */
  constructor(private fb: FormBuilder, private route: Router) {}

  /**
   * Navigates to the next page after setting the user's name in the preferences.
   * @returns None
   */
  nextpage() {
    let userName = this.formLogin.get('name')?.value;
    /**
     * Sets the user's name in the preferences and navigates to the '/tabs' route.
     * @param {string} userName - The user's name to be stored in the preferences.
     * @returns None
     */
    Preferences.set({
      key: 'name',
      value: userName,
    }).then(() => {
      this.route.navigate(['/tabs']);
    });
  }

  /**
   * Initializes the component and performs necessary setup tasks.
   * - Retrieves the value of the 'name' key from the Preferences storage.
   * - If a value is found, logs it to the console and navigates to the '/tabs' route.
   * - Sets up the formLogin FormGroup with a 'name' field that is required.
   * @returns None
   */
  ngOnInit() {
    Preferences.get({ key: 'name' }).then(({value}) => {
      if(value) {
        console.log(value);
        this.route.navigate(['/tabs']);
      }
        
    });
    this.formLogin = this.fb.group({
      name: ['Name', [Validators.required]]
    });
  }
}
