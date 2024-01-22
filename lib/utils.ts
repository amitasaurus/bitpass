import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const shuffle = (array: string[]) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

// Function to generate a random string for username and password
export function generateRandomString() {
  return Math.random().toString(36).substring(3);
}

// Function to generate a random date within the last year
export function getRandomDate() {
  const currentDate = new Date();
  const lastYear = currentDate.getFullYear() - 1;
  const randomMonth = Math.floor(Math.random() * 12) + 1;
  const randomDay = Math.floor(Math.random() * 28) + 1; // Assuming all months have 28 days for simplicity
  return new Date(`${lastYear}-${randomMonth}-${randomDay}`);
}

// Function to get a random security level
export function getRandomSecurityLevel() {
  const securityLevels = ['HIGH', 'MED', 'LOW'];
  const randomIndex = Math.floor(Math.random() * securityLevels.length);
  return securityLevels[randomIndex];
}
