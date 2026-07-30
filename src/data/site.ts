// Central site content. A non-technical admin editing copy should only ever
// need to touch this file (and the individual page .astro files for prose).
import type { ImageMetadata } from 'astro';
import healthHumanServicesImage from '../assets/images/facets/health-and-human-services/schell-sweet-banner.jpg';
import healthHumanServicesRibbonCutting from '../assets/images/facets/health-and-human-services/ribbon-cutting.jpg';
import healthHumanServicesFoodDrive from '../assets/images/facets/health-and-human-services/food-drive-packing.png';
import internationalTrendsImage from '../assets/images/facets/international-trends-services/gems-cuisine-tasting.jpg';
import internationalTrendsHaiti from '../assets/images/facets/international-trends-services/gems-speaker-haiti.jpg';
import internationalTrendsNigeria from '../assets/images/facets/international-trends-services/gems-speaker-nigeria.jpg';
import internationalTrendsBahamas from '../assets/images/facets/international-trends-services/gems-speaker-bahamas.jpg';
import internationalTrendsCarePackages from '../assets/images/facets/international-trends-services/haiti-care-packages.jpg';
import itsCommitteeCollage from '../assets/images/facets/international-trends-services/its-committee-collage.webp';
import internationalHeritagePortrait from '../assets/images/facets/international-trends-services/international-heritage-portrait.webp';
import internationalTrendsNewPhoto from '../assets/images/facets/international-trends-services/its-new-photo.png';
import nationalTrendsImage from '../assets/images/facets/national-trends/roar-registration-table.png';
import servicesToYouthImage from '../assets/images/facets/services-to-youth/student-group-visit.png';
import theArtsImage from '../assets/images/facets/the-arts/the-arts-photo.png';
import chapterMeeting from '../assets/images/hero/chapter-meeting.jpg';

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
    'As a part of The Links, Incorporated (one of the nation’s oldest and largest volunteer service organizations, comprising over 17,000 accomplished women in 299 chapters across 41 states, the District of Columbia, the Commonwealth of the Bahamas, and the United Kingdom), we are proud to implement impactful initiatives in five key facets: Services to Youth, The Arts, National Trends and Services, International Trends and Services, and Health and Human Services.',
    'In alignment with our national mission, the Jacksonville (FL) Chapter is committed to delivering transformative programming that promotes educational excellence, cultural awareness, health equity, civic engagement, and global understanding. Whether we are mentoring future leaders, supporting local artists, addressing community health disparities, or fostering international goodwill, we do so with integrity, purpose, and an unwavering commitment to excellence.',
    'I invite you to explore our website to learn more about our work, our impact, and our vision for the future. We welcome opportunities for community collaboration and encourage you to join us as we continue to make a meaningful difference, together.',
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
  largeGallery?: boolean;
  resources?: Resource[];
};

// A resource is an external program/organization referenced on a facet
// page — not a claim of formal partnership. `flyer` shows an image as-is
// (no CTA, e.g. a one-off event flyer); `ctaHref` links out to something
// like a PDF (no flyer image shown alongside it).
export type Resource = {
  name: string;
  description?: string;
  contact?: string;
  ctaLabel?: string;
  ctaHref?: string;
  flyer?: { src: ImageMetadata; alt: string };
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
      'GEMS: Girls Empowered and Motivated to Succeed',
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
      'Services to Youth was The Links, Incorporated’s first program, established to equip Black youth with the intellectual and achievement-oriented tools to become successful, productive citizens. It remains rooted in an integrated approach that addresses the academic, health, cultural, social awareness, career development, and mentoring needs of the young people we serve, including active, healthy living, since children who stay active see greater school success and self-esteem.',
      'Our chapter has a long history of hands-on programming, from Project LEAD: High Expectations and the Little Sisters of Links mentoring program, to literacy initiatives like Great Girls + Great Books = Great Readers, to cultural enrichment through Ritz Museum tours and Nutcracker Ballet sponsorships.',
      'Recent goals include a partnership with the Links-NSBE Jr. Club, monthly mentoring, STEAM career development, college readiness programming, financial literacy instruction, HBCU promotion, and college scholarship awards.',
    ],
    image: servicesToYouthImage,
    imageAlt: 'Jacksonville Links members with a group of students during a Services to Youth program visit',
  },
  {
    slug: 'the-arts',
    name: 'The Arts',
    href: '/programs/the-arts/',
    summary: 'Enriching the quality of life of our youth and communities through educational and engaging art experiences.',
    mission: 'Linking Art Through Transformative Programming.',
    highlights: [
      'Classics Through The Ages',
      'National Poster Art Contest',
      'Taking STEM into STEAM',
      'Artist Noir',
    ],
    paragraphs: [
      'The Links, Incorporated’s support of the arts can be traced to our cultured co-founder Margaret Roselle Hawkins. Her innate artistic talent, discovered at a young age, earned her a four-year scholarship to the Women’s School of Design, later known as the Moore Institute of Art. Her passion for creative expression later led to her appointment as an art teacher, and helped give root to the establishment of The Arts facet in 1964 at the 14th National Assembly.',
      'The goal of The Arts facet is to produce and support programs to enrich the quality of life of our youth and communities through educational and engaging art experiences: Transforming Communities and Fulfilling Our Purpose.',
      'National Signature Arts Program Summary: Classics Through The Ages focuses on increasing the interest, knowledge, and participation of African-American youth in the classical arts, affording exemplary student artists opportunities to hone their skills and earn recognition and support for their educational and career pursuits. The National Poster Art Contest includes health-related themes, seeking to depict healthy, energetic, active lifestyles.',
      'Taking STEM into STEAM brings art into the educational mix, helping students learn that there are multiple ways to reach a conclusion, garner greater flexibility in how they learn, and gain deeper understanding for problem solving. Past projects have included partnerships with symphonies and Connecting Threads through quilt making. Artist Noir, modeled after Classics Through The Ages, includes literary, theater, and visual arts, encouraging multi-arts disciplines such as watercolors, fashion design, sculpture, drama, spoken word, and dance.',
    ],
    image: theArtsImage,
    imageAlt: 'Jacksonville Links members at a chapter event for The Arts facet',
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
      'Vision: eliminate disparities by reducing barriers to services through advocacy, education, and service. Mission: empower our chapters to effectively uplift the communities in which we work. Goals: increase the number of sustainable and measurable programs, deepen collaborative partnerships, and extend our initiatives into the communities with the greatest need.',
      'In 2016, the Jacksonville Chapter encouraged the community to take an active role in the presidential election process by sponsoring voter registration drives at Florida’s first HBCU, Edward Waters College. Facet Chair LaVonne Mitchell led the campaign at the Schell-Sweet Center on campus, registering new voters alongside fellow chapter members. The facet also partners with Operation New Hope on the Adopt A Child Project, providing holiday gifts and celebrations for underprivileged children.',
    ],
    image: nationalTrendsImage,
    imageAlt: 'Jacksonville Links members at a National Trends and Services community registration table',
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
      'The 2017–2018 program year emphasized Haiti, supporting 34 orphans at the Ecole Yahve Schamma de Petit Place in Cazeau. In December 2017, members prepared individual care packages for each child and provided bulk donations to the orphanage.',
      'The facet also conducted a workshop exposing our GEMS youth group to international perspectives, with speakers from Nigeria, Haiti, and the Bahamas sharing cultural insight alongside a tasting of international cuisine.',
    ],
    image: internationalTrendsNewPhoto,
    imageAlt: 'Jacksonville Links members at an International Trends & Services event',
    gallery: [
      { src: internationalTrendsImage, alt: 'GEMS youth group members sampling international cuisine at an International Trends & Services workshop' },
      { src: internationalTrendsHaiti, alt: 'A guest speaker discussing Haiti with the GEMS youth group in front of international flags' },
      { src: internationalTrendsNigeria, alt: 'A presentation board on Nigeria shared with the GEMS youth group' },
      { src: internationalTrendsBahamas, alt: 'A guest speaker addressing the GEMS youth group' },
      { src: internationalTrendsCarePackages, alt: 'Jacksonville Links members preparing individually labeled care packages for orphans in Cazeau, Haiti' },
      { src: itsCommitteeCollage, alt: 'International Trends & Services committee members, with photos from the chapter’s Bahamas outreach and International Tea' },
      { src: internationalHeritagePortrait, alt: 'Traditional West African-inspired attire and jewelry, reflecting the cultural connection central to International Trends & Services programming' },
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
      'Health and Human Services was established to address the chronic health disparities that persist in our communities and result in the decreased life expectancy of African Americans, with a focus on cardiovascular disease, breast cancer, organ/tissue/blood donation, and childhood obesity.',
      'HeartLinks to Heart Health engages the community to take an aggressive stance against heart disease. Linkages to Life educates the African-American community about the importance of organ, tissue, and bone marrow donation. Walk for Healthy Living promotes daily exercise and nutrition through events like the Heart Walk and Susan G. Komen Walk.',
      'In 2015–2016, the Jacksonville Chapter provided assistance to the Schell-Sweet Community Center and Clinic on the campus of Edward Waters College, and continues to develop mental health stigma reduction efforts and healthy-choice programming for youth.',
    ],
    image: healthHumanServicesFoodDrive,
    imageAlt: 'Jacksonville Links members packing food donation bags at a community food drive',
    largeGallery: true,
    gallery: [
      { src: healthHumanServicesImage, alt: 'Jacksonville Links members holding a chapter banner at the Schell-Sweet Community Resource Centre' },
      { src: healthHumanServicesRibbonCutting, alt: 'Jacksonville Links members and community partners at a ribbon-cutting ceremony' },
      { src: chapterMeeting, alt: 'Jacksonville Links members at a chapter meeting' },
    ],
  },
];

// `card` officers have a finished graphic (real photo + name/title already
// baked in by the chapter) — rendered as-is, no extra HTML caption needed.
// The president uses a plain portrait photo captioned in HTML as usual.
export const OFFICERS = [
  { name: 'Marti Forchion Chapman', title: 'President', photo: 'portrait' as const, group: 'elected' as const },
  { name: 'Lisa Smith', title: 'Vice President', card: 'vice-president' as const, group: 'elected' as const },
  { name: 'Reba Barkley', title: 'Recording Secretary', card: 'recording-secretary' as const, group: 'elected' as const },
  { name: 'Crystal Charles', title: 'Corresponding Secretary', card: 'corresponding-secretary' as const, group: 'elected' as const },
  { name: 'Yvonne McClain Gomes', title: 'Financial Secretary', card: 'financial-secretary' as const, group: 'elected' as const },
  { name: 'Deidra Williams-Johnson', title: 'Treasurer', card: 'treasurer' as const, group: 'elected' as const },
  { name: 'Juanita Fletcher Cone', title: 'Programming Chair', card: 'programming-chair' as const, group: 'appointed' as const },
  { name: 'Cynthia Nixon', title: 'Parliamentarian', card: 'parliamentarian' as const, group: 'appointed' as const },
  { name: 'Kim Brooks Hall', title: 'Chaplain', card: 'chaplain' as const, group: 'appointed' as const },
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

// The chapter's own tagline, used verbatim (as on the current live site,
// including on the Officers page).
export const LEGACY_TAGLINE = 'A Legacy in Every Link: 60 Years of Friendship and Service';

// Verbatim text from jacksonvillelinksinc.org/our-chapter/ — copied as-is
// per the chapter's request, not paraphrased. Edit only to match a real
// update to the live site's wording.
export const OUR_CHAPTER_CONTENT = {
  linksIncorporated: [
    'The Links, Incorporated was founded in 1946 by two civic-minded visionaries: Margaret Hawkins and Sarah Scott of Philadelphia, PA. Founded on the principles of friendship and service, they invited seven of their friends to join them in organizing a new kind of inter-city club. Over the years, the organization has provided critical support and programming across the cultural, educational, and socioeconomic landscape of the African American community.',
    'Today, the Links, Inc. is one of the nation’s premier volunteer service organizations, with over 271 chapters in 41 states and abroad. The membership is comprised of leaders and trailblazers in the fields of medicine, law, science & technology, education, business, and entrepreneurship. The Links, Inc. continues its long-standing commitment to advancing the causes of African American people one chapter, one project, and one community at a time.',
  ],
  jacksonvilleChapter: [
    'The Jacksonville Chapter of The Links, Incorporated was chartered in 1966 – we celebrated “50 years of Friendship and Service” in 2016 and continue to make an impact on the local community. Our chapter consists of leaders, newsmakers, activists, professionals, and volunteers working toward the realization of a better life for citizens of Jacksonville. The way we work is to develop and execute programs designed to transform lives for the better – ours through giving back, and others through what we give. For example, we have mentored our GEMS (Girls Empowered and Making Strides) at Edward Waters College and Eugene Butler Middle School in downtown Jacksonville and have witnessed profound changes first-hand.',
    'The GEMS program uses an integrated approach in specific areas of learning and doing. To this end The Jacksonville Links have encouraged our GEMS to learn about and support families in Haiti who are less fortunate, taught them to embrace healthy living habits including sessions with health professionals and lessons on Zumba dancing, helped them to explore performing and visual arts including an exciting interactive sessions with Stage Aurora Representatives and taught our GEMS to assume a cultural identity with life skills and literary reinforcement.',
    'We also hold a major fundraiser, our Western Gala, which helps us underwrite support for our programming and charities like the Edward Waters College Scholarship Endowment, the Heart Walk and childhood obesity initiatives in local schools. Sometimes we simply volunteer time and effort at local soup kitchens or Builders Care.',
  ],
  foundation: [
    'The Links Foundation, Incorporated is the philanthropic arm of The Links, Incorporated, an organization of professional women of color located throughout the United States, the District of Columbia and the Commonwealth of the Bahamas. The Foundation was established in 1979 to enhance and expand the philanthropic endeavors of The Links, Incorporated. The Links, Incorporated has a long tradition of promoting and engaging in educational, civic and intercultural activities in order to enrich the lives of members of the communities we serve.',
    'The Foundation provides grants to innovative programs that address problems to be solved, or opportunities to be seized, that are of regional, national or international significance. It has served The Links, Incorporated well as the conduit for grant support for special programs.',
    'Under Foundation guidelines, grants are made to support the five program facets of The Links, Incorporated which include Services to Youth, The Arts, National Trends and Services, International Trends and Services, and Health and Human Services.',
    'The Links Foundation, Incorporated has contributed more than $25 million to charitable causes since its founding. In 2014, The Links Foundation, Incorporated named its fourth $1 million grantee – the Smithsonian National Museum of African American Culture and History in Washington, D.C. Other million-dollar grantees include the United Negro College Fund, the NAACP Legal Defense and Educational Fund, Inc. and the National Civil Rights Museum.',
    'In recent years, The Links Foundation, Incorporated has made donations to such entities as: Habitat for Humanity, for the rebuilding of homes in Haiti; Africare, for the construction of The Links maternal waiting homes and the assemblage of Mama Kits; and, National Cares Mentoring Movement, for the advancement of mentoring opportunities across the nation. Through its 2012 Grants-in-Aid program, $100,000 in grants was awarded to four non-profits – Club Esteem, Melbourne, Fla.; Kansas City Friends of Alvin Ailey, Kansas City, Kan.; Legacy Media Institute, Petersburg, Va.; and the National Dental Association, headquartered in Washington, DC.',
  ],
  visionLink: { label: 'Vision 20/20 – Read more', href: 'http://linksinc.org/vision2020/history/' },
};

// Verbatim text from jacksonvillelinksinc.org/history/ — copied as-is per
// the chapter's request, not paraphrased.
export const HISTORY_CONTENT = {
  heading: 'The Links Incorporated, Jacksonville Chapter Local History',
  paragraphs: [
    'On November 12, 1966, the Jacksonville Chapter of The Links, Incorporated was officially installed. As it embarked upon its journey of friendship and service, the cumulative efforts from 1966 to now have resulted in a legacy of transformational programming, dedicated service and leadership in the Jacksonville community. The Charter Members of the Jacksonville Chapter were Mary Betsch, Glorya Brooks, Miriam Burney, Bessie Canty, Elizabeth Downing, Alethia Gibbs, Kate Graves, Lois Iszard, Mary Jones, Joyce Lawson, Elinor Littlejohn, Carolyn Miller, Meltonia McGriff, Sara Stewart and Sadie Tillis. The Chartering President was Elinor Littlejohn. Maude Reid, the Southern Area Director and the Southern Area officers provided guidance to the club in preparation of its chartering. Dollie Deselle Adams, National President, installed the Southern Area’s 27th chapter. The Tallahassee Chapter of The Links, Incorporated was the Sponsoring Chapter. The first chapter officers were: Elinor Littlejohn (President), Lois Iszard (Vice President) Bessie Canty (Recording Secretary) Sara Steward (Financial Secretary) and Sadie Tillis (Treasurer). Elinor Littlejohn was also the organizer of the club that became the Jacksonville Chapter.',
    'Today as from the beginning, the Jacksonville Chapter is comprised of dedicated and distinguished women who believe in Friendship and Service. The chapter has been guided by its unwavering commitment toward improving the quality of life in our community – especially for those of African Ancestry through educational, civic and intercultural activities/programming. These efforts are primarily focused on the Jacksonville Community. However, the chapter has also provided funding and gifts far beyond our shores.',
    'During the past five decades succeeding presidents have taken the helm and continued the commitment to enrich the lives of others in the Jacksonville community. This commitment is most evident in the chapter’s award-winning Umbrella Program, Girls Empowered and Motivated to Succeed, known by the acronym GEMS! The Jacksonville Chapter partnered with the New Town Success Zone (established in 2005) to establish a program at one of the underserved schools in the zone, Eugene Butler Middle School.',
    'For more than six years the chapter partnered with the School Advisory Council (SAC) and the Boys & Girls (BOLD) after school program to develop a weekly program addressing social, health and educational issues impacting sixth-grade girls. This program was highly successful and proved to be transformational for these students. It was so successful that the chapter received the National FIRST PLACE Award for Umbrella Programming, 2012-2014 program year!',
    'In addition to program events, the Jacksonville Chapter has sponsored the following community fundraisers that have generated significant contributions to local community agencies: The United Negro College Fund, Boy Scouts Camper-ship, Johnson Branch of YMCA, Eugene Butler Middle School (2006-2015) and Edward Waters College along with other local organizations are recipients of collective donations of more than $150,000 over the 50 plus years of The Jacksonville Chapter’s existence.',
  ],
  fundraisersIntro: 'Through the years the chapter has also hosted the following Fund Raisers:',
  fundraisers: [
    'Formal Masquerade Ball to benefit Sickle Cell Anemia Foundation (1981)',
    'White Rose Brunch honoring local Black citizens of achievement (1983)',
    'Night on The Annabel Lee to benefit Sickle Cell Foundation (1986)',
    'Emerald Jazz Brunch at The Omni (2000)',
    'Western Glitz / Gala – more than 15 years',
  ],
};

export const EXTERNAL_LINKS = [
  { label: 'The Links, Incorporated (National)', href: 'https://linksinc.org/' },
  { label: 'Southern Area', href: 'https://salinksinc.org/' },
];
