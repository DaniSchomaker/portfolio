// // import { Component } from '@angular/core';
// // import { PROJECTS } from '../../interfaces/project.interface';  

// // @Component({
// //   selector: 'app-projects',
// //   standalone: true,
// //   templateUrl: './projects.html',
// //   styleUrl: './projects.scss',
// // })
// // export class Projects {
// //   projects = PROJECTS;
// // }

// import { Component } from '@angular/core';
// import { PROJECTS, Project } from '../../interfaces/project.interface';
// import { Dialog } from './dialog/dialog';
// import { CommonModule } from '@angular/common';


// @Component({
//   selector: 'app-projects',
//   standalone: true, // raus?#
//   imports: [CommonModule, Dialog],
//   templateUrl: './projects.html',
//   styleUrl: './projects.scss',
// })
// export class Projects {
//   projects = PROJECTS;

//   selectedProject: Project | null = null;

//   openDialog(project: Project) {
//     this.selectedProject = project;
//     console.log('openDialog', project); 
//   }

//   closeDialog() {
//     this.selectedProject = null;
//   }
// }


import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { PROJECTS, Project } from '../../interfaces/project.interface';
import { Dialog } from './dialog/dialog';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, Dialog],
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
})
export class Projects {
  projects = PROJECTS;
  selectedProject: Project | null = null;

  openDialog(project: Project) {
    this.selectedProject = project;
  }

  closeDialog() {
    this.selectedProject = null;
  }

  goToNextProject() {
    if (!this.selectedProject) return;

    const currentIndex = PROJECTS.findIndex(
      (p) => p.id === this.selectedProject!.id
    );

    const nextIndex = (currentIndex + 1) % PROJECTS.length;
    this.selectedProject = PROJECTS[nextIndex];
  }
}
