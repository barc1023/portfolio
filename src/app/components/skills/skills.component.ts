import { Component, inject, signal } from '@angular/core';
import { LanguageService } from '../../services/language.service';
import { SkillGroup, SkillBadge } from '../../models/skill.model';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css',
})
export class SkillsComponent {
  readonly langService = inject(LanguageService);

  readonly skillGroups: SkillGroup[] = [
    {
      id: 'frontend',
      titleKey: 'skills.frontend',
      badges: [
        {
          title: 'Angular',
          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg',
          level: 'Intermedio',
          use: 'Desarrollo de SPA con componentes standalone, consumo de APIs REST y manejo de estado con Signals.',
          evidence: 'Proyectos academicos con Angular en ITSE Panama.',
        },
        {
          title: 'JavaScript',
          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
          level: 'Avanzado',
          use: 'Manipulacion del DOM, consumo de APIs, logica del lado del cliente y programacion asincrona.',
          evidence: 'Uso transversal en proyectos frontend y backend.',
        },
        {
          title: 'Bootstrap',
          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg',
          level: 'Avanzado',
          use: 'Diseno de interfaces responsivas con sistema de grid, componentes y utilidades de Bootstrap 5.',
          evidence: 'Marketplace ITSE y Sistema de Control de Visitas.',
        },
      ],
    },
    {
      id: 'backend',
      titleKey: 'skills.backend',
      badges: [
        {
          title: 'PHP',
          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg',
          level: 'Avanzado',
          use: 'Desarrollo de APIs, gestion de bases de datos con PDO y construccion de aplicaciones web robustas.',
          evidence: 'Sistema de Control de Visitas y Task Manager con PHP y PDO.',
        },
        {
          title: 'Laravel',
          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg',
          level: 'Intermedio',
          use: 'Desarrollo de aplicaciones web con arquitectura MVC, Eloquent ORM, middleware y sistema de roles.',
          evidence: 'Marketplace ITSE con Laravel 12.',
        },
        {
          title: 'MySQL / PostgreSQL',
          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
          level: 'Intermedio',
          use: 'Diseno de esquemas de bases de datos relacionales, consultas SQL, joins, indices y relaciones entre tablas.',
          evidence: 'Persistencia de datos en proyectos academicos y laborales.',
        },
      ],
    },
    {
      id: 'tools',
      titleKey: 'skills.tools',
      badges: [
        {
          title: 'Git',
          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
          level: 'Avanzado',
          use: 'Gestion del historial de cambios, trabajo en equipo con ramas y merges, mantener codigo ordenado.',
          evidence: 'Control de versiones en todos los proyectos academicos y laborales.',
        },
        {
          title: 'GitHub',
          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg',
          level: 'Avanzado',
          use: 'Colaboracion, revision de codigo con Pull Requests y gestion de repositorios de proyectos.',
          evidence: 'Repositorios publicos de proyectos academicos.',
        },
        {
          title: 'Java / C++',
          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg',
          level: 'Intermedio',
          use: 'Fundamentos de programacion orientada a objetos, estructuras de datos y algoritmos.',
          evidence: 'Materias de fundamentos de programacion en ITSE Panama.',
        },
      ],
    },
  ];

  readonly isModalOpen = signal(false);
  readonly selectedGroup = signal<SkillGroup | null>(null);

  openModal(group: SkillGroup): void {
    this.selectedGroup.set(group);
    this.isModalOpen.set(true);
    document.body.style.overflow = 'hidden';
  }

  closeModal(): void {
    this.isModalOpen.set(false);
    this.selectedGroup.set(null);
    document.body.style.overflow = '';
  }
}
