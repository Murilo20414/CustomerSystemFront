import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FormCustomerComponent } from './form-customer/form-customer.component'
import { ListCustomersComponent } from './list-customers/list-customers.component';

const routes: Routes = [
  { path: 'form-customer', component: FormCustomerComponent },
  { path: 'form-customer/:id', component: FormCustomerComponent },
  { path: 'list-customers', component: ListCustomersComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomersRoutingModule { }
