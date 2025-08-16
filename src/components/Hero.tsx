import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="text-center my-12 md:my-20">
      <h1 className="text-4xl md:text-6xl font-bold font-headline mb-4 tracking-wide text-primary">
        BLACK ROYAL HEROES HALL OF FAME 2026
      </h1>
      <p className="text-lg md:text-xl max-w-4xl mx-auto text-muted-foreground leading-relaxed">
        Celebrating 200 years of distinguished Black heroes & great personalities in world history for their significant contributions and remarkable achievements in global events and development (1826–2026).
      </p>
      <div className="mt-8 flex justify-center gap-4">
        <Button asChild size="lg">
            <Link href="/register">Nominate a Hero</Link>
        </Button>
        <Button asChild size="lg" variant="secondary">
            <Link href="/register">Register Now</Link>
        </Button>
      </div>
    </section>
  );
}
