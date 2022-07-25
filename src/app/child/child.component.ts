import { Component, EventEmitter, Input, OnInit, Output, ɵɵsetComponentScope } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  iPhonePrice: number = 240;
  remainingMoney: any;
  @Input('moneyFromPapa') public money: any;
  @Output() public remainingMoneyEvent = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  hello() {
    alert("Hello");
  }

  buyIPhone() {
    this.remainingMoney = this.money - this.iPhonePrice;
    this.remainingMoneyEvent.emit(this.remainingMoney);
  }

}
