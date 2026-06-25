import { topProgrammes } from './programmeDetails';
import { staffData } from './staffData';

export interface SearchItem {
  title: string;
  category: string;
  path: string;
  description?: string;
}

export const searchData: SearchItem[] = [
  { title: 'Home', category: 'Page', path: '/' },
  { title: 'About HUST', category: 'Page', path: '/about' },
  { title: 'Governance & Management', category: 'Page', path: '/governance-management' },
  { title: 'Governing Council', category: 'Page', path: '/governing-council' },
  { title: 'Colleges & Programs', category: 'Page', path: '/colleges' },
  { title: 'Admissions', category: 'Page', path: '/admissions' },
  { title: 'Campus Life', category: 'Page', path: '/campus-life' },
  { title: 'Tuition and Fees Calculator', category: 'Page', path: '/fees' },
  { title: 'Research & Publication', category: 'Page', path: '/research' },
  { title: 'News & Blog', category: 'Page', path: '/blog' },
  { title: 'Contact Us', category: 'Page', path: '/contact' },
  { title: 'Academic Calendar', category: 'Page', path: '/academic-calendar' },
  { title: 'Founder\'s Message', category: 'Page', path: '/founder-message' },
  
  // Colleges
  { title: 'Tristate College of Medicine & Health Sciences(TCMHS)', category: 'College', path: '/colleges/medicine' },
  { title: 'College of Engineering & Computing Sciences (CECS)', category: 'College', path: '/colleges/engineering' },
  { title: 'College of Agriculture, Life & Environmental Sciences (CALES)', category: 'College', path: '/colleges/agriculture' },
  { title: 'College of Business, Law & Educational Sciences (CBLES)', category: 'College', path: '/colleges/business' },

  // Programs from programmeDetails
  ...topProgrammes.map(prog => ({
    title: prog.title,
    category: 'Program',
    path: `/programmes/${prog.id}`,
    description: prog.description
  })),

  // Faculty/Staff from staffData
  ...staffData.map(staff => ({
    title: staff.name,
    category: staff.category,
    path: `/faculty/${staff.id}`,
    description: staff.role
  })),

  // Centres
  { title: 'Centre for Research & Innovation (CRI)', category: 'Centre', path: '/centres/cri' },
  { title: 'Centre for Intelligence & Securities Studies (CISS)', category: 'Centre', path: '/centres/ciss' },

  // News Items (Placeholder for now, can be dynamic if blogData is imported)
  { title: 'Professor Babatunde O. Adebesin becomes EVP/DVC', category: 'News', path: '/blog' },
  { title: 'Resumption Protocol 2025/2026', category: 'News', path: '/blog' },
  { title: 'GCTI Representative Visit', category: 'News', path: '/blog' },
];
