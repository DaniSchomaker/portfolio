import { Component } from '@angular/core';

/**
 * Privacy policy page component with page-specific background styling.
 */
@Component({
  selector: 'app-privacy-policy',
  imports: [],
  templateUrl: './privacy-policy.html',
  styleUrl: './privacy-policy.scss',
})
export class PrivacyPolicy {
  ngOnInit() {
    document.body.classList.add('privacy-policy-bg');
  }

  ngOnDestroy() {
    document.body.classList.remove('privacy-policy-bg');
  }
}
