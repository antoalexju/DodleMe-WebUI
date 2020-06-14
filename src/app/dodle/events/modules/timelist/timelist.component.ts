import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {ApiService} from "../../../../services/api/api.service";
import{ _Event } from "../../../../models/Event";
import {Time} from "../../../../models/Time";


@Component({
  selector: 'app-timelist',
  templateUrl: './timelist.component.html',
  styleUrls: ['./timelist.component.scss']
})

export class TimelistComponent implements OnInit {


  focus: boolean;
  submitted: false;
  event: _Event = new _Event();

  times: Time[];


  constructor(private apiService: ApiService,
              private route: ActivatedRoute) {
  }

  ngOnInit(): void {

    this.apiService.getEvent(this.route.snapshot.paramMap.get('id')).subscribe(event => {
      this.event = event;
      this.event.begin = new Date(event.begin);
      this.event.end = new Date(event.end);
    });

    this.apiService.getEventTimes(this.route.snapshot.paramMap.get('id')).subscribe(times => {
      this.times = times;
      let i = 0;
      this.times.forEach(time => {
        time.beginDate = new Date(times[i].beginDate);
        time.endDate = new Date(times[i].endDate);
        i++;
      })
    });

  }
}