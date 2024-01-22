import Testimonials from '@/components/testimonials';
import Login from '@/components/login';
import { getCurrentUser } from '@/lib/user';
import { redirect } from 'next/navigation';

export default async function Home() {
  const session = await getCurrentUser();
  if (session?.user) redirect('/vault/collections');
  return (
    <main className="min-h-screen">
      <div className="grid h-screen grid-cols-2">
        <Testimonials />
        <Login />
      </div>
    </main>
  );
}
