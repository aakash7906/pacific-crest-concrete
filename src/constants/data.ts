import type { FeaturedProject, GalleryItem, ServiceDetail } from '../types'

import logoImg from '../assets/images/header-logo.jpg'
import pourImg from '../assets/images/pour-original.jpg'
import commercialImg from '../assets/images/commercial-original.jpg'
import residentialImg from '../assets/images/residential-original.png'
import projectBelairImg from '../assets/images/project-belair-original.jpg'
import projectMenifeeImg from '../assets/images/project-menifee-original.png'
import projectMatadorsImg from '../assets/images/project-matadors-original.jpg'
import workFormedImg from '../assets/images/work-formed-original.jpg'
import workFinishedImg from '../assets/images/work-finished-original.jpg'
import workDrivewayImg from '../assets/images/work-driveway-original.png'
import workTurfPatioImg from '../assets/images/work-turfpatio-original.png'
import contactBgImg from '../assets/images/contact-bg-original.jpg'

export const IMAGES = {
  logo: logoImg,
  pour: pourImg,
  commercial: commercialImg,
  residential: residentialImg,
  projectBelair: projectBelairImg,
  projectMenifee: projectMenifeeImg,
  projectMatadors: projectMatadorsImg,
  workFormed: workFormedImg,
  workFinished: workFinishedImg,
  workDriveway: workDrivewayImg,
  workTurfPatio: workTurfPatioImg,
  contactBg: contactBgImg,
}

export const COMPANY_INFO = {
  name: 'Pacific Crest Concrete',
  phone: '(951) 852-0490',
  phoneRaw: '9518520490',
  email: 'info@pacificcrestcon.com',
  city: 'Menifee',
  state: 'California',
  address: '26100 Newport Road Suite A12 #302',
  cityStateZip: 'Menifee, California 92584',
  fullAddress: '26100 Newport Road Suite A12 #302 Menifee, California 92584',
  license: 'California C-8 License Number: 1090874',
  licenseNumber: '1090874',
  licenseType: 'C-8 Concrete Contractor',
  website: 'www.pacificcrestcon.com',
  serviceRegion: 'Southern California',
  serviceCoverage: 'From San Diego, CA to Los Angeles, CA',
  experience: 'Over a decade of industry experience',
  social: {
    facebook: 'https://www.facebook.com/pacificcrestconcrete',
    instagram: 'https://www.instagram.com/pacificcrestconcrete',
  },
}

export const FEATURED_PROJECTS: FeaturedProject[] = [
  {
    id: 'bel-air-country-club',
    title: 'Bel-Air Country Club',
    category: 'commercial',
    location: 'Los Angeles, CA',
    description:
      'Pacific Crest Concrete had the pleasure of working with the Bel-Air Country Club in placing the new cart path which will see daily use for its members and staff as the main point of access to the course.',
    image: IMAGES.projectBelair,
    highlight: 'Steep slope specialty finish for traction',
  },
  {
    id: 'menifee-residence',
    title: 'Menifee Residence',
    category: 'residential',
    location: 'Menifee, CA',
    description:
      'The typical residential new build does not come with a side entry sidewalk and or backyard patio, Pacific Crest Concrete had the pleasure of working with a great client and their beautiful vision for their front and back yard.',
    image: IMAGES.projectMenifee,
    highlight: 'Front & back yard custom flatwork',
  },
  {
    id: 'matadors-community-credit-union',
    title: 'Matadors Community Credit Union',
    category: 'commercial',
    location: 'Southern California',
    description:
      'Pacific Crest Concrete is currently working closely with our clients on a TI which includes replacing structural footings, underpinning, site curbs, curb and gutter, sidewalks and drive approaches.',
    image: IMAGES.projectMatadors,
    highlight: 'Commercial TI & structural retrofit',
  },
]

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'belair-formed',
    title: 'Bel-Air Country Club',
    category: 'commercial',
    stage: 'formed',
    caption: 'Bel-Air Country Club formed and ready to pour',
    description:
      'Formwork engineering and rebar placement along the steep fairway incline before scheduled concrete pumping.',
    image: IMAGES.workFormed,
  },
  {
    id: 'belair-finished',
    title: 'Bel-Air Country Club Cart Path',
    category: 'commercial',
    stage: 'finished',
    caption:
      'Bel-Air Country Club poured and finished with a specialty finish on the steep slope to assist with traction.',
    description:
      'High-traction broomed slope finish designed specifically for maintenance utility vehicles and golf carts.',
    image: IMAGES.workFinished,
  },
  {
    id: 'residential-driveway',
    title: 'Residential Flatwork',
    category: 'residential',
    stage: 'complete',
    caption: 'Residential driveway extensions and new sidewalks.',
    description:
      'Precision residential concrete pour integrating front entry steps, walkways, and wide driveway extensions.',
    image: IMAGES.workDriveway,
  },
  {
    id: 'residential-patio-turf',
    title: 'Modern Backyard Patio',
    category: 'residential',
    stage: 'complete',
    caption:
      'Residential back patio with space left for turf install between the concrete.',
    description:
      'Architectural geometric pads with clean expansion lines and designated channels for modern turf integration.',
    image: IMAGES.workTurfPatio,
  },
  {
    id: 'commercial-hillside',
    title: 'Commercial Infrastructure',
    category: 'commercial',
    stage: 'complete',
    caption:
      'Engineered hillside cart path and roadway with low impact execution.',
    description:
      'Keeping projects on budget and on schedule while navigating complex elevation transitions.',
    image: IMAGES.commercial,
  },
  {
    id: 'placement-operations',
    title: 'Pump Placement & Finishing',
    category: 'commercial',
    stage: 'formed',
    caption:
      'On-site pour operations with heavy-duty pump line and screeding team.',
    description:
      'Active pour management from residential scale up to 13-acre commercial distribution centers.',
    image: IMAGES.pour,
  },
]

export const SERVICES_LIST: string[] = [
  'Cart paths',
  'Stairs',
  'Structural footings',
  'Building slabs',
  'Underpinning',
  'Infills',
  'Concrete hardscape',
  'Curb',
  'Curb and gutter',
  'Ribbon gutter',
  'Drive approaches',
  'Parking bays',
  'ADA ramps',
  'Block walls',
  'Patios',
  'Driveway extensions',
]

export const DETAILED_SERVICES: ServiceDetail[] = [
  {
    id: 'structural',
    name: 'Structural Foundations & Underpinning',
    category: 'structural',
    description:
      'Heavy-duty load-bearing concrete work engineered for longevity and code compliance.',
    features: [
      'Structural footings & grade beams',
      'Building slabs & foundation pours',
      'Underpinning & foundation stabilization',
      'Precision infills & structural repairs',
      'Reinforced retaining & block walls',
    ],
  },
  {
    id: 'civil',
    name: 'Civil, Curbs & Site Infrastructure',
    category: 'civil',
    description:
      'Complete site concrete packages for municipal, commercial, and subdivision projects.',
    features: [
      'Standard curb, curb & gutter combinations',
      'Ribbon gutters & water management swales',
      'Drive approaches & heavy vehicle aprons',
      'Parking bays & multi-acre distribution lots',
      'Cart paths & hillside golf course trails',
    ],
  },
  {
    id: 'residential',
    name: 'Residential Patios & Driveway Extensions',
    category: 'residential',
    description:
      'Turnkey residential enhancements designed from concept to final smooth finish.',
    features: [
      'Driveway extensions & custom vehicle access',
      'Backyard patios with modern turf borders',
      'Side entry walkways & perimeter pathways',
      'Exterior concrete stairs & transitions',
      'Architectural landscape curbs & edging',
    ],
  },
  {
    id: 'commercial',
    name: 'Tenant Improvements & ADA Compliance',
    category: 'commercial',
    description:
      'Commercial renovation support with minimal disruption to ongoing tenant operations.',
    features: [
      'ADA compliant access ramps & landings',
      'Commercial tenant improvement (TI) concrete',
      'Low impact placement for occupied sites',
      'Specialty non-slip high traction slopes',
      'Pre-construction through closeout management',
    ],
  },
]

export const SERVICE_AREAS = [
  { name: 'San Diego County', description: 'Daily operations & active job sites' },
  { name: 'Riverside County / Menifee', description: 'Headquarters & local crew' },
  { name: 'Orange County', description: 'Commercial & residential contracts' },
  { name: 'Los Angeles County', description: 'Institutional & private clubs' },
  { name: 'Inland Empire', description: 'Distribution centers & industrial' },
]
