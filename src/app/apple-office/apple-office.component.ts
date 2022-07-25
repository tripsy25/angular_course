import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-apple-office',
  templateUrl: './apple-office.component.html',
  styleUrls: ['./apple-office.component.css']
})
export class AppleOfficeComponent implements OnInit {

  public appleOfficeData = 'Apple Office: Hi, this is Apple Office. How may I help you?';
  public messageFromEmployee="";

  constructor() { }

  ngOnInit(): void {
  }

}
