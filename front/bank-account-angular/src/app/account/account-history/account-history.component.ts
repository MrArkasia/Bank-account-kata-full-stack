import {Component, OnInit} from '@angular/core';
import {OperationService} from "../../service/operation.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-account-history',
  templateUrl: './account-history.component.html',
  styleUrls: ['./account-history.component.scss', '../../app.component.scss']
})
export class AccountHistoryComponent implements OnInit {

  id: number;
  history: any = [];

  constructor(
    private operationService: OperationService,
    private route: ActivatedRoute,
    private router: Router
  ) {
  }

  ngOnInit() {
    this.route.queryParams
      .subscribe(params => {
        this.id = params.id;
      });
    this.getHistory();
  }

  getHistory() {
    this.history = [];
    this.operationService.getHistory(this.id).subscribe((data: {}) => {
      this.history = data;
    });
  }

  gotoDetails() {
    this.router.navigate(['/account/details'], {queryParams: {id: this.id}});
  }

}
