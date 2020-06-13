import { Component, OnInit } from '@angular/core';
import {ApiService} from "../../../../services/api/api.service";
import {_Event} from "../../../../models/Event";

@Component({
  selector: 'app-eventlist',
  templateUrl: './eventlist.component.html',
  styleUrls: ['./eventlist.component.scss']
})
export class EventlistComponent implements OnInit {

  events: _Event[];

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {

    this.apiService.getEventList().subscribe((events) =>{
        this.events = events;
    });
  }

}

