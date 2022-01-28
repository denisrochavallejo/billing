import { Component, Input, OnInit } from '@angular/core';
import { LinkNavBar } from './link-navbar';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  @Input() title: string;
  @Input() links: LinkNavBar[];

  constructor() { }

  ngOnInit(): void {
  }

}
