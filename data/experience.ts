export interface Experience {
  id: string;
  company: string;
  role: string;
  period: string;
  description: string;
  technologies: string[];
}

export const experiences: Experience[] = [
  {
    id: '1',
    company: 'Tu Empresa',
    role: 'Fullstack Developer',
    period: '2023 - Presente',
    description: 'Desarrollo de aplicaciones fullstack con React, Node.js y bases de datos SQL/NoSQL.',
    technologies: ['React', 'Node.js', 'PostgreSQL', 'Docker'],
  },
  {
    id: '2',
    company: 'Empresa Anterior',
    role: 'Senior Developer',
    period: '2021 - 2023',
    description: 'Lideré el desarrollo de sistemas SaaS y pasarelas de pago.',
    technologies: ['Vue', 'Python', 'MongoDB', 'AWS'],
  },
  {
    id: '3',
    company: 'Otra Empresa',
    role: 'Fullstack Developer',
    period: '2019 - 2021',
    description: 'Desarrollo de aplicaciones web y móviles para diversos clientes.',
    technologies: ['Angular', 'PHP', 'MySQL', 'Git'],
  },
];