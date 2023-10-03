export interface Service {
  imgSrc: string;
  title: string;
  description: string;
}

export const SERVICES: Service[] = [
  {
    imgSrc: '/assets/images/home-construction.svg',
    title: 'Experience Matters',
    description:
      'With a legacy built over years, we stand as a beacon of quality in the construction industry.',
  },
  {
    imgSrc: '/assets/images/home-technology.svg',
    title: 'Full-Service Excellence',
    description:
      'From architectural design to project management, we offer end-to-end solutions for diverse construction needs',
  },
  {
    imgSrc: '/assets/images/home-clients.svg',
    title: 'Global Standards',
    description:
      'Our commitment to excellence extends to incorporating the latest technology, including 3D modelling, drones, and building information modelling.',
  },
];
