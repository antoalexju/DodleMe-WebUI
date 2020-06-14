import {Component, OnInit, OnDestroy, HostListener} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ApiService} from "../../services/api/api.service";
import {AuthService} from "../../services/auth/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html'
})
export class LoginpageComponent implements OnInit, OnDestroy {
  focus: boolean;
  focus1: boolean;
  isCollapsed: boolean;
  submittedLog: boolean = false;
  submittedAnon: boolean = false;
  userForm: FormGroup;
  focus3: boolean;
  loginForm: FormGroup;

  constructor(
      private formBuilder: FormBuilder,
      private auth: AuthService,
      private router: Router
  ) {}

  ngOnInit() {

    if(this.auth.isLogged()){
      this.router.navigate(['/home']).then(r => {});
    }

    var body = document.getElementsByTagName("body")[0];
    body.classList.add("login-page");

    this.userForm = this.formBuilder.group({
      username: ['', Validators.required],
    });

    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  ngOnDestroy() {
    var body = document.getElementsByTagName("body")[0];
    body.classList.remove("login-page");
  }

  get f() { return this.userForm.controls; }
  get g() { return this.loginForm.controls; }

  onLoginSubmit() {
    this.submittedLog = true;
    console.log()
  }

  async onUsernameSubmit() {

    this.submittedAnon = true;

    if(!this.userForm.invalid){
      this.auth.registerAnonyme(this.userForm.value.username);
    }
    else {
      this.submittedAnon = false;
    }

  }
}
