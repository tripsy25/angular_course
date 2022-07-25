import { AfterContentInit, AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-papa',
  templateUrl: './papa.component.html',
  styleUrls: ['./papa.component.css']
})
export class PapaComponent implements OnInit,AfterViewInit {

  public moneyFromPapa:number = 400;
  public remainingMoneyFromChild:any;

  @ViewChild('childCompTemp') childCompTemp: any;
  
  constructor() { }
  
  ngAfterViewInit(): void {
    this.childCompTemp.hello();
    // this.childCompTemp.money = this.moneyFromPapa;
  }

  ngOnInit(): void {
  }
  setRemainingMoney(eve:any){
    console.log(eve);
    this.remainingMoneyFromChild = eve;
  }

}
