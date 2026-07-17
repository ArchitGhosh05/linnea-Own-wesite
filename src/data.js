import cardCreatives from './assets/card-creatives.png';
import cardWebsite from './assets/card-website.png';
import cardVideo from './assets/card-video.png';
import dm01 from './assets/digital-marketing/mockup-01.png';
import dm02 from './assets/digital-marketing/mockup-02.png';
import dm03 from './assets/digital-marketing/mockup-03.png';
import dm04 from './assets/digital-marketing/mockup-04.png';
import dm05 from './assets/digital-marketing/mockup-05.png';
import dm06 from './assets/digital-marketing/mockup-06.png';
import dm07 from './assets/digital-marketing/mockup-07.png';
import dm08 from './assets/digital-marketing/mockup-08.png';
import hrishikeshPhotoOne from './assets/team/hrishikesh-1.png';
import hrishikeshPhotoTwo from './assets/team/hrishikesh-2.png';
import avishekPhotoOne from './assets/team/avishek-1.png';
import avishekPhotoTwo from './assets/team/avishek-2.png';
import sagarPhotoOne from './assets/team/sagar-1.png';
import sagarPhotoTwo from './assets/team/sagar-2.png';
import sreePhotoOne from './assets/team/sree-1.png';
import sreePhotoTwo from './assets/team/sree-2.png';
import krishnenduPhotoOne from './assets/team/krishnendu-1.png';
import krishnenduPhotoTwo from './assets/team/krishnendu-2.png';
import parvejPhotoOne from './assets/team/parvej-1.png';
import parvejPhotoTwo from './assets/team/parvej-2.png';
import arindamPhotoOne from './assets/team/arindam-1.png';
import arindamPhotoTwo from './assets/team/arindam-2.png';
import souhardyaPhotoOne from './assets/team/souhardya-1.png';
import souhardyaPhotoTwo from './assets/team/souhardya-2.png';
import architPhotoOne from './assets/team/archit-1.png';
import architPhotoTwo from './assets/team/archit-2.png';
import alokPhotoOne from './assets/team/alok-1.png';
import alokPhotoTwo from './assets/team/alok-2.png';
import animeshPhotoOne from './assets/team/animesh-1.png';
import animeshPhotoTwo from './assets/team/animesh-2.png';
import anirbanPhotoOne from './assets/team/anirban-1.png';
import anirbanPhotoTwo from './assets/team/anirban-2.png';
import taniyaPhotoOne from './assets/team/taniya-1.png';
import taniyaPhotoTwo from './assets/team/taniya-2.png';
import triparmaPhotoOne from './assets/team/triparma-1.png';
import triparmaPhotoTwo from './assets/team/triparma-2.png';
import snehaPhotoOne from './assets/team/sneha-1.png';
import snehaPhotoTwo from './assets/team/sneha-2.png';

export const studioAddress =
  'Linnea Media, 5th Floor, Room No: A10, Chatterjee International Center, Jawaharlal Nehru Rd, Kankaria Estates, Park Street area, Kolkata, West Bengal 700071';

export const services = [
  {
    id: 'creatives',
    image: cardCreatives,
    title: 'Creatives',
    tagline: 'Campaigns that stop the scroll',
    description:
      'Bold social creatives, ad visuals, and campaign assets built for healthcare, lifestyle, and brand storytelling across every platform.',
    highlights: ['Social creatives', 'Ad campaigns', 'Print & outdoor', 'Brand storytelling'],
    link: '/works',
  },
  {
    id: 'web-design',
    image: cardWebsite,
    title: 'Web Design',
    tagline: 'Sites that convert and impress',
    description:
      'High-impact websites with cinematic visuals, clear UX, and performance-first builds that turn visitors into believers.',
    highlights: ['Landing pages', 'Portfolio sites', 'UI/UX design', 'Responsive builds'],
    link: '/works#website',
  },
  {
    id: 'video',
    image: cardVideo,
    title: 'Video',
    tagline: 'Motion that moves people',
    description:
      'Reels, edits, and motion pieces crafted to capture attention fast and keep your brand in motion across digital channels.',
    highlights: ['Reels & shorts', 'Promo edits', 'Motion graphics', 'Social video'],
    link: '/works#motion',
  },
  {
    id: 'digital-marketing',
    image: dm01,
    title: 'Digital Marketing',
    tagline: 'Growth with strategy behind it',
    description:
      'SEO, paid media, and social strategy designed to reach the right audience, drive engagement, and deliver measurable results.',
    highlights: ['SEO & SEM', 'Paid campaigns', 'Social strategy', 'Analytics'],
    link: '/works#digital-marketing',
  },
  {
    id: 'branding',
    image: dm03,
    title: 'Branding',
    tagline: 'Identities people remember',
    description:
      'Logos, visual systems, and brand guidelines that give your business a cohesive, premium presence across every touchpoint.',
    highlights: ['Logo design', 'Brand identity', 'Guidelines', 'Visual systems'],
    link: '/works',
  },
];

export const worksByCategory = {
  'digital-marketing': [
    {
      image: dm08,
      title: 'Anti-Tobacco Awareness',
      blurb: 'Linnea Health — social campaign for World Anti-Tobacco Day.',
      tag: 'Healthcare',
    },
    {
      image: dm07,
      title: 'Brand Growth Campaign',
      blurb: 'Linnea Media — make your brand impossible to ignore.',
      tag: 'Branding',
    },
    {
      image: dm01,
      title: 'Fitness Campaign',
      blurb: 'Fitness campaign for a fitness brand',
      tag: 'fitness',
    },
    {
      image: dm04,
      title: 'Medical Education',
      blurb: 'NIMS Hospital heart care + oncology awareness content.',
      tag: 'Healthcare',
    },
    {
      image: dm03,
      title: 'Dental & Hospital Ads',
      blurb: 'The Dentique Invisalign + Unipon emergency campaigns.',
      tag: 'Healthcare',
    },
    {
      image: dm02,
      title: 'Travel & Cardiac Health',
      blurb: 'Adamas Holidays + cardiac wellness social creatives.',
      tag: 'Lifestyle',
    },
    {
      image: dm06,
      title: 'Elevate Every Flame',
      blurb: 'Induction cooktop campaign across social channels.',
      tag: 'Product',
    },
    {
      image: dm05,
      title: 'Kitchen & Wellness',
      blurb: 'Range hood creative + blood donor awareness post.',
      tag: 'Healthcare',
    },
  ],
};

export const team = [
  {
    name: 'Hrishikesh Sarkar',
    role: 'Sr. Graphic Designer',
    initials: 'HS',
    image: hrishikeshPhotoOne,
    hoverImage: hrishikeshPhotoTwo,
  },
  {
    name: 'Avishek Gupta',
    role: 'Head Graphic Designer',
    initials: 'AG',
    image: avishekPhotoOne,
    hoverImage: avishekPhotoTwo,
  },
  {
    name: 'Sagar Das',
    role: 'Executive Graphic Designer',
    initials: 'SD',
    image: sagarPhotoOne,
    hoverImage: sagarPhotoTwo,
  },
  {
    name: 'Sree Ghosh',
    role: 'Sr. Graphic Designer',
    initials: 'SG',
    image: sreePhotoOne,
    hoverImage: sreePhotoTwo,
  },
  {
    name: 'Krishnendu Bala',
    role: 'Head Video & Motion Designer',
    initials: 'KB',
    image: krishnenduPhotoTwo,
    hoverImage: krishnenduPhotoOne,
  },
  {
    name: 'Parvej Khan',
    role: 'Executive Video & Motion Designer',
    initials: 'PK',
    image: parvejPhotoOne,
    hoverImage: parvejPhotoTwo,
  },
  {
    name: 'Arindam Chakrabarty',
    role: 'Performance Marketing Manager',
    initials: 'AC',
    image: arindamPhotoOne,
    hoverImage: arindamPhotoTwo,
  },
  {
    name: 'Souhardya Banerjee',
    role: 'Performance Marketing Associate',
    initials: 'SB',
    image: souhardyaPhotoOne,
    hoverImage: souhardyaPhotoTwo,
  },
  {
    name: 'Archit Ghosh',
    role: 'Full Stack Website Developer',
    initials: 'AG',
    image: architPhotoOne,
    hoverImage: architPhotoTwo,
  },
  {
    name: 'Alok Raj',
    role: 'Associate System Engineer',
    initials: 'AR',
    image: alokPhotoOne,
    hoverImage: alokPhotoTwo,
  },
  {
    name: 'Animesh Hazra',
    role: 'Application Development & IT',
    initials: 'AH',
    image: animeshPhotoOne,
    hoverImage: animeshPhotoTwo,
  },
  {
    name: 'Anirban Marick',
    role: 'Head Of Business Development',
    initials: 'AM',
    image: anirbanPhotoOne,
    hoverImage: anirbanPhotoTwo,
  },
  {
    name: 'Taniya Mukherjee',
    role: 'Business Development Manager',
    initials: 'TM',
    image: taniyaPhotoOne,
    hoverImage: taniyaPhotoTwo,
  },
  {
    name: 'Triparna Guha',
    role: 'Sr. Executive- Corporate Communication & Client',
    initials: 'TG',
    image: triparmaPhotoOne,
    hoverImage: triparmaPhotoTwo,
  },
  {
    name: 'Sneha Paul',
    role: 'Senior HR Executive & Admin',
    initials: 'SP',
    image: snehaPhotoOne,
    hoverImage: snehaPhotoTwo,
  },
];
