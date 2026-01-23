import {
  ApplicationConfig,
  provideBrowserGlobalErrorListeners,
  provideZoneChangeDetection,
} from '@angular/core';
import { provideRouter, withInMemoryScrolling } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { provideTranslateService } from '@ngx-translate/core';
import { provideTranslateHttpLoader } from '@ngx-translate/http-loader';

import { routes } from './app.routes';

/**
 * Global application configuration.
 *
 * - Enables optimized change detection
 * - Registers global error listeners
 * - Configures routing with automatic scroll-to-top on navigation
 * - Provides HTTP client
 * - Sets up ngx-translate with HTTP loader
 */
export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),

    provideZoneChangeDetection({
      eventCoalescing: true,
    }),

    provideRouter(
      routes,
      withInMemoryScrolling({
        scrollPositionRestoration: 'top',
        anchorScrolling: 'enabled',
      }),
    ),

    provideHttpClient(),

    provideTranslateService({
      lang: 'de',
      fallbackLang: 'de',
      loader: provideTranslateHttpLoader({
        prefix: '/i18n/',
        suffix: '.json',
      }),
    }),
  ],
};
