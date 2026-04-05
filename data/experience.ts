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
    id: "1",
    company: "COOPERATIVA SERVICIOS DE COBRANZA DE LA FRONTERA",
    role: "Fullstack Developer",
    period: "2023 Presente",
    description:
      "Desarrollo de aplicaciones fullstack con React, Node.js y bases de datos SQL/NoSQL.",
    technologies: ["React", "Node.js", "PostgreSQL", "Docker"],
  },
  {
    id: "2",
    company: "INTERCANAL",
    role: "Senior Developer",
    period: "2024 - 2026",
    description: "Lideré el desarrollo de sistemas SaaS y pasarelas de pago.",
    technologies: ["Vue", "Python", "MongoDB", "AWS"],
  },
  {
    id: "3",
    company: "INVERSIONES VIP CABLE C.A.",
    role: "Fullstack Developer",
    period: "2010 - 2015",
    description:
      "Desarrollo de aplicaciones web y móviles para diversos clientes.",
    technologies: ["Angular", "PHP", "MySQL", "Git"],
  },
];

