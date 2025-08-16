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
    <header className="py-4 border-b border-border sticky top-0 bg-background/80 backdrop-blur-sm z-50">
      <div className="container mx-auto flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="https://blackroyalheroes.com/wp-content/uploads/2024/04/Black-Royal-Heroes-Logo.png"
            alt="Black Royal Heroes Logo"
            width={50}
            height={50}
            className="rounded-full"
          />
          <div className="hidden sm:block">
            <h1 className="text-xl font-bold font-headline tracking-tight group-hover:text-primary transition-colors">
              Black Royal Heroes
            </h1>
            <p className="text-xs text-muted-foreground">Celebrating 200 Years of Distinguished Black Excellence</p>
          </div>
        </Link>
        
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="text-sm font-medium hover:text-primary transition-colors">
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <div className="flex flex-col gap-4 p-4">
                <Link href="/" className="flex items-center gap-2 mb-4">
                  <Image
                    src="https://blackroyalheroes.com/wp-content/uploads/2024/04/Black-Royal-Heroes-Logo.png"
                    alt="Black Royal Heroes Logo"
                    width={40}
                    height={40}
                    className="rounded-full"
                  />
                  <div>
                    <h1 className="text-lg font-bold font-headline">
                      Black Royal Heroes
                    </h1>
                  </div>
                </Link>
                <nav className="flex flex-col gap-4">
                  {navLinks.map((link) => (
                    <Link key={link.href} href={link.href} className="text-lg font-medium hover:text-primary transition-colors">
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
