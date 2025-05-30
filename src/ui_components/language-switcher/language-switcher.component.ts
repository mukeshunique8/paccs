// src/app/shared/components/language-switcher/language-switcher.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageService } from '../../service/language.service';
@Component({
  selector: 'app-language-switcher',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="flex gap-2 bg-white/10 rounded-full p-1">
      <button 
        *ngFor="let lang of supportedLangs"
        (click)="switchLanguage(lang)"
        [class]="currentLang === lang
          ? 'bg-white text-primary px-3 py-1 rounded-full text-xs font-medium'
          : 'text-white px-3 py-1 rounded-full text-xs font-medium hover:bg-white/20'"
      >
        {{ getLanguageName(lang) }}
      </button>
    </div>
  `,
  styles: []
})
export class LanguageSwitcherComponent {
  constructor(public languageService: LanguageService) {}

  get supportedLangs() {
    return this.languageService.supportedLangs;
  }

  get currentLang() {
    return this.languageService.currentLang;
  }

  switchLanguage(lang: string) {
    this.languageService.switchLanguage(lang);
  }

  getLanguageName(lang: string): string {
    return {
      'en': 'English',
      'ta': 'தமிழ்'
    }[lang] || lang;
  }
}