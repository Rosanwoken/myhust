export interface Director {
  name: string;
  image: string;
  welcomeMessage: string;
}

export interface CentreDetailData {
  id: string;
  title: string;
  director: Director;
  objectives: string[];
  specialPrograms: string[];
  image: string;
}

export const centreDetails: Record<string, CentreDetailData> = {
  cri: {
    id: 'cri',
    title: 'Centre for Research & Innovation (CRI)',
    director: {
      name: 'Director',
      image: 'https://i.pravatar.cc/150?u=director-cri',
      welcomeMessage: 'Welcome to the Centre for Research & Innovation. We are dedicated to fostering a culture of discovery and translating research into impactful solutions for society.'
    },
    objectives: [
      'To promote interdisciplinary research across all colleges.',
      'To facilitate the commercialization of research findings.',
      'To provide support for grant writing and research funding acquisition.',
      'To establish partnerships with industry and international research institutions.'
    ],
    specialPrograms: [
      'Annual Research Symposium',
      'Innovation Seed Grant Program',
      'Research Methodology Workshops',
      'Industry-Academic Collaboration Forum'
    ],
    image: 'https://picsum.photos/seed/research-innovation/1200/600'
  },
  ciss: {
    id: 'ciss',
    title: 'Centre for Intelligence & Securities Studies (CISS)',
    director: {
      name: 'Admiral Leye-Jaiyeola (Rtd.)',
      image: 'https://hust.edu.ng/wp-content/uploads/2024/11/Mr.-Leye-Jaiyeola.png',
      welcomeMessage: 'Welcome to the Centre for Intelligence & Securities Studies. In an increasingly complex world, we provide the expertise and training needed to navigate security challenges.'
    },
    objectives: [
      'To conduct cutting-edge research in intelligence and security studies.',
      'To provide professional training for security personnel and policy makers.',
      'To analyze emerging security threats and provide strategic recommendations.',
      'To foster a community of security experts and practitioners.'
    ],
    specialPrograms: [
      'Security Leadership Executive Program',
      'Intelligence Analysis Certification',
      'Cybersecurity Awareness Workshops',
      'Global Security Outlook Conference'
    ],
    image: 'https://picsum.photos/seed/security-studies/1200/600'
  }
};
