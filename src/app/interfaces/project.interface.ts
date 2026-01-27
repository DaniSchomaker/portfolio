/**
 * Technology entry used in a project.
 */
export interface ProjectTech {
  icon: string;
  name: string;
}

/**
 * Project definition used for the projects overview and dialog.
 */
export interface Project {
  id: string;
  title: string;

  /** Translation key for the short project description. */
  shortDescriptionKey: string;

  tech: ProjectTech[];
  image: string;
  github: string;
  live: string;
}

/**
 * Static list of available projects.
 */
export const PROJECTS: Project[] = [
  {
    id: '01',
    title: 'Pokédex',
    tech: [
      { icon: 'img/icons/dialog-javascript.svg', name: 'JavaScript' },
      { icon: 'img/icons/dialog-html.svg', name: 'HTML' },
      { icon: 'img/icons/dialog-css.svg', name: 'CSS' }
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
      { icon: 'img/icons/dialog-css.svg', name: 'CSS' }
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
      { icon: 'img/icons/dialog-css.svg', name: 'CSS' }
    ],
    shortDescriptionKey: 'projects.items.join.shortDescription',
    image: 'img/projects/join.png',
    github: 'https://github.com/DaniSchomaker/Join',
    live: 'https://join.taxedtech.de',
  },
];
