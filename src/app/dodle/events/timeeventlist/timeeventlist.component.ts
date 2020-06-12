import { Component, OnInit } from '@angular/core';
import {_Event, _Time, ApiService} from "../../../service/api.service";
import {ActivatedRoute} from "@angular/router";


@Component({
  selector: 'app-timeeventlist',
  templateUrl: './timeeventlist.component.html',
  styleUrls: ['./timeeventlist.component.scss']
})
export class TimeeventlistComponent implements OnInit {
  event;
  timeList: _Time;
  focus: boolean;
  submitted: false;

  constructor(private apiService : ApiService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.apiService.getEvent(this.route.snapshot.paramMap.get('id')).subscribe((event) =>{
      this.event = event;
      this.timeList = event[12];
    });


  }

}
