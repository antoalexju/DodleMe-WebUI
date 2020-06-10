import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-timeeventlist',
  templateUrl: './timeeventlist.component.html',
  styleUrls: ['./timeeventlist.component.scss']
})
export class TimeeventlistComponent implements OnInit {
  focus: boolean;
  submitted: false;

  constructor() { }

  ngOnInit(): void {
  }

}
