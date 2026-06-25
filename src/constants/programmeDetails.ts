export interface Programme {
  id: string;
  college: string;
  title: string;
  description: string;
  admissionOptions: {
    utme: string;
    directEntry: string;
  };
  tuition: {
    perSession: string;
  };
  image: string;
  features?: string[];
}

export const topProgrammes: Programme[] = [
  {
    id: "mbbs",
    college: "Tristate College of Medicine & Health Sciences(TCMHS)",
    title: "MBBS. Medicine & Surgery",
    description: "Our MBBS program is designed to produce world-class medical doctors equipped with the knowledge, skills, and ethical foundation to excel in the global healthcare landscape. Students benefit from state-of-the-art laboratories and clinical rotations at top-tier hospitals.",
    admissionOptions: {
      utme: "Five SSCE credit passes in English Language, Mathematics, Physics, Chemistry and Biology in one sitting.",
      directEntry: "A-Level passes in Biology, Chemistry and Physics in addition to UTME requirements."
    },
    tuition: {
      perSession: "₦3,413,750"
    },
    image: "https://images.unsplash.com/photo-1551601651-2a8555f1a136?auto=format&fit=crop&q=80",
    features: [
      "State-of-the-art Simulation Labs",
      "Clinical Rotations at Top Hospitals",
      "Global Medical Curriculum",
      "Research Opportunities"
    ]
  },
  {
    id: "bnsc",
    college: "Tristate College of Medicine & Health Sciences(TCMHS)",
    title: "BNSc. Nursing Science",
    description: "The Bachelor of Nursing Science program prepares students for professional nursing practice through a blend of rigorous academic study and extensive clinical experience. We focus on evidence-based care and compassionate patient management.",
    admissionOptions: {
      utme: "Five SSCE credit passes in English Language, Mathematics, Physics, Chemistry and Biology.",
      directEntry: "Registered Nurse (RN) certificate or A-Level passes in relevant science subjects."
    },
    tuition: {
      perSession: "₦1,818,750"
    },
    image: "https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&q=80",
    features: [
      "Hands-on Clinical Training",
      "Modern Nursing Labs",
      "Community Health Focus",
      "Professional Certification Prep"
    ]
  },
  {
    id: "bmls",
    college: "Tristate College of Medicine & Health Sciences(TCMHS)",
    title: "B.MLS. Medical Laboratory Science",
    description: "Our Medical Laboratory Science program trains experts in diagnostic medicine. Students master the latest laboratory techniques and technologies used in disease detection, monitoring, and prevention.",
    admissionOptions: {
      utme: "Five SSCE credit passes in English, Mathematics, Biology, Chemistry and Physics.",
      directEntry: "ND/HND in relevant field or A-Level passes in Biology and Chemistry."
    },
    tuition: {
      perSession: "₦1,818,750"
    },
    image: "https://images.unsplash.com/photo-1581093588401-fbb62a02f120?auto=format&fit=crop&q=80",
    features: [
      "Advanced Diagnostic Equipment",
      "Pathology Lab Training",
      "Hematology Specialization",
      "Industry-Standard Certifications"
    ]
  },
  {
    id: "accounting",
    college: "College of Business, Law & Educational Sciences (CBLES)",
    title: "B.Sc. Accounting",
    description: "The Accounting program provides a solid foundation in financial reporting, auditing, taxation, and management accounting. We prepare students for professional certifications and leadership roles in the global financial sector.",
    admissionOptions: {
      utme: "Five SSCE credit passes including English, Mathematics, Economics and two other relevant subjects.",
      directEntry: "ND/HND in Accounting or related fields, or A-Level passes in Accounting/Economics."
    },
    tuition: {
      perSession: "₦1,258,750"
    },
    image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80",
    features: [
      "Professional Certification Track (ICAN/ACCA)",
      "Financial Modeling Workshops",
      "Auditing Simulation",
      "Taxation Law Expertise"
    ]
  },
  {
    id: "economics",
    college: "College of Business, Law & Educational Sciences (CBLES)",
    title: "B.Sc. Economics",
    description: "Our Economics program explores the complexities of global markets, policy-making, and resource allocation. Students develop strong analytical and quantitative skills to solve real-world economic challenges.",
    admissionOptions: {
      utme: "Five SSCE credit passes including English, Mathematics, Economics and two other social science subjects.",
      directEntry: "ND/HND in Economics or related fields, or A-Level passes in Economics."
    },
    tuition: {
      perSession: "₦1,258,750"
    },
    image: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?auto=format&fit=crop&q=80",
    features: [
      "Macroeconomic Policy Analysis",
      "Econometric Modeling",
      "Market Trend Forecasting",
      "Data-Driven Decision Making"
    ]
  },
  {
    id: "mass-comm",
    college: "College of Business, Law & Educational Sciences (CBLES)",
    title: "B.Sc. Mass Communication",
    description: "The Mass Communication program equips students with the skills for journalism, public relations, advertising, and digital media. We emphasize ethical storytelling and effective communication in the digital age.",
    admissionOptions: {
      utme: "Five SSCE credit passes including English, Mathematics, Literature in English and two other subjects.",
      directEntry: "ND/HND in Mass Communication or related fields."
    },
    tuition: {
      perSession: "₦1,258,750"
    },
    image: "https://images.unsplash.com/photo-1598387993441-a364f854c3e1?auto=format&fit=crop&q=80",
    features: [
      "Digital Media Production",
      "Investigative Journalism",
      "PR & Advertising Studio",
      "Broadcast Communication Skills"
    ]
  },
  {
    id: "computer-science",
    college: "College of Engineering & Computing Sciences (CECS)",
    title: "B.Sc. Computer Science",
    description: "Our Computer Science program focuses on software development, artificial intelligence, and data science. Students build innovative solutions and gain hands-on experience with cutting-edge technologies.",
    admissionOptions: {
      utme: "Five SSCE credit passes including English, Mathematics, Physics and two other science subjects.",
      directEntry: "ND/HND in Computer Science or A-Level passes in Mathematics and Physics."
    },
    tuition: {
      perSession: "₦1,458,750"
    },
    image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80",
    features: [
      "AI & Machine Learning Focus",
      "Full-stack Development Training",
      "Cloud Computing Labs",
      "Tech Internship Placement"
    ]
  },
  {
    id: "cyber-security",
    college: "College of Engineering & Computing Sciences (CECS)",
    title: "B.Sc. Cyber Security",
    description: "The Cyber Security program trains students to protect digital assets and infrastructure from cyber threats. We cover network security, cryptography, ethical hacking, and digital forensics.",
    admissionOptions: {
      utme: "Five SSCE credit passes including English, Mathematics, Physics and two other science subjects.",
      directEntry: "ND/HND in relevant field or A-Level passes in Mathematics and Physics."
    },
    tuition: {
      perSession: "₦1,458,750"
    },
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80",
    features: [
      "Ethical Hacking Lab",
      "Network Defense Strategies",
      "Cryptography & Data Privacy",
      "Digital Forensics Training"
    ]
  },
  {
    id: "aerospace-eng",
    college: "College of Engineering & Computing Sciences (CECS)",
    title: "B.Eng. Aerospace Engineering",
    description: "Aerospace Engineering at HUST explores the design, development, and testing of aircraft and spacecraft. Students engage in advanced aerodynamics, propulsion systems, and structural analysis.",
    admissionOptions: {
      utme: "Five SSCE credit passes including English, Mathematics, Physics, Chemistry and one other science subject.",
      directEntry: "ND/HND in Engineering or A-Level passes in Mathematics, Physics and Chemistry."
    },
    tuition: {
      perSession: "₦1,608,750"
    },
    image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80",
    features: [
      "Aerodynamics & Flight Mechanics",
      "Propulsion System Design",
      "Spacecraft Engineering",
      "Avionics & Control Systems"
    ]
  },
  {
    id: "mechanical-eng",
    college: "College of Engineering & Computing Sciences (CECS)",
    title: "B.Eng. Mechanical Engineering",
    description: "Our Mechanical Engineering program covers the principles of mechanics, thermodynamics, and materials science. Students design and build complex mechanical systems for various industries.",
    admissionOptions: {
      utme: "Five SSCE credit passes including English, Mathematics, Physics, Chemistry and one other science subject.",
      directEntry: "ND/HND in Engineering or A-Level passes in Mathematics, Physics and Chemistry."
    },
    tuition: {
      perSession: "₦1,608,750"
    },
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80",
    features: [
      "CAD/CAM Design Studio",
      "Thermodynamics & Heat Transfer",
      "Robotics & Automation",
      "Materials Science Lab"
    ]
  },
  {
    id: "mechatronics-eng",
    college: "College of Engineering & Computing Sciences (CECS)",
    title: "B.Eng. Mechatronics Engineering",
    description: "Mechatronics Engineering combines mechanical, electrical, and computer engineering. Students develop smart systems, robotics, and automated manufacturing processes.",
    admissionOptions: {
      utme: "Five SSCE credit passes including English, Mathematics, Physics, Chemistry and one other science subject.",
      directEntry: "ND/HND in Engineering or A-Level passes in Mathematics, Physics and Chemistry."
    },
    tuition: {
      perSession: "₦1,608,750"
    },
    image: "https://images.unsplash.com/photo-1581092334651-ddf26d9a1930?auto=format&fit=crop&q=80",
    features: [
      "Smart Systems Integration",
      "Robotic Arm Programming",
      "Control Theory Application",
      "Industrial Automation"
    ]
  },
  {
    id: "electrical-eng",
    college: "College of Engineering & Computing Sciences (CECS)",
    title: "B.Eng. Electrical Engineering and Electronics",
    description: "This program focuses on power systems, electronics, and telecommunications. Students learn to design and manage electrical infrastructure and innovative electronic devices.",
    admissionOptions: {
      utme: "Five SSCE credit passes including English, Mathematics, Physics, Chemistry and one other science subject.",
      directEntry: "ND/HND in Engineering or A-Level passes in Mathematics, Physics and Chemistry."
    },
    tuition: {
      perSession: "₦1,608,750"
    },
    image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&q=80",
    features: [
      "Power Grid Systems",
      "Embedded Systems Lab",
      "Telecommunications Network",
      "Renewable Energy Focus"
    ]
  },
  {
    id: "software-engineering",
    college: "College of Engineering & Computing Sciences (CECS)",
    title: "B.Sc. Software Engineering",
    description: "Our Software Engineering program focuses on the systematic approach to software development. Students learn advanced programming, software architecture, and project management to build robust and scalable software systems.",
    admissionOptions: {
      utme: "Five SSCE credit passes including English, Mathematics, Physics and two other science subjects.",
      directEntry: "ND/HND in relevant field or A-Level passes in Mathematics and Physics."
    },
    tuition: {
      perSession: "₦1,458,750"
    },
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80",
    features: [
      "Agile Development Methodologies",
      "Software Architecture Design",
      "DevOps & CI/CD Pipelines",
      "Mobile App Development"
    ]
  },
  {
    id: "civil-engineering",
    college: "College of Engineering & Computing Sciences (CECS)",
    title: "B.Eng. Civil and Construction Engineering",
    description: "The Civil and Construction Engineering program prepares students to design and manage the construction of vital infrastructure. From bridges to sustainable buildings, students gain the expertise to shape the physical world.",
    admissionOptions: {
      utme: "Five SSCE credit passes including English, Mathematics, Physics, Chemistry and one other science subject.",
      directEntry: "ND/HND in Engineering or A-Level passes in Mathematics, Physics and Chemistry."
    },
    tuition: {
      perSession: "₦1,608,750"
    },
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80",
    features: [
      "Structural Integrity Testing",
      "Sustainable Infrastructure",
      "Geotechnical Engineering",
      "Construction Management"
    ]
  },
  {
    id: "physiology",
    college: "Tristate College of Medicine & Health Sciences(TCMHS)",
    title: "B.Sc. Physiology",
    description: "The Physiology program explores the functions and mechanisms of living systems. Students gain a deep understanding of how the human body works at the cellular, tissue, and organ levels, preparing them for careers in research, healthcare, and academia.",
    admissionOptions: {
      utme: "Five SSCE credit passes in English Language, Mathematics, Physics, Chemistry and Biology.",
      directEntry: "A-Level passes in Biology and Chemistry or ND/HND in relevant field."
    },
    tuition: {
      perSession: "₦1,258,750"
    },
    image: "https://images.unsplash.com/photo-1576086213369-97a306dca665?auto=format&fit=crop&q=80",
    features: [
      "Neurophysiology Research",
      "Cardiovascular Studies",
      "Endocrine System Analysis",
      "Metabolic Research Lab"
    ]
  },
  {
    id: "anatomy",
    college: "Tristate College of Medicine & Health Sciences(TCMHS)",
    title: "B.Sc. Human Anatomy",
    description: "Our Human Anatomy program provides a comprehensive study of the structure of the human body. Through detailed dissection and advanced imaging techniques, students develop the foundational knowledge essential for medical and health-related professions.",
    admissionOptions: {
      utme: "Five SSCE credit passes in English Language, Mathematics, Physics, Chemistry and Biology.",
      directEntry: "A-Level passes in Biology and Chemistry or ND/HND in relevant field."
    },
    tuition: {
      perSession: "₦1,258,750"
    },
    image: "https://images.unsplash.com/photo-1530026405186-ed1f139313f8?auto=format&fit=crop&q=80",
    features: [
      "Advanced Histology Lab",
      "Gross Anatomy Dissection",
      "Neuroanatomy Specialization",
      "3D Anatomical Modeling"
    ]
  },
  {
    id: "biochemistry",
    college: "Tristate College of Medicine & Health Sciences(TCMHS)",
    title: "B.Sc. Biochemistry",
    description: "The Biochemistry program investigates the chemical processes within and relating to living organisms. Students explore the molecular basis of life, preparing for careers in biotechnology, pharmaceuticals, and clinical research.",
    admissionOptions: {
      utme: "Five SSCE credit passes in English Language, Mathematics, Physics, Chemistry and Biology.",
      directEntry: "A-Level passes in Biology and Chemistry or ND/HND in relevant field."
    },
    tuition: {
      perSession: "₦1,258,750"
    },
    image: "https://images.unsplash.com/photo-1532187863486-abf9d39d99c5?auto=format&fit=crop&q=80",
    features: [
      "Molecular Biology Lab",
      "Enzymology Research",
      "Genetic Engineering",
      "Clinical Biochemistry"
    ]
  },
  {
    id: "agribusiness",
    college: "College of Agriculture, Life & Environmental Sciences (CALES)",
    title: "B.Sc. Agribusiness",
    description: "The Agribusiness program combines agricultural science with business management. Students learn to manage agricultural enterprises, from production to marketing, ensuring sustainability and profitability in the food sector.",
    admissionOptions: {
      utme: "Five SSCE credit passes including English Language, Mathematics, Biology or Agricultural Science, and any other two subjects from Chemistry, Physics or Geography and Economics.",
      directEntry: "2 credits in Chemistry and Biology in Advance Level, IJMB or JUPEB plus five credits in SSCE."
    },
    tuition: {
      perSession: "₦1,258,750"
    },
    image: "https://images.unsplash.com/photo-1595841696677-6489ff3f8cd1?auto=format&fit=crop&q=80",
    features: [
      "Farm Management Systems",
      "Supply Chain Optimization",
      "Agri-Tech Innovation",
      "Sustainable Farming Models"
    ]
  },
  {
    id: "agric-economics",
    college: "College of Agriculture, Life & Environmental Sciences (CALES)",
    title: "B.Sc. Agricultural Economics",
    description: "Our Agricultural Economics program applies economic principles to the production and distribution of food and fiber. Students analyze market trends, policy impacts, and resource management in the agricultural industry.",
    admissionOptions: {
      utme: "Five SSCE credit passes including English Language, Mathematics, Biology or Agricultural Science, and any other two subjects from Chemistry, Physics or Geography and Economics.",
      directEntry: "2 credits in Chemistry and Biology in Advance Level, IJMB or JUPEB plus five credits in SSCE."
    },
    tuition: {
      perSession: "₦1,258,750"
    },
    image: "https://images.unsplash.com/photo-1560493676-04071c5f467b?auto=format&fit=crop&q=80",
    features: [
      "Agricultural Market Analysis",
      "Food Security Policy",
      "Resource Allocation Models",
      "Environmental Economics"
    ]
  },
  {
    id: "forensic-science",
    college: "College of Agriculture, Life & Environmental Sciences (CALES)",
    title: "B.Sc. Forensic Science",
    description: "The Forensic Science program trains students in the application of scientific methods to criminal and civil laws. Students master laboratory techniques used in evidence analysis, crime scene investigation, and digital forensics.",
    admissionOptions: {
      utme: "Five SSCE credit passes including English Language, Mathematics, Biology, Chemistry and Physics.",
      directEntry: "2 A-Level passes in two relevant subjects including Biology, Botany, Chemistry, Geography, Mathematics and Physics."
    },
    tuition: {
      perSession: "₦1,458,750"
    },
    image: "https://images.unsplash.com/photo-1582719471384-894fbb16e074?auto=format&fit=crop&q=80",
    features: [
      "Crime Scene Investigation",
      "DNA Profiling Lab",
      "Toxicology Analysis",
      "Legal Testimony Training"
    ]
  },
  {
    id: "microbiology",
    college: "College of Agriculture, Life & Environmental Sciences (CALES)",
    title: "B.Sc. Microbiology",
    description: "Our Microbiology program explores the world of microscopic organisms. Students study the role of microbes in health, industry, and the environment, gaining hands-on experience in microbial cultivation and analysis.",
    admissionOptions: {
      utme: "Five SSCE credit passes including English Language, Mathematics, Biology, Chemistry and Physics.",
      directEntry: "2 A-Level passes in two relevant subjects including Biology, Botany, Chemistry, Geography, Mathematics and Physics."
    },
    tuition: {
      perSession: "₦1,258,750"
    },
    image: "https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?auto=format&fit=crop&q=80",
    features: [
      "Microbial Genetics",
      "Industrial Fermentation",
      "Immunology Research",
      "Environmental Microbiology"
    ]
  },
  {
    id: "petroleum-chemistry",
    college: "College of Agriculture, Life & Environmental Sciences (CALES)",
    title: "B.Sc. Petroleum Chemistry",
    description: "The Petroleum Chemistry program focuses on the chemical processes involved in the exploration, production, and refining of petroleum. Students learn to develop sustainable solutions for the energy industry.",
    admissionOptions: {
      utme: "Five SSCE credit passes including English Language, Mathematics, Chemistry, Physics and Biology.",
      directEntry: "2 A-Level passes in Chemistry and either Mathematics or Physics."
    },
    tuition: {
      perSession: "₦1,458,750"
    },
    image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&q=80",
    features: [
      "Refinery Process Control",
      "Petrochemical Analysis",
      "Fuel Quality Testing",
      "Energy Sustainability"
    ]
  },
  {
    id: "finance",
    college: "College of Business, Law & Educational Sciences (CBLES)",
    title: "B.Sc. Finance",
    description: "The Finance program provides a deep understanding of financial markets, investment analysis, and corporate finance. Students develop the analytical skills needed for careers in banking, investment, and financial management.",
    admissionOptions: {
      utme: "Five SSCE credit passes including English, Mathematics, Economics and two other relevant subjects.",
      directEntry: "ND/HND in Finance or related fields, or A-Level passes in Economics and Accounting."
    },
    tuition: {
      perSession: "₦1,258,750"
    },
    image: "https://images.unsplash.com/photo-1591696208162-a977affd1744?auto=format&fit=crop&q=80",
    features: [
      "Investment Portfolio Management",
      "Risk Assessment Models",
      "Corporate Finance Strategy",
      "FinTech Innovation"
    ]
  },
  {
    id: "business-admin",
    college: "College of Business, Law & Educational Sciences (CBLES)",
    title: "B.Sc. Business Administration",
    description: "Our Business Administration program prepares students for leadership roles in various organizations. Students learn management principles, marketing strategies, and organizational behavior to drive business success.",
    admissionOptions: {
      utme: "Five SSCE credit passes including English, Mathematics, Economics and two other relevant subjects.",
      directEntry: "ND/HND in Business Administration or related fields, or A-Level passes in relevant subjects."
    },
    tuition: {
      perSession: "₦1,258,750"
    },
    image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&q=80",
    features: [
      "Strategic Leadership Training",
      "Organizational Behavior",
      "Global Marketing Strategy",
      "Entrepreneurship Incubator"
    ]
  }
];
