export interface Skill {
  name: string;
  icon: string;
  category: 'frontend' | 'backend' | 'database' | 'devops' | 'mobile' | 'other';
}

export const skills: Skill[] = [
  // Frontend
  { name: 'React', icon: '⚛️', category: 'frontend' },
  { name: 'Vue', icon: '💚', category: 'frontend' },
  { name: 'Angular', icon: '🔷', category: 'frontend' },
  { name: 'JavaScript', icon: '📜', category: 'frontend' },
  { name: 'TypeScript', icon: '💎', category: 'frontend' },
  
  // Backend
  { name: 'Node.js', icon: '🟢', category: 'backend' },
  { name: 'Express', icon: '🚀', category: 'backend' },
  { name: 'PHP', icon: '🐘', category: 'backend' },
  { name: 'Python', icon: '🐍', category: 'backend' },
  { name: 'Java', icon: '☕', category: 'backend' },
  
  // Database
  { name: 'MongoDB', icon: '🍃', category: 'database' },
  { name: 'PostgreSQL', icon: '🐘', category: 'database' },
  
  // DevOps
  { name: 'Docker', icon: '🐳', category: 'devops' },
  { name: 'Kubernetes', icon: '☸️', category: 'devops' },
  { name: 'Git', icon: '📂', category: 'devops' },
  { name: 'GitHub', icon: '🐙', category: 'devops' },
  
  // Mobile & Other
  { name: 'Mobile Apps', icon: '📱', category: 'mobile' },
  { name: 'SaaS', icon: '☁️', category: 'other' },
  { name: 'Payment Gateways', icon: '💳', category: 'other' },
];

export const skillsByCategory = {
  frontend: skills.filter(s => s.category === 'frontend'),
  backend: skills.filter(s => s.category === 'backend'),
  database: skills.filter(s => s.category === 'database'),
  devops: skills.filter(s => s.category === 'devops'),
  mobile: skills.filter(s => s.category === 'mobile'),
  other: skills.filter(s => s.category === 'other'),
};