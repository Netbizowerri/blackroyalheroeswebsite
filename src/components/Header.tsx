import Link from 'next/link';
import { Crown } from 'lucide-react';

export default function Header() {
  return (
    <header className="py-6 border-b border-border">
      <div className="container mx-auto flex items-center justify-center text-center">
        <Link href="/" className="flex flex-col items-center group">
          <div className="flex items-center">
            <Crown className="w-10 h-10 mr-3 text-primary" />
            <h1 className="text-4xl font-bold font-headline tracking-tight group-hover:text-primary transition-colors">
              Black Royal Heroes
            </h1>
          </div>
          <p className="text-sm text-muted-foreground mt-1">Celebrating 200 Years of Distinguished Black Excellence</p>
        </Link>
      </div>
    </header>
  );
}
