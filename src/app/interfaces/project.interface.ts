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
