import { type TWebsite } from '@/lib/data';
import Image from 'next/image';

type Props = {
  login: TWebsite;
};

export default function passwordCard({ login }: Props) {
  return (
    <a
      href={login.uri}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center p-4 rounded-lg cursor-pointer hover:bg-slate-200"
    >
      <div className="flex items-center flex-1">
        <Image src={login.logo} width={24} height={24} alt={login.name} />
        <div className="ml-2 text-base font-normal text-slate-800">
          {login.name}
        </div>
      </div>
      <div className="flex-1 ml-2 text-base font-normal text-slate-800">
        {login.password}
      </div>
      <div className="flex-1 ml-2 text-base font-normal text-slate-800">
        {login.last_updated_at
          ? login?.last_updated_at.toLocaleDateString()
          : ''}
      </div>
      <div className="flex-1 ml-2 text-base font-normal text-slate-800">
        {login.password_strength}
      </div>
    </a>
  );
}
