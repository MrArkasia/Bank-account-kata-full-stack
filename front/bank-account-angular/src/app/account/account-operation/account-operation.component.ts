import {Component, OnInit} from '@angular/core';
import {OperationService} from "../../service/operation.service";
import {ActivatedRoute, Router} from "@angular/router";
import {FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-account-operation',
  templateUrl: './account-operation.component.html',
  styleUrls: ['./account-operation.component.scss', '../../app.component.scss']
})
export class AccountOperationComponent implements OnInit {

  id: number;

  operationForm = this.fb.group({
    amount: ['', Validators.compose([
      Validators.required,
      Validators.pattern('\\-?\\d*\\.?\\d{1,2}')
    ])],
    type: [,
      Validators.required
    ]
  });

  constructor(
    private route: ActivatedRoute,
    private operationService: OperationService,
    private router: Router,
    private fb: FormBuilder
  ) {
  }

  ngOnInit() {
    this.route.queryParams
      .subscribe(params => {
        this.id = params.id;
      });
  }

  onSubmit() {
    this.handleOperation();
  }

  get amount() {
    return this.operationForm.get('amount');
  }

  get type() {
    return this.operationForm.get('type');
  }

  public handleOperation() {
    console.log("type : " + this.type.value);
    if (this.type.value === "deposit") {
      this.deposit();
    } else if (this.type.value === "withdrawal") {
      this.withdrawal();
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

  gotoDetails() {
    this.router.navigate(['/account/details'], {queryParams: {id: this.id}});
  }

}
