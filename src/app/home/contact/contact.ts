import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule, TranslatePipe, RouterLink],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class Contact {
  private http = inject(HttpClient);

  contactData = {
    name: '',
    email: '',
    message: '',
  };

  isSending = false;
  showSuccess = false;
  showError = false;

  onSubmit(ngForm: NgForm) {
    if (ngForm.invalid) {
      ngForm.control.markAllAsTouched();
      return;
    }

    this.isSending = true;
    this.showSuccess = false;
    this.showError = false;

    this.http
      .post('/api/sendMail.php', this.contactData, { responseType: 'text' })
      .subscribe({
        next: (res) => {
          const response = String(res).trim();

          if (response !== 'OK') {
            this.showError = true;
            return;
          }

          this.showSuccess = true;
          ngForm.resetForm();

          setTimeout(() => {
            this.showSuccess = false;
          }, 4000);
        },
        error: () => {
          this.showError = true;
        },
        complete: () => {
          this.isSending = false;

          if (this.showError) {
            setTimeout(() => {
              this.showError = false;
            }, 4000);
          }
        },
      });
  }
}
