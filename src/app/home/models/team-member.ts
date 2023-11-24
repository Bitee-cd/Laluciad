export interface TeamMember {
  id: number;
  name: string;
  position: string;
  bio: string;
  imgUrl: string;
  type: 'engineer' | 'management';
  linkedinUrl: string;
}

export const MANAGEMENT_TEAM: TeamMember[] = [
  {
    id: 1,
    name: 'John Olajuwon Dada',
    position: 'Chief Executive Officer',
    bio: "John Dada is a seasoned professional with a rich and diverse career spanning international relations, entrepreneurship, and electrical engineering. With a strong foundation in these areas, he currently holds the position of Chief Executive Officer at both La Ciudad Construction Limited and Creath.io. Throughout his career, John has demonstrated expertise in navigating the complexities of the package/freight delivery industry and international recruitment. His commitment to excellence is evident in his roles as CEO and Engineer, where he oversees on-site operations, leveraging his skills in electrical engineering. With over a decade of experience, John Dada is at the forefront of driving innovation and success in the construction and technology sectors, contributing significantly to each organization's growth and development.",
    type: 'management',
    imgUrl: '/assets/images/team/john_dada.png',
    linkedinUrl: 'https://www.linkedin.com/in/john-dada-0169a912a/',
  },
  {
    id: 2,
    name: 'Segun Joshua Dada',
    position: 'Chief Operating Officer',
    bio: 'Olasegun Dada is a distinguished computer scientist and industrial maintenance engineer, showcasing over a decade of profound expertise in business development, finance, and procurement. As the Chief Executive Officer of Febbs Global Resources Limited, he has steered the company with remarkable leadership since March 2014, specializing in the production of mineral water and soft drinks. Simultaneously, he serves as the Chief Executive Officer of PROF FIX Bureau De Change Limited, demonstrating his versatile entrepreneurial skills. With an unwavering commitment to excellence, Olasegun has proven instrumental in navigating these enterprises to sustained success, solidifying his reputation as an adept professional in the realms of business management and strategic leadership.',
    type: 'management',
    imgUrl: '/assets/images/team/segun_dada.png',
    linkedinUrl: 'https://www.linkedin.com/in/olasegun-dada-07b81a6b/',
  },
  {
    id: 3,
    name: 'Jeffrey Oritseje',
    position: 'General Manager',
    bio: 'A seasoned banking and finance administrator with extensive experience in branding, corporate administration, and sales.',
    type: 'management',
    imgUrl: '/assets/images/team/jeffrey_oriteseje.png',
    linkedinUrl: 'https://www.linkedin.com/in/oritseje-jeffrey-a5a866163/',
  },
  {
    id: 4,
    name: 'Kehinde Toyo',
    position: 'General Secretary',
    bio: "Kehinde Toyo is a highly skilled and detail-oriented legal practitioner and Notary Public with extensive experience in corporate and commercial law, immigration law, energy, oil and gas law, real estate, and dispute resolution. In her current role as Company Secretary/Chief Compliance Officer at Dudu-Naj Limited, she excels in legal administration, negotiation, and analytical thinking. Kehinde's leadership as the Head of Chamber at Fairview & Co Solicitors showcased her proficiency in overseeing administrative processes, litigation, and legal representation. She has a proven track record of providing expert legal advice, managing legal roles, and contributing to efficient support services. Kehinde's dedication to promoting competence, ethical conduct, and professionalism underscores her commitment to delivering high-level legal services in any organizational setting.",
    type: 'management',
    imgUrl: '/assets/images/team/kehinde_toyo.png',
    linkedinUrl: 'https://www.linkedin.com/in/kehinde-toyo-755a7b3a/',
  },
  {
    id: 5,
    name: 'Yasser Khaled Mustapha',
    position: 'Civil and Environmental Engineer',
    bio: "A skilled engineer contributing to La Ciudad's success in project supervision.",
    type: 'management',
    imgUrl: '/assets/images/icons/avatar.png',
    linkedinUrl: 'https://www.linkedin.com/in/yasser-mustapha-9aa57b1aa/',
  },
  {
    id: 6,
    name: 'Wale Dada',
    position: 'Control Engineer',
    bio: 'An expert with 15 years of experience in control systems and electrical engineering projects.',
    type: 'management',
    imgUrl: '/assets/images/team/wale_dada.png',
    linkedinUrl: '',
  },
  {
    id: 7,
    name: 'Precious Eke ',
    position: 'Product Manager',
    bio: 'she is an accomplished product manager,her unique background and skillset makes her an asset, she earned a degree  banking and finance from the prestigious rivers state university and a certification in Data Analytics from google',
    type: 'management',
    imgUrl: '/assets/images/team/precious_eke.png',
    linkedinUrl: 'https://www.linkedin.com/in/precious-eke-1a41691a3/',
  },
];
