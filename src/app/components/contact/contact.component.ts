import { Component, inject } from '@angular/core';
import { LanguageService } from '../../services/language.service';

interface ContactCard {
  icon: string;
  titleKey: string | null;
  staticTitle: string | null;
  value: string;
  link: string;
}

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
})
export class ContactComponent {
  readonly langService = inject(LanguageService);

  readonly contactCards: ContactCard[] = [
    {
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg',
      titleKey: 'contact.email',
      staticTitle: null,
      value: 'arodriguezbryan57@gmail.com',
      link: 'mailto:arodriguezbryan57@gmail.com',
    },
    {
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg',
      titleKey: null,
      staticTitle: 'GitHub',
      value: '@barc1023',
      link: 'https://github.com/barc1023',
    },
    {
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg',
      titleKey: null,
      staticTitle: 'LinkedIn',
      value: '/in/bryan-rodriguez',
      link: 'https://www.linkedin.com/in/bryan-rodr%C3%ADguez-1215a53a5/',
    },
    {
      icon: 'https://cdn.simpleicons.org/whatsapp/25D366',
      titleKey: 'contact.whatsapp',
      staticTitle: null,
      value: '+507 6558-3565',
      link: 'https://wa.me/50765583565',
    },
  ];

  getTitle(card: ContactCard): string {
    if (card.titleKey) {
      return this.langService.translate(card.titleKey);
    }
    return card.staticTitle || '';
  }
}
