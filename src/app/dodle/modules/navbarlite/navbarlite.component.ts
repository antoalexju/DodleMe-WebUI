import {Component, HostListener, OnInit} from '@angular/core';

@Component({
  selector: 'app-navbarlite',
  templateUrl: './navbarlite.component.html',
  styleUrls: ['./navbarlite.component.scss']
})
export class NavbarliteComponent implements OnInit {
  isCollapsed: boolean;

  constructor() { }

  @HostListener("window:scroll", ["$event"])
  onWindowScroll() {
    var element = document.getElementById("navbar-top");
    if (window.pageYOffset > 100) {
      if (element) {
        element.classList.remove("navbar-transparent");
        element.classList.add("bg-danger");
      }
    } else {
      if (element) {
        element.classList.add("navbar-transparent");
        element.classList.remove("bg-danger");
      }
    }
  }

  ngOnInit(): void {
    this.onWindowScroll();
  }

}
