import { Component, OnInit } from '@angular/core';
import { InteractionService } from '../interaction.service';

@Component({
  selector: 'app-comp2',
  templateUrl: './comp2.component.html',
  styleUrls: ['./comp2.component.css']
})
export class Comp2Component implements OnInit {

  constructor(private _interactService: InteractionService) { }

  ngOnInit(): void {
    this._interactService._comp1Interaction
      .subscribe(message => {
        if (message == 'Good Morning!') {
          alert('Good Morning Teacher!');
        } else if (message == 'Well Done!') {
          alert('Thank You Teacher!');
        }
      }
      );
  }

}
