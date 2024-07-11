export interface RepositorieEntity {
    projects: [{
      name: string;
      href: string;
      description: string;
      date: string;
    }],
    technologies: [ {
      name:string
    },
    {
      name:string
    }]
}