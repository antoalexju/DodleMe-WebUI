import { Component, OnInit } from '@angular/core';
import {ApiService} from "../../../../service/api.service";

@Component({
  selector: 'app-eventlist',
  templateUrl: './eventlist.component.html',
  styleUrls: ['./eventlist.component.scss']
})
export class EventlistComponent implements OnInit {

  eventList;

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {

    this.apiService.getEventList().subscribe((eventsList) =>{
            this.eventList = eventsList;
    });
  }

}

