import { Crown } from 'lucide-react';

export default function Header() {
  return (
    <header className="py-6 border-b border-border">
      <div className="container mx-auto flex items-center justify-center">
        <Crown className="w-8 h-8 mr-3 text-primary" />
        <h1 className="text-3xl font-bold font-headline tracking-tight">
          Black Royal Heroes Tribute
        </h1>
      </div>
    </header>
  );
}
