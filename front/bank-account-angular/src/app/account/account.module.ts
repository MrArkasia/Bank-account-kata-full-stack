import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {DashboardRoutingModule} from './account.routes';
import {AccountListComponent} from './account-list/account-list.component';
import {AccountCreateComponent} from './account-create/account-create.component';
import {AccountDetailsComponent} from './account-details/account-details.component';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AccountHistoryComponent} from './account-history/account-history.component';

@NgModule({
  declarations: [
    AccountListComponent,
    AccountCreateComponent,
    AccountDetailsComponent,
    AccountHistoryComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AccountModule {
}
