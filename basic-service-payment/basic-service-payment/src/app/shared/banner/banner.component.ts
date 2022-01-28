import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {

  @Input() title: string;
  @Input() description: string;
  
  constructor() { }

  ngOnInit(): void {
  }

}
