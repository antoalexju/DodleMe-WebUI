import { Component, OnInit } from '@angular/core';
import {ApiService} from "../../../services/api/api.service";
import {_Event} from "../../../models/Event";
import {ActivatedRoute} from "@angular/router";
import {FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import {Time} from "../../../models/Time";

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
  event: _Event;
  focus: boolean;
  timeForm: FormGroup;
  time:Time;
  submitted = false;

  constructor(
      private apiService: ApiService,
      private formBuilder: FormBuilder,
      private route: ActivatedRoute,
      private router: Router
  ) { }

  ngOnInit() {
    this.apiService.getEvent(this.route.snapshot.paramMap.get('id')).subscribe((evt) => {
      console.log(evt);
      this.event = evt;
    });
    this.timeForm = this.formBuilder.group({
      dateDeb: ['', Validators.required],
      dateFin: ['', Validators.required]
    });
  }

  get f() { return this.timeForm.controls; }

  onSubmit(){

    this.submitted = true;
    this.time = new Time();

    if(!this.timeForm.invalid){
      this.time.beginDate = this.timeForm.value.dateDeb;
      this.time.endDate = this.timeForm.value.dateFin;
      this.apiService.createTime(this.time, this.event.idEvent).subscribe(
          event => {
            console.log(this.time);
            this.router.navigate(['/event/' + event.idEvent]);
          },
          err => {
            console.error(err);
          }
      )
    }
  }
}
