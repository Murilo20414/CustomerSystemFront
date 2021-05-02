import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Customer } from '../customer';
import { CustomerService } from '../../customer.service';


@Component({
  selector: 'app-list-customers',
  templateUrl: './list-customers.component.html',
  styleUrls: ['./list-customers.component.css']
})
export class ListCustomersComponent implements OnInit {

  customers: Customer[] = [];
  customerSelected!: Customer;

  success: boolean = false;
  errors!: string[];

  constructor( private service: CustomerService, private router: Router ) { }


  ngOnInit(): void { 
    
    this.service
                .getCustomers()
                .subscribe(response => {
                    this.customers = response;
                }, errorsResponse => {

                });
              
  
  }

  updateCustomerSelected(customer: Customer) {
    console.log(customer);
    this.customerSelected = customer;
  }

  onDelete() {
    this.service
                .deleteCustomer(this.customerSelected.id)
                .subscribe(response => {
                    this.success = true;
                    this.errors = [];
                    this.ngOnInit();
                }, errorsResponse => {
                  this.success = false;
                  this.errors = errorsResponse.error.errors;
                });
  }

}
