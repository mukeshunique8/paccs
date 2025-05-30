import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
@Injectable({ providedIn: 'root' })
export class LanguageService {
  constructor(private translate: TranslateService) {
    translate.addLangs(['en', 'ta']);
    translate.setDefaultLang('en');

    const browserLang = translate.getBrowserLang();
    const lang = browserLang?.match(/en|ta/) ? browserLang : 'en';
    this.setLang(lang);
  }

  switchLanguage(lang: string) {
    this.setLang(lang);
  }

  private setLang(lang: string) {
    this.translate.use(lang);
    document.body.classList.remove('lang-en', 'lang-ta');
    document.body.classList.add(`lang-${lang}`);
  }

  get currentLang() {
    return this.translate.currentLang;
  }

  get supportedLangs() {
    return this.translate.getLangs();
  }
}
