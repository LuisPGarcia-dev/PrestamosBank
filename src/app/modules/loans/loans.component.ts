import { Component, Input, OnInit, Output, EventEmitter, ViewChild } from '@angular/core';

@Component({
  selector: 'app-loans',
  templateUrl: './loans.component.html',
  styleUrls: ['./loans.component.less']
})
export class LoansComponent implements OnInit {

  amountValue = 50000;
  @Output() amountSelected = new EventEmitter();
  @Output() example2 = new EventEmitter();

  constructor() { }

  ngOnInit() {
    console.log(this.amountValue);
  }

  checkValue() {
    console.log(this.amountValue);
    this.amountSelected.emit(this.amountValue);
  }

}
