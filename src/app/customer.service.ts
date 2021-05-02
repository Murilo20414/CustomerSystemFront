import { Injectable } from '@angular/core';
import { HttpClient }  from '@angular/common/http'

import { Customer } from './customers/customer';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  apiUrl: string = environment.apiUrlBase+'/customer';

  constructor( private http : HttpClient ) { 

  }

  saveCustomer( customer : Customer ) : Observable<Customer> {
    return this.http.post<Customer>(`${this.apiUrl}/save`, 
                      customer);


  } 


  getCustomers() : Observable<Customer[]> {
    return this.http.get<Customer[]>(`${this.apiUrl}/list`);
  }

  getCustomerById(id: number) : Observable<Customer> {
    return this.http.get<Customer>(`${this.apiUrl}/${id}`);
  }

  updateCustomer( customer : Customer, id: number ) : Observable<Customer> {
    return this.http.put<Customer>(`${this.apiUrl}/${id}`, 
                      customer);
  } 

  deleteCustomer(id: number) : Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${id}`);
  }

}
