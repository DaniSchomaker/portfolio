import { Routes } from '@angular/router';
import { Home } from './home/home';
import { LegalNotice } from './legal-notice/legal-notice';
import { PrivacyPolicy } from './privacy-policy/privacy-policy';


export const routes: Routes = [
  { path: '', component: Home },
  { path: 'legal-notice', component: LegalNotice },
  { path: 'privacy-policy', component: PrivacyPolicy },
];