import {Component, OnInit} from '@angular/core';
import {AccountService} from '../../service/account.service';
import {Router} from "@angular/router";

@Component({
  selector: 'app-account-list',
  templateUrl: './account-list.component.html',
  styleUrls: ['./account-list.component.scss', '../../app.component.scss']
})
export class AccountListComponent implements OnInit {

  accounts: any = [];

  constructor(private accountsService: AccountService, private router: Router) {
  }

  ngOnInit() {
    this.getAccounts();
  }

  getAccounts() {
    this.accounts = [];
    this.accountsService.getAll().subscribe((data: {}) => {
      this.accounts = data;
    });
  }

  gotoDetails(id) {
    this.router.navigate(['/account/details'], {queryParams: {id: id}});
  }

}
