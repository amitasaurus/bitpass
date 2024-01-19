import Testimonials from '@/components/testimonials';
import Login from '@/components/login';
import { SessionProvider } from 'next-auth/react';
import { getCurrentUser } from '@/lib/user';

export default async function Home() {
  const session = await getCurrentUser();
  return (
    // <SessionProvider session={session}>
    <main className="min-h-screen">
      <div className="grid h-screen grid-cols-2">
        <Testimonials />
        <Login />
      </div>
    </main>
    // </SessionProvider>
  );
}
