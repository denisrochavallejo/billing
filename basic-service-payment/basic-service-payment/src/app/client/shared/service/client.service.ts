import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Client } from '../model/client';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  // url: string = 'https://localhost:44334';
  public url: string = 'http://localhost:5000';

  constructor(private httpClient : HttpClient) { }

  getClients() : Observable<Client []> {
    return this.httpClient.get<Client []>(`${this.url}/api/client`);
  }

  addClient(client: Client) : Observable<any>{
    let clientRequest = { name: client.name };
    return this.httpClient.post(`${this.url}/api/client`, clientRequest);      
  }

  updateClient(client: Client) : Observable<any>{
    return this.httpClient.put(`${this.url}/api/client`, client);      
  }

  deleteClient(client: Client) : Observable<any> {
    const options = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
        }),
        body: client,
      };   
      return this.httpClient.delete(`${this.url}/api/client`, options);      
    }
}
