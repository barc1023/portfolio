import { Component, inject, signal, computed, ElementRef, ViewChild, AfterViewChecked, AfterViewInit } from '@angular/core';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent implements AfterViewChecked {
  readonly langService = inject(LanguageService);

  readonly navLinks = [
    { href: '#home', key: 'nav.home' },
    { href: '#about-me', key: 'nav.aboutMe' },
    { href: '#skills', key: 'nav.skills' },
    { href: '#projects', key: 'nav.projects' },
    { href: '#experience', key: 'nav.experience' },
    { href: '#education', key: 'nav.education' },
    { href: '#contact', key: 'nav.contact' },
  ];

  readonly isMenuOpen = signal(false);
  readonly activeLink = signal<string>('#home');

  @ViewChild('navMenu') navMenu!: ElementRef<HTMLUListElement>;
  @ViewChild('navIndicator') navIndicator!: ElementRef<HTMLSpanElement>;

  readonly indicatorVisible = signal(false);

  toggleMenu(): void {
    this.isMenuOpen.update((open) => !open);
  }

  closeMenu(): void {
    this.isMenuOpen.set(false);
  }

  setActiveLink(href: string): void {
    this.activeLink.set(href);
    this.closeMenu();
    this.updateNavIndicator();
  }

  isActive(href: string): boolean {
    return this.activeLink() === href;
  }

  onLanguageToggle(): void {
    this.langService.toggleLanguage();
  }

  updateNavIndicator(): void {
    if (!this.navMenu || !this.navIndicator) return;
    const menu = this.navMenu.nativeElement;
    const activeEl = menu.querySelector('.nav-link.is-active') as HTMLElement | null;
    if (!activeEl) {
      this.indicatorVisible.set(false);
      return;
    }
    this.navIndicator.nativeElement.style.left = `${activeEl.offsetLeft}px`;
    this.navIndicator.nativeElement.style.width = `${activeEl.offsetWidth}px`;
    this.indicatorVisible.set(true);
  }

  ngAfterViewChecked(): void {
    this.updateNavIndicator();
  }
}
