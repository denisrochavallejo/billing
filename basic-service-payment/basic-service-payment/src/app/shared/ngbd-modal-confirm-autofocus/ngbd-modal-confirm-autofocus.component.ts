import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Client } from 'src/app/client/shared/model/client';

@Component({
  selector: 'app-ngbd-modal-confirm-autofocus',
  templateUrl: './ngbd-modal-confirm-autofocus.component.html',
  styleUrls: ['./ngbd-modal-confirm-autofocus.component.css']
})
export class NgbdModalConfirmAutofocusComponent implements OnInit {

  public entityName: string;
  public description: string;
  constructor(public modal: NgbActiveModal) {}

  ngOnInit(): void {
    console.log();
  }

}
