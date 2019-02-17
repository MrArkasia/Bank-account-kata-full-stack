import {Component, OnInit} from '@angular/core';
import {AccountService} from "../../service/account.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-account-details',
  templateUrl: './account-details.component.html',
  styleUrls: ['./account-details.component.scss']
})
export class AccountDetailsComponent implements OnInit {

  id: number;
  account: any = [];

  constructor(
    private accountsService: AccountService,
    private route: ActivatedRoute,
    private router: Router) {
  }

  ngOnInit() {
    this.route.queryParams
      .subscribe(params => {
        this.id = params.id;
      });
    this.getAccount();
  }

  private getAccount() {
    this.account = [];
    this.accountsService.get(this.id).subscribe((data: {}) => {
      this.account = data;
    });
  }

  public showHistory() {
    this.router.navigate(['/account/history'], {queryParams: {id: this.id}});
  }

}
