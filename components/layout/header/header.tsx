import { ModeToggle } from '@/components/darkMode/ModeToggle';
import { cn } from '@/lib/utils';
import { MonitorSmartphone, ShoppingBag } from 'lucide-react';
import Link from 'next/link';

export default function Header() {
  return (
    <div
      className={cn(
        'fixed flex justify-between items-center p-4 border-b border-2 z-10  w-full bg-white dark:bg-[#010101] shadow-sm',
      )}
    >
      <span>
        <MonitorSmartphone />
      </span>
      <nav>
        <ul className={cn('flex items-center gap-6 justify-between')}>
          <li>
            <Link href='/'>Home</Link>
          </li>
          <li>
            <Link href='/products'>Products</Link>
          </li>
          <li>
            <Link href='/about'>About</Link>
          </li>
          <li>
            <Link href='/contact'>Contact</Link>
          </li>
        </ul>
      </nav>
      <div className=' flex items-center gap-2'>
        <ModeToggle />
        <ShoppingBag />
      </div>
    </div>
  );
}
