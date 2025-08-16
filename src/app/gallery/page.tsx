import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Image from 'next/image';

const galleryImages = [
  { src: "https://i.ibb.co/JW7whnHr/Black-Royal-Heroes-2.jpg", alt: "Political leaders speaking at a rally", hint: "political rally speech" },
  { src: "https://i.ibb.co/FkVdRGqh/Black-Royal-Heroes-3.jpg", alt: "Cultural icon performing on stage", hint: "stage performance music" },
  { src: "https://i.ibb.co/v4NDpcgk/Black-Royal-Heroes-4.jpg", alt: "Community champion receiving an award", hint: "award ceremony champion" },
  { src: "https://i.ibb.co/vfVqrC4/Black-Royal-Heroes-1.jpg", alt: "Historic celebration event", hint: "historical celebration" },
  { src: "https://placehold.co/600x400.png", alt: "Placeholder Image 5", hint: "gala dinner event" },
  { src: "https://placehold.co/600x400.png", alt: "Placeholder Image 6", hint: "networking guests" },
  { src: "https://placehold.co/600x400.png", alt: "Placeholder Image 7", hint: "art exhibition" },
  { src: "https://placehold.co/600x400.png", alt: "Placeholder Image 8", hint: "live band music" },
  { src: "https://placehold.co/600x400.png", alt: "Placeholder Image 9", hint: "red carpet entrance" },
];

export default function GalleryPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8 pt-24 md:pt-32">
        <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold font-headline mb-4 text-primary">Event Gallery</h1>
            <p className="text-lg max-w-3xl mx-auto text-muted-foreground">
                Moments from past events and a glimpse of what's to come.
            </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {galleryImages.map((image, index) => (
                <div key={index} className="relative aspect-square w-full rounded-lg overflow-hidden group">
                    <Image
                        src={image.src}
                        alt={image.alt}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-110"
                        data-ai-hint={image.hint}
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors"></div>
                </div>
            ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
