import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { Customer } from '../customer';

import { CustomerService } from '../../customer.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-form-customer',
  templateUrl: './form-customer.component.html',
  styleUrls: ['./form-customer.component.css']
})
export class FormCustomerComponent implements OnInit {

  customer!: Customer;
  success: boolean = false;
  errors!: string[];
  id!: number;

  constructor( private service : CustomerService, private activatedRoute: ActivatedRoute ) {
    
    this.customer = new Customer();

  }

  ngOnInit() {

    let params : Observable<Params> = this.activatedRoute.params;

    params.subscribe( urlParams => {
      this.id = urlParams['id'];
      this.service
      .getCustomerById(this.id)
      .subscribe(response => {
                    this.customer = response;
                  }, errorResponse => {
                      this.customer = new Customer();
                  });
    })

  }

  onSubmit() {
    
    if(this.id) {

      console.log('update')
      this.service
        .update(this.customer, this.id)
        .subscribe( response => {
          this.success = true;
          this.errors = [];
          this.customer = response;
        }, errorResponse => {
          this.success = false;
          this.errors = errorResponse.error.errors;
        });


    } else {

        this.service
        .save(this.customer)
        .subscribe( response => {
          this.success = true;
          this.errors = [];
          this.customer = response;
        }, errorResponse => {
          this.success = false;
          this.errors = errorResponse.error.errors;
        });

      }

  }
}
