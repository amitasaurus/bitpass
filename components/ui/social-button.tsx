import { cn } from '@/lib/utils';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  styles: string;
}

export default function SocialButton({ children, styles }: ButtonProps) {
  return (
    <button
      className={cn(
        styles,
        'w-full p-2 text-sm font-semibold border rounded-full border-slate-200 text-slate-800 hover:bg-slate-50 flex justify-center items-center cursor-pointer'
      )}
    >
      {children}
    </button>
  );
}
