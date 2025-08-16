import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Image from 'next/image';
import { Award, History, Users, Gem } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <section className="relative h-[50vh] flex items-center justify-center text-center">
            <div className="absolute inset-0 w-full h-full">
                <Image
                src="https://i.ibb.co/vfVqrC4/Black-Royal-Heroes-1.jpg"
                alt="Black Royal Heroes Event"
                fill
                className="object-cover"
                data-ai-hint="historical event celebration"
                priority
                />
                <div className="absolute inset-0 bg-black/60"></div>
            </div>
            <div className="relative z-10 p-4">
                <h1 className="text-4xl md:text-6xl font-bold font-headline mb-4 tracking-wide text-primary">
                About The Event
                </h1>
                <p className="text-lg md:text-xl max-w-4xl mx-auto text-slate-200">
                Celebrating 200 Years of Black Excellence and Achievement
                </p>
            </div>
        </section>

        <section className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold font-headline mb-6">Our Mission</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              The Black Royal Heroes Hall of Fame 2026 is a landmark event dedicated to celebrating 200 years of distinguished Black heroes and great personalities in world history. Our mission is to honor their significant contributions and remarkable achievements in global events and development from 1826 to 2026. We aim to inspire future generations by showcasing the incredible sacrifices, innovations, and leadership that have shaped Black history and redeemed the Black image across the globe.
            </p>
          </div>
        </section>

        <section className="bg-secondary/20 py-16">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    <div className="text-center">
                        <Award className="w-12 h-12 text-primary mx-auto mb-4" />
                        <h3 className="text-xl font-bold font-headline mb-2">Honor</h3>
                        <p className="text-muted-foreground">To honour distinguished men and women who made history and promoted humanity.</p>
                    </div>
                    <div className="text-center">
                        <History className="w-12 h-12 text-primary mx-auto mb-4" />
                        <h3 className="text-xl font-bold font-headline mb-2">Celebrate</h3>
                        <p className="text-muted-foreground">Celebrating heroic events and remarkable achievements in Black history.</p>
                    </div>
                     <div className="text-center">
                        <Users className="w-12 h-12 text-primary mx-auto mb-4" />
                        <h3 className="text-xl font-bold font-headline mb-2">Showcase</h3>
                        <p className="text-muted-foreground">Showcasing personalities who made tremendous sacrifices for the Black image.</p>
                    </div>
                    <div className="text-center">
                        <Gem className="w-12 h-12 text-primary mx-auto mb-4" />
                        <h3 className="text-xl font-bold font-headline mb-2">Inspire</h3>
                        <p className="text-muted-foreground">Featuring a parade of dignitaries, icons, legends, and superstars.</p>
                    </div>
                </div>
            </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
