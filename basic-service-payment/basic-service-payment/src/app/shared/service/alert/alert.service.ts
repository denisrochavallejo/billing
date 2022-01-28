import { Injectable } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { filter } from 'rxjs/operators';
import { Alert } from '../../model/Alert';
import { AlertType } from '../../model/AlertType';

const options = {
  autoClose: true,
  keepAfterRouteChange: true
};

@Injectable({
    providedIn: 'root'
})

export class AlertService {
  private subject = new Subject<Alert>();
  private defaultId = 'default-alert';

  // enable subscribing to alerts observable
  onAlert(id = this.defaultId): Observable<Alert> {
      return this.subject.asObservable().pipe(filter(x => x && x.id === id));
  }

  // convenience methods
  success(message: string) {
      this.alert(new Alert({ ...options, type: AlertType.Success, message }));
  }

  error(message: string) {
      this.alert(new Alert({ ...options, type: AlertType.Danger, message }));
  }

  info(message: string) {
      this.alert(new Alert({ ...options, type: AlertType.Info, message }));
  }

  warn(message: string) {
      this.alert(new Alert({ ...options, type: AlertType.Warning, message }));
  }

  // main alert method    
  alert(alert: Alert) {
      alert.id = alert.id || this.defaultId;
      this.subject.next(alert);
  }

  // clear alerts
  clear(id = this.defaultId) {
      this.subject.next(new Alert({ id }));
  }
}
