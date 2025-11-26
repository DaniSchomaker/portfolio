export interface ProjectTech {
  icon: string;
  name: string;
}

export interface Project {
  id: string;
  title: string;
  tech: ProjectTech[]; // statt string[]
  shortDescription: string;
  image: string;
  github: string;
  live: string;
}

export const PROJECTS: Project[] = [
  {
    id: '01',
    title: 'Pokédex',
    tech: [
      { icon: 'img/icons/dialog-javascript.svg', name: 'JavaScript' },
      { icon: 'img/icons/dialog-html.svg', name: 'HTML' },
      { icon: 'img/icons/dialog-css.svg', name: 'CSS' }
    ],
    shortDescription:
      'A responsive Pokédex application that retrieves structured data from the PokéAPI and renders each Pokémon with clean UI elements.',
    image: 'img/projects/pokedex.png',
    github: 'https://github.com/DaniSchomaker/Pokedex',
    live: 'https://daniela-schomaker.developerakademie.net/Modul%2007/Pokedex/index.html',
  },
  {
    id: '02',
    title: 'El Pollo Loco',
    tech: [
      { icon: 'img/icons/dialog-javascript.svg', name: 'JavaScript' },
      { icon: 'img/icons/dialog-html.svg', name: 'HTML' },
      { icon: 'img/icons/dialog-css.svg', name: 'CSS' }      
    ],
    shortDescription: 'Jump & run game based on object-oriented approach. Help Pepe to find coins and tabasco salsa to fight against the crazy hen.',
    image: 'img/projects/el-pollo-loco.png',
    github: 'https://github.com/DaniSchomaker/El_Pollo_Loco',
    live: '',
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
    shortDescription: 'Task manager inspired by the Kanban system.',
    image: 'img/projects/join.png',
    github: 'https://github.com/deinRepo/join',
    live: 'https://join.deinlive.de',
  },
];
