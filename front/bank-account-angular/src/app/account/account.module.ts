import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DashboardRoutingModule} from './account.routes';
import {AccountListComponent} from './account-list/account-list.component';
import {AccountCreateComponent} from './account-create/account-create.component';
import {AccountDetailsComponent} from './account-details/account-details.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AccountHistoryComponent} from './account-history/account-history.component';
import {AccountOperationComponent} from './account-operation/account-operation.component';
import {BrowserModule} from "@angular/platform-browser";
import {MaterialModule} from "../material.module";

@NgModule({
  declarations: [
    AccountListComponent,
    AccountCreateComponent,
    AccountDetailsComponent,
    AccountHistoryComponent,
    AccountOperationComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    DashboardRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule
  ]
})
export class AccountModule {
}
