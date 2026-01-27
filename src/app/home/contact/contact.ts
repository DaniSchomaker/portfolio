import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { TranslatePipe } from '@ngx-translate/core';

/**
 * Contact form component.
 *
 * Handles:
 * - Template-driven form validation
 * - Form submission via HTTP POST
 * - Success and error feedback for the user
 */
@Component({
  selector: 'app-contact',
  imports: [FormsModule, TranslatePipe, RouterLink],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class Contact {
  /** HTTP client used to submit the contact request. */
  private http = inject(HttpClient);

  /**
   * Form-bound contact data.
   * Populated via two-way binding in the template.
   */
  contactData = {
    name: '',
    email: '',
    message: '',
  };

  /** Indicates whether the form submission is currently in progress. */
  isSending = false;

  /** Controls visibility of the success feedback message. */
  showSuccess = false;

  /** Controls visibility of the error feedback message. */
  showError = false;

  /**
   * Submits the contact form data if the form is valid.
   *
   * - Marks all fields as touched if the form is invalid
   * - Sends the form data to the backend PHP endpoint
   * - Displays success or error feedback depending on the response
   *
   * @param ngForm - Template-driven Angular form instance
   */
  onSubmit(ngForm: NgForm): void {
    if (ngForm.invalid) {
      ngForm.control.markAllAsTouched();
      return;
    }

    this.isSending = true;
    this.showSuccess = false;
    this.showError = false;

    this.http.post('/api/sendMail.php', this.contactData, { responseType: 'text' }).subscribe({
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
