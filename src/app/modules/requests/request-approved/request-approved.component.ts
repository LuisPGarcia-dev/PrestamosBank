import { Component, OnInit } from '@angular/core';
import { RequestsService } from 'src/app/services/requests/requests.service';

@Component({
  selector: 'app-request-approved',
  templateUrl: './request-approved.component.html',
  styleUrls: ['./request-approved.component.less']
})
export class RequestApprovedComponent implements OnInit {

  requestsList: any;

  constructor(private requestsService: RequestsService) { }

  ngOnInit() {
    this.requestsService.getRequestsApproved().subscribe((response) => {
      this.requestsList = response;
      console.log(response, this.requestsList);
    });
  }

}
