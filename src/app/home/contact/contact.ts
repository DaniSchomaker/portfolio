import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { TranslatePipe } from '@ngx-translate/core';

/**
 * Contact form component handling form submission and user feedback.
 */
@Component({
  selector: 'app-contact',
  imports: [FormsModule, TranslatePipe, RouterLink],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class Contact {
  private http = inject(HttpClient);

  /** Form-bound contact data. */
  contactData = {
    name: '',
    email: '',
    message: '',
  };

  /** Indicates whether the form is currently being submitted. */
  isSending = false;

  /** Controls visibility of the success message. */
  showSuccess = false;

  /** Controls visibility of the error message. */
  showError = false;

  /**
   * Submits the contact form data if the form is valid.
   */
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
