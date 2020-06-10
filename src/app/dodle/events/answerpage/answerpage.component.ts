import { Component, OnInit } from '@angular/core';
import {_Event, ApiService} from "../../../service/api.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-answerpage',
  templateUrl: './answerpage.component.html',
  styleUrls: ['./answerpage.component.scss']
})
export class AnswerpageComponent implements OnInit {
  isCollapsed: boolean;
  focus1: boolean;
  focus2: boolean;

  eventName: string;
  eventTimes: object;

  constructor(
      private apiService: ApiService,
      private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.apiService.getEvent(this.route.snapshot.paramMap.get('id')).subscribe((event) =>{
      // @ts-ignore
      this.eventName = event.title;
      // @ts-ignore
      this.eventTimes = event.times;
    });
  }

}
