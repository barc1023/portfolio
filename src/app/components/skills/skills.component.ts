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
          use: 'Desarrollo de SPA con componentes standalone, consumo de APIs REST con HttpClient, manejo de estado con Signals, enrutamiento con Router y directivas estructurales. Uso en el proyecto actual del portafolio migrando de HTML puro a Angular con arquitectura de componentes separados.',
          evidence: '',
        },
        {
          title: 'JavaScript',
          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
          level: 'Avanzado',
          use: 'Manipulacion del DOM, eventos, consumo de APIs con fetch, programacion asincrona con async/await, validacion de formularios y animaciones interactivas. Implementado en la fanpage de Blackpink con toggle de miembros, scroll suave y carruseles dinamicos.',
          evidence: '',
        },
        {
          title: 'Bootstrap',
          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg',
          level: 'Avanzado',
          use: 'Diseno de interfaces responsivas con sistema de grid de 12 columnas, componentes como navbar, cards, modales, carruseles y tablas. Uso de utilidades de espaciado, tipografia y flexbox. Implementado en el Marketplace ITSE y el Sistema de Control de Visitas con layouts adaptados a mobile y desktop.',
          evidence: '',
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
          use: 'Desarrollo backend con PHP procedural y PDO para conexion a MySQL. Implementacion de CRUD completo, autenticacion con sesiones, control de acceso por roles (gerente, empleado), operaciones de tareas y proyectos, validacion server-side y manejo de errores con try/catch. Construido en el Task Manager con arquitectura de includes separados (db.php, auth.php).',
          evidence: '',
        },
        {
          title: 'Laravel',
          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg',
          level: 'Intermedio',
          use: 'Desarrollo MVC con Laravel 12: controladores de recursos (Admin, Auth, PanelEmprendedor), Eloquent ORM con migraciones, relaciones entre modelos (usuarios, emprendimientos, productos, categorias, noticias), middleware de autenticacion, Blade templates con layouts y partials, y sistema de roles (admin, emprendedor). Implementado en el Marketplace ITSE.',
          evidence: '',
        },
        {
          title: 'MySQL / PostgreSQL',
          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
          level: 'Intermedio',
          use: 'Diseno de esquemas relacionales con claves primarias y foraneas, consultas SQL con JOINs, GROUP BY y subconsultas, migraciones con Laravel, CRUD con PDO prepared statements, y normalizacion de tablas. Implementado en Task Manager (task_manager: projects, tasks, task_assignments, users) y Marketplace ITSE (users, emprendimientos, productos, categorias, noticias).',
          evidence: '',
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
          use: 'Control de versiones con Git: inicializacion de repositorios, ramas para desarrollo de features, commits descriptivos, merge de ramas, y resolucion de conflictos. Uso en todos los proyectos academicos y laborales para mantener historial de cambios y trabajo colaborativo.',
          evidence: '',
        },
        {
          title: 'GitHub',
          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg',
          level: 'Avanzado',
          use: 'Hosting de repositorios publicos, colaboracion en equipo con Pull Requests, gestion de issues, y documentacion con README. Repositorios activos: proyecto-task-manager (PHP/PDO), fanpage (HTML/CSS/JS), Curso-Python, y colaboracion en el Marketplace ITSE del equipo lorenavega967-ui.',
          evidence: '',
        },
        {
          title: 'Java / C++',
          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg',
          level: 'Intermedio',
          use: 'Fundamentos de programacion orientada a objetos: clases, herencia, polimorfismo, encapsulamiento. Estructuras de datos (listas, pilas, colas, arboles) y algoritmos de ordenamiento y busqueda. Manejo de memoria y punteros en C++. Aplicado en materias de fundamentos de programacion en ITSE Panama.',
          evidence: '',
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
