import { Facebook, Instagram, Linkedin, Mail, Phone, Twitter } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="border-t border-border mt-12 py-8 text-muted-foreground bg-secondary/20">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <div className="flex items-center mb-2">
              <Image
                src="https://i.ibb.co/Kp6g2pDR/Black-Royal-Hero-1.jpg"
                alt="Black Royal Heroes Logo"
                width={40}
                height={40}
                className="rounded-full mr-3"
              />
              <h3 className="text-xl font-bold font-headline text-foreground">
                Black Royal Heroes
              </h3>
            </div>
            <p className="text-sm max-w-xs">
              Celebrating 200 Years of Distinguished Black Excellence
            </p>
          </div>
          <div>
            <h4 className="font-bold text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="/about" className="hover:text-primary transition-colors">About Event</Link></li>
              <li><Link href="/events" className="hover:text-primary transition-colors">Black Events</Link></li>
              <li><Link href="/program" className="hover:text-primary transition-colors">Program</Link></li>
              <li><Link href="/nominate" className="hover:text-primary transition-colors">Nominate</Link></li>
              <li><Link href="/register" className="hover:text-primary transition-colors">Register</Link></li>
              <li><Link href="/gallery" className="hover:text-primary transition-colors">Gallery</Link></li>
              <li><Link href="/faq" className="hover:text-primary transition-colors">FAQ</Link></li>
              <li><Link href="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-foreground mb-4">Legal</h4>
            <ul className="space-y-2">
              <li><Link href="/privacy-policy" className="hover:text-primary transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms" className="hover:text-primary transition-colors">Terms</Link></li>
              <li><Link href="/disclaimer" className="hover:text-primary transition-colors">Disclaimer</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-foreground mb-4">Contact Info</h4>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-primary" />
                <a href="mailto:blackroyalheroes@gmail.com" className="hover:text-primary transition-colors">blackroyalheroes@gmail.com</a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-primary" />
                <a href="tel:+2348060291423" className="hover:text-primary transition-colors">+234 806 029 1423</a>
              </li>
            </ul>
            <div className="flex space-x-4 mt-4">
              <a href="#" aria-label="Facebook" className="hover:text-primary transition-colors"><Facebook /></a>
              <a href="#" aria-label="Instagram" className="hover:text-primary transition-colors"><Instagram /></a>
              <a href="#" aria-label="Twitter" className="hover:text-primary transition-colors"><Twitter /></a>
              <a href="#" aria-label="LinkedIn" className="hover:text-primary transition-colors"><Linkedin /></a>
            </div>
          </div>
        </div>
        <div className="text-center border-t border-border mt-8 pt-6">
          <p className="text-sm">&copy; {new Date().getFullYear() + 2} Black Royal Heroes Hall of Fame. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
