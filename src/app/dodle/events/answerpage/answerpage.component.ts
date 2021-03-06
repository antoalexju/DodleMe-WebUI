import {Component, OnInit, ViewChild} from '@angular/core';
import {ApiService} from "../../../services/api/api.service";
import {_Event} from "../../../models/Event";
import {ActivatedRoute} from "@angular/router";
import {FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import {Time} from "../../../models/Time";
import {ModalDirective} from "ngx-bootstrap";
import {AuthService} from "../../../services/auth/auth.service";

// @ts-ignore
@Component({
  selector: 'app-answerpage',
  templateUrl: './answerpage.component.html',
  styleUrls: ['./answerpage.component.scss']
})
export class AnswerpageComponent implements OnInit {
  isCollapsed: boolean;
  focus1: boolean;
  focus2: boolean;
  event: _Event = new _Event();
  focus: boolean;
  timeForm: FormGroup;
  time:Time;
  submitted: boolean = false;

  constructor(
      private apiService: ApiService,
      private formBuilder: FormBuilder,
      private route: ActivatedRoute,
      private router: Router,
      public  auth: AuthService
  ) { }

  ngOnInit() {

    var body = document.getElementsByTagName("body")[0];
    body.classList.add("login-page");

    this.apiService.getEvent(this.route.snapshot.paramMap.get('id')).subscribe(
      evt => {
        this.event = evt;
      },
      error => {
        this.router.navigate(['/home']).then(r => {
          console.log(error);
        });
      });

    this.timeForm = this.formBuilder.group({
      dateDeb: ['', Validators.required],
      dateFin: ['', Validators.required]
    });
  }

  get f() { return this.timeForm.controls; }

  @ViewChild('myModal') public myModal: ModalDirective;

  onSubmit(){

    this.submitted = true;
    this.time = new Time();

    if(!this.timeForm.invalid){
      this.time.beginDate = this.timeForm.value.dateDeb;
      this.time.endDate = this.timeForm.value.dateFin;
      this.apiService.createTime(this.time, this.event.linkId).subscribe(
          event => {
            //this.myModal.hide();
            //this.router.navigate(['/event/' + this.route.snapshot.paramMap.get('id')]).then(r => {
            //});
            this.router.navigate(['/home']).then(r => {});
          },
          err => {
            console.error(err);
          }
      )
    }
  }
}
