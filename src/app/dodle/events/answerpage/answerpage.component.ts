import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-answerpage',
  templateUrl: './answerpage.component.html',
  styleUrls: ['./answerpage.component.scss']
})
export class AnswerpageComponent implements OnInit {
  isCollapsed: boolean;
  focus1: boolean;
  focus2: boolean;

  constructor() { }

  ngOnInit() {

  }

}
