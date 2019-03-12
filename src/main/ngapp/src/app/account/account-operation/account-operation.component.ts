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
  error = false;

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

  public handleOperation() {
    if (this.type.value === "deposit") {
      this.deposit();
    } else if (this.type.value === "withdrawal") {
      this.withdrawal();
    }
  }

  private withdrawal() {
    this.operationService.withdrawal(this.id, this.amount.value).subscribe(
      (data: number) => {
        console.log('success', data),
          this.router.navigate(['/account/details'], {queryParams: {id: data}});
      },
      error => {
        console.log('oops', error)
        this.error = true;
      }
    );
  }

  private deposit() {
    this.operationService.deposit(this.id, this.amount.value).subscribe(
      (data: number) => {
        console.log('success', data),
          this.router.navigate(['/account/details'], {queryParams: {id: data}});
      },
      error => {
        console.log('oops', error)
        this.error = true;
      }
    );
  }

  onSubmit() {
    this.handleOperation();
  }

  gotoDetails() {
    this.router.navigate(['/account/details'], {queryParams: {id: this.id}});
  }

  get amount() {
    return this.operationForm.get('amount');
  }

  get type() {
    return this.operationForm.get('type');
  }

}
