import type { SkillCategory } from '../types';

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: 'mobile',
    title: 'Mobile',
    tags: ['Flutter', 'Dart', 'Offline', 'Notification', 'Deployment']
  },
  {
    id: 'web-backend',
    title: 'Web & Backend',
    tags: ['Django', 'ReactJS', '.NET Web API', 'RESTful API']
  },
  {
    id: 'data-infra',
    title: 'Data & Infra',
    tags: ['MS SQL', 'MySQL', 'Git', 'Firebase', 'Azure']
  },
  {
    id: 'design-tools',
    title: 'Design & Tools',
    tags: ['Figma', 'Claude Code', 'Jira', 'Trello', 'Adobe XD']
  }
];
