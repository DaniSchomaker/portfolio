// import { Component, inject } from '@angular/core';
// // import { RouterLink } from '@angular/router';
// import {TranslatePipe, TranslateService} from '@ngx-translate/core';

// @Component({
//   selector: 'app-header',
//   imports: [], // Muss hier der RouterLink rein?
//   templateUrl: './header.html',
//   styleUrl: './header.scss',
// })
// export class Header {
//      private translate = inject(TranslateService);

//   useLanguage(language: string): void {
//       this.translate.use(language);
//   }
// }

import { Component, inject } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  private translate = inject(TranslateService);

  currentLanguage: 'en' | 'de' = 'en';   

  useLanguage(language: 'en' | 'de'): void {
    this.currentLanguage = language;
    this.translate.use(language);

    document.documentElement.classList.remove('language-en', 'language-de');
    document.documentElement.classList.add('language-' + language);
  }
}

