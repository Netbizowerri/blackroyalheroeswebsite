import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CheckCircle } from 'lucide-react';
import Image from 'next/image';

const programDetails = {
    day1: [
        { time: "09:00 AM", activity: "Arrival & Registration" },
        { time: "10:00 AM", activity: "Opening Remarks & Welcome Address" },
        { time: "11:00 AM", activity: "Keynote Speech: The Legacy of Black Heroes" },
        { time: "12:00 PM", activity: "Cultural Performance Showcase" },
    ],
    day2: [
        { time: "10:00 AM", activity: "Exhibition Halls Open" },
        { time: "11:00 AM", activity: "Panel: Political Activism Today" },
        { time: "1:00 PM", activity: "Lunch & Cultural Performances" },
        { time: "3:00 PM", activity: "Workshop: Innovation in Black Communities" },
        { time: "5:00 PM", activity: "Exhibition Closes" },
    ],
    day3: [
        { time: "7:00 PM", activity: "Final Red Carpet" },
        { time: "8:00 PM", activity: "Awards Ceremony Begins" },
        { time: "9:00 PM", activity: "Induction of Honorees" },
        { time: "10:30 PM", activity: "Headline Performance" },
        { time: "11:30 PM", activity: "Closing Remarks & Royal Night Party" },
    ]
}

const ProgramItem = ({ time, activity }: { time: string; activity: string }) => (
    <li className="flex items-start py-4">
        <div className="flex-shrink-0 w-24">
            <p className="font-bold text-primary">{time}</p>
        </div>
        <div className="flex-grow flex items-center">
            <CheckCircle className="w-5 h-5 mr-4 text-primary" />
            <p>{activity}</p>
        </div>
    </li>
);

export default function ProgramPage() {
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
            <div className="relative z-10 p-4 pt-24">
                <h1 className="text-4xl md:text-6xl font-bold font-headline mb-4 tracking-wide text-primary">
                Event Program
                </h1>
                <p className="text-lg md:text-xl max-w-4xl mx-auto text-slate-200">
                    Detailed schedule for the Black Royal Heroes Hall of Fame 2026.
                </p>
            </div>
        </section>
        
        <div className="container mx-auto px-4 py-16">
            <Tabs defaultValue="day1" className="w-full max-w-4xl mx-auto">
              <TabsList className="grid w-full grid-cols-3" data-ai-hint="program day selection tabs">
                <TabsTrigger value="day1">Day 1</TabsTrigger>
                <TabsTrigger value="day2">Day 2</TabsTrigger>
                <TabsTrigger value="day3">Day 3</TabsTrigger>
              </TabsList>
              <TabsContent value="day1">
                <ul className="divide-y divide-border">
                    {programDetails.day1.map(item => <ProgramItem key={item.activity} {...item} />)}
                </ul>
              </TabsContent>
              <TabsContent value="day2">
                <ul className="divide-y divide-border">
                    {programDetails.day2.map(item => <ProgramItem key={item.activity} {...item} />)}
                </ul>
              </TabsContent>
              <TabsContent value="day3">
                 <ul className="divide-y divide-border">
                    {programDetails.day3.map(item => <ProgramItem key={item.activity} {...item} />)}
                </ul>
              </TabsContent>
            </Tabs>
        </div>
      </main>
      <Footer />
    </div>
  );
}
