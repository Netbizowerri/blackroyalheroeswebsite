import Header from '@/components/Header';
import Hero from '@/components/Hero';
import InfoSections from '@/components/InfoSections';
import Categories from '@/components/Categories';
import Countdown from '@/components/Countdown';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <Hero />
        <InfoSections />
        <Categories />
        <Countdown />
      </main>
      <Footer />
    </div>
  );
}
