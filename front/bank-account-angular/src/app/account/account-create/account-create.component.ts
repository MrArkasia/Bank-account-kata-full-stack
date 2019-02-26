import {Component, OnInit} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {AccountService} from "../../service/account.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-account-create',
  templateUrl: './account-create.component.html',
  styleUrls: ['./account-create.component.scss', '../../app.component.scss']
})
export class AccountCreateComponent implements OnInit {

  id: string;

  regex = "^[a-zA-ZáàâäãåçéèêëíìîïñóòôöõúùûüýÿæœÁÀÂÄÃÅÇÉÈÊËÍÌÎÏÑÓÒÔÖÕÚÙÛÜÝŸÆŒ._\\s-]{1,60}$";

  accountForm = this.fb.group({
    lastName: ['', Validators.compose([
      Validators.required,
      Validators.pattern(this.regex)
    ])],
    firstName: ['', Validators.compose([
      Validators.required,
      Validators.pattern(this.regex)
    ])],
  });

  constructor(
    private accountsService: AccountService,
    private router: Router,
    private fb: FormBuilder
  ) {
  }

  ngOnInit() {
  }

  public createAccount() {
    this.accountsService.add(this.firstName.value).subscribe((data: number) => {
      this.router.navigate(['/account/details'], {queryParams: {id: data}});
    });
  }

  onSubmit() {
    this.createAccount();
  }

  public gotoList() {
    this.router.navigate(['/account']);
  }

  get lastName() {
    return this.accountForm.get('lastName');
  }

  get firstName() {
    return this.accountForm.get('firstName');
  }

}
