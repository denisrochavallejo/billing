import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Billing } from '../../model/billing';
import { Status } from '../../model/status';

@Injectable({
  providedIn: 'root'
})
export class BillingService {
  // url: string = 'https://localhost:44334';
  url: string = 'http://localhost:5000';

  constructor(private httpClient : HttpClient) { }

  getBillings() : Observable<Billing []> {
    return this.httpClient.get<Billing []>(`${this.url}/api/billing`);
  }

  updateBilling(billing: Billing) : Observable<any>{
    billing.status = Status.Paid;
    return this.httpClient.put(`${this.url}/api/billing`, billing);
  }

  deleteBilling(billing: Billing) : Observable<any> {
    const options = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
        }),
        body: billing,
      };   
      return this.httpClient.delete(`${this.url}/api/billing`, options);      
    }
}
