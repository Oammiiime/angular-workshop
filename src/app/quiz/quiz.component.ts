import { Component, OnInit } from '@angular/core';
import { DislikeButton } from '../models/dislike-button';
import { LikeButton } from '../models/like-button';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {

  likeButton : LikeButton = new LikeButton(100)
  disLikeButton : DislikeButton = new DislikeButton(25)
  stylelike : string = "unlike"
  styleDislike : string = "unlike"
  constructor() { }

  ngOnInit(): void {
  }

  onClickedLike(): void {
    console.log('onClickedLike');
    if (this.likeButton.value > 100){
      this.likeButton.value = this.likeButton.value - 1 ;
      this.stylelike = "unlike"
    }else{
      this.likeButton.value = this.likeButton.value + 1 ;
      this.stylelike = "like"
    }

   // this.ratingClicked.emit('some data at ' + this.targetScore);
}

onClickedDislike(): void {
  if (this.disLikeButton.value > 25){
    this.disLikeButton.value = this.disLikeButton.value - 1 ;
    this.styleDislike  = "unlike"
  }else{
    this.disLikeButton.value = this.disLikeButton.value + 1 ;
    this.styleDislike  = "like"
  }
  console.log('onClickedDislike');
 // this.ratingClicked.emit('some data at ' + this.targetScore);
}

}
