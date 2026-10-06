import { Injectable, signal, computed } from '@angular/core';

export type Language = 'es' | 'en';

const TRANSLATIONS: Record<Language, Record<string, any>> = {
  es: {
    nav: {
      home: 'Inicio',
      aboutMe: 'Sobre mí',
      skills: 'Habilidades',
      projects: 'Proyectos',
      experience: 'Experiencia',
      education: 'Educación',
      contact: 'Contacto',
    },
    hero: {
      title: 'Hola, soy ',
      description:
        'Estudiante de Técnico en Desarrollo de Software en ITSE Panamá, enfocado en desarrollo full stack. Construyo aplicaciones web y móviles con Angular, Laravel, PHP y bases de datos SQL, desde sistemas de gestión hasta plataformas tipo marketplace.',
      viewProjects: 'Ver proyectos',
      downloadCV: 'Descargar CV',
      typed: [
        'Estudiante de Desarrollo de Software',
        'Desarrollador Full Stack',
        'PHP & Laravel Developer',
      ],
    },
    aboutMe: {
      title: 'Sobre mí',
      description:
        'Soy estudiante de Técnico en Desarrollo de Software en el ITSE (Instituto Técnico Superior Especializado) en Panamá, cursando desde enero de 2025. Además de mis proyectos académicos, tengo experiencia previa como Ayudante de Desarrollo, donde colaboré en la construcción de software de gestión comercial. Me gusta trabajar en todo el ciclo de una aplicación: desde el diseño de bases de datos hasta la interfaz de usuario, con especial interés en Angular, PHP/Laravel y el diseño de esquemas de bases de datos relacionales.',
    },
    skills: {
      title: 'Habilidades',
      subtitle: 'Habilidades técnicas y herramientas que manejo.',
      frontend: 'Frontend',
      backend: 'Backend y BD',
      tools: 'Herramientas',
      howUse: '¿Cómo la utilizo?',
      evidence: 'Evidencia en el curso:',
    },
    projects: {
      title: 'Proyectos',
      viewProject: 'Ver proyecto',
      client: 'Cliente',
      year: 'Año',
      role: 'Rol',
    },
    experience: {
      title: 'Experiencia',
      description: 'Experiencia profesional y trayectoria laboral.',
      role: 'Ayudante de Desarrollo — Distribuidora Miqui Chong',
      period: 'Octubre 2022 – Agosto 2023',
      description2:
        'Colaboré en la construcción de software de gestión comercial para la distribuidora, incluyendo módulos de órdenes de venta y facturación al por mayor.',
    },
    education: {
      title: 'Educación',
      description: 'Formación académica y certificaciones.',
    },
    contact: {
      title: 'Contacto',
      subtitle:
        '¿Trabajamos juntos? Escríbeme por cualquiera de estos medios.',
      email: 'Correo',
      whatsapp: 'WhatsApp',
    },
    footer: {
      rights: 'Todos los derechos reservados.',
    },
    aria: {
      close: 'Cerrar',
    },
  },
  en: {
    nav: {
      home: 'Home',
      aboutMe: 'About Me',
      skills: 'Skills',
      projects: 'Projects',
      experience: 'Experience',
      education: 'Education',
      contact: 'Contact',
    },
    hero: {
      title: 'Hi, I am ',
      description:
        'Software Development Technical student at ITSE Panama, focused on full stack development. I build web and mobile applications with Angular, Laravel, PHP and SQL databases, from management systems to marketplace platforms.',
      viewProjects: 'View projects',
      downloadCV: 'Download CV',
      typed: [
        'Software Development Student',
        'Full Stack Developer',
        'PHP & Laravel Developer',
      ],
    },
    aboutMe: {
      title: 'About Me',
      description:
        "I'm a Software Development Technical student at ITSE (Instituto Tecnico Superior Especializado) in Panama, studying since January 2025. Besides my academic projects, I have previous experience as a Development Assistant, where I collaborated in building commercial management software. I enjoy working across the entire application lifecycle: from database design to the user interface, with a special interest in Angular, PHP/Laravel and relational database schema design.",
    },
    skills: {
      title: 'Skills',
      subtitle: 'Technical skills and tools I use.',
      frontend: 'Frontend',
      backend: 'Backend & DB',
      tools: 'Tools',
      howUse: 'How do I use it?',
      evidence: 'Course evidence:',
    },
    projects: {
      title: 'Projects',
      viewProject: 'View project',
      client: 'Client',
      year: 'Year',
      role: 'Role',
    },
    experience: {
      title: 'Experience',
      description: 'Professional experience and career path.',
      role: 'Development Assistant — Distribuidora Miqui Chong',
      period: 'October 2022 – August 2023',
      description2:
        'I collaborated in building commercial management software for the distributor, including sales order and wholesale invoicing modules.',
    },
    education: {
      title: 'Education',
      description: 'Academic background and certifications.',
    },
    contact: {
      title: 'Contact',
      subtitle:
        "Let's work together? Reach me through any of these channels.",
      email: 'Email',
      whatsapp: 'WhatsApp',
    },
    footer: {
      rights: 'All rights reserved.',
    },
    aria: {
      close: 'Close',
    },
  },
};

@Injectable({
  providedIn: 'root',
})
export class LanguageService {
  private readonly storageKey = 'portfolio-lang';

  readonly currentLang = signal<Language>(this.getSavedLang());
  readonly translations = computed(() => TRANSLATIONS[this.currentLang()]);
  readonly isLoaded = signal(true);

  readonly langToggleLabel = computed(() =>
    this.currentLang() === 'es' ? 'EN' : 'ES'
  );

  toggleLanguage(): void {
    const newLang: Language = this.currentLang() === 'es' ? 'en' : 'es';
    this.setLanguage(newLang);
  }

  setLanguage(lang: Language): void {
    this.currentLang.set(lang);
    localStorage.setItem(this.storageKey, lang);
    document.documentElement.lang = lang;
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

  private getSavedLang(): Language {
    const saved = localStorage.getItem(this.storageKey);
    return saved === 'en' ? 'en' : 'es';
  }
}
