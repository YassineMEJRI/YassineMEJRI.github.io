import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {
  @Input() source : string[] = []
  index = 0;

  constructor() { }

  ngOnInit(): void {
  }

  previous() : void {
    if (this.index == 0)
      this.index = this.source.length -1
    else
      this.index--
  }

  next() : void {
    this.index = (this.index + 1) % this.source.length;
  }
}
