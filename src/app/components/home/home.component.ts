import { Component, inject, ElementRef, ViewChild, AfterViewInit, effect } from '@angular/core';
import { LanguageService } from '../../services/language.service';
import Typed from 'typed.js';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements AfterViewInit {
  readonly langService = inject(LanguageService);

  @ViewChild('typedElement') typedElement!: ElementRef<HTMLSpanElement>;

  private typedInstance: Typed | null = null;

  constructor() {
    // Restart typed.js when language changes
    effect(() => {
      this.langService.currentLang();
      if (this.typedElement) {
        this.initTyped();
      }
    });
  }

  ngAfterViewInit(): void {
    this.initTyped();
  }

  private initTyped(): void {
    if (!this.typedElement) return;

    if (this.typedInstance) {
      this.typedInstance.destroy();
      this.typedInstance = null;
    }

    const strings = this.langService.translateArray('hero.typed');
    if (strings.length === 0) return;

    this.typedInstance = new Typed(this.typedElement.nativeElement, {
      strings: strings,
      typeSpeed: 60,
      backSpeed: 40,
      backDelay: 1500,
      startDelay: 300,
      loop: true,
      smartBackspace: true,
    });
  }
}
