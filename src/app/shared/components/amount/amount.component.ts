import { Component, OnInit } from '@angular/core';
import { AmountService } from 'src/app/services/amount/amount.service';

@Component({
  selector: 'app-amount',
  templateUrl: './amount.component.html',
  styleUrls: ['./amount.component.less']
})
export class AmountComponent implements OnInit {

  totalAmount: any;

  constructor(private amountService: AmountService) { }

  ngOnInit() {
    this.amountService.getAmount().subscribe((response: any) => {
      this.totalAmount = response[0].capital_base;
      console.log(response, this.totalAmount);
    });
  }


}
