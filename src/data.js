import cardCreatives from './assets/card-creatives.png';
import cardWebsite from './assets/card-website.png';
import cardVideo from './assets/card-video.png';
import impactCardiac from './assets/impact/cardiac-health.png';
import impactDentique from './assets/impact/dentique.png';
import impactUnipon from './assets/impact/unipon-hospital.png';
import impactMaxillofacial from './assets/impact/maxillofacial-awareness.png';
import bannerBillboard from './assets/banners/dentique-billboard.png';
import bannerNewspaperBench from './assets/banners/dentique-newspaper-bench.png';
import bannerNewspaperDesk from './assets/banners/dentique-newspaper-desk.png';
import dm01 from './assets/digital-marketing/mockup-01.png';
import dm02 from './assets/digital-marketing/mockup-02.png';
import dm03 from './assets/digital-marketing/mockup-03.png';
import dm04 from './assets/digital-marketing/mockup-04.png';
import dm05 from './assets/digital-marketing/mockup-05.png';
import dm06 from './assets/digital-marketing/mockup-06.png';
import dm07 from './assets/digital-marketing/mockup-07.png';
import dm08 from './assets/digital-marketing/mockup-08.png';
import galleryNimsAutistic from './assets/creative/nims-autistic-pride.png';
import galleryRamakrishnaEmergency from './assets/creative/ramakrishna-emergency.png';
import galleryDrRajarshiBrain from './assets/creative/dr-rajarshi-brain-tumor.png';
import galleryDentiqueGreenTea from './assets/creative/dentique-green-tea.png';
import galleryRamakrishnaMove from './assets/creative/ramakrishna-move-without-limits.png';
import galleryRajlaxmiKitchen from './assets/creative/rajlaxmi-kitchen.png';
import galleryNimsLiver from './assets/creative/nims-liver-care.png';
import galleryNimsMaternal from './assets/creative/nims-maternal-health.png';
import galleryDrRashidBlood from './assets/creative/dr-rashid-blood-donor.png';
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

export const navItems = [
  { label: 'Home', to: '/' },
  { label: 'About Us', to: '/about' },
  { label: 'Services', to: '/services' },
  { label: 'Works', to: '/works' },
  { label: 'Team', to: '/team' },
  { label: 'Career', to: '/career' },
  { label: 'Blog', to: '/blog' },
  { label: 'Contact Us', to: '/contact' },
];

export const openings = [
  {
    role: 'Senior Brand Designer',
    type: 'Full-time',
    location: 'Kharagpur / Remote',
    desc: 'Lead visual identity projects from concept to delivery for top clients.',
  },
  {
    role: 'Frontend Developer',
    type: 'Full-time',
    location: 'Remote',
    desc: 'Build fast, beautiful, accessible web experiences with React.',
  },
  {
    role: 'Video Editor',
    type: 'Full-time',
    location: 'Kharagpur',
    desc: 'Craft scroll-stopping short-form video content for social platforms.',
  },
  {
    role: 'Social Media Intern',
    type: 'Internship',
    location: 'Remote',
    desc: 'Help plan, create, and schedule content across brand channels.',
  },
];

export const features = [
  { image: cardCreatives, title: 'Creatives' },
  { image: cardWebsite, title: 'Web Design' },
  { image: cardVideo, title: 'Video' },
  { image: dm01, title: 'Digital Marketing' },
  { image: dm03, title: 'Branding' },
];

export const services = [
  {
    id: 'creatives',
    image: cardCreatives,
    title: 'Creatives',
    tagline: 'Campaigns that stop the scroll',
    description:
      'Bold social creatives, ad visuals, and campaign assets built for healthcare, lifestyle, and brand storytelling across every platform.',
    highlights: ['Social creatives', 'Ad campaigns', 'Print & outdoor', 'Brand storytelling'],
    link: '/works/creative',
  },
  {
    id: 'web-design',
    image: cardWebsite,
    title: 'Web Design',
    tagline: 'Sites that convert and impress',
    description:
      'High-impact websites with cinematic visuals, clear UX, and performance-first builds that turn visitors into believers.',
    highlights: ['Landing pages', 'Portfolio sites', 'UI/UX design', 'Responsive builds'],
    link: '/works/website',
  },
  {
    id: 'video',
    image: cardVideo,
    title: 'Video',
    tagline: 'Motion that moves people',
    description:
      'Reels, edits, and motion pieces crafted to capture attention fast and keep your brand in motion across digital channels.',
    highlights: ['Reels & shorts', 'Promo edits', 'Motion graphics', 'Social video'],
    link: '/works/motion',
  },
  {
    id: 'digital-marketing',
    image: dm01,
    title: 'Digital Marketing',
    tagline: 'Growth with strategy behind it',
    description:
      'SEO, paid media, and social strategy designed to reach the right audience, drive engagement, and deliver measurable results.',
    highlights: ['SEO & SEM', 'Paid campaigns', 'Social strategy', 'Analytics'],
    link: '/works/digital-marketing',
  },
  {
    id: 'branding',
    image: dm03,
    title: 'Branding',
    tagline: 'Identities people remember',
    description:
      'Logos, visual systems, and brand guidelines that give your business a cohesive, premium presence across every touchpoint.',
    highlights: ['Logo design', 'Brand identity', 'Guidelines', 'Visual systems'],
    link: '/works/creative',
  },
];

export const workCategories = [
  { id: 'creative', label: 'Creative', description: 'Brand campaigns, social creatives, and visual storytelling.' },
  { id: 'motion', label: 'Motion', description: 'Video edits, reels, and motion graphics that move audiences.' },
  { id: 'website', label: 'Website', description: 'High-impact websites built for clarity, speed, and conversion.' },
  { id: 'system-design', label: 'System Design', description: 'Design systems, UI kits, and scalable product foundations.' },
  { id: 'application', label: 'Application', description: 'Mobile and web apps with polished, intuitive interfaces.' },
  { id: 'digital-marketing', label: 'Digital Marketing', description: 'SEO, paid ads, social strategy, and growth campaigns that convert.' },
];

export const creativeGalleryItems = [
  {
    image: galleryNimsAutistic,
    title: 'NIMS — Autistic Pride Day',
    blurb: 'Diversity is our strength — autism awareness creative.',
  },
  {
    image: galleryRamakrishnaEmergency,
    title: 'Ramakrishna — Every Second Counts',
    blurb: 'Emergency ambulance care campaign creative.',
  },
  {
    image: galleryDrRajarshiBrain,
    title: 'Dr. Rajarshi — Brain Tumor Day',
    blurb: 'World Brain Tumor Day awareness social creative.',
  },
  {
    image: galleryDentiqueGreenTea,
    title: 'The Dentique — Green Tea',
    blurb: 'Sip to save gums — oral health fun fact creative.',
  },
  {
    image: galleryRamakrishnaMove,
    title: 'Ramakrishna — Move Without Limits',
    blurb: 'Comprehensive orthopedic care campaign.',
  },
  {
    image: galleryRajlaxmiKitchen,
    title: 'Rajlaxmi Kitchen Art',
    blurb: 'Goodbye scrubbing — dishwasher appliance creative.',
  },
  {
    image: galleryNimsLiver,
    title: 'NIMS — Liver Care',
    blurb: 'Build a strong liver with healthy habits.',
  },
  {
    image: galleryNimsMaternal,
    title: 'NIMS — Maternal Health',
    blurb: 'Mother and child nutrition awareness creative.',
  },
  {
    image: galleryDrRashidBlood,
    title: 'Dr. Rashid — Blood Donor Day',
    blurb: 'Blood donor day cardiac awareness campaign.',
  },
];

export const worksByCategory = {
  creative: [
    {
      image: impactCardiac,
      stackImage: bannerBillboard,
      title: 'Cardiac Health Campaign',
      blurb: 'Choose water over soda — cardiac awareness creative.',
    },
    {
      image: impactDentique,
      stackImage: bannerNewspaperDesk,
      title: 'The Dentique',
      blurb: 'Invisalign awareness campaign for Linnea Dental.',
    },
    {
      image: impactUnipon,
      stackImage: bannerNewspaperBench,
      title: 'UNIPON Hospital',
      blurb: 'Orthopedic joint pain campaign creative.',
    },
    {
      image: impactMaxillofacial,
      title: 'Dr. Rajarshi Bandyopadhyay',
      blurb: 'Maxillofacial tumor awareness social creative.',
    },
    {
      image: bannerBillboard,
      title: 'The Dentique — Billboard',
      blurb: 'Outdoor billboard campaign for comprehensive dental care.',
    },
    {
      image: bannerNewspaperDesk,
      title: 'The Dentique — Print',
      blurb: 'Times of India newspaper ad mockup.',
    },
    {
      image: bannerNewspaperBench,
      title: 'The Dentique — Painless',
      blurb: 'Anandabazar Patrika print campaign creative.',
    },
    {
      image: cardCreatives,
      title: 'MuscleBlaze',
      blurb: 'Bold social creatives that fuel the fitness brand.',
    },
    {
      image: 'https://picsum.photos/id/225/600/750',
      title: 'Wildgrain Bakery',
      blurb: 'Artisan food branding with warm lifestyle photography.',
    },
    {
      image: 'https://picsum.photos/id/338/600/750',
      title: 'Neon District',
      blurb: 'Nightlife campaign with bold typographic posters.',
    },
    {
      image: 'https://picsum.photos/id/429/600/750',
      title: 'Luxe Skincare',
      blurb: 'Premium beauty launch creatives for Instagram and print.',
    },
    {
      image: 'https://picsum.photos/id/488/600/750',
      title: 'Summit Outdoors',
      blurb: 'Adventure brand visuals for seasonal collection drop.',
    },
    {
      image: 'https://picsum.photos/id/564/600/750',
      title: 'Studio Forma',
      blurb: 'Architecture studio brochure and digital ad series.',
    },
  ],
  motion: [
    {
      image: cardVideo,
      title: 'Healthcare Reels',
      blurb: 'Scroll-stopping short-form video content.',
    },
    {
      image: 'https://picsum.photos/id/337/600/750',
      title: 'Product Launch Teaser',
      blurb: 'Cinematic motion piece for a tech product reveal.',
    },
    {
      image: 'https://picsum.photos/id/452/600/750',
      title: 'Brand Story Film',
      blurb: '60-second narrative film for a lifestyle brand.',
    },
    {
      image: 'https://picsum.photos/id/305/600/750',
      title: 'Fashion Lookbook',
      blurb: 'Dynamic edits for a seasonal fashion campaign.',
    },
    {
      image: 'https://picsum.photos/id/318/600/750',
      title: 'Restaurant Reels',
      blurb: 'Food cinematography for social media growth.',
    },
    {
      image: 'https://picsum.photos/id/349/600/750',
      title: 'Tech Explainer',
      blurb: 'Animated product walkthrough for SaaS onboarding.',
    },
    {
      image: 'https://picsum.photos/id/367/600/750',
      title: 'Event Highlights',
      blurb: 'Fast-cut recap film for a live music festival.',
    },
    {
      image: 'https://picsum.photos/id/381/600/750',
      title: 'Auto Showcase',
      blurb: 'Luxury vehicle reveal with dramatic motion graphics.',
    },
    {
      image: 'https://picsum.photos/id/395/600/750',
      title: 'Wellness Series',
      blurb: 'Calming motion content for a meditation app.',
    },
  ],
  website: [
    {
      image: cardWebsite,
      title: 'Narayan Memorial Hospital',
      blurb: 'A modern, patient-first website experience.',
    },
    {
      image: 'https://picsum.photos/id/180/600/750',
      title: 'Studio Atlas',
      blurb: 'Minimal portfolio site for a design collective.',
    },
    {
      image: 'https://picsum.photos/id/201/600/750',
      title: 'Greenfield Estates',
      blurb: 'Real-estate showcase with immersive property tours.',
    },
    {
      image: 'https://picsum.photos/id/160/600/750',
      title: 'Craft Coffee Co.',
      blurb: 'E-commerce site with rich product storytelling.',
    },
    {
      image: 'https://picsum.photos/id/249/600/750',
      title: 'Legal Partners',
      blurb: 'Professional services site with trust-first UX.',
    },
    {
      image: 'https://picsum.photos/id/266/600/750',
      title: 'Travel Horizon',
      blurb: 'Booking platform with cinematic destination pages.',
    },
    {
      image: 'https://picsum.photos/id/288/600/750',
      title: 'FitLife Gym',
      blurb: 'Membership site with class scheduling integration.',
    },
    {
      image: 'https://picsum.photos/id/312/600/750',
      title: 'Artisan Market',
      blurb: 'Multi-vendor marketplace with clean checkout flow.',
    },
    {
      image: 'https://picsum.photos/id/326/600/750',
      title: 'Nova Tech',
      blurb: 'SaaS landing pages built for conversion.',
    },
  ],
  'system-design': [
    {
      image: 'https://picsum.photos/id/326/600/750',
      title: 'Nova UI Kit',
      blurb: 'Component library with tokens, patterns, and docs.',
    },
    {
      image: 'https://picsum.photos/id/367/600/750',
      title: 'Pulse Design System',
      blurb: 'Cross-platform system for a fintech product suite.',
    },
    {
      image: 'https://picsum.photos/id/380/600/750',
      title: 'Orbit Patterns',
      blurb: 'Reusable layouts and interaction guidelines.',
    },
    {
      image: 'https://picsum.photos/id/342/600/750',
      title: 'Form Library',
      blurb: 'Accessible input components and validation states.',
    },
    {
      image: 'https://picsum.photos/id/358/600/750',
      title: 'Dashboard Kit',
      blurb: 'Data visualization patterns for analytics products.',
    },
    {
      image: 'https://picsum.photos/id/371/600/750',
      title: 'Mobile Tokens',
      blurb: 'Cross-platform spacing, color, and type scales.',
    },
    {
      image: 'https://picsum.photos/id/384/600/750',
      title: 'Icon System',
      blurb: 'Consistent iconography across web and mobile.',
    },
    {
      image: 'https://picsum.photos/id/397/600/750',
      title: 'Navigation Patterns',
      blurb: 'Mega-menu, sidebar, and tab bar components.',
    },
    {
      image: 'https://picsum.photos/id/410/600/750',
      title: 'Chart Components',
      blurb: 'Reusable graph and metric card modules.',
    },
  ],
  application: [
    {
      image: 'https://picsum.photos/id/399/600/750',
      title: 'FitTrack Mobile',
      blurb: 'Fitness app with habit tracking and live coaching.',
    },
    {
      image: 'https://picsum.photos/id/403/600/750',
      title: 'ChefDash',
      blurb: 'Food delivery app with real-time order tracking.',
    },
    {
      image: 'https://picsum.photos/id/411/600/750',
      title: 'LearnLoop',
      blurb: 'Ed-tech platform with gamified lesson flows.',
    },
    {
      image: 'https://picsum.photos/id/415/600/750',
      title: 'PaySwift',
      blurb: 'Fintech wallet with seamless P2P transfers.',
    },
    {
      image: 'https://picsum.photos/id/420/600/750',
      title: 'Mindful',
      blurb: 'Meditation app with daily guided sessions.',
    },
    {
      image: 'https://picsum.photos/id/425/600/750',
      title: 'RideShare',
      blurb: 'On-demand transport with live driver tracking.',
    },
    {
      image: 'https://picsum.photos/id/430/600/750',
      title: 'HomeHub',
      blurb: 'Smart home control panel for IoT devices.',
    },
    {
      image: 'https://picsum.photos/id/435/600/750',
      title: 'TaskFlow',
      blurb: 'Team productivity app with kanban boards.',
    },
    {
      image: 'https://picsum.photos/id/440/600/750',
      title: 'ShopLocal',
      blurb: 'Neighborhood marketplace mobile experience.',
    },
  ],
  'digital-marketing': [
    {
      image: dm01,
      title: 'Anti-Tobacco Awareness',
      blurb: 'Linnea Health — social campaign for World Anti-Tobacco Day.',
      tag: 'Healthcare',
    },
    {
      image: dm02,
      title: 'Brand Growth Campaign',
      blurb: 'Linnea Media — make your brand impossible to ignore.',
      tag: 'Branding',
    },
    {
      image: dm03,
      title: 'Kitchen Solutions',
      blurb: 'Rajlaxmi — appliance marketing with lifestyle visuals.',
      tag: 'Retail',
    },
    {
      image: dm04,
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
    {
      image: dm06,
      title: 'Medical Education',
      blurb: 'NIMS Hospital heart care + oncology awareness content.',
      tag: 'Healthcare',
    },
    {
      image: dm07,
      title: 'Dental & Hospital Ads',
      blurb: 'The Dentique Invisalign + Unipon emergency campaigns.',
      tag: 'Healthcare',
    },
    {
      image: dm08,
      title: 'Travel & Cardiac Health',
      blurb: 'Adamas Holidays + cardiac wellness social creatives.',
      tag: 'Lifestyle',
    },
  ],
};

export const workItems = [
  {
    image: cardCreatives,
    category: 'Creatives',
    title: 'Sweat Nutrition',
    blurb: 'Bold social creatives that fuel the brand.',
  },
  {
    image: cardWebsite,
    category: 'Web Design',
    title: 'Narayan Memorial Hospital',
    blurb: 'A modern, patient-first website experience.',
  },
  {
    image: cardVideo,
    category: 'Video',
    title: 'Healthcare Reels',
    blurb: 'Scroll-stopping short-form video content.',
  },
];

export const trailImages = [
  'https://picsum.photos/id/287/300/300',
  'https://picsum.photos/id/1001/300/300',
  'https://picsum.photos/id/1025/300/300',
  'https://picsum.photos/id/1026/300/300',
  'https://picsum.photos/id/1027/300/300',
  'https://picsum.photos/id/1028/300/300',
  'https://picsum.photos/id/1029/300/300',
  'https://picsum.photos/id/1030/300/300',
  'https://picsum.photos/id/1031/300/300',
  'https://picsum.photos/id/1032/300/300',
  'https://picsum.photos/id/1033/300/300',
  'https://picsum.photos/id/1035/300/300',
];

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
