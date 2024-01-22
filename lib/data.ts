import nastuh from '@/public/nastuh-abootalebi.jpg';
import aiony from '@/public/aiony-haust.jpg';
import albert from '@/public/albert-dera.jpg';
import toa from '@/public/toa-heftiba.jpg';
import {
  generateRandomString,
  getRandomDate,
  getRandomSecurityLevel,
} from './utils';
export type TCollections = {
  title: string;
  className?: string;
  backgroundColor?: string;
  textColor?: string;
};
export const testimonialsArr = [
  {
    image: nastuh,
    name: 'Survey Corps',
    alt: 'Photo by Nastuh Abootalebi',
    testimonial: `"Implementing BitPass in our organization has significantly enhanced our cybersecurity framework. Its robust password management and advanced security features have streamlined access control, ensuring a seamless yet fortified digital environment."`,
  },
  {
    image: aiony,
    name: 'Mikasa Ackerman',
    alt: 'Photo by Aiony Haust',
    testimonial: `"BitPass has revolutionized my online security, effortlessly managing and generating strong passwords. Its user-friendly interface and top-notch privacy features make it an essential tool in today's digital landscape."`,
  },
  {
    image: albert,
    name: 'Armin Arlert',
    alt: 'Photo by albert-dera',
    testimonial: `"BitPass has become an integral part of our organization's security strategy, offering a seamless solution to manage and safeguard our passwords. Its user-friendly interface and advanced encryption make it a standout choice in the ever-evolving landscape of cybersecurity."`,
  },
  {
    image: toa,
    name: 'Levi Ackerman',
    alt: 'Photo by toa-heftiba',
    testimonial: `"As a web developer, BitPass has significantly improved my workflow by effortlessly handling password complexities. Its cross-device compatibility and emphasis on privacy give me confidence that my online accounts are in safe hands."`,
  },
];

export const menuItemsArr = [
  {
    title: 'Collections',
    icon: '/collection.png',
    uri: '/vault/collections',
  },
  {
    title: 'Logins',
    icon: '/password.png',
    uri: '/vault/logins',
  },
  {
    title: 'Bank Cards',
    icon: '/card.png',
    uri: '/vault/bank-cards',
  },
  {
    title: 'IDs',
    icon: '/identity.png',
    uri: '/vault/ids',
  },
  {
    title: 'Notes',
    icon: '/notes.png',
    uri: '/vault/notes',
  },
  {
    title: 'Trash',
    icon: '/trash.png',
    uri: '/vault/trash',
  },
];

export const patterns = [
  'bg-pattern-1',
  'bg-pattern-2',
  'bg-pattern-3',
  'bg-pattern-4',
  'bg-pattern-5',
  'bg-pattern-6',
  'bg-pattern-7',
  'bg-pattern-8',
];

export const defaultCollectionsArr: TCollections[] = [
  {
    title: 'Social Media',
  },
  {
    title: 'Streaming Services',
  },
  {
    title: 'Shopping',
  },
  {
    title: 'Banking & Finance',
  },
  {
    title: 'Email & Communication',
  },
  {
    title: 'Utilities & Services',
  },
  {
    title: 'Government & Healthcare',
  },
  {
    title: 'Fitness & Wellness',
  },
];

export type TWebsite = {
  name: string;
  uri: string;
  logo: string;
  password?: string;
  last_updated_at?: Date;
  password_strength?: string;
};
let websites: TWebsite[] = [
  {
    name: 'Google',
    uri: 'https://www.google.com',
    logo: '/google.png',
  },
  {
    name: 'Facebook',
    uri: 'https://www.facebook.com',
    logo: '/facebook.png',
  },
  {
    name: 'Amazon',
    uri: 'https://www.amazon.com',
    logo: '/amazon.png',
  },
  {
    name: 'Twitter',
    uri: 'https://www.twitter.com',
    logo: '/twitter.png',
  },
  {
    name: 'LinkedIn',
    uri: 'https://www.linkedin.com',
    logo: '/linkedin.png',
  },
  {
    name: 'YouTube',
    uri: 'https://www.youtube.com',
    logo: '/youtube.png',
  },
  {
    name: 'Instagram',
    uri: 'https://www.instagram.com',
    logo: '/instagram.png',
  },
  {
    name: 'Netflix',
    uri: 'https://www.netflix.com',
    logo: '/netflix.png',
  },
  {
    name: 'GitHub',
    uri: 'https://www.github.com',
    logo: '/github.png',
  },
  {
    name: 'Wikipedia',
    uri: 'https://www.wikipedia.org',
    logo: '/wikipedia.png',
  },
];
const fakeWebsiteCreds = () => {
  return websites.map((e) => {
    e.password = generateRandomString();
    e.last_updated_at = getRandomDate();
    e.password_strength = getRandomSecurityLevel();
    return e;
  });
};

export const websitesArr = fakeWebsiteCreds();
