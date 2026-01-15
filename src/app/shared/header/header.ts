import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, TranslatePipe],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  private translate = inject(TranslateService);

  currentLanguage: 'en' | 'de' = 'en';
  menuOpen = false;

  toggleMenu(): void {
    this.menuOpen = !this.menuOpen;
  }

  closeMenu(): void {
    this.menuOpen = false;
  }

  useLanguage(language: 'en' | 'de'): void {
    this.currentLanguage = language;
    this.translate.use(language);

    document.documentElement.classList.remove('language-en', 'language-de');
    document.documentElement.classList.add('language-' + language);
  }
}
