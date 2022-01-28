import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Service } from '../model/service';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  // url: string = 'https://localhost:44334';
  url: string = 'http://localhost:5000';

  constructor(private httpClient : HttpClient) { }

  getServices() : Observable<Service []> {
    return this.httpClient.get<Service []>(`${this.url}/api/service`);
  }

  deleteService(service: Service) : Observable<any> {
  const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
      body: service,
    };   
    return this.httpClient.delete(`${this.url}/api/service`, options);      
  }

  addService(service: Service) : Observable<any>{
    let serviceRequest = { category: service.category }
    return this.httpClient.post(`${this.url}/api/service`, serviceRequest);      
  }

  updateService(service: Service) : Observable<any>{
    return this.httpClient.put(`${this.url}/api/service`, service);      
  }
}
