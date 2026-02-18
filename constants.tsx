
import { Vacancy, Testimonial } from './types';

export const VACANCIES: Vacancy[] = [
  {
    id: '1',
    title: 'Senior Controller',
    company: 'Investment Partners B.V.',
    location: 'Groningen',
    hours: '32-40 uur',
    category: 'Financieel',
    description: 'Verantwoordelijk voor financiële rapportages en strategisch advies.'
  },
  {
    id: '2',
    title: 'HR Business Partner',
    company: 'TechScale Solutions',
    location: 'Leeuwarden',
    hours: '36 uur',
    category: 'HR & Management',
    description: 'Ondersteun de groei van een snelgroeiend tech-bedrijf.'
  },
  {
    id: '3',
    title: 'Projectleider Bouw',
    company: 'Construct Groep Noord',
    location: 'Assen',
    hours: '40 uur',
    category: 'Techniek',
    description: 'Begeleid uitdagende bouwprojecten van begin tot eind.'
  },
  {
    id: '4',
    title: 'Digital Marketeer',
    company: 'BrandBuilders',
    location: 'Groningen',
    hours: '32-36 uur',
    category: 'Marketing',
    description: 'Ontwikkel innovatieve campagnes voor diverse klanten.'
  },
  {
    id: '5',
    title: 'Senior Software Engineer',
    company: 'CloudNative Systems',
    location: 'Drachten',
    hours: '40 uur',
    category: 'IT & Development',
    description: 'Bouw schaalbare cloudoplossingen in een modern team.'
  },
  {
    id: '6',
    title: 'Operationeel Directeur',
    company: 'Retail Group North',
    location: 'Emmen',
    hours: 'Fulltime',
    category: 'Directie',
    description: 'Leid de dagelijkse operatie van een grote retailorganisatie.'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    name: 'Maret Moek',
    role: 'Oprichter',
    company: 'Noordermatch',
    quote: 'Noordermatch begreep precies wat we zochten. Een verademing in recruitment.',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAXHJVf9SX0xZ9shMOKE0zkR0Y10BWh10w5fKQcLpockeXEc7dcUI8Iqd4OTH4U36O20v_OhcHgYG-BMUKvtzF5HQh-Hbln6K0dhlXly4PURr_tTLWyez0C5jq8Ah-FK8MmRnjIsGI5SDwCZUYmIjuQ25W6Dx_nBCjW3I5P5HKd_1xUmnqKBqDDnmoKiKo0xmr4sGCS25vDkAyq_AoPzp6rTi_s7WV1vFVecF30AcF9eAFgNQBefuDvqziHdLPYGquTbscd_zNQnfQ'
  }
];
