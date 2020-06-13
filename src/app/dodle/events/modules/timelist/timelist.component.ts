import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Time} from "../../../../models/Time";
import {ApiService} from "../../../../services/api/api.service";
import{ _Event } from "../../../../models/Event";


@Component({
  selector: 'app-timelist',
  templateUrl: './timelist.component.html',
  styleUrls: ['./timelist.component.scss']
})
export class TimelistComponent implements OnInit {

  public event: _Event;
  focus: boolean;
  submitted: false;
  timeList: Time[];

  constructor(private apiService : ApiService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.apiService.getEvent(this.route.snapshot.paramMap.get('id')).subscribe((event) =>{
      this.event = event;
      this.timeList = event[12];
    });


  }

}
