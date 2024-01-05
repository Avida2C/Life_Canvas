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

  formLogin: FormGroup;
  
  constructor(private fb: FormBuilder, private route: Router) { 
    
  }

  nextpage() {
    let userName = this.formLogin.get('name')?.value;
    Preferences.set({
      key: 'name',
      value: userName,
    }).then(() => {
      this.route.navigate(['/tabs']);
    });
    
  }

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
