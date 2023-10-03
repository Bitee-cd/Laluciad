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
    bio: 'With a demonstrated track record in construction and electrical engineering and also a seasoned accountant and finance administrator. He has over a decade experience in international relations and affairs, negotiation, politics, project management, facility management, business development, real estate, customer service and entrepreneurship.',
    type: 'management',
    imgUrl: '/assets/images/icons/avatar.png',
    linkedinUrl: 'https://www.linkedin.com/in/john-dada-0169a912a/',
  },
  {
    id: 2,
    name: 'Segun Joshua Dada',
    position: 'Chief Operating Officer',
    bio: 'He is a computer scientist and industrial maintenance engineer, he has over 10 years of experience in business development and restructuring, finance and foreign exchange business, manufacturing and trade, branding and procurement, real estate and logistics business.',
    type: 'management',
    imgUrl: '/assets/images/icons/avatar.png',
    linkedinUrl: 'https://www.linkedin.com/in/olasegun-dada-07b81a6b/',
  },
  {
    id: 3,
    name: 'Jeffrey Oritseje',
    position: 'General Manager',
    bio: 'He is a senior banking and finance administrator and a corporate administration and registry management officer. He has garnered a decade wealth of experience in branding and procurement, corporate admiration and business operation and sales and marketing.',
    type: 'management',
    imgUrl: '/assets/images/icons/avatar.png',
    linkedinUrl: 'https://www.linkedin.com/in/oritseje-jeffrey-a5a866163/',
  },
  {
    id: 4,
    name: 'Kehinde Toyo',
    position: 'General Secretary',
    bio: 'She is a legal practitioner and notary public with over fifteen years’ experience in corporate and commercial law, family and property law, media and entertainment law, oil and gas law, and corporate governance / compliance matters.',
    type: 'management',
    imgUrl: '/assets/images/icons/avatar.png',
    linkedinUrl: 'https://www.linkedin.com/in/kehinde-toyo-755a7b3a/',
  },
  {
    id: 5,
    name: 'Yasser Khaled Mustapha',
    position: 'Civil and Environmental Engineer',
    bio: 'He holds a degree in Civil and Environmental Engineering from City University of Tripoli, and has further honed his skills through a specialized  degree in heating and plumbing double system from Technical Institution Tripoli. He joined La Ciudad Construction in 2020 as project supervisor.',
    type: 'management',
    imgUrl: '/assets/images/icons/avatar.png',
    linkedinUrl: 'https://www.linkedin.com/in/yasser-mustapha-9aa57b1aa/',
  },
  {
    id: 6,
    name: 'Wale Dada',
    position: 'Control Engineer',
    bio: 'He is a highly experienced control engineer with experience spanning up to 15 years specializing in designing and implementing efficient control system to optimize performance , he has worked on numerous project from industrial control system to various forms of electrical engineering projects in the construction industry.',
    type: 'management',
    imgUrl: '/assets/images/icons/avatar.png',
    linkedinUrl: '',
  },
];
