import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';

/**
 * Header component for navigation and language switching.
 *
 * Responsibilities:
 * - Exposes the current language state for template bindings
 * - Toggles the mobile menu overlay
 * - Switches the active ngx-translate language
 * - Synchronizes a language CSS class on the root `<html>` element
 */
@Component({
  selector: 'app-header',
  imports: [CommonModule, TranslatePipe],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header implements OnInit {
  /**
   * ngx-translate service used to read the current/default language and to switch languages.
   */
  private translate = inject(TranslateService);

  /**
   * Currently active language used for UI state and template bindings.
   */
  currentLanguage: 'en' | 'de' = 'de';

  /**
   * Indicates whether the mobile menu overlay is currently open.
   */
  menuOpen = false;

  /**
   * Initializes the header language state from ngx-translate and applies the corresponding
   * CSS class to the root `<html>` element.
   */
  ngOnInit(): void {
    const lang = (this.translate.currentLang || this.translate.getDefaultLang() || 'de') as
      | 'en'
      | 'de';
    this.currentLanguage = lang;
    this.applyLanguageClass(lang);
  }

  /**
   * Toggles the mobile menu open/close state.
   */
  toggleMenu(): void {
    this.menuOpen = !this.menuOpen;
  }

  /**
   * Closes the mobile menu overlay.
   */
  closeMenu(): void {
    this.menuOpen = false;
  }

  /**
   * Switches the application language and updates the root `<html>` language CSS class.
   *
   * @param language - Target language (`en` or `de`)
   */
  useLanguage(language: 'en' | 'de'): void {
    this.currentLanguage = language;
    this.translate.use(language);
    this.applyLanguageClass(language);
  }

  /**
   * Applies a language-specific CSS class to the root `<html>` element.
   * This enables language-dependent styling via `:host-context(.language-xx)` selectors.
   *
   * @param language - Target language (`en` or `de`)
   */
  private applyLanguageClass(language: 'en' | 'de'): void {
    document.documentElement.classList.remove('language-en', 'language-de');
    document.documentElement.classList.add('language-' + language);
  }
}
