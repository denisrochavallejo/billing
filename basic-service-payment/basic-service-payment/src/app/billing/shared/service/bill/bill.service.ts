import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Bill } from '../../model/bill';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BillService {
  // url: string = 'https://localhost:44334';
  url: string = 'http://localhost:5000';
  storedBills: Bill[];

  constructor(private httpClient : HttpClient) { }

  getBills() : Observable<Bill []> {
    return this.httpClient.get<Bill []>(`${this.url}/api/bill`)
    .pipe(
      tap(data => this.storedBills = data)
    );
  }

  addBill(bill: Bill) : Observable<any>{
    let billRequest = { period: bill.period, service: bill.service };
    return this.httpClient.post(`${this.url}/api/bill`, billRequest);
  }

  updateBill(bill: Bill) : Observable<any>{
    return this.httpClient.put(`${this.url}/api/bill`, bill);
  }

  deleteBill(bill: Bill) : Observable<any> {
    const options = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
        }),
        body: bill,
      };   
      return this.httpClient.delete(`${this.url}/api/bill`, options);      
    }

  getStoredBills() : Bill []{
    return this.storedBills;
  }
}
