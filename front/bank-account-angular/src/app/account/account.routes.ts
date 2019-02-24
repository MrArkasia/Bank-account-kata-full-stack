import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AccountListComponent} from './account-list/account-list.component';
import {AccountCreateComponent} from './account-create/account-create.component';
import {AccountDetailsComponent} from "./account-details/account-details.component";
import {AccountHistoryComponent} from "./account-history/account-history.component";
import {AccountOperationComponent} from "./account-operation/account-operation.component";

const accountRoutes: Routes = [{
  path: 'account',
  children: [
    {path: '', redirectTo: 'list', pathMatch: 'full'},
    {path: 'list', component: AccountListComponent},
    {path: 'create', component: AccountCreateComponent},
    {path: 'details', component: AccountDetailsComponent},
    {path: 'history', component: AccountHistoryComponent},
    {path: 'operation', component: AccountOperationComponent}
  ]
}];

@NgModule({
  imports: [RouterModule.forRoot(accountRoutes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule {
}
