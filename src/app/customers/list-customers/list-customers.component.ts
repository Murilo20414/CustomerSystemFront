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

  constructor( private service: CustomerService, private router: Router ) { }


  ngOnInit(): void { 
    
    this.service
                .getCustomers()
                .subscribe(response => {
                    this.customers = response;
                }, errorsResponse => {

                });

  
  }

  

}
