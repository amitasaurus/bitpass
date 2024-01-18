import Image from 'next/image';
import { noto_serif } from '@/lib/fonts';
import Testimonials from '@/components/testimonials';
import Login from '@/components/login';
export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Login Screen */}
      <div className="grid h-screen grid-cols-2">
        <Testimonials />
        <Login />
      </div>
    </main>
  );
}
