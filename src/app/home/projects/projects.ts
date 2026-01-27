import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';

import { Dialog } from './dialog/dialog';
import { Project } from '../../interfaces/project.interface';

type ProjectTechEntry = {
  name: string;
  isLast: boolean;
};

/**
 * Static list of available projects.
 * Used by the projects overview and dialog.
 */
const PROJECTS: Project[] = [
  {
    id: '01',
    title: 'Pokédex',
    tech: [
      { icon: 'img/icons/dialog-javascript.svg', name: 'JavaScript' },
      { icon: 'img/icons/dialog-html.svg', name: 'HTML' },
      { icon: 'img/icons/dialog-css.svg', name: 'CSS' },
    ],
    shortDescriptionKey: 'projects.items.pokedex.shortDescription',
    image: 'img/projects/pokedex.png',
    github: 'https://github.com/DaniSchomaker/Pokedex',
    live: 'https://pokedex.taxedtech.de',
  },
  {
    id: '02',
    title: 'El Pollo Loco',
    tech: [
      { icon: 'img/icons/dialog-javascript.svg', name: 'JavaScript' },
      { icon: 'img/icons/dialog-html.svg', name: 'HTML' },
      { icon: 'img/icons/dialog-css.svg', name: 'CSS' },
    ],
    shortDescriptionKey: 'projects.items.el-pollo-loco.shortDescription',
    image: 'img/projects/el-pollo-loco.png',
    github: 'https://github.com/DaniSchomaker/El_Pollo_Loco',
    live: 'https://el-pollo-loco.taxedtech.de',
  },
  {
    id: '03',
    title: 'Join',
    tech: [
      { icon: 'img/icons/dialog-angular.svg', name: 'Angular' },
      { icon: 'img/icons/dialog-typescript.svg', name: 'TypeScript' },
      { icon: 'img/icons/dialog-firebase.svg', name: 'Firebase' },
      { icon: 'img/icons/dialog-html.svg', name: 'HTML' },
      { icon: 'img/icons/dialog-css.svg', name: 'CSS' },
    ],
    shortDescriptionKey: 'projects.items.join.shortDescription',
    image: 'img/projects/join.png',
    github: 'https://github.com/DaniSchomaker/Join',
    live: 'https://join.taxedtech.de',
  },
];

/**
 * Projects overview component.
 *
 * Responsibilities:
 * - Renders a list of projects
 * - Opens a dialog with details for the selected project
 * - Allows navigation to the next project
 * - Provides small view helpers for template bindings
 */
@Component({
  selector: 'app-projects',
  imports: [CommonModule, Dialog, TranslatePipe],
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
})
export class Projects {
  /** Static list of available projects. */
  readonly projects: Project[] = PROJECTS;

  /**
   * Currently selected project displayed inside the dialog.
   * `null` means the dialog is closed.
   */
  selectedProject: Project | null = null;

  /**
   * Opens the project dialog for the given project.
   *
   * @param project - Project to display in the dialog
   */
  openDialog(project: Project): void {
    this.selectedProject = project;
  }

  /**
   * Closes the project dialog.
   */
  closeDialog(): void {
    this.selectedProject = null;
  }

  /**
   * Selects the next project (cyclic) based on the currently selected project.
   * If no project is selected, the method exits without changes.
   */
  goToNextProject(): void {
    if (!this.selectedProject) return;

    const selectedId = this.selectedProject.id;

    const currentIndex = this.projects.findIndex((project) => project.id === selectedId);
    if (currentIndex === -1) return;

    const nextIndex = (currentIndex + 1) % this.projects.length;
    this.selectedProject = this.projects[nextIndex];
  }

  /**
   * Returns the CSS class name used to position the preview for a given project.
   *
   * @param project - Project used to compute the preview class
   * @returns CSS class name in the form `project-<id>`
   */
  getPreviewClass(project: Project): string {
    return `project-${project.id}`;
  }

  /**
   * Converts the project's tech stack into a list of entries including positional metadata.
   * Used to render separators in the template.
   *
   * @param project - Project providing the tech stack
   * @returns Tech entries with `isLast` marker
   */
  getTechEntries(project: Project): ProjectTechEntry[] {
    return project.tech.map((techItem, index) => ({
      name: techItem.name,
      isLast: index === project.tech.length - 1,
    }));
  }
}
