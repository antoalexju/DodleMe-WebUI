import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eventlist',
  templateUrl: './eventlist.component.html',
  styleUrls: ['./eventlist.component.scss']
})
export class EventlistComponent implements OnInit {
eventList : any;
  constructor() { }

  ngOnInit(): void {}
  /*
    this.http.get('')
    .subscribe((data) => {
    this.evenList = data;
    console.log(eventList);

  }
*/
}
