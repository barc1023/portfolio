import { Injectable, signal, computed, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export type Language = 'es' | 'en';

@Injectable({
  providedIn: 'root',
})
export class LanguageService {
  private readonly http = inject(HttpClient);
  private readonly storageKey = 'portfolio-lang';

  readonly currentLang = signal<Language>(this.getSavedLang());
  readonly translations = signal<Record<string, any>>({});

  readonly langToggleLabel = computed(() =>
    this.currentLang() === 'es' ? 'EN' : 'ES'
  );

  constructor() {
    this.loadTranslations(this.currentLang());
  }

  private getSavedLang(): Language {
    const saved = localStorage.getItem(this.storageKey);
    return saved === 'en' ? 'en' : 'es';
  }

  private loadTranslations(lang: Language): void {
    this.http
      .get<Record<string, any>>(`assets/i18n/${lang}.json`)
      .subscribe((data) => {
        this.translations.set(data);
      });
  }

  toggleLanguage(): void {
    const newLang: Language = this.currentLang() === 'es' ? 'en' : 'es';
    this.setLanguage(newLang);
  }

  setLanguage(lang: Language): void {
    this.currentLang.set(lang);
    localStorage.setItem(this.storageKey, lang);
    document.documentElement.lang = lang;
    this.loadTranslations(lang);
  }

  translate(path: string): string {
    const keys = path.split('.');
    let value: any = this.translations();
    for (const key of keys) {
      value = value?.[key];
      if (value === undefined) return '';
    }
    return typeof value === 'string' ? value : '';
  }

  translateArray(path: string): string[] {
    const keys = path.split('.');
    let value: any = this.translations();
    for (const key of keys) {
      value = value?.[key];
      if (value === undefined) return [];
    }
    return Array.isArray(value) ? value : [];
  }
}
