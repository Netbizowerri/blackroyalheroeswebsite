import Link from 'next/link';
import Image from 'next/image';
import { Menu } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/events', label: 'Black Events' },
  { href: '/program', label: 'Program' },
  { href: '/nominate', label: 'Nominate' },
  { href: '/register', label: 'Register' },
  { href: '/contact', label: 'Contact' },
];

export default function Header() {
  return (
    <header className="py-4 border-b border-border/20 absolute top-0 w-full z-50">
      <div className="container mx-auto flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="https://i.ibb.co/Kp6g2pDR/Black-Royal-Hero-1.jpg"
            alt="Black Royal Heroes Logo"
            width={80}
            height={80}
            className="rounded-full w-16 h-16 sm:w-20 sm:h-20"
          />
          <div className="hidden sm:block">
            <h1 className="text-lg font-bold font-headline tracking-tight text-primary transition-colors">
              BLACK ROYAL HEROES
            </h1>
          </div>
        </Link>
        
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="text-sm font-medium text-primary hover:text-foreground transition-colors">
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="text-primary hover:text-foreground">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <div className="flex flex-col gap-4 p-4">
                <Link href="/" className="flex items-center gap-2 mb-4">
                  <Image
                    src="https://i.ibb.co/Kp6g2pDR/Black-Royal-Hero-1.jpg"
                    alt="Black Royal Heroes Logo"
                    width={80}
                    height={80}
                    className="rounded-full"
                  />
                  <div>
                    <h1 className="text-lg font-bold font-headline text-primary">
                      BLACK ROYAL HEROES
                    </h1>
                  </div>
                </Link>
                <nav className="flex flex-col gap-4">
                  {navLinks.map((link) => (
                    <Link key={link.href} href={link.href} className="text-lg font-medium text-primary hover:text-foreground transition-colors">
                      {link.label}
                    </Link>
                  ))}
                </nav>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
