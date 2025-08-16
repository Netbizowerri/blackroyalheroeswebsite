import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import Image from 'next/image';

export default function NominatePage() {
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
                Nominate a Hero
                </h1>
                <p className="text-lg md:text-xl max-w-4xl mx-auto text-slate-200">
                  Honor a distinguished individual by nominating them for the Black Royal Heroes Hall of Fame.
                </p>
            </div>
        </section>

        <div className="container mx-auto px-4 py-16">
            <div className="max-w-4xl mx-auto">
              <Card>
                <CardHeader>
                  <CardTitle>Nomination Form</CardTitle>
                  <CardDescription>Please provide the details of the person you are nominating.</CardDescription>
                </CardHeader>
                <CardContent>
                  <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label htmlFor="nominator-name">Your Name</label>
                        <Input id="nominator-name" placeholder="Enter your full name" />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="nominator-email">Your Email</label>
                        <Input id="nominator-email" type="email" placeholder="Enter your email address" />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="nominee-name">Nominee's Full Name</label>
                      <Input id="nominee-name" placeholder="Enter the nominee's name" />
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="nominee-category">Category of Nomination</label>
                      <Select>
                        <SelectTrigger id="nominee-category">
                          <SelectValue placeholder="Select a category" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="a">Category A – Political Leaders and Activists</SelectItem>
                          <SelectItem value="b">Category B – Cultural Icons and Innovators</SelectItem>
                          <SelectItem value="c">Category C – Community Champions</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="nomination-reason">Reason for Nomination</label>
                      <Textarea id="nomination-reason" placeholder="Explain why this person deserves to be honored (achievements, impact, etc.)." rows={6} />
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="supporting-docs">Supporting Documents (Optional)</label>
                      <Input id="supporting-docs" type="file" />
                      <p className="text-sm text-muted-foreground">You can upload files like articles, photos, or documents.</p>
                    </div>

                    <Button type="submit" className="w-full" size="lg">Submit Nomination</Button>
                  </form>
                </CardContent>
              </Card>
            </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
