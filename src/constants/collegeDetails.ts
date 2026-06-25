export interface FacultyMember {
  id: string;
  name: string;
  role: string;
  image: string;
  bio: string;
  researchInterests: string[];
  publicationsLink: string;
  keyPublications?: string[];
  awards?: string[];
  socialMedia: {
    twitter?: string;
    linkedin?: string;
    googleScholar?: string;
    researchGate?: string;
    scopus?: string;
    orcid?: string;
  };
}

export interface Course {
  code: string;
  name: string;
  description: string;
}

export interface Department {
  name: string;
  head: string;
  description: string;
  careers: string[];
}

export interface Provost {
  name: string;
  image: string;
  welcomeAddress: string;
  citation: string;
}

export interface Programme {
  id?: string;
  name: string;
  duration: string;
  requirements: {
    utme: string;
    directEntry: string;
  };
}

export interface CollegeDetailData {
  id: string;
  title: string;
  description: string;
  provost: Provost;
  faculty: FacultyMember[];
  researchAreas: string[];
  courses: Course[];
  image: string;
  qualityPromises: string[];
  careerOpportunities: string[];
  departments: Department[];
  programmes?: Programme[];
}

export const collegeDetails: Record<string, CollegeDetailData> = {
  medicine: {
    id: 'medicine',
    title: 'Tristate College of Medicine & Health Sciences(TCMHS)',
    description: 'Preparing the next generation of healthcare professionals with clinical excellence and compassion. Our college is at the forefront of medical education and research in Nigeria.',
    provost: {
      name: 'Professor Kamar Adeleke',
      image: 'https://hust.edu.ng/wp-content/uploads/2024/11/Prof-Kamar-Adeleke.png',
      welcomeAddress: 'Welcome to the Tristate College of Medicine & Health Sciences(TCMHS). Our mission is to transform healthcare through innovative education and research that addresses the most pressing health challenges of our time.',
      citation: 'Professor Kamar Adeleke is a world-renowned Interventional Cardiologist and the Provost of Tristate College of Medicine & Health Sciences(TCMHS). He is dedicated to advancing medical education and clinical excellence in Nigeria.'
    },
    image: 'https://hust.edu.ng/wp-content/uploads/2024/11/tristate-health-and-allied-medical-sciences.jpg',
    qualityPromises: [
      'Clinical excellence through hands-on training',
      'Research-driven medical education',
      'Community-focused healthcare solutions',
      'Global standards in medical ethics'
    ],
    careerOpportunities: [
      'Medical Doctor / Specialist',
      'Nursing Professional',
      'Public Health Administrator',
      'Medical Laboratory Scientist',
      'Clinical Researcher',
      'Healthcare Consultant'
    ],
    faculty: [
      { 
        id: 'james-okoro',
        name: 'Dr. James Okoro', 
        role: 'Head of Nursing Science', 
        image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80',
        bio: 'Dr. Okoro has over 20 years of experience in clinical nursing and academic leadership, specializing in critical care.',
        researchInterests: ['Critical Care Nursing', 'Patient Safety', 'Nursing Education'],
        publicationsLink: 'https://scholar.google.com/citations?user=james-okoro',
        keyPublications: [
          'Advances in Critical Care Nursing: A Comprehensive Review (2023)',
          'Patient Safety Protocols in Modern Healthcare Settings (2021)',
          'The Future of Nursing Education in Africa (2019)'
        ],
        awards: [
          'Excellence in Clinical Nursing Award (2024)',
          'Outstanding Academic Leadership (2022)',
          'National Health Service Merit Award'
        ],
        socialMedia: { 
          linkedin: 'https://linkedin.com/in/james-okoro', 
          twitter: 'https://twitter.com/jamesokoro',
          researchGate: 'https://www.researchgate.net/profile/James-Okoro',
          scopus: 'https://www.scopus.com/authid/detail.uri?authorId=james-okoro',
          orcid: 'https://orcid.org/0000-0000-0000-0000'
        }
      },
      { 
        id: 'amina-yusuf',
        name: 'Dr. Amina Yusuf', 
        role: 'Associate Professor, Public Health', 
        image: 'https://images.unsplash.com/photo-1559839734-2b71f1e3c7e5?auto=format&fit=crop&q=80',
        bio: 'A leading researcher in maternal health, Dr. Yusuf has published extensively on community-based health interventions.',
        researchInterests: ['Maternal Health', 'Community Health', 'Epidemiology'],
        publicationsLink: 'https://scholar.google.com/citations?user=amina-yusuf',
        keyPublications: [
          'Community-Based Interventions for Maternal Health (2022)',
          'Epidemiological Trends in West Africa: A Decade in Review (2020)',
          'Public Health Policy and Rural Access (2018)'
        ],
        awards: [
          'Global Health Research Excellence Award (2023)',
          'Community Impact Recognition (2021)',
          'Fellow of the African Academy of Sciences'
        ],
        socialMedia: { 
          linkedin: 'https://linkedin.com/in/amina-yusuf', 
          googleScholar: 'https://scholar.google.com/amina-yusuf',
          researchGate: 'https://www.researchgate.net/profile/Amina-Yusuf',
          scopus: 'https://www.scopus.com/authid/detail.uri?authorId=amina-yusuf',
          orcid: 'https://orcid.org/0000-0000-0000-0001'
        }
      },
    ],
    researchAreas: [
      'Infectious Disease Control',
      'Maternal and Child Health',
      'Genomics and Personalized Medicine',
      'Community Health Interventions',
    ],
    courses: [
      { code: 'MBBS 101', name: 'Human Anatomy', description: 'Comprehensive study of the structure of the human body.' },
      { code: 'NSc 201', name: 'Foundations of Nursing', description: 'Introduction to professional nursing practice and patient care.' },
      { code: 'MLS 301', name: 'Clinical Biochemistry', description: 'Study of chemical processes within and relating to living organisms.' },
    ],
    departments: [
      {
        name: 'Medicine & Surgery',
        head: 'Prof. Sarah Johnson',
        description: 'Comprehensive medical training focused on clinical skills and surgical excellence.',
        careers: ['Medical Doctor', 'Surgeon', 'Specialist Consultant']
      },
      {
        name: 'Nursing Science',
        head: 'Dr. James Okoro',
        description: 'Focuses on the art and science of nursing, preparing students for professional practice in diverse healthcare settings.',
        careers: ['Registered Nurse', 'Clinical Nurse Specialist', 'Nurse Educator']
      },
      {
        name: 'Medical Laboratory Science',
        head: 'Dr. Robert Smith',
        description: 'Provides students with the knowledge and skills to perform complex laboratory tests used in the diagnosis and treatment of disease.',
        careers: ['Medical Lab Scientist', 'Biomedical Researcher', 'Laboratory Manager']
      }
    ],
    programmes: [
      {
        id: 'mbbs',
        name: 'Medicine & Surgery',
        duration: '6 YEARS',
        requirements: {
          utme: 'Credit pass in Physics, Chemistry, Biology, Mathematics and English language at SSCE or its equivalent in one (1) sitting.',
          directEntry: 'At least Three (3) A level passes in relevant subjects (B grade) or OND (Upper Credit) or First degree (BSC/HND) in related discipline.'
        }
      },
      {
        id: 'bnsc',
        name: 'Nursing Science',
        duration: '5 YEARS',
        requirements: {
          utme: 'Credit pass in Physics, Chemistry, Biology, Mathematics and English language at SSCE or its equivalent in not more than two (2) sittings.',
          directEntry: 'At least two (2) A level passes in relevant subjects (B grade) or First degree (BSC/HND) in related discipline or RN/RM.'
        }
      },
      {
        id: 'bmls',
        name: 'Medical Laboratory Science',
        duration: '5 YEARS',
        requirements: {
          utme: 'Credit pass in Physics, Chemistry, Biology, Mathematics and English language at SSCE or its equivalent in not more than two (2) sittings.',
          directEntry: 'At least two (2) A level passes in relevant subjects (B grade) or First degree (BSC/HND) in related discipline.'
        }
      },
      {
        id: 'biochemistry',
        name: 'Biochemistry',
        duration: '4 YEARS',
        requirements: {
          utme: 'Credit pass in Physics, Chemistry, Biology, Mathematics and English language at SSCE or its equivalent in not more than two (2) sittings.',
          directEntry: 'At least two (2) A level passes in relevant subjects (B grade) or First degree (BSC/HND) in related discipline or RN/RM.'
        }
      },
      {
        id: 'anatomy',
        name: 'Human Anatomy',
        duration: '4 YEARS',
        requirements: {
          utme: 'Credit pass in Physics, Chemistry, Biology, Mathematics and English language at SSCE or its equivalent in not more than two (2) sittings.',
          directEntry: 'At least two (2) A level passes in relevant subjects (B grade) or First degree (BSC/HND) in related discipline or RN/RM.'
        }
      },
      {
        name: 'Nutrition & Dietetics',
        duration: '4 YEARS',
        requirements: {
          utme: 'Credit pass in Physics, Chemistry, Biology, Mathematics and English language at SSCE or its equivalent in not more than two (2) sittings.',
          directEntry: 'At least two (2) A level passes in relevant subjects (B grade) or First degree (BSC/HND) in related discipline or RN/RM.'
        }
      },
      {
        name: 'Dentistry',
        duration: '6 YEARS',
        requirements: {
          utme: 'Credit pass in Physics, Chemistry, Biology, Mathematics and English language at SSCE or its equivalent in one (1) sitting.',
          directEntry: 'At least Three (3) A level passes in relevant subjects (B grade) or OND (Upper Credit) or First degree (BSC/HND) in related discipline.'
        }
      },
      {
        name: 'Optometry',
        duration: '6 YEARS',
        requirements: {
          utme: 'Credit pass in Physics, Chemistry, Biology, Mathematics and English language at SSCE or its equivalent in not more than two (2) sittings.',
          directEntry: 'At least two (2) A level passes in relevant subjects (B grade) or First degree (BSC/HND) in related discipline or RN/RM.'
        }
      },
      {
        name: 'Pharmacy',
        duration: '6 YEARS',
        requirements: {
          utme: 'Credit pass in Physics, Chemistry, Biology, Mathematics and English language at SSCE or its equivalent in not more than two (2) sittings.',
          directEntry: 'At least two (2) A level passes in relevant subjects (B grade) or First degree (BSC/HND) in related discipline or RN/RM.'
        }
      },
      {
        name: 'Audiology',
        duration: '5 YEARS',
        requirements: {
          utme: 'Credit pass in Physics, Chemistry, Biology, Mathematics and English language at SSCE or its equivalent in not more than two (2) sittings.',
          directEntry: 'At least two (2) A level passes in relevant subjects (B grade) or First degree (BSC/HND) in related discipline or RN/RM.'
        }
      }
    ],
  },
  engineering: {
    id: 'engineering',
    title: 'College of Engineering & Computing Sciences (CECS)',
    description: 'Innovating solutions for infrastructure and technology challenges through rigorous engineering education. We combine theory with hands-on technical expertise.',
    provost: {
      name: 'Prof. Olamide OLAWALE',
      image: 'https://hust.edu.ng/wp-content/uploads/2026/04/Prof_Olamide.png',
      welcomeAddress: 'At the College of Engineering & Computing Sciences, we don\'t just teach engineering; we inspire the next generation of innovators who will design a more sustainable and efficient world.',
      citation: 'Prof. Olamide OLAWALE is the Provost of the College of Engineering & Computing Sciences (CECS). He is dedicated to advancing engineering education and fostering innovation in technology.'
    },
    image: 'https://hust.edu.ng/wp-content/uploads/2024/11/engineering-sciences-and-technology.jpg',
    qualityPromises: [
      'Industry-aligned engineering curriculum',
      'State-of-the-art laboratory facilities',
      'Focus on sustainable and green engineering',
      'Strong industry partnership and internships'
    ],
    careerOpportunities: [
      'Software Engineer',
      'Civil / Structural Engineer',
      'Aerospace Engineer',
      'Cybersecurity Expert',
      'Robotics Engineer',
      'Project Manager'
    ],
    faculty: [
      { 
        id: 'david-adeyemi',
        name: 'Engr. David Adeyemi', 
        role: 'Head of Civil Engineering', 
        image: 'https://images.unsplash.com/photo-1506277886164-e25aa3f4ef7f?auto=format&fit=crop&q=80',
        bio: 'Engr. Adeyemi is a chartered engineer with a focus on sustainable urban infrastructure and smart materials.',
        researchInterests: ['Sustainable Infrastructure', 'Smart Materials', 'Urban Planning'],
        publicationsLink: 'https://scholar.google.com/citations?user=david-adeyemi',
        keyPublications: [
          'Sustainable Urban Infrastructure: Design and Implementation (2023)',
          'Smart Materials in Civil Engineering Applications (2022)',
          'Urban Planning Strategies for Resilient Cities (2020)'
        ],
        awards: [
          'Chartered Engineer of the Year (2024)',
          'Innovation in Sustainable Design Award (2022)',
          'National Infrastructure Excellence Award'
        ],
        socialMedia: { 
          linkedin: 'https://linkedin.com/in/david-adeyemi',
          researchGate: 'https://www.researchgate.net/profile/David-Adeyemi',
          scopus: 'https://www.scopus.com/authid/detail.uri?authorId=david-adeyemi',
          orcid: 'https://orcid.org/0000-0000-0000-0002'
        }
      },
      { 
        id: 'chidi-okafor',
        name: 'Dr. Chidi Okafor', 
        role: 'Head of Computer Science', 
        image: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&q=80',
        bio: 'Dr. Okafor is an expert in algorithm design and complexity theory, with a focus on efficient data processing.',
        researchInterests: ['Algorithm Design', 'Complexity Theory', 'Data Structures'],
        publicationsLink: 'https://scholar.google.com/citations?user=chidi-okafor',
        socialMedia: { 
          linkedin: 'https://linkedin.com/in/chidi-okafor',
          researchGate: 'https://www.researchgate.net/profile/Chidi-Okafor',
          scopus: 'https://www.scopus.com/authid/detail.uri?authorId=chidi-okafor',
          orcid: 'https://orcid.org/0000-0000-0000-0003'
        }
      },
    ],
    researchAreas: [
      'Sustainable Infrastructure',
      'Artificial Intelligence',
      'Aerospace Systems',
      'Cybersecurity and Cryptography',
    ],
    courses: [
      { code: 'CSC 101', name: 'Introduction to Programming', description: 'Fundamental concepts of computer programming using modern languages.' },
      { code: 'CVE 201', name: 'Structural Analysis', description: 'Analysis of statically determinate structures.' },
      { code: 'ASE 301', name: 'Aerodynamics', description: 'Principles of fluid motion around solid bodies.' },
    ],
    departments: [
      {
        name: 'Computing & IT',
        head: 'Dr. Chidi Okafor',
        description: 'Focuses on Computer Science, Software Engineering, and Cyber Security.',
        careers: ['Software Developer', 'Security Analyst', 'Data Scientist']
      },
      {
        name: 'Civil & Construction Engineering',
        head: 'Engr. David Adeyemi',
        description: 'Deals with the design, construction, and maintenance of the physical and naturally built environment.',
        careers: ['Structural Engineer', 'Site Engineer', 'Urban Planner']
      },
      {
        name: 'Mechanical & Aerospace Engineering',
        head: 'Dr. Elena Rodriguez',
        description: 'Focuses on mechanical systems, mechatronics, and aerospace technologies.',
        careers: ['Aerospace Engineer', 'Robotics Specialist', 'Manufacturing Engineer']
      }
    ],
    programmes: [
      {
        id: 'computer-science',
        name: 'Computer Science',
        duration: '4 YEARS',
        requirements: {
          utme: 'Five (5) SSCE credit passes including English Language, Mathematics, Physics, and any other relevant Science subjects in not more than two (2) sittings.',
          directEntry: 'Minimum of a credit at University/National Diploma or NCE with other five SSCE credit passes in relevant Science subjects (3 must be English, Math, Physics).'
        }
      },
      {
        name: 'Data Science',
        duration: '4 YEARS',
        requirements: {
          utme: 'Five (5) SSCE credit passes including English Language, Mathematics, Physics, and any other relevant Science subjects in not more than two (2) sittings.',
          directEntry: 'Minimum of a credit at University/National Diploma or NCE with other five SSCE credit passes in relevant Science subjects (3 must be English, Math, Physics).'
        }
      },
      {
        id: 'cyber-security',
        name: 'Cyber Security',
        duration: '4 YEARS',
        requirements: {
          utme: 'Five (5) SSCE credit passes including English Language, Mathematics, Physics, and any other relevant Science subjects in not more than two (2) sittings.',
          directEntry: 'Minimum of a credit at University/National Diploma or NCE with other five SSCE credit passes in relevant Science subjects (3 must be English, Math, Physics).'
        }
      },
      {
        id: 'software-engineering',
        name: 'Software Engineering',
        duration: '4 YEARS',
        requirements: {
          utme: 'Five (5) SSCE credit passes including English Language, Mathematics, Physics, and any other relevant Science subjects in not more than two (2) sittings.',
          directEntry: 'Minimum of a credit at University/National Diploma or NCE with other five SSCE credit passes in relevant Science subjects (3 must be English, Math, Physics).'
        }
      },
      {
        id: 'aerospace-eng',
        name: 'Aerospace Engineering',
        duration: '5 YEARS',
        requirements: {
          utme: 'Credit pass in Physics, Chemistry, Mathematics, English language and other acceptable science subjects at SSCE in not more than two (2) sittings.',
          directEntry: 'Good ND result in relevant Engineering Technology programmes or at least two (2) A level passes (Math, Physics, Chemistry).'
        }
      },
      {
        id: 'civil-engineering',
        name: 'Civil & Construction Engineering',
        duration: '5 YEARS',
        requirements: {
          utme: 'Credit pass in Physics, Chemistry, Mathematics, English language and other acceptable science subjects at SSCE in not more than two (2) sittings.',
          directEntry: 'Good ND result in relevant Engineering Technology programmes or at least two (2) A level passes (Math, Physics, Chemistry).'
        }
      },
      {
        name: 'Systems Engineering',
        duration: '5 YEARS',
        requirements: {
          utme: 'Credit pass in Physics, Chemistry, Mathematics, English language and other acceptable science subjects at SSCE in not more than two (2) sittings.',
          directEntry: 'Good ND result in relevant Engineering Technology programmes or at least two (2) A level passes (Math, Physics, Chemistry).'
        }
      },
      {
        id: 'mechatronics-eng',
        name: 'Mechatronics Engineering',
        duration: '5 YEARS',
        requirements: {
          utme: 'Credit pass in Physics, Chemistry, Mathematics, English language and other acceptable science subjects at SSCE in not more than two (2) sittings.',
          directEntry: 'Good ND result in relevant Engineering Technology programmes or at least two (2) A level passes (Math, Physics, Chemistry).'
        }
      },
      {
        id: 'mechanical-eng',
        name: 'Mechanical Engineering',
        duration: '5 YEARS',
        requirements: {
          utme: 'Credit pass in Physics, Chemistry, Mathematics, English language and other acceptable science subjects at SSCE in not more than two (2) sittings.',
          directEntry: 'Good ND result in relevant Engineering Technology programmes or at least two (2) A level passes (Math, Physics, Chemistry).'
        }
      },
      {
        name: 'Chemical Engineering',
        duration: '5 YEARS',
        requirements: {
          utme: 'Credit pass in Physics, Chemistry, Mathematics, English language and other acceptable science subjects at SSCE in not more than two (2) sittings.',
          directEntry: 'Good ND result in relevant Engineering Technology programmes or at least two (2) A level passes (Math, Physics, Chemistry).'
        }
      },
      {
        id: 'electrical-eng',
        name: 'Electrical Engineering',
        duration: '5 YEARS',
        requirements: {
          utme: 'Credit pass in Physics, Chemistry, Mathematics, English language and other acceptable science subjects at SSCE in not more than two (2) sittings.',
          directEntry: 'Good ND result in relevant Engineering Technology programmes or at least two (2) A level passes (Math, Physics, Chemistry).'
        }
      },
      {
        name: 'Industrial Production Engineering',
        duration: '5 YEARS',
        requirements: {
          utme: 'Credit pass in Physics, Chemistry, Mathematics, English language and other acceptable science subjects at SSCE in not more than two (2) sittings.',
          directEntry: 'Good ND result in relevant Engineering Technology programmes or at least two (2) A level passes (Math, Physics, Chemistry).'
        }
      }
    ],
  },
  agriculture: {
    id: 'agriculture',
    title: 'College of Agriculture, Life & Environmental Sciences (CALES)',
    description: 'Advancing food security and sustainable farming practices through scientific research. We explore the intersection of life sciences and environmental stewardship.',
    provost: {
      name: 'Prof. Babatunde Olufemi ADEBESIN',
      image: 'https://hust.edu.ng/wp-content/uploads/2026/04/DAP.png',
      welcomeAddress: 'Agriculture is the backbone of our society. We are committed to developing sustainable solutions for food security and rural prosperity.',
      citation: 'Prof. Babatunde Olufemi ADEBESIN is the Provost of the College of Agriculture, Life & Environmental Sciences (CALES). He is a distinguished academic leader committed to advancing agricultural research and environmental stewardship.'
    },
    image: 'https://hust.edu.ng/wp-content/uploads/2024/11/agriculture-life-and-environmental-sciences.jpg',
    qualityPromises: [
      'Hands-on agricultural training',
      'Focus on sustainable farming practices',
      'Agribusiness and value-chain focus',
      'Community outreach and extension services'
    ],
    careerOpportunities: [
      'Agribusiness Manager',
      'Forensic Scientist',
      'Microbiologist',
      'Petroleum Chemist',
      'Agricultural Economist',
      'Environmental Consultant'
    ],
    faculty: [
      { 
        id: 'ngozi-okonjo',
        name: 'Dr. Ngozi Okonjo', 
        role: 'Head of CALES Research', 
        image: 'https://images.unsplash.com/photo-1589156280159-27698a70f29e?auto=format&fit=crop&q=80',
        bio: 'Dr. Okonjo focuses on crop genetics and the development of drought-resistant varieties for arid regions.',
        researchInterests: ['Crop Genetics', 'Drought Resistance', 'Arid Region Agriculture'],
        publicationsLink: 'https://scholar.google.com/citations?user=ngozi-okonjo',
        socialMedia: { 
          linkedin: 'https://linkedin.com/in/ngozi-okonjo',
          researchGate: 'https://www.researchgate.net/profile/Ngozi-Okonjo',
          scopus: 'https://www.scopus.com/authid/detail.uri?authorId=ngozi-okonjo',
          orcid: 'https://orcid.org/0000-0000-0000-0004'
        }
      },
      { 
        id: 'olumide-bakare',
        name: 'Dr. Olumide Bakare', 
        role: 'Head of Microbiology', 
        image: 'https://images.unsplash.com/photo-1566492031773-4f4e44671857?auto=format&fit=crop&q=80',
        bio: 'Dr. Bakare researches microbial ecology and the role of bacteria in environmental sustainability.',
        researchInterests: ['Microbial Ecology', 'Environmental Sustainability', 'Bacteriology'],
        publicationsLink: 'https://scholar.google.com/citations?user=olumide-bakare',
        socialMedia: { 
          linkedin: 'https://linkedin.com/in/olumide-bakare',
          researchGate: 'https://www.researchgate.net/profile/Olumide-Bakare',
          scopus: 'https://www.scopus.com/authid/detail.uri?authorId=olumide-bakare',
          orcid: 'https://orcid.org/0000-0000-0000-0005'
        }
      },
    ],
    researchAreas: [
      'Sustainable Agribusiness',
      'Forensic Science Applications',
      'Microbial Ecology',
      'Petroleum Chemistry Innovations',
    ],
    courses: [
      { code: 'AGB 101', name: 'Agribusiness Management', description: 'Principles of managing agricultural businesses.' },
      { code: 'FSC 201', name: 'Introduction to Forensic Science', description: 'Foundations of scientific investigation in criminal justice.' },
      { code: 'MCB 301', name: 'Applied Microbiology', description: 'Use of microorganisms in industry and medicine.' },
    ],
    departments: [
      {
        name: 'Agricultural Sciences',
        head: 'Dr. Ngozi Okonjo',
        description: 'Focuses on Agribusiness and Agricultural Economics.',
        careers: ['Agribusiness Manager', 'Agricultural Economist', 'Farm Consultant']
      },
      {
        name: 'Life Sciences',
        head: 'Dr. Olumide Bakare',
        description: 'Covers Microbiology and Forensic Science.',
        careers: ['Microbiologist', 'Forensic Scientist', 'Biotechnologist']
      },
      {
        name: 'Environmental Sciences',
        head: 'Dr. Karen Black',
        description: 'Focuses on Petroleum Chemistry and environmental stewardship.',
        careers: ['Petroleum Chemist', 'Environmental Analyst', 'Quality Control Officer']
      }
    ],
    programmes: [
      {
        id: 'agribusiness',
        name: 'Agribusiness',
        duration: '4 YEARS',
        requirements: {
          utme: 'Five (5) SSCE credit passes including English Language, Mathematics, Biology or Agricultural Science, and any other two (2) subjects from Chemistry, Physics or Geography and Economics in not more than two (2) sittings.',
          directEntry: '2 credits in Chemistry and Biology in Advance Level, IJMB or JUPEB plus five (5) credits in SSCE. Diploma holders with UPPER CREDIT are eligible.'
        }
      },
      {
        id: 'agric-economics',
        name: 'Agricultural Economics',
        duration: '4 YEARS',
        requirements: {
          utme: 'Five (5) SSCE credit passes including English Language, Mathematics, Biology or Agricultural Science, and any other two (2) subjects from Chemistry, Physics or Geography and Economics in not more than two (2) sittings.',
          directEntry: '2 credits in Chemistry and Biology in Advance Level, IJMB or JUPEB plus five (5) credits in SSCE. Diploma holders with UPPER CREDIT are eligible.'
        }
      },
      {
        name: 'Environmental Management & Toxicology',
        duration: '4 YEARS',
        requirements: {
          utme: 'Five (5) SSCE credit passes including English Language, Mathematics, Chemistry, Physics, Biology or Agricultural Science in not more than two (2) sittings.',
          directEntry: 'OND/NCE (UPPER CREDIT) or HND (LOWER CREDIT). 2 A-Level passes (Biology and one of Botany, Chemistry, Geography, Math, Physics).'
        }
      },
      {
        id: 'forensic-science',
        name: 'Forensic Science',
        duration: '4 YEARS',
        requirements: {
          utme: 'Five (5) SSCE credit passes including English Language, Mathematics, Biology, Chemistry and Physics in not more than two (2) sittings.',
          directEntry: '2 A-Level passes in two relevant subjects including Biology, Botany, Chemistry, Geography, Mathematics and Physics.'
        }
      },
      {
        id: 'microbiology',
        name: 'Microbiology',
        duration: '4 YEARS',
        requirements: {
          utme: 'Five (5) SSCE credit passes including English Language, Mathematics, Biology, Chemistry and Physics in not more than two (2) sittings.',
          directEntry: '2 A-Level passes in two relevant subjects including Biology, Botany, Chemistry, Geography, Mathematics and Physics.'
        }
      },
      {
        id: 'petroleum-chemistry',
        name: 'Petroleum Chemistry',
        duration: '4 YEARS',
        requirements: {
          utme: 'Five (5) SSCE credit passes including English Language, Mathematics, Biology, Chemistry and Physics in not more than two (2) sittings.',
          directEntry: '2 A-Level passes in two relevant subjects including Biology, Botany, Chemistry, Geography, Mathematics and Physics.'
        }
      }
    ],
  },
  business: {
    id: 'business',
    title: 'College of Business, Law & Educational Sciences (CBLES)',
    description: 'Developing entrepreneurial leaders equipped with the tools to thrive in the global economy. We integrate business acumen with legal and educational foundations.',
    provost: {
      name: 'Professor Oladele AKINYOMI',
      image: 'https://hust.edu.ng/wp-content/uploads/2026/04/Prof-Oladele-AKINYOMI.png',
      welcomeAddress: 'In a rapidly changing business world, we provide our students with the agility and leadership skills to thrive and make a difference.',
      citation: 'Professor Oladele AKINYOMI is the Provost of the College of Business, Law & Educational Sciences (CBLES). He is an expert in his field with a focus on strategic management and institutional excellence.'
    },
    image: 'https://hust.edu.ng/wp-content/uploads/2024/11/business-law-and-educational-sciences.jpg',
    qualityPromises: [
      'Case-study based business education',
      'Leadership development programs',
      'Global business networking opportunities',
      'Entrepreneurial mindset cultivation'
    ],
    careerOpportunities: [
      'Chartered Accountant',
      'Economic Analyst',
      'Mass Communication Specialist',
      'Financial Manager',
      'Business Administrator',
      'Legal Consultant'
    ],
    faculty: [
      { 
        id: 'funke-adeyemi',
        name: 'Dr. Funke Adeyemi', 
        role: 'Head of Accounting', 
        image: 'https://images.unsplash.com/photo-1531123414780-f74242c2b052?auto=format&fit=crop&q=80',
        bio: 'Dr. Adeyemi specializes in forensic accounting and corporate governance, ensuring transparency in financial reporting.',
        researchInterests: ['Forensic Accounting', 'Corporate Governance', 'Financial Reporting'],
        publicationsLink: 'https://scholar.google.com/citations?user=funke-adeyemi',
        socialMedia: { 
          linkedin: 'https://linkedin.com/in/funke-adeyemi',
          researchGate: 'https://www.researchgate.net/profile/Funke-Adeyemi',
          scopus: 'https://www.scopus.com/authid/detail.uri?authorId=funke-adeyemi',
          orcid: 'https://orcid.org/0000-0000-0000-0006'
        }
      },
      { 
        id: 'babatunde-lawal',
        name: 'Dr. Babatunde Lawal', 
        role: 'Associate Professor, Economics', 
        image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80',
        bio: 'An expert in macroeconomics, Dr. Lawal researches the impact of fiscal policy on developing economies.',
        researchInterests: ['Macroeconomics', 'Fiscal Policy', 'Development Economics'],
        publicationsLink: 'https://scholar.google.com/citations?user=babatunde-lawal',
        socialMedia: { 
          twitter: 'https://twitter.com/babatundelawal_econ',
          researchGate: 'https://www.researchgate.net/profile/Babatunde-Lawal',
          scopus: 'https://www.scopus.com/authid/detail.uri?authorId=babatunde-lawal',
          orcid: 'https://orcid.org/0000-0000-0000-0007'
        }
      },
    ],
    researchAreas: [
      'Strategic Management',
      'Economic Policy in Africa',
      'Digital Mass Communication',
      'Financial Innovation',
    ],
    courses: [
      { code: 'ACC 101', name: 'Principles of Accounting', description: 'Introduction to financial accounting and reporting.' },
      { code: 'ECO 201', name: 'Macroeconomic Theory', description: 'Analysis of national income and economic growth.' },
      { code: 'MAC 301', name: 'Digital Media Studies', description: 'Impact of digital technology on mass communication.' },
    ],
    departments: [
      {
        name: 'Business & Finance',
        head: 'Dr. Funke Adeyemi',
        description: 'Focuses on Accounting, Finance, and Business Administration.',
        careers: ['Accountant', 'Financial Analyst', 'Business Manager']
      },
      {
        name: 'Social Sciences',
        head: 'Dr. Babatunde Lawal',
        description: 'Covers Economics and Mass Communication.',
        careers: ['Economist', 'Journalist', 'PR Specialist']
      },
    ],
    programmes: [
      {
        id: 'accounting',
        name: 'Accounting',
        duration: '4 YEARS',
        requirements: {
          utme: 'Credit pass in Mathematics and English language, with any other three (3) from Principles of Accounting, Commerce, Economics and any other commercial subjects in not more than Two (2) sittings.',
          directEntry: '5 SSC credit passes, Two (2) of which must be Advanced level (Principle of Accounting, Commerce and Economics) or First degree (BSC/HND) in related discipline.'
        }
      },
      {
        id: 'economics',
        name: 'Economics',
        duration: '4 YEARS',
        requirements: {
          utme: 'Credit pass in Mathematics, English language, and Economics with any other Two (2) from any commercial subjects in not more than Two (2) sittings.',
          directEntry: '5 SSC credit passes, Two (2) social science subjects of which one must be Economics in IJMB/JUPEB, or First degree (BSC/HND) in related discipline.'
        }
      },
      {
        id: 'mass-comm',
        name: 'Mass Communication',
        duration: '4 YEARS',
        requirements: {
          utme: 'Credit pass in Mathematics, English language, and Literature in English/Government with any other Two (2) from any Art subjects in not more than Two (2) sittings.',
          directEntry: '5 SSC credit passes, Two (2) social subjects of which one must be Literature in English/Government in IJMB/JUPEB, or First degree (BSC/HND) in related discipline.'
        }
      },
      {
        name: 'Logistics & Supply Chain Management',
        duration: '4 YEARS',
        requirements: {
          utme: 'Five (5) subjects including Mathematics, English Language and three (3) other arts or Social science in not more than two (2) sittings.',
          directEntry: 'Five (5) SSC credits, at least two (2) relevant subjects in addition to the five (5) credit passes as in UTME. ND (UPPER CREDIT) or HND (LOWER CREDIT).'
        }
      }
    ],
  },
  governance: {
    id: 'governance',
    title: 'Governance and Administration',
    description: 'The Principal Officers are responsible for the day-to-day management of the human, monetary, infrastructural and other material resources of the University.',
    provost: {
      name: 'Prof Iheayinchukwu Okoro',
      image: 'https://hust.edu.ng/wp-content/uploads/2024/11/Prof-Iheanyichukwu-Okoro-1.png',
      welcomeAddress: 'Welcome to Hillside University of Science and Technology. Our commitment is to academic excellence and innovation.',
      citation: 'President/ Vice Chancellor',
    },
    faculty: [
      {
        id: 'iheayinchukwu-okoro',
        name: 'Prof Iheayinchukwu Okoro',
        role: 'President/ Vice Chancellor',
        image: 'https://hust.edu.ng/wp-content/uploads/2024/11/Prof-Iheanyichukwu-Okoro-1.png',
        bio: 'Prof Iheayinchukwu Okoro is the President and Vice Chancellor of Hillside University of Science and Technology. He is a distinguished academic leader with extensive experience in university administration and research.\n\nWith over 30 years of academic and clinical experience, Prof. Okoro has been at the forefront of medical education in Nigeria. He is committed to fostering an environment of excellence, integrity, and innovation at HUST.',
        researchInterests: ['Academic Leadership', 'Institutional Strategy', 'Science Education'],
        publicationsLink: '#',
        socialMedia: {
          linkedin: '#',
        },
      },
      {
        id: 'babatunde-adebesin',
        name: 'Prof. Babatunde Olufemi ADEBESIN',
        role: 'EVP/ DVC',
        image: 'https://hust.edu.ng/wp-content/uploads/2026/02/Prof-Adebesin-1.png',
        bio: 'Prof. Babatunde Olufemi ADEBESIN serves as the Executive Vice President and Deputy Vice Chancellor. He also serves as the Provost of the College of Agriculture, Life & Environmental Sciences (CALES). He oversees academic and administrative operations, ensuring the university meets its strategic goals.',
        researchInterests: ['Engineering Education', 'Administrative Management', 'Technology Innovation'],
        publicationsLink: '#',
        socialMedia: {
          linkedin: '#',
        },
      },
      {
        id: 'mercy-adeola-lyons',
        name: 'Dr Mercy Adeola Lyons',
        role: 'Registrar',
        image: 'https://hust.edu.ng/wp-content/uploads/2024/11/Dr-Mercy-Agumadu-1.png',
        bio: 'Dr Mercy Adeola Lyons is the Registrar of Hillside University. She is responsible for the university\'s academic records, admissions, and general administration.\n\nShe is a seasoned university administrator with expertise in academic policy and student affairs, dedicated to providing seamless administrative support to the university community.',
        researchInterests: ['Educational Administration', 'Student Affairs', 'Policy Development'],
        publicationsLink: '#',
        socialMedia: {
          linkedin: '#',
        },
      },
      {
        id: 'patience-saliu',
        name: 'Mrs Patience Saliu',
        role: 'Bursar',
        image: 'https://hust.edu.ng/wp-content/uploads/2025/04/Patience-Osiorenoya-Saliu-.png',
        bio: 'Mrs Patience Saliu is the Bursar of Hillside University. She manages the university\'s financial resources, ensuring fiscal responsibility and strategic investment.\n\nShe is an expert in financial management and institutional finance, with a strong commitment to transparency and accountability in university operations.',
        researchInterests: ['Financial Management', 'Accounting', 'Institutional Finance'],
        publicationsLink: '#',
        socialMedia: {
          linkedin: '#',
        },
      },
      {
        id: 'jibrin-jibiya-baros',
        name: 'Ven. Jibrin Jibiya Baros, FIHRM',
        role: 'Ag. Senior Vice President/Dean, Students’ Development | University Chaplain | Ag. Director of Works',
        image: 'https://hust.edu.ng/wp-content/uploads/2026/04/Ven-Jibril.jpeg',
        bio: 'Ven. Jibrin Jibiya Baros is a seasoned priest, accomplished management consultant, and leadership development expert with over 15 years of cross-sector experience spanning academia, ministry, and corporate consulting. He currently serves as the Acting Senior Vice President/Dean of Students’ Development, University Chaplain, and Acting Director of Works at Hillside University of Science and Technology, where he provides strategic leadership in student affairs, spiritual life, and institutional infrastructure.\n\nHe holds a B.Eng. in Electrical & Electronics Engineering, an MSc in Managerial Psychology from the University of Lagos, and a Bachelor of Theology (B.Th.) alongside an Advanced Diploma in Biblical Studies. Ven. Jibiya is a Fellow of the Institute of Human Resource Management (FIHRM), a Chartered Member of the Nigerian Institute of Management, and a Certified Life Coach.\n\nIn addition to his academic and administrative roles, he is the Chief Operating Officer of KainosEdge Consulting Limited, where he leads organizational strategy, leadership development, and capacity-building initiatives for corporate and public sector institutions. As an ordained priest in the Anglican Communion, he has served extensively in pastoral leadership, youth development, and national chaplaincy roles, including the Nigerian Army Directorate of Chaplain Services.\n\nA dynamic facilitator, mentor, and speaker, Ven. Jibiya is widely respected for his commitment to holistic development—integrating leadership, character formation, and spiritual growth in advancing institutional excellence and nation-building.',
        researchInterests: ['Leadership Development', 'Student Affairs', 'Spiritual Life', 'Institutional Infrastructure'],
        publicationsLink: '#',
        socialMedia: {
          linkedin: '#',
        },
      },
    ],
    researchAreas: [],
    courses: [],
    image: 'https://hust.edu.ng/wp-content/uploads/2024/11/hust-library-1.jpg',
    qualityPromises: [
      'Fiscal Responsibility',
      'Administrative Excellence',
      'Student-Centered Support',
      'Strategic Resource Management',
    ],
    careerOpportunities: [],
    departments: [],
  },
};
