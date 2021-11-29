import { Component, OnInit } from '@angular/core';
import { RequestsService } from 'src/app/services/requests/requests.service';

@Component({
  selector: 'app-request-rejected',
  templateUrl: './request-rejected.component.html',
  styleUrls: ['./request-rejected.component.less']
})
export class RequestRejectedComponent implements OnInit {

  requestsList: any;

  constructor(private requestsService: RequestsService) { }

  ngOnInit() {
    this.requestsService.getRequestsRejecteds().subscribe((response) => {
      this.requestsList = response;
      console.log(response, this.requestsList);
    });
  }

}
