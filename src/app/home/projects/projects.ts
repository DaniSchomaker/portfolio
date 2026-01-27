import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { PROJECTS, Project } from '../../interfaces/project.interface';
import { Dialog } from './dialog/dialog';
import { TranslatePipe } from '@ngx-translate/core';

type ProjectTechEntry = {
  name: string;
  isLast: boolean;
};

/**
 * Projects overview component.
 *
 * Responsibilities:
 * - Renders a list of projects
 * - Opens a dialog with details for the selected project
 * - Supports navigation to the next project within the dialog
 * - Provides small view helpers for template bindings
 */
@Component({
  selector: 'app-projects',
  imports: [CommonModule, Dialog, TranslatePipe],
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
})
export class Projects {
  /**
   * Static list of available projects used by the projects overview.
   */
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

    const currentIndex = this.projects.findIndex(
      (project) => project.id === this.selectedProject?.id,
    );
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
   * This is used to render separators in the template.
   *
   * @param project - Project providing the tech stack
   * @returns Tech entries with `isLast` marker for rendering
   */
  getTechEntries(project: Project): ProjectTechEntry[] {
    return project.tech.map((techItem, index) => ({
      name: techItem.name,
      isLast: index === project.tech.length - 1,
    }));
  }
}
