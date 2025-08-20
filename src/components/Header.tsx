import Link from 'next/link';
import Image from 'next/image';
import { Menu } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Button, buttonVariants } from '@/components/ui/button';
import {
  Home,
  Info,
  CalendarDays,
  Sparkles,
  Award,
  UserPlus,
  Mail,
  type Icon as LucideIcon,
} from 'lucide-react';

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
            width={90}
            height={90}
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
              <Button variant="ghost" size="icon" className="text-primary hover:text-foreground text-xl">
                <Menu className="h-8 w-8" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full">
              <div className="flex flex-col gap-4 p-4">
                 {/* Logo and Title */}
                <Link href="/" className="flex items-center gap-2 mb-4">
                  <Image
                    src="https://i.ibb.co/Kp6g2pDR/Black-Royal-Hero-1.jpg"
                    alt="Black Royal Heroes Logo"
                    width={80}
                    height={80}
                    className="rounded-full"
                  />
                  <div>
                    <h1 className="text-base font-bold font-headline text-primary">
                      BLACK ROYAL HEROES
                    </h1> 
                  </div> 

                </Link>
                 {/* Navigation Links */}
                <nav className="flex flex-col gap-4">
                  {navLinks.map((link) => {
                     let IconComponent: LucideIcon | null = null;
                     switch (link.label) {
                       case 'Home':
                         IconComponent = Home;
                         break;
                       case 'About':
                         IconComponent = Info;
                         break;
                       case 'Black Events':
                         IconComponent = CalendarDays;
                         break;
                       case 'Program':
                         IconComponent = Sparkles;
                         break;
                       case 'Nominate':
                         IconComponent = Award;
                         break;
                       case 'Register':
                         IconComponent = UserPlus;
                         break;
                       case 'Contact':
                         IconComponent = Mail;
                         break;
                       default:
                         IconComponent = null; // No icon for unhandled cases
                     }
                    return (<Link key={link.href} href={link.href} className="flex items-center gap-3 text-lg font-medium text-primary hover:text-foreground transition-colors">
                      {IconComponent && <IconComponent className="h-5 w-5" />}
                      {link.label}
                    </Link>
                  );
                  })}
                </nav>
                 {/* Register Now Button */}
                 <div className="p-4"> {/* Added padding to the container holding the button */}
                   <Link href="/register" className={buttonVariants({ variant: "default", size: "lg" })}>
                     REGISTER NOW
                   </Link>
                 </div>
              </div>
            </SheetContent>
          </Sheet>

        </div>
      </div>
    </header>
  );
}
