import { Component, OnInit, OnDestroy } from '@angular/core';

/**
 * Legal Notice page component.
 *
 * Applies and removes a page-specific body class to enable
 * dedicated background styling while this page is active.
 */
@Component({
  selector: 'app-legal-notice',
  imports: [],
  templateUrl: './legal-notice.html',
  styleUrl: './legal-notice.scss',
})
export class LegalNotice implements OnInit, OnDestroy {
  /**
   * Applies the legal notice background styling on page entry.
   */
  ngOnInit(): void {
    document.body.classList.add('legal-notice-bg');
  }

  /**
   * Removes the legal notice background styling on page leave.
   */
  ngOnDestroy(): void {
    document.body.classList.remove('legal-notice-bg');
  }
}
