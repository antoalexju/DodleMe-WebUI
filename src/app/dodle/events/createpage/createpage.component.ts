import {Component, OnInit, OnDestroy, HostListener, NgModule} from '@angular/core';
import {ApiService} from "../../../services/api/api.service";
import {_Event} from "../../../models/Event";

import {FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-createpage',
  templateUrl: './createpage.component.html',
  styleUrls: ['./createpage.component.scss']
})

export class CreatepageComponent implements OnInit, OnDestroy {

  isCollapsed = true;
  focus: boolean;
  focus1: boolean;
  focus2: boolean;
  focus3: boolean;

  eventForm: FormGroup;
  submitted = false;

  event: _Event;

  constructor(
      private apiService: ApiService,
      private formBuilder: FormBuilder,
      private router: Router
  ) { }

  ngOnInit() {
    const body = document.getElementsByTagName("body")[0];
    body.classList.add("evtcreate-page");

    this.eventForm = this.formBuilder.group({
      title: ['', Validators.required],
      location: ['', Validators.required],
      description: ['', Validators.required],
      limitDate: ['', Validators.required],
      isPrivate: [false, Validators.required]
    });
  }

  ngOnDestroy() {
    const body = document.getElementsByTagName("body")[0];
    body.classList.remove("evtcreate-page");
  }

  get f() { return this.eventForm.controls; }

  onSubmit(){

    this.submitted = true;
    this.event = new _Event();

    if(!this.eventForm.invalid){

      this.event.title = this.eventForm.value.title;
      this.event.participants = 1;
      this.event.location = this.eventForm.value.location;
      this.event.description = this.eventForm.value.description;
      this.event.limitDate = this.eventForm.value.limitDate;
      this.event.isPrivate = this.eventForm.value.isPrivate;

      this.apiService.createEvent(this.event).subscribe(
          event => {
            console.log(event);
            this.router.navigate(['/event/' + event.linkId]);
          },
          err => {
            console.error(err);
          }
      )

      //this.apiService.createEvent().subscribe({})
    }


  }
}
