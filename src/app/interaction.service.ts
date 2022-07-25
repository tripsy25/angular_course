import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class InteractionService {

  public _comp1Interaction: Subject<string> = new Subject<string>();
  // com1Interaction$ = this._comp1Interaction.asObservable();
  
  constructor() { }

  sendMessage(message:string){      
    this._comp1Interaction.next(message); // Setting the variable _comp1Interaction with message
  }
}
