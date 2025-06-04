import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({ providedIn: 'root' })
export class LanguageService {
  constructor(private translate: TranslateService) {
    translate.addLangs(['en', 'ta']);
    
    // First, try to get the language from localStorage
    const savedLang = localStorage.getItem('language');
    
    // If there's no saved language, set the default language to 'en'
    const lang = savedLang ? savedLang : 'en';
    
    // Set the default language
    this.setLang(lang);
    
    // Optionally check the browser language and set it if it's not saved
    const browserLang = translate.getBrowserLang();
    const browserLanguage = browserLang?.match(/en|ta/) ? browserLang : 'en';
    
    // If browser language is not saved, set it (you can choose not to override if saved)
    if (!savedLang) {
      this.setLang(browserLanguage);
    }
  }

  // Method to switch language
  switchLanguage(lang: string) {
    this.setLang(lang);
  }

  private setLang(lang: string) {
    this.translate.use(lang);
    document.body.classList.remove('lang-en', 'lang-ta');
    document.body.classList.add(`lang-${lang}`);
    
    // Store the language in localStorage
    localStorage.setItem('language', lang);
  }

  // Get the current language
  get currentLang() {
    return this.translate.currentLang;
  }

  // Get the supported languages
  get supportedLangs() {
    return this.translate.getLangs();
  }
}
