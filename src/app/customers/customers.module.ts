import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomersRoutingModule } from './customers-routing.module';
import { FormCustomerComponent } from './form-customer/form-customer.component';
import { FormsModule } from '@angular/forms';
import { ListCustomersComponent } from './list-customers/list-customers.component';

@NgModule({
  declarations: [
    FormCustomerComponent,
    ListCustomersComponent
  ],
  imports: [
    CommonModule,
    CustomersRoutingModule,
    FormsModule,
  ],
  exports: [
    FormCustomerComponent,
    ListCustomersComponent
  ]
})
export class CustomersModule { }
