export interface StaffMember {
  id: string;
  name: string;
  role: string;
  college: string;
  department: string;
  image: string;
  email: string;
  linkedin?: string;
  bio: string;
  category: 'Faculty' | 'Administrative' | 'Management';
  hasProfile?: boolean;
}

export const staffData: StaffMember[] = [
  {
    id: 'iheayinchukwu-okoro',
    name: 'Prof. Iheayinchukwu Okoro',
    role: 'Vice Chancellor',
    college: 'University Management',
    department: 'Administration',
    image: 'https://hust.edu.ng/wp-content/uploads/2024/11/Prof-Iheanyichukwu-Okoro-1.png',
    email: 'vc@hust.edu.ng',
    bio: 'Distinguished Professor of Medicine with over 30 years of academic and clinical experience. He is committed to fostering an environment of excellence, integrity, and innovation at HUST.',
    category: 'Management',
    hasProfile: true
  },
  {
    id: 'james-okoro',
    name: 'Dr. James Okoro',
    role: 'Head of Nursing Science',
    college: 'Tristate College of Medicine & Health Sciences(TCMHS)',
    department: 'Nursing',
    image: 'https://i.pravatar.cc/150?u=james',
    email: 'j.okoro@hust.edu.ng',
    bio: 'Expert in critical care nursing and academic leadership with over 20 years of experience.',
    category: 'Faculty',
    hasProfile: true
  },
  {
    id: 'david-adeyemi',
    name: 'Engr. David Adeyemi',
    role: 'Head of Civil Engineering',
    college: 'College of Engineering & Computing Sciences (CECS)',
    department: 'Civil Engineering',
    image: 'https://i.pravatar.cc/150?u=david',
    email: 'd.adeyemi@hust.edu.ng',
    bio: 'Chartered engineer specializing in sustainable urban infrastructure and smart materials.',
    category: 'Faculty',
    hasProfile: true
  },
  {
    id: 'mercy-adeola-lyons',
    name: 'Dr. Mercy Adeola Lyons',
    role: 'Registrar',
    college: 'University Management',
    department: 'Registry',
    image: 'https://hust.edu.ng/wp-content/uploads/2024/11/Dr-Mercy-Agumadu-1.png',
    email: 'registrar@hust.edu.ng',
    bio: 'Seasoned university administrator with expertise in academic policy and student affairs, dedicated to providing seamless administrative support.',
    category: 'Management',
    hasProfile: true
  },
  {
    id: 'amina-yusuf',
    name: 'Dr. Amina Yusuf',
    role: 'Associate Professor, Public Health',
    college: 'Tristate College of Medicine & Health Sciences(TCMHS)',
    department: 'Public Health',
    image: 'https://i.pravatar.cc/150?u=amina',
    email: 'a.yusuf@hust.edu.ng',
    bio: 'Leading researcher in maternal health and community-based health interventions.',
    category: 'Faculty',
    hasProfile: true
  },
  {
    id: 'patience-saliu',
    name: 'Mrs. Patience Saliu',
    role: 'Bursar',
    college: 'University Management',
    department: 'Bursary',
    image: 'https://hust.edu.ng/wp-content/uploads/2025/04/Patience-Osiorenoya-Saliu-.png',
    email: 'bursar@hust.edu.ng',
    bio: 'Expert in financial management and institutional fiscal responsibility, with a strong commitment to transparency and accountability.',
    category: 'Management',
    hasProfile: true
  },
  {
    id: 'jibrin-jibiya-baros',
    name: 'Ven. Jibrin Jibiya Baros, FIHRM',
    role: 'Ag. Senior Vice President/Dean, Students’ Development | University Chaplain | Ag. Director of Works',
    college: 'University Management',
    department: 'Administration',
    image: 'https://hust.edu.ng/wp-content/uploads/2026/04/Ven-Jibril.jpeg',
    email: 'j.baros@hust.edu.ng',
    bio: 'Seasoned priest, accomplished management consultant, and leadership development expert with over 15 years of cross-sector experience.',
    category: 'Management',
    hasProfile: true
  }
];
