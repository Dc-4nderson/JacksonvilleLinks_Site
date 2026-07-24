// Central site content. A non-technical admin editing copy should only ever
// need to touch this file (and the individual page .astro files for prose).
import type { ImageMetadata } from 'astro';
import healthHumanServicesImage from '../assets/images/facets/health-and-human-services/schell-sweet-banner.jpg';
import healthHumanServicesRibbonCutting from '../assets/images/facets/health-and-human-services/ribbon-cutting.jpg';
import internationalTrendsImage from '../assets/images/facets/international-trends-services/gems-cuisine-tasting.jpg';
import internationalTrendsHaiti from '../assets/images/facets/international-trends-services/gems-speaker-haiti.jpg';
import internationalTrendsNigeria from '../assets/images/facets/international-trends-services/gems-speaker-nigeria.jpg';
import internationalTrendsBahamas from '../assets/images/facets/international-trends-services/gems-speaker-bahamas.jpg';
import internationalTrendsCarePackages from '../assets/images/facets/international-trends-services/haiti-care-packages.jpg';

export const SITE = {
  name: 'The Jacksonville (FL) Chapter of The Links, Incorporated',
  shortName: 'Jacksonville Links',
  tagline: 'Building. Better. Together.',
  founded: 1966,
  foundedLabel: 'Chartered November 12, 1966',
  motto: 'In Friendship and Service',
  email: 'president@jacksonvillelinksinc.org',
  address: 'P.O. Box 43482, Jacksonville, FL 32203',
  url: 'https://jacksonvillelinksinc.org',
  president: 'Marti Forchion Chapman',
};

// Full text of the president's welcome letter — the single source of truth
// used everywhere the message appears (homepage and the dedicated page).
// Edit here only; do not paraphrase or truncate on individual pages.
export const PRESIDENT_LETTER = {
  salutation: 'Dear Visitors,',
  paragraphs: [
    'Welcome to the official website of the Jacksonville (FL) Chapter of The Links, Incorporated. I am delighted to extend my warmest greetings and heartfelt appreciation for your interest in our chapter and the impactful work we do.',
    'It is truly an honor and a privilege to serve as President of this dynamic and dedicated group of professional women. Since our official installation in 1966, the Jacksonville (FL) Chapter has upheld a proud legacy of service and sisterhood. Guided by the core values of friendship and service, we continue to develop programs and partnerships that uplift, inspire, and transform the communities we serve.',
    'As a part of The Links, Incorporated—one of the nation’s oldest and largest volunteer service organizations, comprising over 17,000 accomplished women in 299 chapters across 41 states, the District of Columbia, the Commonwealth of the Bahamas, and the United Kingdom—we are proud to implement impactful initiatives in five key facets: Services to Youth, The Arts, National Trends and Services, International Trends and Services, and Health and Human Services.',
    'In alignment with our national mission, the Jacksonville (FL) Chapter is committed to delivering transformative programming that promotes educational excellence, cultural awareness, health equity, civic engagement, and global understanding. Whether we are mentoring future leaders, supporting local artists, addressing community health disparities, or fostering international goodwill, we do so with integrity, purpose, and an unwavering commitment to excellence.',
    'I invite you to explore our website to learn more about our work, our impact, and our vision for the future. We welcome opportunities for community collaboration and encourage you to join us as we continue to make a meaningful difference—together.',
    'Thank you again for visiting. Your support and engagement are vital to our continued success.',
  ],
  closing: 'In Friendship and Service,',
};

export type NavChild = { label: string; href: string };
export type NavItem = { label: string; href: string; children?: NavChild[] };

export const NAV: NavItem[] = [
  { label: 'Home', href: '/' },
  {
    label: 'Our Chapter',
    href: '/our-chapter/',
    children: [
      { label: 'Message From The President', href: '/our-chapter/president/' },
      { label: 'History', href: '/our-chapter/history/' },
      { label: 'Officers', href: '/our-chapter/officers/' },
      { label: 'Chapter Members', href: '/our-chapter/members/' },
      { label: 'Alumna Members', href: '/our-chapter/alumnae/' },
      { label: 'Charter Members', href: '/our-chapter/charter-members/' },
    ],
  },
  {
    label: 'Programs',
    href: '/programs/',
    children: [
      { label: 'Services to Youth', href: '/programs/services-to-youth/' },
      { label: 'The Arts', href: '/programs/the-arts/' },
      { label: 'National Trends', href: '/programs/national-trends/' },
      { label: 'International Trends & Services', href: '/programs/international-trends-services/' },
      { label: 'Health and Human Services', href: '/programs/health-and-human-services/' },
    ],
  },
  { label: 'Fundraisers', href: '/fundraisers/' },
  { label: 'Contact', href: '/contact/' },
  {
    label: 'Members Only',
    href: '/members-only/',
    children: [
      { label: 'Chapter Handbook', href: '/members-only/handbook/' },
      { label: 'Links Calendar', href: '/members-only/calendar/' },
    ],
  },
];

export type Facet = {
  slug: string;
  name: string;
  href: string;
  summary: string;
  quote?: { text: string; attribution: string };
  mission: string;
  highlights: string[];
  paragraphs: string[];
  image?: ImageMetadata;
  imageAlt?: string;
  gallery?: { src: ImageMetadata; alt: string }[];
};

export const FACETS: Facet[] = [
  {
    slug: 'services-to-youth',
    name: 'Services to Youth',
    href: '/programs/services-to-youth/',
    summary: 'Equipping Black youth with the intellectual and achievement-oriented tools to become successful, productive citizens.',
    quote: {
      text: 'The question is not whether we can afford to invest in every child; it is whether we can afford not to.',
      attribution: 'Marian Wright Edelman',
    },
    mission: 'Services to Youth takes an integrated approach to the academic, health, cultural, social awareness, career development, and mentoring needs of the young people in our community.',
    highlights: [
      'Project LEAD: High Expectations',
      'Little Sisters of Links mentoring program',
      'Great Girls + Great Books = Great Readers Program',
      'Ritz Museum tours and Nutcracker Ballet sponsorships',
      'GEMS program workshops on bullying prevention',
      'Jump Rope for Heart Health',
      'Eugene Butler Cotillion workshops',
      'Operation New Hope children’s programming',
      'Jeff Davis Middle School Pearls of Perfection Girls Club',
      'STEAM activities for School of Success Middle Academy',
    ],
    paragraphs: [
      'The Jacksonville Chapter’s Services to Youth facet is built on an integrated approach that addresses the academic, health, cultural, social awareness, career development, and mentoring needs of the young people we serve.',
      'Our chapter has a long history of hands-on programming, from Project LEAD: High Expectations and the Little Sisters of Links mentoring program, to literacy initiatives like Great Girls + Great Books = Great Readers, to cultural enrichment through Ritz Museum tours and Nutcracker Ballet sponsorships.',
      'Recent goals include a partnership with the Links-NSBE Jr. Club, monthly mentoring, STEAM career development, college readiness programming, financial literacy instruction, HBCU promotion, and college scholarship awards.',
    ],
  },
  {
    slug: 'the-arts',
    name: 'The Arts',
    href: '/programs/the-arts/',
    summary: 'Enriching the quality of life of our youth and communities through educational and engaging art experiences.',
    mission: 'Rooted in co-founder Margaret Roselle Hawkins’ artistic legacy and established in 1964, The Arts facet is dedicated to Linking Art Through Transformative Programming.',
    highlights: [
      'Classics Through The Ages',
      'National Poster Art Contest',
      'Taking STEM into STEAM',
      'Artist Noir',
    ],
    paragraphs: [
      'The Arts facet is rooted in co-founder Margaret Roselle Hawkins’ artistic legacy. Established in 1964, the program is dedicated to enriching the quality of life of our youth and communities through educational and engaging art experiences.',
      'Classics Through The Ages increases African-American youth engagement with classical arts, giving talented students the chance to develop their skills and pursue educational and career pathways. The National Poster Art Contest features health-themed artwork promoting healthy, energetic, active lifestyles.',
      'Taking STEM into STEAM integrates art into STEM education, including symphonic partnerships and quilting collaborations, while Artist Noir expands into literary, theater, and visual arts — from watercolors and fashion design to sculpture, drama, spoken word, and dance.',
    ],
  },
  {
    slug: 'national-trends',
    name: 'National Trends',
    href: '/programs/national-trends/',
    summary: 'Designing community programs that increase awareness of issues affecting the quality of life for African Americans.',
    mission: 'National Trends and Services is tasked with eliminating disparities by reducing barriers to resources through advocacy, education, and service.',
    highlights: [
      'Voter Registration Campaign at Edward Waters College',
      'Adopt A Child Project with Operation New Hope',
    ],
    paragraphs: [
      'National Trends and Services designs community programs that increase awareness of issues affecting the quality of life for African Americans, addressing economic and social inequalities in education, income, health, and employment.',
      'The facet envisions eliminating disparities through advocacy, education, and service, empowering chapters to expand sustainable programs, build collaborative partnerships, and extend initiatives into underserved areas.',
      'The Jacksonville Chapter has coordinated voter registration drives at Edward Waters College and the Schell-Sweet Center, and partners with Operation New Hope on the Adopt A Child Project, providing holiday gifts and celebrations for underprivileged children.',
    ],
  },
  {
    slug: 'international-trends-services',
    name: 'International Trends & Services',
    href: '/programs/international-trends-services/',
    summary: 'Expanding the global platform for programs designed to serve the educational, health, and cultural needs of people of African descent worldwide.',
    mission: 'International Trends & Services delivers measurable and sustainable service to reach women and their families around the world.',
    highlights: [
      'Support for 34 orphans in Cazeau, Haiti',
      'GEMS international perspectives workshop',
    ],
    paragraphs: [
      'International Trends & Services works to expand the global platform for programs designed and developed to serve the educational, health, and cultural needs of people of African descent throughout the world.',
      'A recent program year emphasized Haiti, supporting 34 orphans at the Ecole Yahve Schamma de Petit Place in Cazeau. Members prepared individual care packages for each child and provided bulk donations to the orphanage.',
      'The facet also conducted a workshop exposing our GEMS youth group to international perspectives, with speakers from Nigeria, Haiti, and the Bahamas sharing cultural insight alongside a tasting of international cuisine.',
    ],
    image: internationalTrendsImage,
    imageAlt: 'GEMS youth group members sampling international cuisine at an International Trends & Services workshop',
    gallery: [
      { src: internationalTrendsHaiti, alt: 'A guest speaker discussing Haiti with the GEMS youth group in front of international flags' },
      { src: internationalTrendsNigeria, alt: 'A presentation board on Nigeria shared with the GEMS youth group' },
      { src: internationalTrendsBahamas, alt: 'A guest speaker addressing the GEMS youth group' },
      { src: internationalTrendsCarePackages, alt: 'Jacksonville Links members preparing individually labeled care packages for orphans in Cazeau, Haiti' },
    ],
  },
  {
    slug: 'health-and-human-services',
    name: 'Health and Human Services',
    href: '/programs/health-and-human-services/',
    summary: 'Addressing the chronic health disparities that persist in our communities and shorten the life expectancy of African Americans.',
    mission: 'Health and Human Services confronts cardiovascular disease, breast cancer, organ and blood donation awareness, and childhood obesity head-on.',
    highlights: [
      'HeartLinks to Heart Health',
      'Linkages to Life',
      'Walk for Healthy Living',
    ],
    paragraphs: [
      'Health and Human Services was established to address the chronic health disparities that persist in our communities and result in the decreased life expectancy of African Americans — with a focus on cardiovascular disease, breast cancer, organ/tissue/blood donation, and childhood obesity.',
      'HeartLinks to Heart Health engages the community to take an aggressive stance against heart disease. Linkages to Life educates the African-American community about the importance of organ, tissue, and bone marrow donation. Walk for Healthy Living promotes daily exercise and nutrition through events like the Heart Walk and Susan G. Komen Walk.',
      'The Jacksonville Chapter has supported the Schell-Sweet Community Center and Clinic at Edward Waters College, and continues to develop mental health stigma reduction efforts and healthy-choice programming for youth.',
    ],
    image: healthHumanServicesImage,
    imageAlt: 'Jacksonville Links members holding a chapter banner at the Schell-Sweet Community Resource Centre',
    gallery: [
      { src: healthHumanServicesRibbonCutting, alt: 'Jacksonville Links members and community partners at a ribbon-cutting ceremony' },
    ],
  },
];

// `card` officers have a finished graphic (real photo + name/title already
// baked in by the chapter) — rendered as-is, no extra HTML caption needed.
// The president uses a plain portrait photo captioned in HTML as usual.
export const OFFICERS = [
  { name: 'Marti Forchion Chapman', title: 'President', photo: 'portrait' as const },
  { name: 'Lisa Smith', title: 'Vice President', card: 'vice-president' as const },
  { name: 'Reba Barkley', title: 'Recording Secretary', card: 'recording-secretary' as const },
  { name: 'Crystal Charles', title: 'Corresponding Secretary', card: 'corresponding-secretary' as const },
  { name: 'Yvonne McClain Gomes', title: 'Financial Secretary', card: 'financial-secretary' as const },
  { name: 'Deidra Williams-Johnson', title: 'Treasurer', card: 'treasurer' as const },
  { name: 'Juanita Fletcher Cone', title: 'Programming Chair', card: 'programming-chair' as const },
  { name: 'Cynthia Nixon', title: 'Parliamentarian', card: 'parliamentarian' as const },
  { name: 'Kim Brooks Hall', title: 'Chaplain', card: 'chaplain' as const },
];

export const CHAPTER_MEMBERS = [
  'Crystal Agurs', 'Reba Barkley', 'Kimberly Brooks-Hall', 'Bernadette Kelley Brown',
  'Ingrid Burch', 'Stephanie Campbell', 'Crystal Charles', 'Lorraine Polite Clark',
  'Juanita Cone', 'Kenyonn Daniels Demps', 'Zina Evans', 'Marti Forchion Chapman',
  'Melissa Fulmore-Hardwick', 'Miriam Ann Gayle', 'Yvonne McClain Gomes', 'Linda Gooden',
  'Deirdre S. Gregory', 'Keshan Hargrove', 'Angela Harris', 'Kymberli Clark Herring',
  'Bianca Hill', 'Penny James', 'Chandra Jordan', 'Kia Mitchell Kemp',
  'Marretta Latimer', 'Marietta LeBlanc', 'Sherry Shaw Luke', 'Monique McCarthy',
  'Shelita McGowan', 'LaVonne Mitchell', 'Johnetta Moore', 'Cynthia Ball Nixon',
  'Patricia Gillum Sams', 'Debbie Edwards Sapp', 'Michelle Davis Singleton', 'Christine Smith',
  'Karen Estella Smith', 'Lisa G. Smith', 'Marquita Steadman', 'Terri Stepter',
  'Robin Richardson-Stewart', 'Candace Thompson', 'Kelly King Toaston', 'Victoria Warner-White',
  'Heather Blume Watson', 'Kortney N. Wesley', 'Deidra Katrice Williams-Johnson', 'Elizabeth Yates',
];

export const ALUMNA_MEMBERS = [
  { name: 'Gloria Belton' },
  { name: 'Patricia Tate Bivins', platinum: true },
  { name: 'Barbara Brigety' },
  { name: 'Betty Cody' },
  { name: 'Margaret Johnson' },
  { name: 'Susan Jones' },
  { name: 'Thelma Lewis', platinum: true },
  { name: 'Majoria Manning', platinum: true },
  { name: 'Anest McCarthy', platinum: true },
  { name: 'Patricia Mitchell' },
  { name: 'Wanda Montgomery' },
  { name: 'Jennifer Mumford' },
  { name: 'Ernestine Rutledge-Hester', platinum: true },
  { name: 'Pamela Seay' },
  { name: 'Brenda Simmons-Hutchins' },
  { name: 'Geraldine Williams' },
  { name: 'Joyce Valcour' },
  { name: 'Marguerite Warren' },
];

export const CHARTER_MEMBERS = [
  'Mary Lewis Betsch', 'Glorya M. Brooks', 'Miriam Burney', 'Bessie Canty',
  'Elizabeth Downing', 'Althea Gibbs', 'Kate Graves', 'Lois Iszard',
  'Mary Jones', 'Joyce Lawson', 'Elinor Littlejohn', 'Carolyn Miller',
  'Meltonia McGriff', 'Sara Stewart', 'Sadie Tillis',
];

export const FIRST_OFFICERS = [
  { name: 'Elinor Littlejohn', title: 'Chartering President' },
  { name: 'Lois Iszard', title: 'Vice President' },
  { name: 'Bessie Canty', title: 'Recording Secretary' },
  { name: 'Sara Stewart', title: 'Financial Secretary' },
  { name: 'Sadie Tillis', title: 'Treasurer' },
];

export const EXTERNAL_LINKS = [
  { label: 'The Links, Incorporated (National)', href: 'https://linksinc.org/' },
  { label: 'Southern Area', href: 'https://salinksinc.org/' },
];
