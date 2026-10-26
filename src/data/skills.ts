import type { SkillCategory } from '../types';

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: 'mobile',
    title: 'Mobile',
    tags: ['Flutter', 'Dart', 'Android', 'iOS', 'App Store Deploy']
  },
  {
    id: 'web-backend',
    title: 'Web & Backend',
    tags: ['Django', 'Python', 'React', 'JavaScript', 'REST API']
  },
  {
    id: 'data-infra',
    title: 'Data & Infra',
    tags: ['MySQL', 'Firebase', 'Git', '.NET', 'Offline Sync']
  },
  {
    id: 'design-tools',
    title: 'Design & Tools',
    tags: ['Figma', 'UI/UX Design', 'Prototyping', 'Adobe Illustrator']
  }
];
