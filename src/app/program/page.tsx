import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CheckCircle } from 'lucide-react';

const programDetails = {
    day1: [
        { time: "6:00 PM", activity: "Arrival & Red Carpet" },
        { time: "7:00 PM", activity: "Welcome Address" },
        { time: "7:30 PM", activity: "Opening Performances" },
        { time: "8:30 PM", activity: "Gala Dinner" },
        { time: "10:00 PM", activity: "Networking & Live Music" },
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
      <main className="flex-grow container mx-auto px-4 py-8 pt-24 md:pt-32">
        <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold font-headline mb-4 text-primary">Event Program</h1>
            <p className="text-lg max-w-3xl mx-auto text-muted-foreground">
                Detailed schedule for the Black Royal Heroes Hall of Fame 2026.
            </p>
        </div>
        
        <Tabs defaultValue="day1" className="w-full max-w-4xl mx-auto">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="day1">Day 1: Gala Night</TabsTrigger>
            <TabsTrigger value="day2">Day 2: Showcase</TabsTrigger>
            <TabsTrigger value="day3">Day 3: Awards</TabsTrigger>
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
      </main>
      <Footer />
    </div>
  );
}
