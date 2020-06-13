import { Component, OnInit } from '@angular/core';
import {ApiService} from "../../../services/api/api.service";
import {_Event} from "../../../models/Event";
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

  event: _Event = new _Event();
  focus: boolean;

  constructor(
      private apiService: ApiService,
      private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.apiService.getEvent(this.route.snapshot.paramMap.get('id')).subscribe((evt) =>{
      console.log(evt);
    });
  }

}
