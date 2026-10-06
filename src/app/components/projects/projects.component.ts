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
      img: 'assets/img/marketplace/Captura de pantalla 2026-10-06 094739.webp',
      gallery: [
        'assets/img/marketplace/Captura de pantalla 2026-10-06 094739.webp',
        'assets/img/marketplace/Captura de pantalla 2026-10-06 094817.webp',
        'assets/img/marketplace/Captura de pantalla 2026-10-06 094838.webp',
        'assets/img/marketplace/Captura de pantalla 2026-10-06 094901.webp',
        'assets/img/marketplace/Captura de pantalla 2026-10-06 094924.webp',
        'assets/img/marketplace/Captura de pantalla 2026-10-06 094951.webp',
        'assets/img/marketplace/Captura de pantalla 2026-10-06 095015.webp',
        'assets/img/marketplace/Captura de pantalla 2026-10-06 095045.webp',
        'assets/img/marketplace/Captura de pantalla 2026-10-06 095117.webp',
        'assets/img/marketplace/Captura de pantalla 2026-10-06 095155.webp',
      ],
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
      img: 'assets/img/control_ph/Captura de pantalla 2026-10-06 101401.webp',
      gallery: [
        'assets/img/control_ph/Captura de pantalla 2026-10-06 101401.webp',
        'assets/img/control_ph/Captura de pantalla 2026-10-06 101443.webp',
        'assets/img/control_ph/Captura de pantalla 2026-10-06 101502.webp',
        'assets/img/control_ph/Captura de pantalla 2026-10-06 101525.webp',
        'assets/img/control_ph/Captura de pantalla 2026-10-06 101546.webp',
        'assets/img/control_ph/Captura de pantalla 2026-10-06 101629.webp',
        'assets/img/control_ph/Captura de pantalla 2026-10-06 101711.webp',
        'assets/img/control_ph/Captura de pantalla 2026-10-06 101730.webp',
        'assets/img/control_ph/Captura de pantalla 2026-10-06 101749.webp',
        'assets/img/control_ph/Captura de pantalla 2026-10-06 101844.webp',
      ],
      tags: ['PHP', 'MySQL', 'Chart.js'],
      client: { es: 'Proyecto personal', en: 'Personal project' },
      year: '2024',
      role: { es: 'Desarrollador Full Stack', en: 'Full Stack Developer' },
      link: 'https://github.com/ruthmena6917-hash/Control_ph',
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
      img: 'assets/img/task_manager/Captura de pantalla 2026-10-06 102523.webp',
      gallery: [
        'assets/img/task_manager/Captura de pantalla 2026-10-06 102523.webp',
        'assets/img/task_manager/Captura de pantalla 2026-10-06 102622.webp',
        'assets/img/task_manager/Captura de pantalla 2026-10-06 102644.webp',
        'assets/img/task_manager/Captura de pantalla 2026-10-06 102700.webp',
        'assets/img/task_manager/Captura de pantalla 2026-10-06 102737.webp',
        'assets/img/task_manager/Captura de pantalla 2026-10-06 102819.webp',
        'assets/img/task_manager/Captura de pantalla 2026-10-06 102840.webp',
        'assets/img/task_manager/Captura de pantalla 2026-10-06 102937.webp',
        'assets/img/task_manager/Captura de pantalla 2026-10-06 102956.webp',
        'assets/img/task_manager/Captura de pantalla 2026-10-06 103053.webp',
      ],
      tags: ['PHP', 'PDO', 'MySQL', 'Bootstrap 5'],
      client: { es: 'Proyecto academico', en: 'Academic project' },
      year: '2025',
      role: { es: 'Desarrollador Backend', en: 'Backend Developer' },
      link: 'https://github.com/barc1023/proyecto-task-manager',
    },
  ];

  readonly isModalOpen = signal(false);
  readonly selectedProject = signal<ProjectData | null>(null);
  readonly currentSlide = signal(0);

  openModal(project: ProjectData): void {
    this.selectedProject.set(project);
    this.currentSlide.set(0);
    this.isModalOpen.set(true);
    document.body.style.overflow = 'hidden';
  }

  closeModal(): void {
    this.isModalOpen.set(false);
    this.selectedProject.set(null);
    this.currentSlide.set(0);
    document.body.style.overflow = '';
  }

  prevSlide(e: Event): void {
    e.stopPropagation();
    const project = this.selectedProject();
    if (!project?.gallery) return;
    const total = project.gallery.length;
    this.currentSlide.update((i) => (i - 1 + total) % total);
  }

  nextSlide(e: Event): void {
    e.stopPropagation();
    const project = this.selectedProject();
    if (!project?.gallery) return;
    const total = project.gallery.length;
    this.currentSlide.update((i) => (i + 1) % total);
  }

  goToSlide(index: number, e: Event): void {
    e.stopPropagation();
    this.currentSlide.set(index);
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
