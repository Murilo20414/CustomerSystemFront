import { Injectable } from '@angular/core';
import { HttpClient }  from '@angular/common/http'

import { Customer } from './customers/customer';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor( private http : HttpClient ) { 

  }

  save( customer : Customer ) : Observable<Customer> {
    return this.http.post<Customer>('http://localhost:8080/api/customer/save', 
                      customer);


  } 


  getCustomers() : Observable<Customer[]> {
    return this.http.get<Customer[]>('http://localhost:8080/api/customer/list');
  }

  getCustomerById(id: number) : Observable<Customer> {
    return this.http.get<Customer>(`http://localhost:8080/api/customer/${id}`);
  }

  update( customer : Customer, id: number ) : Observable<Customer> {
    return this.http.put<Customer>(`http://localhost:8080/api/customer/${id}`, 
                      customer);
  } 

}
