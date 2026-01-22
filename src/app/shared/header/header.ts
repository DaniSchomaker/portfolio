import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, TranslatePipe],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header implements OnInit {
  private translate = inject(TranslateService);

  currentLanguage: 'en' | 'de' = 'de';
  menuOpen = false;

  ngOnInit(): void {
    const lang = (this.translate.currentLang || this.translate.getDefaultLang() || 'de') as 'en' | 'de';
    this.currentLanguage = lang;
    this.applyLanguageClass(lang);
  }

  toggleMenu(): void {
    this.menuOpen = !this.menuOpen;
  }

  closeMenu(): void {
    this.menuOpen = false;
  }

  useLanguage(language: 'en' | 'de'): void {
    this.currentLanguage = language;
    this.translate.use(language);
    this.applyLanguageClass(language);
  }

  private applyLanguageClass(language: 'en' | 'de'): void {
    document.documentElement.classList.remove('language-en', 'language-de');
    document.documentElement.classList.add('language-' + language);
  }
}
