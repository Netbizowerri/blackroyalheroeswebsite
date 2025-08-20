import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Check, Calendar, Award, Mic, Users, Star } from 'lucide-react';

const historicMilestones = [
  {
    date: "1800s",
    title: "Freedom of Black Slaves & Black Emancipation",
    subtitle: "Freedom of Black Slaves & Black Emancipation",
    description: "The historic journey from slavery to freedom, marking the beginning of a new era for Black people worldwide.",
    imageUrl: "https://i.ibb.co/4nhvtRrJ/Black-Hero-1.jpg",
    imageHint: "emancipation proclamation historical"
  },
  {
    date: "1950s-1980s",
    title: "Liberation of Black Nations & Political Independence",
    subtitle: "Liberation of Black Nations & Political Independence",
    description: "The wave of independence movements across Africa and the Caribbean, establishing sovereign Black nations.",
    imageUrl: "https://i.ibb.co/0Rr5cYJ9/Black-Hero-2.jpg",
    imageHint: "african independence celebration"
  },
  {
    date: "1994",
    title: "Freedom of South Africa & Election of Nelson Mandela",
    subtitle: "The 1st Black President of SA",
    description: "The end of apartheid and the historic election of Nelson Mandela as South Africa's first Black president.",
    imageUrl: "https://i.ibb.co/cSJhNyG1/Freedom-of-South-Africa-Election-of-Nelson-Mandela.jpg",
    imageHint: "Nelson Mandela speech"
  },
  {
    date: "2008",
    title: "Election of Barack Obama",
    subtitle: "As the 1st Black President of US",
    description: "A historic moment when Barack Obama became the first Black president of the United States of America.",
    imageUrl: "https://i.ibb.co/SDdpf1yW/Black-Hero-4.jpg",
    imageHint: "Barack Obama inauguration"
  },
  {
    date: "2021",
    title: "Appointment of Ngozi Okonjo-Iweala",
    subtitle: "As the 1st Black Woman to head World Trade Organization WTO",
    description: "Breaking barriers in international trade leadership as the first Black woman to lead the WTO.",
    imageUrl: "https://i.ibb.co/93HBFxR7/Black-Hero-5.jpg",
    imageHint: "Ngozi Okonjo-Iweala portrait"
  },
  {
    date: "1963",
    title: "Civil Rights Solidarity March",
    subtitle: "Martin Luther's Heroic Sacrifice",
    description: "The March on Washington and Dr. Martin Luther King Jr.'s ultimate sacrifice for civil rights and equality.",
    imageUrl: "https://i.ibb.co/xtN0CCTJ/Civil-Rights-Solidarity-March.webp",
    imageHint: "Martin Luther King"
  }
];

const programHighlights = [
  {
    icon: <Users className="w-8 h-8 text-primary" />,
    title: "Black Royal Carnival & Cultural Display",
    description: "A vibrant celebration showcasing the rich diversity of Black culture through music, dance, and traditional performances.",
    items: ["Traditional African dances", "Cultural exhibitions", "Music performances", "Art displays"],
  },
  {
    icon: <Mic className="w-8 h-8 text-primary" />,
    title: "Historical/Documentary Exhibition & Presentation of Topical Papers",
    description: "Educational presentations and documentary screenings featuring insights from renowned historians and scholars.",
    items: ["Documentary screenings", "Academic presentations", "Historical artifacts", "Expert discussions"],
  },
  {
    icon: <Calendar className="w-8 h-8 text-primary" />,
    title: "Heroic Display & Royal Celebrations",
    description: "Grand displays honoring the achievements and contributions of Black heroes throughout history.",
    items: ["Hero showcases", "Royal ceremonies", "Achievement displays", "Legacy presentations"],
  },
  {
    icon: <Award className="w-8 h-8 text-primary" />,
    title: "Black Royal Award & Presentation of Heroic Honours",
    description: "Formal recognition ceremony presenting awards and honors to distinguished Black heroes and leaders.",
    items: ["Award ceremonies", "Honor presentations", "Recognition speeches", "Medal presentations"],
  },
  {
    icon: <Star className="w-8 h-8 text-primary" />,
    title: "Black Royal Night",
    description: "An elegant evening gala marking the culmination of the celebration with entertainment and networking.",
    items: ["Gala dinner", "Entertainment shows", "Networking opportunities", "Closing ceremony"],
  }
];


export default function EventsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <section className="relative h-[60vh] flex items-center justify-center text-center">
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
            <div className="relative z-10 p-4 pt-24">
                <h1 className="text-4xl md:text-5xl font-bold font-headline mb-4 tracking-wide text-primary">
                    REMARKABLE EVENTS & BLACK CELEBRATION
                </h1>
                <p className="text-lg md:text-xl max-w-4xl mx-auto text-slate-200">
                    Showcasing pivotal moments that shaped Black history and continue to inspire generations worldwide
                </p>
            </div>
        </section>

        <section className="container mx-auto px-4 py-16">
            <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold font-headline">Historic Milestones</h2>
                <p className="text-lg text-muted-foreground mt-2">Six transformative events that redefined Black history and global society</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {historicMilestones.map((milestone, index) => (
                    <Card key={index} className="flex flex-col overflow-hidden">
                        <div className="relative h-48 w-full">
                            <Image
                                src={milestone.imageUrl}
                                alt={milestone.title}
                                fill
                                className="object-cover"
                                data-ai-hint={milestone.imageHint}
                            />
                        </div>
                        <CardHeader>
                            <CardDescription className="font-bold text-primary">{milestone.date}</CardDescription>
                            <CardTitle className="font-headline text-2xl">{milestone.title}</CardTitle>
                            <p className="text-sm text-muted-foreground">{milestone.subtitle}</p>
                        </CardHeader>
                        <CardContent className="flex-grow">
                            <p>{milestone.description}</p>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </section>

        <section className="bg-secondary/20 py-16">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold font-headline">PROGRAM HIGHLIGHTS & EXCITING PACKAGES</h2>
                    <p className="text-lg text-muted-foreground mt-2">This Great Celebration will feature among other things:</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    {programHighlights.map((highlight, index) => (
                       <div key={index} className="flex items-start gap-6">
                            <div className="flex-shrink-0">
                                {highlight.icon}
                            </div>
                            <div>
                                <h3 className="text-xl font-bold font-headline mb-2">{highlight.title}</h3>
                                <p className="text-muted-foreground mb-3">{highlight.description}</p>
                                <ul className="space-y-2">
                                    {highlight.items.map((item, i) => (
                                        <li key={i} className="flex items-center gap-2">
                                            <Check className="w-4 h-4 text-primary flex-shrink-0" />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                       </div>
                    ))}
                </div>
            </div>
        </section>

        <section className="container mx-auto px-4 py-20 text-center">
            <h2 className="text-3xl font-bold font-headline mb-4">Be Part of This Historic Celebration</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-8">Join us in honoring 200 years of Black excellence and celebrating the heroes who shaped our world.</p>
            <div className="flex justify-center gap-4">
                <Button asChild size="lg">
                    <Link href="/nominate">Nominate a Hero</Link>
                </Button>
                <Button asChild size="lg" variant="secondary">
                    <Link href="/register">Register Now</Link>
                </Button>
            </div>
             <div className="flex justify-center mt-8 items-center gap-4">
                <Image src="https://i.ibb.co/Kp6g2pDR/Black-Royal-Hero-1.jpg" alt="Logo" width={60} height={60} className="rounded-full" />
                <p className="text-sm text-muted-foreground">Celebrating 200 Years of Distinguished Excellence</p>
            </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
