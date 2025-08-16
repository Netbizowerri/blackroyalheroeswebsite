import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Calendar, Clock, MapPin } from 'lucide-react';

const eventSchedule = [
  {
    day: "Day 1",
    date: "October 28, 2026",
    title: "Opening Ceremony & Gala Night",
    time: "6:00 PM - 11:00 PM",
    location: "Grand Ballroom, Convention Center",
    description: "The grand opening of the Black Royal Heroes Hall of Fame. A night of elegance, celebration, and networking with honorees, dignitaries, and special guests.",
    imageUrl: "https://placehold.co/600x400.png",
    imageHint: "gala night celebration"
  },
  {
    day: "Day 2",
    date: "October 29, 2026",
    title: "Cultural Showcase & Exhibitions",
    time: "10:00 AM - 5:00 PM",
    location: "Exhibition Hall A & B",
    description: "An immersive experience into Black culture, art, and history. Featuring live performances, historical artifacts, and interactive displays.",
    imageUrl: "https://placehold.co/600x400.png",
    imageHint: "cultural exhibition art"
  },
  {
    day: "Day 3",
    date: "October 30, 2026",
    title: "Awards Ceremony & Royal Night",
    time: "7:00 PM - 12:00 AM",
    location: "Royal Theatre",
    description: "The pinnacle of the event, where we officially induct our heroes into the Hall of Fame. A royal night of recognition, entertainment, and inspiration.",
    imageUrl: "https://placehold.co/600x400.png",
    imageHint: "awards ceremony stage"
  }
];

export default function EventsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8 pt-24 md:pt-32">
        <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold font-headline mb-4 text-primary">Black Events Schedule</h1>
            <p className="text-lg max-w-3xl mx-auto text-muted-foreground">
                Join us for three days of celebration, recognition, and cultural immersion.
            </p>
        </div>

        <div className="space-y-12">
          {eventSchedule.map((event, index) => (
            <Card key={index} className="overflow-hidden md:grid md:grid-cols-5 md:gap-8 items-center">
              <div className="md:col-span-2 relative h-64 md:h-full w-full">
                <Image
                    src={event.imageUrl}
                    alt={event.title}
                    fill
                    className="object-cover"
                    data-ai-hint={event.imageHint}
                />
              </div>
              <div className="md:col-span-3">
                <CardHeader>
                  <CardDescription className="text-primary font-semibold">{event.day} - {event.date}</CardDescription>
                  <CardTitle className="font-headline text-3xl">{event.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 text-muted-foreground mb-4">
                    <p className="flex items-center gap-2"><Clock className="w-5 h-5 text-primary" /> {event.time}</p>
                    <p className="flex items-center gap-2"><MapPin className="w-5 h-5 text-primary" /> {event.location}</p>
                  </div>
                  <p>{event.description}</p>
                </CardContent>
              </div>
            </Card>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
