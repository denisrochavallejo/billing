import { Component } from '@angular/core';
import { LinkNavBar } from './shared/navbar/link-navbar';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Basic Service Payment';
  description = "Nexion TechTest FrontEnd - App for Billing Payments v1";
  links: LinkNavBar [] = [
    {
      text: 'Billings',
      url: 'billing',
      path: ['/billing']
    },
    {
      text: 'Bills',
      url: 'billing',
      path: ['/billing/bills']
    },
    {
      text: 'Clients',
      url: 'client',
      path: ['/client']
    },
    {
      text: 'Services',
      url: 'service',
      path: ['/service']
    }
  ];
}
