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
 * Projects overview component with dialog-based project details.
 */
@Component({
  selector: 'app-projects',
  imports: [CommonModule, Dialog, TranslatePipe],
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
})
export class Projects {
  /** List of available projects. */
  readonly projects: Project[] = PROJECTS;

  /** Currently selected project for the dialog view. */
  selectedProject: Project | null = null;

  openDialog(project: Project) {
    this.selectedProject = project;
  }

  closeDialog() {
    this.selectedProject = null;
  }

  goToNextProject() {
    if (!this.selectedProject) return;

    const currentIndex = this.projects.findIndex(
      (project) => project.id === this.selectedProject?.id,
    );
    if (currentIndex === -1) return;

    const nextIndex = (currentIndex + 1) % this.projects.length;
    this.selectedProject = this.projects[nextIndex];
  }

  getPreviewClass(project: Project) {
    return `project-${project.id}`;
  }

  /**
   * Maps project technologies to entries with positional metadata.
   */
  getTechEntries(project: Project): ProjectTechEntry[] {
    return project.tech.map((techItem, index) => ({
      name: techItem.name,
      isLast: index === project.tech.length - 1,
    }));
  }
}
