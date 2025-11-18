import { Component, inject } from '@angular/core';
// import { RouterLink } from '@angular/router';
// import {TranslatePipe, TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  imports: [], // Muss hier der RouterLink rein?
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  // private translate = inject(TranslateService);

  // useLanguage(language: string): void {
  //   this.translate.use(language);
  // }
}
