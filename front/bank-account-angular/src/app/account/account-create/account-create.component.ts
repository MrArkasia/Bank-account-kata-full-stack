import {Component, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';
import {AccountService} from "../../service/account.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-account-create',
  templateUrl: './account-create.component.html',
  styleUrls: ['./account-create.component.scss', '../../app.component.scss']
})
export class AccountCreateComponent implements OnInit {

  lastName = new FormControl('');
  firstName = new FormControl('');

  id: string;

  constructor(
    private accountsService: AccountService,
    private router: Router
  ) {
  }

  ngOnInit() {
  }

  public createAccount() {
    this.accountsService.add(name).subscribe((data: number) => {
      this.router.navigate(['/account/details'], {queryParams: {id: data}});
    });
  }

  public gotoList() {
    this.router.navigate(['/account']);
  }

}
