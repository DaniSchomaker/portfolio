import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { PROJECTS, Project } from '../../interfaces/project.interface';
import { Dialog } from './dialog/dialog';
import { TranslatePipe } from '@ngx-translate/core';

type ProjectTechEntry = {
  name: string;
  isLast: boolean;
};

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, Dialog, TranslatePipe],
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
})
export class Projects {
  readonly projects: Project[] = PROJECTS;

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

  getTechEntries(project: Project): ProjectTechEntry[] {
    return project.tech.map((techItem, index) => ({
      name: techItem.name,
      isLast: index === project.tech.length - 1,
    }));
  }
}
