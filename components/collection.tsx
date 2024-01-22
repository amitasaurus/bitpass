import { cn } from '@/lib/utils';
import Image from 'next/image';

type Props = {
  title: string;
  className?: string;
};
export default function Collection({ title, className }: Props) {
  return (
    <div
      className={cn(
        'w-[256px] rounded-lg  mb-4 p-4 flex-col bg-slate-200 text-white font-semibold',
        className
      )}
    >
      <Image
        src="/collection.png"
        width={24}
        height={24}
        alt="collection icon"
        className="backdrop-opacity-10"
      />
      <div className="my-4">{title}</div>
    </div>
  );
}
