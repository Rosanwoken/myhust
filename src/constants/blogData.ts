export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  category: string;
  image: string;
  readTime: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: 'campus-vibrancy-2026',
    title: 'HUST Campus: A Hub of Innovation and Student Excellence',
    excerpt: 'A look into the vibrant campus life and the latest academic activities shaping the future of our students.',
    content: `
      The atmosphere at Hillside University of Science and Technology (HUST) has been nothing short of electric over the past few weeks. From groundbreaking research in our labs to vibrant student-led symposiums, the campus is buzzing with innovation and excellence.

      ### Academic Excellence and Innovation
      Our students continue to push the boundaries of what's possible. Recent academic symposiums have showcased projects ranging from sustainable engineering solutions to advanced cybersecurity protocols. The dedication of our faculty and the curiosity of our students create a unique environment where ideas flourish.

      ![Academic Symposium](https://hust.edu.ng/wp-content/uploads/2026/04/Campus_news3.jpeg)

      ### Vibrant Student Life
      Beyond the classrooms, HUST offers a rich tapestry of social and extracurricular activities. Whether it's through student fellowship, sports, or cultural events, our community is built on mutual respect and a shared passion for learning.

      ![Student Engagement](https://hust.edu.ng/wp-content/uploads/2026/04/Campus_news.jpeg)

      ### Looking Ahead
      As we move further into the academic session, we remain committed to providing our students with the best possible resources and opportunities. The future is bright at HUST, and we are proud to be the home of tomorrow's leaders.
    `,
    author: 'University Communications',
    date: 'April 05, 2026',
    category: 'Campus News',
    image: 'https://hust.edu.ng/wp-content/uploads/2026/04/Campus_news4.jpeg',
    readTime: '3 min read'
  },
  {
    id: 'nasrda-mou',
    title: 'HUST Signs Landmark MoU with NASRDA to Advance Aerospace Research',
    excerpt: 'A historic partnership with the National Space Research and Development Agency to foster innovation in aerospace and engineering.',
    content: `
      Hillside University of Science and Technology (HUST) has signed a landmark Memorandum of Understanding (MoU) with the National Space Research and Development Agency (NASRDA). This strategic partnership aims to advance aerospace and engineering research, providing a platform for collaborative innovation and technological development.

      ### Strengthening Research Capabilities
      The collaboration will focus on several key areas, including satellite technology, remote sensing, and space science education. By leveraging NASRDA's expertise and HUST's academic resources, both institutions aim to contribute significantly to Nigeria's space program and technological advancement.

      ### Opportunities for Students
      This MoU opens up new horizons for HUST students, particularly those in the College of Engineering & Computing Sciences (CECS). Students will have opportunities for internships, joint research projects, and access to specialized facilities at NASRDA, bridging the gap between academic learning and industry practice.

      ![MoU Signing Ceremony](https://hust.edu.ng/wp-content/uploads/2025/04/487081644_17919747330074817_8049847473902053391_n.jpeg)

      ### A Vision for the Future
      Speaking at the signing ceremony, the Vice Chancellor of HUST expressed optimism about the partnership's potential. "This MoU is a testament to our commitment to excellence in research and innovation. Together with NASRDA, we are building a future where Nigerian scientists and engineers lead the way in aerospace technology."
    `,
    author: 'University Communications',
    date: 'April 02, 2026',
    category: 'Research',
    image: 'https://hust.edu.ng/wp-content/uploads/2025/04/487081644_17919747330074817_8049847473902053391_n.jpeg',
    readTime: '4 min read'
  },
  {
    id: 'hust-3rd-matriculation',
    title: 'HUST Celebrates 3rd Matriculation Ceremony',
    excerpt: 'Hillside University of Science and Technology marks a significant milestone with its 3rd matriculation ceremony, welcoming a new cohort of future innovators.',
    content: `
      Hillside University of Science and Technology (HUST) recently celebrated its 3rd Matriculation Ceremony, a momentous occasion that marks the formal induction of new students into the university community. The event, held at the university's main auditorium in Okemesi-Ekiti, was attended by principal officers, faculty members, parents, and the matriculating students.

      ### A Commitment to Excellence
      In his address, the Vice Chancellor, Prof. Iheanyichukwu Okoro, congratulated the new students on their admission to HUST. He emphasized the university's commitment to providing a world-class education that combines academic rigor with practical innovation. "You are joining a community that values excellence, integrity, and the pursuit of knowledge," he stated.

      ### Empowering the Next Generation
      The 3rd matriculation ceremony saw students from various colleges, including Tristate College of Medicine & Health Sciences(TCMHS), Engineering, and Agriculture, take their matriculation oaths. These students represent the future of science and technology in Nigeria and beyond.

      ![Matriculation Ceremony](https://hust.edu.ng/wp-content/uploads/2026/03/matric.jpeg)

      ### Campus Life and Innovation
      At HUST, we believe in a holistic approach to education. Beyond the classroom, our students are encouraged to engage in research, community service, and extracurricular activities that foster leadership and personal growth. The matriculation ceremony is just the beginning of an exciting journey for our new students.

      We look forward to seeing the incredible contributions these students will make to our university and to society at large. Welcome to the HUST family!
    `,
    author: 'University Communications',
    date: 'March 26, 2026',
    category: 'Campus News',
    image: 'https://hust.edu.ng/wp-content/uploads/2026/03/Matric_pic.jpeg',
    readTime: '3 min read'
  },
  {
    id: 'dvc-appointment',
    title: 'Professor Babatunde Olufemi ADEBESIN Appointed as Deputy Vice Chancellor',
    excerpt: 'HUST welcomes Professor Babatunde Adebesin to the university leadership team as the new Deputy Vice Chancellor.',
    content: `
      Hillside University of Science and Technology is pleased to announce the appointment of Professor Babatunde Olufemi ADEBESIN as the Deputy Vice Chancellor (DVC). Professor ADEBESIN brings a wealth of experience in academic administration, research, and teaching to this critical leadership role.

      ### A Distinguished Academic Career
      Prior to joining HUST, Professor ADEBESIN has held various senior academic and administrative positions, where he demonstrated exceptional leadership and a commitment to academic excellence. His research contributions in his field have earned him national and international recognition.

      ### Driving Academic Excellence
      As DVC, Professor ADEBESIN will oversee academic programs, research initiatives, and faculty development at HUST. His vision aligns perfectly with the university's mission to provide world-class education in science and technology.

      ![Prof Babatunde Adebesin](https://hust.edu.ng/wp-content/uploads/2026/02/Prof-Adebesin-1.png)

      ### Leadership for the Future
      The university community warmly welcomes Professor ADEBESIN and looks forward to his contributions in driving HUST towards its goal of becoming a premier institution of higher learning in Africa.
    `,
    author: 'Registrar\'s Office',
    date: 'February 15, 2026',
    category: 'Leadership',
    image: 'https://hust.edu.ng/wp-content/uploads/2026/02/Prof-Adebesin-1.png',
    readTime: '3 min read'
  },
  {
    id: 'ibadan-campus-hub',
    title: 'Introducing our Ibadan Campus: A Hub for Pre-Clinical Training',
    excerpt: 'HUST expands its facilities with a new dedicated campus in Ibadan for world-class pre-clinical medical education.',
    content: `
      HUST is proud to introduce its new Ibadan Campus, a state-of-the-art facility dedicated to pre-clinical training for students in the Tristate College of Medicine & Health Sciences(TCMHS). This expansion marks a significant step in our commitment to providing the best possible environment for medical education.

      ### Modern Facilities for Medical Excellence
      The Ibadan Campus is equipped with advanced laboratories, modern lecture theaters, and specialized training rooms designed to meet international standards. These facilities provide students with the hands-on experience and theoretical knowledge required for a successful medical career.

      ### Strategic Location
      Located in the historic city of Ibadan, the campus benefits from proximity to leading healthcare institutions and research centers, fostering a rich academic environment for our students.

      ![Ibadan Campus Facility](https://hust.edu.ng/wp-content/uploads/2025/06/Screenshot-2025-06-10-161906.png)

      ### Empowering Future Healthcare Professionals
      By providing a dedicated space for pre-clinical training, HUST ensures that its medical students receive a focused and high-quality education that prepares them for the challenges of clinical practice.
    `,
    author: 'College of Medicine',
    date: 'November 20, 2024',
    category: 'Campus News',
    image: 'https://hust.edu.ng/wp-content/uploads/2025/06/Screenshot-2025-06-10-161906.png',
    readTime: '4 min read'
  },
  {
    id: 'future-of-ai-in-africa',
    title: 'The Future of AI in Africa: Opportunities and Challenges',
    excerpt: 'Exploring how Artificial Intelligence is set to transform the African landscape, from healthcare to agriculture.',
    content: `
      Artificial Intelligence (AI) is no longer a futuristic concept; it is a present reality that is reshaping industries across the globe. In Africa, the potential for AI to drive significant socio-economic growth is immense. However, this potential comes with its own set of unique challenges.

      At Hillside University of Science and Technology (HUST), we are at the forefront of this digital revolution. Our College of Engineering & Computing Sciences (CECS) is dedicated to researching and developing AI solutions that are tailored to the African context.

      ### Opportunities in Healthcare
      AI can significantly improve healthcare delivery in Africa by providing diagnostic tools that can be used in remote areas. For instance, AI-powered imaging can help detect diseases like tuberculosis and malaria with high accuracy, even in the absence of specialized radiologists.

      ### Transforming Agriculture
      Agriculture is the backbone of many African economies. AI can help farmers optimize their yields by providing real-time data on soil health, weather patterns, and pest control. This leads to increased productivity and food security.

      ### The Challenges Ahead
      Despite the opportunities, Africa faces challenges such as infrastructure deficits, limited access to high-quality data, and a shortage of skilled AI professionals. Addressing these challenges requires a collaborative effort between governments, academia, and the private sector.

      At HUST, we are committed to bridging the skills gap by providing our students with world-class training in AI and machine learning. We believe that by empowering the next generation of African tech leaders, we can unlock the full potential of AI for the continent.
    `,
    author: 'Prof. Linda Wu',
    date: 'March 28, 2026',
    category: 'Technology',
    image: 'https://picsum.photos/seed/ai-africa/1200/600',
    readTime: '6 min read'
  },
  {
    id: 'sustainable-engineering-practices',
    title: 'Sustainable Engineering: Building for the Next Century',
    excerpt: 'How modern engineering is evolving to meet the demands of a changing climate and a growing population.',
    content: `
      The 21st century presents unprecedented challenges for engineers. Climate change, rapid urbanization, and resource depletion require a fundamental shift in how we design and build our infrastructure. Sustainable engineering is no longer an option; it is a necessity.

      ### The Principles of Sustainability
      Sustainable engineering involves designing systems and structures that minimize their environmental impact while maximizing their social and economic benefits. This includes using renewable materials, reducing energy consumption, and designing for longevity and recyclability.

      ### Innovation at HUST
      Our College of Engineering & Computing Sciences (CECS) is leading the way in sustainable practices. From researching smart materials that can self-heal to designing earthquake-resistant buildings, our faculty and students are working on solutions that will stand the test of time.

      ### The Role of Smart Cities
      Smart city technologies play a crucial role in sustainable urban development. By integrating sensors and data analytics into urban infrastructure, we can optimize energy use, improve waste management, and enhance public transportation.

      As we look to the future, the goal is clear: to build a world that is resilient, efficient, and equitable. At HUST, we are proud to be training the engineers who will make this vision a reality.
    `,
    author: 'Prof. Olamide OLAWALE',
    date: 'March 22, 2026',
    category: 'Engineering',
    image: 'https://picsum.photos/seed/sustainable-eng/1200/600',
    readTime: '5 min read'
  },
  {
    id: 'nursing-excellence-in-digital-age',
    title: 'Nursing Excellence in the Digital Age',
    excerpt: 'The evolving role of nurses in a healthcare system increasingly driven by technology and data.',
    content: `
      The field of nursing is undergoing a profound transformation. While the core values of compassion and patient care remain unchanged, the tools and methods used by nurses are evolving rapidly in the digital age.

      ### The Impact of Telehealth
      Telehealth has revolutionized how nurses interact with patients, especially in underserved communities. Through remote monitoring and virtual consultations, nurses can provide timely care and education, reducing the need for hospital visits.

      ### Data-Driven Patient Care
      The integration of Electronic Health Records (EHRs) and data analytics allows nurses to provide more personalized and efficient care. By analyzing patient data, nurses can identify trends, predict potential complications, and tailor interventions to individual needs.

      ### Education at HUST
      At the Tristate College of Medicine & Health Sciences(TCMHS), we prepare our nursing students for this new reality. Our curriculum includes training on the latest healthcare technologies, ensuring that we are not only skilled caregivers but also tech-savvy professionals.

      The future of nursing is bright, and it is digital. By embracing technology, nurses can enhance their practice and improve patient outcomes in ways that were previously unimaginable.
    `,
    author: 'Dr. James Okoro',
    date: 'March 18, 2026',
    category: 'Healthcare',
    image: 'https://picsum.photos/seed/nursing-digital/1200/600',
    readTime: '4 min read'
  },
  {
    id: 'entrepreneurship-in-emerging-markets',
    title: 'Cultivating Entrepreneurship in Emerging Markets',
    excerpt: 'Strategies for success for young entrepreneurs looking to make an impact in developing economies.',
    content: `
      Emerging markets offer a wealth of opportunities for entrepreneurs. However, navigating these markets requires a unique set of skills and a deep understanding of the local context.

      ### Identifying Opportunities
      The key to success in emerging markets is identifying unmet needs. Whether it's in fintech, agritech, or renewable energy, there are countless problems waiting for innovative solutions.

      ### Building Resilience
      Entrepreneurship is inherently risky, and this is especially true in developing economies where infrastructure and regulatory frameworks may be less developed. Building a resilient business requires agility, resourcefulness, and a strong network of mentors and partners.

      ### The HUST Advantage
      Our College of Business, Law & Educational Sciences (CBLES) is dedicated to fostering an entrepreneurial mindset. Through our innovation and startup incubation support, we provide students with the resources and guidance they need to turn their ideas into viable businesses.

      Africa is a continent of innovators. At HUST, we are committed to providing the next generation of entrepreneurs with the tools they need to drive economic growth and social change.
    `,
    author: 'Professor Oladele AKINYOMI',
    date: 'March 12, 2026',
    category: 'Business',
    image: 'https://picsum.photos/seed/entrepreneur/1200/600',
    readTime: '7 min read'
  }
];
