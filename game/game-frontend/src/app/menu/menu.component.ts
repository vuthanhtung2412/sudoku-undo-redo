import { Component, OnInit } from '@angular/core';
import { GameService } from '../service/game.service';
import { FormBuilder } from '@angular/forms';
import { Level } from '../models/level';
import { Router } from '@angular/router';
import { SetValue } from 'src/app/command/set-value';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  //image = SetValue.getSnapshot(this.gameService.game,2);
  level = Level;
  // selected = Level.easy;
  suggestion = this._formBuilder.group({
    suggested: false,
  });
  constructor(public gameService : GameService, private _formBuilder: FormBuilder, private router: Router) { 
    
  }

  ngOnInit(): void {
    //this.suggestion.value.suggested = false;
  }

  test(){
    console.log(this.gameService.game.player)
  }

  navigationBoard(){
    this.gameService.initGame();
    this.router.navigateByUrl('/board');
  }

  getLevel(l : Level){
    this.gameService.level = l;
  }

  checkSuggestion(event : boolean){
    this.gameService.wSuggestion = <boolean> this.suggestion.value.suggested;
    //console.log("wSuggestion" + this.gameService;
  }
}
