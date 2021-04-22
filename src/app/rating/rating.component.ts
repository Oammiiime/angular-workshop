import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})
export class RatingComponent implements OnInit {
  @Input() targetScore = 0;
  starWidth = 0;

  constructor() { }

  @Output() ratingClicked: EventEmitter<string>
  = new EventEmitter<string>();

  ngOnInit(): void {
      console.log('ngOnInit');
      this.starWidth = this.targetScore * 75 / 5;
  }

  onClicked(): void {
    console.log('some data at ' + this.targetScore);
    this.ratingClicked.emit('some data at ' + this.targetScore);
}


}
