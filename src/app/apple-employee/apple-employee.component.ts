import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-apple-employee',
  templateUrl: './apple-employee.component.html',
  styleUrls: ['./apple-employee.component.css']
})
export class AppleEmployeeComponent implements OnInit {

 @Input('employeeProperty') public message = '';

 @Output() public messageFromAppleEmployee = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  eventCall(){
    this.messageFromAppleEmployee.emit('Hi, I am Tripti, an employee of Apple with employee code A785PPLE');
  }

}
