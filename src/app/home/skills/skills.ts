import { Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-skills',
  imports: [TranslatePipe],
  templateUrl: './skills.html',
  styleUrl: './skills.scss',
})
export class Skills {
  skills = [
    {
      name: 'HTML',
      src: 'img/icons/skills/html.svg',
    },
    {
      name: 'CSS',
      src: 'img/icons/skills/css.svg',
    },
    {
      name: 'JavaScript',
      src: 'img/icons/skills/javaScript.svg',
    },
    {
      name: 'Material Design',
      src: 'img/icons/skills/materialDesign.svg',
    },
    {
      name: 'TypeScript',
      src: 'img/icons/skills/typeScript.svg',
    },
    {
      name: 'Angular',
      src: 'img/icons/skills/angular.svg',
    },
    {
      name: 'Firebase',
      src: 'img/icons/skills/firebase.svg',
    },
    {
      name: 'Git',
      src: 'img/icons/skills/git.svg',
    },
    {
      name: 'REST-API',
      src: 'img/icons/skills/restApi.svg',
    },
    {
      name: 'Scrum',
      src: 'img/icons/skills/scrum.svg',
    },
    {
      name: 'Growth mindset',
      src: 'img/icons/skills/growthMindset.svg',
    },
  ];
}
