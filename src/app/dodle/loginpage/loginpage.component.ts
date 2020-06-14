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
  submitted: boolean = false;
  userForm: FormGroup;
  focus3: boolean;

  constructor(
      private formBuilder: FormBuilder,
      private auth: AuthService,
      private router: Router
  ) {}

  ngOnInit() {
    var body = document.getElementsByTagName("body")[0];
    body.classList.add("login-page");

    this.userForm = this.formBuilder.group({
      username: ['', Validators.required],
    });
  }

  ngOnDestroy() {
    var body = document.getElementsByTagName("body")[0];
    body.classList.remove("login-page");
  }

  get f() { return this.userForm.controls; }

  onSubmit() {

  }

  async onUsernameSubmit() {

    this.submitted = true;

    if(!this.userForm.invalid){
      this.auth.registerAnonyme(this.userForm.value.username);
    }
    else {
      this.submitted = false;
    }

  }
}
