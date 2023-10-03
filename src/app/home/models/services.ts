export interface Service {
  imgSrc: string;
  title: string;
  description: string;
}

export const SERVICES: Service[] = [
  {
    imgSrc: '/assets/images/home-construction.svg',
    title: 'Quality Construction',
    description:
      'We offer top-quality construction services from design to execution, driven by a productive team.',
  },
  {
    imgSrc: '/assets/images/home-technology.svg',
    title: 'Best in class Technology',
    description:
      'We welcome new and cutting-edge technology, which includes integrating 3D modeling software to speed up planning and design, drones for site inspection and tracking, and building information modeling to foster better teamwork.',
  },
  {
    imgSrc: '/assets/images/home-clients.svg',
    title: 'Dedication to Clients',
    description:
      'As a full-service contractor specializing in general construction, our goal is to exceed client expectations with quality, timely services that meet their specifications.',
  },
];
