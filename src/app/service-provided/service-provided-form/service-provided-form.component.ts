import { Component, OnInit } from '@angular/core';
import { Customer } from '../../customers/customer';
import { CustomerService } from '../../customer.service';
import { ServiceProvided } from '../ServiceProvided';
import { ServiceProvidedService } from 'src/app/service-provided.service';

@Component({
  selector: 'app-service-provided-form',
  templateUrl: './service-provided-form.component.html',
  styleUrls: ['./service-provided-form.component.css']
})
export class ServiceProvidedFormComponent implements OnInit {

  customers: Customer[] = [];
  service!: ServiceProvided;
  errors!: string[];
  success: boolean = false;

  constructor(
      private customerService: CustomerService,
      private serviceProvidedService: ServiceProvidedService,
  ) {
      this.service = new ServiceProvided();
   }

  ngOnInit(): void {

    this.customerService
                        .getCustomers()
                          .subscribe( response => this.customers = response);


  }

  onSubmit() {
    this.serviceProvidedService
                  .saveService(this.service)
                  .subscribe(response => {
                    this.success = true;
                    this.errors = [];
                    this.service = new ServiceProvided();
                  }, errorResponse => {
                    this.success = false;
                    this.errors = errorResponse.error.errors;
                  })
  }

}
