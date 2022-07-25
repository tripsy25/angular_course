import { Component, OnInit } from '@angular/core';
import { InteractionService } from '../interaction.service';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.css']
})
export class Comp1Component implements OnInit {

  constructor(private _interationService: InteractionService) { }

  ngOnInit(): void {
  }

  greetStudent(){
    this._interationService.sendMessage("Good Morning!");
  }

  appreciateStudent(){
    this._interationService.sendMessage("Well Done!");
  }

}
