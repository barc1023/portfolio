import { Component, inject, signal } from '@angular/core';
import { LanguageService } from '../../services/language.service';
import { ProjectData } from '../../models/project.model';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css',
})
export class ProjectsComponent {
  readonly langService = inject(LanguageService);

  readonly projects: ProjectData[] = [
    {
      id: 1,
      title: {
        es: 'Marketplace ITSE',
        en: 'ITSE Marketplace',
      },
      description: {
        es: 'Plataforma de marketplace universitario a nivel de produccion, con sistema de emprendimientos y listado de productos, acceso basado en roles (admin/dueño), carruseles de productos con Swiper.js y un sistema de seguimiento de visitas. Desarrollado en equipo.',
        en: 'Production-level university marketplace platform, with entrepreneurship system and product listing, role-based access (admin/owner), product carousels with Swiper.js and a visit tracking system. Team project.',
      },
      img: 'assets/project-1.jpg',
      tags: ['Laravel 12', 'Bootstrap 5', 'MySQL'],
      client: { es: 'ITSE Panama', en: 'ITSE Panama' },
      year: '2025',
      role: { es: 'Desarrollador Full Stack', en: 'Full Stack Developer' },
      link: 'https://github.com/lorenavega967-ui/marketplace',
    },
    {
      id: 2,
      title: {
        es: 'Sistema de Control de Visitas',
        en: 'Visitor Control System',
      },
      description: {
        es: 'Sistema de control de accesos para residenciales, desarrollado en solitario, con modulos diferenciados por rol para residentes, seguridad y administradores, y reportes visuales con Chart.js.',
        en: 'Access control system for residential areas, developed solo, with role-differentiated modules for residents, security and administrators, and visual reports with Chart.js.',
      },
      img: 'assets/project-2.jpg',
      tags: ['PHP', 'MySQL', 'Chart.js'],
      client: { es: 'Proyecto personal', en: 'Personal project' },
      year: '2024',
      role: { es: 'Desarrollador Full Stack', en: 'Full Stack Developer' },
      link: '#',
    },
    {
      id: 3,
      title: {
        es: 'Task Manager',
        en: 'Task Manager',
      },
      description: {
        es: 'Aplicacion de gestion de tareas y proyectos construida con PHP y PDO, con interfaz responsiva en Bootstrap 5 y persistencia de datos en MySQL.',
        en: 'Task and project management application built with PHP and PDO, with responsive Bootstrap 5 interface and MySQL data persistence.',
      },
      img: 'assets/project-3.jpg',
      tags: ['PHP', 'PDO', 'MySQL', 'Bootstrap 5'],
      client: { es: 'Proyecto academico', en: 'Academic project' },
      year: '2025',
      role: { es: 'Desarrollador Backend', en: 'Backend Developer' },
      link: '#',
    },
  ];

  readonly isModalOpen = signal(false);
  readonly selectedProject = signal<ProjectData | null>(null);

  openModal(project: ProjectData): void {
    this.selectedProject.set(project);
    this.isModalOpen.set(true);
    document.body.style.overflow = 'hidden';
  }

  closeModal(): void {
    this.isModalOpen.set(false);
    this.selectedProject.set(null);
    document.body.style.overflow = '';
  }

  getProjectTitle(project: ProjectData): string {
    return project.title[this.langService.currentLang()];
  }

  getProjectDescription(project: ProjectData): string {
    return project.description[this.langService.currentLang()];
  }

  getProjectClient(project: ProjectData): string {
    return project.client[this.langService.currentLang()];
  }

  getProjectRole(project: ProjectData): string {
    return project.role[this.langService.currentLang()];
  }
}
