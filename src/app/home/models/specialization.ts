export interface Specialization {
  id: number;
  label: string;
  imageUrl: string;
  description: string;
}

export const SPECIALISATIONS: Specialization[] = [
  {
    id: 1,
    label: 'Education',
    imageUrl: '/assets/images/specialization/specialization-education.jpg',
    description: 'We specialize in creating academic facilities that are both innovative and sustainable, from primary schools to universities. Our approach balances economic responsibility and environmental sustainability.'
  },
  {
    id: 2,
    label: 'Transportation',
    imageUrl: '/assets/images/specialization/specialization-transportation.jpg',
    description: 'We plan, design, and manage transportation systems worldwide. We help public and private clients commute safely and reliably, whether by railways, highways, or bridges. We also revamp aging infrastructure to build modern projects'
  },
  {
    id: 3,
    label: 'Healthcare',
    imageUrl: '/assets/images/specialization/specialization-health-care.jpg',
    description: 'We specialize in constructing innovative and sustainable healthcare facilities worldwide, meeting rigorous health standards. From outpatient clinics to family walk-in facilities, we cover all areas of patient care. '
  },
  {
    id: 4,
    label: 'Oil and Gas',
    imageUrl: '/assets/images/specialization/specialization-oil-and-gas.jpg',
    description: 'We provide EPC services for the oil and gas industry, from construction to financing. We prioritize safety and quality to ensure optimal results. Our qualifications meet industry standards for downstream, midstream, and upstream sectors.'
  },{
    id: 5,
    label: 'Leisure',
    imageUrl: '/assets/images/specialization/specialization-leisure.jpg',
    description: 'We create unforgettable destinations by combining architecture, landscape, entertainment and history. Our diverse team and technical resources offer a myriad of solutions for a wide range of experiences'
  },{
    id: 6,
    label: 'Building',
    imageUrl: '/assets/images/specialization/specialization-building.jpg',
    description: 'We create innovative homes and retail spaces by working with demanding owners and developers. Whether it\'s reducing carbon footprints or enhancing employee interactions, we redefine spaces to meet our clients\' needs.'
  },
];
