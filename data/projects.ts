export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  liveUrl?: string;
  repoUrl?: string;
}

export const projects: Project[] = [
  {
    id: '1',
    title: 'Tu Proyecto',
    description: 'Descripción de tu proyecto. Agrega los detalles de tu proyecto aquí.',
    image: '/images/projects/project-1.jpg',
    technologies: ['React', 'Node.js', 'MongoDB'],
    liveUrl: 'https://tu-proyecto.com',
    repoUrl: 'https://github.com/tu-usuario/tu-proyecto',
  },
  {
    id: '2',
    title: 'Otro Proyecto',
    description: 'Otro proyecto destacado. Agrega los detalles aquí.',
    image: '/images/projects/project-2.jpg',
    technologies: ['Vue', 'Python', 'PostgreSQL'],
    liveUrl: 'https://otro-proyecto.com',
    repoUrl: 'https://github.com/tu-usuario/otro-proyecto',
  },
  {
    id: '3',
    title: 'SaaS Platform',
    description: 'Plataforma SaaS con pasarela de pagos integrada.',
    image: '/images/projects/project-3.jpg',
    technologies: ['Angular', 'Java', 'PostgreSQL', 'Stripe'],
    liveUrl: 'https://tu-saas.com',
  },
];