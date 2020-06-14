import {Component, OnInit, OnDestroy, HostListener} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {Router} from "@angular/router";
import {ApiService} from "../../services/api/api.service";
import {User} from "../../models/User";

@Component({
  selector: 'app-registerpage',
  templateUrl: './registerpage.component.html',
  styleUrls: ['./registerpage.component.scss']
})
export class RegisterpageComponent implements OnInit, OnDestroy {
  isCollapsed = true;
  focus: boolean;
  focus1: boolean;
  focus2: boolean;
  focus3: boolean;
  focus4: boolean;

  registerForm: FormGroup;

  constructor(
      private apiService: ApiService,
      private formBuilder: FormBuilder,
      private router: Router) {}

  ngOnInit() {
    var body = document.getElementsByTagName("body")[0];
    body.classList.add("register-page");

    this.registerForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      mail: ['', Validators.required],
      password: ['', Validators.required],
      passwordConfirm: ['', Validators.required]
    });
  }
  ngOnDestroy() {
    var body = document.getElementsByTagName("body")[0];
    body.classList.remove("register-page");
  }

  onCreateAccountClick(){

    if(!this.registerForm.invalid && this.registerForm.value.password == this.registerForm.value.passwordConfirm){
      let user = new User();
      user.firstName = this.registerForm.value.firstName;
      user.lastName = this.registerForm.value.lastName;
      user.mail = this.registerForm.value.mail;
      user.password = this.registerForm.value.password
      user.organisation = "" //Non intégré pour le moment
      this.apiService.register(user, false).subscribe(
          event => {
            console.log(event);
            this.router.navigate(['/home'])
          },
          err => {
            console.error(err);
          }
      )
    }
  }
}
