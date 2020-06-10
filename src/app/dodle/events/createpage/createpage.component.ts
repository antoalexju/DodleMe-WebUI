import {Component, OnInit, OnDestroy, HostListener} from '@angular/core';
import {ApiService} from "../../../service/api.service";
import{_Event} from "../../../service/api.services.ts";
// import { NgForm } from '@angular/forms';

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
  title:string;
  location:string;
  description:string;
  limitDate:string;
  private:boolean;
  eventInfo:_Event;

  constructor(private apiService: ApiService) {
  }

  onSubmit(){
    return this.eventInfo = {title : this.title,
    creator: null,
    participants: null,
    location: this.location,
    description: this.description,
    limitDate: this.limitDate,
    isPrivate: this.private,
    linkId: null}
  }

  /*onSubmit(){
    createEvent(this.eventInfo = return this.title,this.location, this.description,this.limitDate,this.private;);
  }*/


  ngOnInit() {
    var body = document.getElementsByTagName("body")[0];
    body.classList.add("evtcreate-page");
  }

  ngOnDestroy() {
    var body = document.getElementsByTagName("body")[0];
    body.classList.remove("evtcreate-page");
  }
}
