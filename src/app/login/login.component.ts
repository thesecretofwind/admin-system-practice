import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators} from '@angular/forms'
import { MatCheckboxChange } from '@angular/material/checkbox';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnInit {

  username = new FormControl('', [Validators.required]);
  password = new FormControl('', [Validators.required, Validators.minLength(3)]);
  repeatPassword = new FormControl('', [Validators.required, Validators.minLength(3)]);
  isRemeberMe = new FormControl(true);

  loginForm = new FormGroup({
    username: this.username,
    password: this.password,
    isRemeberMe: this.isRemeberMe
  });

  registerForm = new FormGroup({
    username: this.username,
    password: this.password,
    repeatPassword: this.repeatPassword
  });

  toppings = this._formBuilder.group({
    pepperoni: false,
    extracheese: false,
    mushroom: false,
  });

  isLogin = true;


  constructor(private _formBuilder: FormBuilder, private router: Router) { }

  ngOnInit(): void {
  }

  change(e: MatCheckboxChange) {
    console.log(e.checked!);
  }

  submit(form: FormGroup) {
    console.log(form);
    this.router.navigate(['admin'], { replaceUrl: true });
  }
}
