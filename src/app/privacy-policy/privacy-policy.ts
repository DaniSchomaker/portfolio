import { Component, OnInit, OnDestroy } from '@angular/core';

/**
 * Privacy Policy page component.
 *
 * Adds and removes a page-specific body class to apply
 * dedicated background styling while this view is active.
 */
@Component({
  selector: 'app-privacy-policy',
  imports: [],
  templateUrl: './privacy-policy.html',
  styleUrl: './privacy-policy.scss',
})
export class PrivacyPolicy implements OnInit, OnDestroy {
  /**
   * Applies the privacy policy background styling on page entry.
   */
  ngOnInit(): void {
    document.body.classList.add('privacy-policy-bg');
  }

  /**
   * Removes the privacy policy background styling on page leave.
   */
  ngOnDestroy(): void {
    document.body.classList.remove('privacy-policy-bg');
  }
}
