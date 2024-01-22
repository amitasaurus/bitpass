'use client';

import { useParams } from 'next/navigation';
import Link from 'next/link';
import { menuItemsArr as menuItems } from '@/lib/data';
import Image from 'next/image';
import { cn } from '@/lib/utils';

type Props = {};

export default function Sidebar({}: Props) {
  const params = useParams<{ slug: string }>();
  return (
    <div>
      <div
        className={
          'font-semibold text-2xl lowercase text-slate-800 flex items-center'
        }
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          width="28"
          height="28"
          viewBox="0 0 48 48"
          className="mr-1"
        >
          <path
            fill="#424242"
            d="M24,4c-5.5,0-10,4.5-10,10v4h4v-4c0-3.3,2.7-6,6-6s6,2.7,6,6v4h4v-4C34,8.5,29.5,4,24,4z"
          ></path>
          <path
            fill="#FB8C00"
            d="M36,44H12c-2.2,0-4-1.8-4-4V22c0-2.2,1.8-4,4-4h24c2.2,0,4,1.8,4,4v18C40,42.2,38.2,44,36,44z"
          ></path>
          <path
            fill="#C76E00"
            d="M24 28A3 3 0 1 0 24 34A3 3 0 1 0 24 28Z"
          ></path>
        </svg>
        BitPass
      </div>

      <div className="mt-8">
        {menuItems.map((menu, index) => (
          <Link
            key={menu.uri}
            className={cn(
              'flex items-center px-2 py-3 my-1 text-base font-medium rounded-lg hover:bg-slate-200',
              {
                'bg-slate-200': menu.uri.includes(params.slug),
              }
            )}
            href={menu.uri}
          >
            <Image
              src={menu.icon}
              width={24}
              height={24}
              alt={menu.title}
              className="mr-2"
            />
            <div>{menu.title}</div>
          </Link>
        ))}
      </div>
    </div>
  );
}
