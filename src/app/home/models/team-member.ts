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
    bio: 'An experienced professional in construction and electrical engineering, finance, project management, and international relations.',
    type: 'management',
    imgUrl: '/assets/images/team/john_dada.png',
    linkedinUrl: 'https://www.linkedin.com/in/john-dada-0169a912a/',
  },
  {
    id: 2,
    name: 'Segun Joshua Dada',
    position: 'Chief Operating Officer',
    bio: 'A computer scientist and industrial maintenance engineer with expertise in business development, finance, branding, and procurement.',
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
    bio: 'A legal practitioner and notary public with over fifteen years of experience in corporate and commercial law.',
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
