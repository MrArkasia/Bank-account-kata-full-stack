import {Component, OnInit} from '@angular/core';
import {OperationService} from "../../service/operation.service";
import {ActivatedRoute, Router} from "@angular/router";
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-account-operation',
  templateUrl: './account-operation.component.html',
  styleUrls: ['./account-operation.component.scss', '../../app.component.css']
})
export class AccountOperationComponent implements OnInit {

  id: number;
  type: String = '';
  amount = new FormControl('');

  constructor(
    private route: ActivatedRoute,
    private operationService: OperationService,
    private router: Router
  ) {
  }

  ngOnInit() {
    this.route.queryParams
      .subscribe(params => {
        this.id = params.id;
      });
  }

  public handleOperation() {
    if (this.type === "withdrawal") {
      this.withdrawal();
    } else if (this.type === "deposit") {
      this.deposit();
    }
  }

  private withdrawal() {
    this.operationService.withdrawal(this.id, this.amount.value).subscribe((data: number) => {
      this.router.navigate(['/account/details'], {queryParams: {id: data}});
    });
  }

  private deposit() {
    this.operationService.deposit(this.id, this.amount.value).subscribe((data: number) => {
      this.router.navigate(['/account/details'], {queryParams: {id: data}});
    });
  }

  isWithdrawal() {
    console.log("is withdrawal");
    this.type = "withdrawal";
  }

  isDeposit() {
    console.log("is deposit");
    this.type = "deposit";
  }

  goToDetails() {
    this.router.navigate(['/account/details'], {queryParams: {id: this.id}});
  }

}
