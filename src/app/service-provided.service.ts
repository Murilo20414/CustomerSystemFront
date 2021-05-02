import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ServiceProvidedSearch } from './service-provided/service-provided-list/ServiceProvidedSearch';
import { ServiceProvided } from './service-provided/ServiceProvided';

@Injectable({
  providedIn: 'root'
})
export class ServiceProvidedService {

  apiUrl: string = environment.apiUrlBase+'/services-provided';

  constructor(private http: HttpClient) { }

  saveService(serviceProvided: ServiceProvided) : Observable<ServiceProvided> {
    return this.http.post<ServiceProvided>(`${this.apiUrl}/save`, serviceProvided);
  }

  getServices(name: string, month: number) : Observable<ServiceProvidedSearch[]> {

    return this.http.get<any[]>(`${this.apiUrl}?name=${name}&month=${month ? month : ''}`);
  }

}
