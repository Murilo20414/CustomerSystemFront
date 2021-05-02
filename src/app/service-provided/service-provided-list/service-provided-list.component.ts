import { Component, OnInit } from '@angular/core';
import { ServiceProvidedService } from '../../service-provided.service';
import { ServiceProvidedSearch } from './ServiceProvidedSearch';

@Component({
  selector: 'app-service-provided-list',
  templateUrl: './service-provided-list.component.html',
  styleUrls: ['./service-provided-list.component.css']
})
export class ServiceProvidedListComponent implements OnInit {

  name!: string;
  month!: number;
  months: number[];

  success: boolean = false;
  messege!: string;
  errors!: string[];

  listServiceProvided!: ServiceProvidedSearch[];

  constructor(
    private serviceProvidedService: ServiceProvidedService
  ) {
    this.months = [1,2,3,4,5,6,7,8,9,10,11,12];
   }

  ngOnInit(): void {
  }

  search() {
    this.serviceProvidedService
              .getServices(this.name, this.month)
              .subscribe(response => {
                this.listServiceProvided = response;
                console.log(response);
                this.success = true;
                this.errors = [];

                if(this.listServiceProvided.length == 0) {
                  this.messege = "Nenhum registro encontrado";
                } else {
                  this.messege = this.listServiceProvided.length + " registro(s) encontrados";
                }
              }, responseError => {
                this.success = false;
                this.errors = responseError.error.errors;
              })
  }

}
