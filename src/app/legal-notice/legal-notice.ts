import { Component } from '@angular/core';

@Component({
  selector: 'app-legal-notice',
  imports: [],
  templateUrl: './legal-notice.html',
  styleUrl: './legal-notice.scss',
})
export class LegalNotice {

  ngOnInit() {
    document.body.classList.add('legal-notice-bg');
  }

  ngOnDestroy() {
    document.body.classList.remove('legal-notice-bg');
  }
}