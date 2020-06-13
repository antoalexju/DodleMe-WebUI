import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Time} from "../../../../models/Time";
import {ApiService} from "../../../../services/api/api.service";


@Component({
  selector: 'app-timelist',
  templateUrl: './timelist.component.html',
  styleUrls: ['./timelist.component.scss']
})
export class TimelistComponent implements OnInit {

  event;
  focus: boolean;
  submitted: false;
  timeList: Time[];

  constructor(private apiService : ApiService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.apiService.getEvent(this.route.snapshot.paramMap.get('id')).subscribe((event) =>{
      this.event = event;
      //this.timeList = event[12];
    });


  }

}
