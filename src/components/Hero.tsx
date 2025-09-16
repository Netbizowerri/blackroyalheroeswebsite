import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center text-center">
      <div className="absolute inset-0 w-full h-full">
        <Image
          src="https://i.ibb.co/vfVqrC4/Black-Royal-Heroes-1.jpg"
          alt="Black Royal Heroes Event"
          fill
          className="object-cover"
          data-ai-hint="historical event celebration"
          priority
        />
        <div className="absolute inset-0 bg-black/70 md:bg-black/60"></div>
      </div>
      <div className="relative z-10 p-4 px-6 md:px-4">
        <h1 className="text-4xl md:text-6xl font-bold font-headline mb-4 tracking-wide text-primary [text-shadow:_2px_2px_4px_rgb(0_0_0_/_50%)]">
          BLACK ROYAL HEROES HALL OF FAME 2026
        </h1>
        <p className="text-lg md:text-xl max-w-4xl mx-auto text-slate-200 leading-relaxed [text-shadow:_1px_1px_2px_rgb(0_0_0_/_50%)]">
          Celebrating 200 years of distinguished Black heroes & great personalities in world history for their significant contributions and remarkable achievements in global events and development (1826–2026).
        </p>
        <div className="mt-8 flex justify-center gap-4 px-4">
          <Button asChild size="lg">
              <Link href="/register">Nominate a Hero</Link>
          </Button>
          <Button asChild size="lg" variant="secondary">
              <Link href="/register">Register Now</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
