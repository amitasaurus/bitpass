import { Noto_Sans, Noto_Serif } from 'next/font/google';

const noto_sans = Noto_Sans({
  subsets: ['latin'],
  display: 'swap',
});
const noto_serif = Noto_Serif({
  subsets: ['latin'],
  display: 'swap',
});
export { noto_sans, noto_serif };
