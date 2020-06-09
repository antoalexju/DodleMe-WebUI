import {Component, HostListener, OnInit} from '@angular/core';

@Component({
  selector: 'app-scuares',
  templateUrl: './scuares.component.html',
  styleUrls: ['./scuares.component.scss']
})
export class ScuaresComponent implements OnInit {

  squareTransform(square, posX, posY){
    square.style.transform =
        "perspective(500px) rotateY(" +
        posX * 0.05 +
        "deg) rotateX(" +
        posY * -0.05 +
        "deg)";
  };

  constructor() { }

  @HostListener("document:mousemove", ["$event"])
  onMouseMove(e) {

    const squares1 = document.getElementById("square1");
    const squares2 = document.getElementById("square2");
    const squares3 = document.getElementById("square3");
    const squares4 = document.getElementById("square4");
    const squares5 = document.getElementById("square5");
    const squares6 = document.getElementById("square6");

    let posX = e.clientX - window.innerWidth / 2;
    let posY = e.clientY - window.innerWidth / 6;

    this.squareTransform(squares1, posX, posY);
    this.squareTransform(squares2, posX, posY);
    this.squareTransform(squares3, posX, posY);
    this.squareTransform(squares4, posX, posY);
    this.squareTransform(squares5, posX, posY);
    this.squareTransform(squares6, posX, posY);
  }

  ngOnInit(): void {
  }

}
