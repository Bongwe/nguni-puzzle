import { Component, OnInit } from '@angular/core';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';
import {Router} from "@angular/router"
import { CountdownModule } from 'ngx-countdown';

import * as _ from 'lodash';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {
  title = 'nguni-puzzle';
  puzzlePieces = [
    "assets/shaka-zulu/shaka-zulu_01.jpg",
    "assets/shaka-zulu/shaka-zulu_02.jpg",
    "assets/shaka-zulu/shaka-zulu_03.jpg",
    "assets/shaka-zulu/shaka-zulu_04.jpg",
    "assets/shaka-zulu/shaka-zulu_05.jpg",
    "assets/shaka-zulu/shaka-zulu_06.jpg",
    "assets/shaka-zulu/shaka-zulu_07.jpg",
    "assets/shaka-zulu/shaka-zulu_08.jpg",
  ];
  
  sortedPuzzlePieces = _.shuffle(this.puzzlePieces);  

  constructor(private router: Router) { }
  
  ngOnInit(){
  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.sortedPuzzlePieces, event.previousIndex, event.currentIndex);
    if (_.isEqual(this.sortedPuzzlePieces,this.puzzlePieces)) {
      this.router.navigate(['/shaka-zulu']);
    }
  }

  gameOver(){
    this.router.navigate(['/game-over']);
  }
}
