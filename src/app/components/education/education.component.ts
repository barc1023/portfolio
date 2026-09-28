import { Component, inject } from '@angular/core';
import { LanguageService } from '../../services/language.service';

interface EducationEntry {
  degree: { es: string; en: string };
  institution: { es: string; en: string };
  period: { es: string; en: string };
}

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrl: './education.component.css',
})
export class EducationComponent {
  readonly langService = inject(LanguageService);

  readonly educationItems: EducationEntry[] = [
    {
      degree: { es: 'Tecnico en Desarrollo de Software', en: 'Software Development Technical Degree' },
      institution: { es: 'ITSE Panama', en: 'ITSE Panama' },
      period: { es: 'Enero 2025 - presente', en: 'January 2025 - present' },
    },
    {
      degree: { es: 'Curso de Python y SQL', en: 'Python and SQL Course' },
      institution: { es: 'Instituto PC Center', en: 'Instituto PC Center' },
      period: { es: 'Enero - Diciembre 2023', en: 'January - December 2023' },
    },
  ];

  getLocalizedValue(item: { es: string; en: string }): string {
    return item[this.langService.currentLang()];
  }
}
