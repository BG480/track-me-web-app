import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor(private toastr: ToastrService) { }

  showSuccessNotification(message, title){
    this.toastr.success(message, title);
  }

  showErrorNotification(message, title) {
    this.toastr.error(message, title);
  }

  showWarningNotofication(message, title) {
    this.toastr.warning(message, title);
  }
}
