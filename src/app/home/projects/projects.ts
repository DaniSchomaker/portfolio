import { Component } from '@angular/core';
import { Dialog } from './dialog/dialog';
import { Project } from '../../interfaces/project.interface';

@Component({
  selector: 'app-projects',
  imports: [Dialog],
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
})
export class Projects {

}
