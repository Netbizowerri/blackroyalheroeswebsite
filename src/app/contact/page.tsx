import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Mail, Phone, MapPin } from 'lucide-react';
import Image from 'next/image';

export default function ContactPage() {
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
                Contact Us
                </h1>
                <p className="text-lg md:text-xl max-w-4xl mx-auto text-slate-200">
                    We'd love to hear from you. Reach out with any questions, inquiries, or feedback.
                </p>
            </div>
        </section>

        <div className="container mx-auto px-4 py-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
                <div className="space-y-8">
                    <div className="flex items-start gap-4">
                        <div className="p-3 bg-secondary rounded-full">
                            <Mail className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                            <h3 className="text-xl font-bold font-headline">Email</h3>
                            <p className="text-muted-foreground">For general inquiries, media, and partnerships.</p>
                            <a href="mailto:blackroyalheroes@gmail.com" className="text-primary hover:underline">blackroyalheroes@gmail.com</a>
                        </div>
                    </div>
                     <div className="flex items-start gap-4">
                        <div className="p-3 bg-secondary rounded-full">
                            <Phone className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                            <h3 className="text-xl font-bold font-headline">Phone</h3>
                            <p className="text-muted-foreground">Speak with our event coordination team.</p>
                            <a href="tel:+2348060291423" className="text-primary hover:underline">+234 806 029 1423</a>
                        </div>
                    </div>
                     <div className="flex items-start gap-4">
                        <div className="p-3 bg-secondary rounded-full">
                            <MapPin className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                            <h3 className="text-xl font-bold font-headline">Event Venue</h3>
                            <p className="text-muted-foreground">Convention Center, Downtown</p>
                            <p className="text-muted-foreground">123 Event Street, Cityville, Country</p>
                        </div>
                    </div>
                </div>

                <Card>
                    <CardHeader>
                        <CardTitle>Send us a Message</CardTitle>
                        <CardDescription>Fill out the form below and we'll get back to you shortly.</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <form className="space-y-4">
                            <div className="space-y-1">
                                <label htmlFor="name">Full Name</label>
                                <Input id="name" placeholder="Your Name" />
                            </div>
                             <div className="space-y-1">
                                <label htmlFor="email">Email Address</label>
                                <Input id="email" type="email" placeholder="Your Email" />
                            </div>
                             <div className="space-y-1">
                                <label htmlFor="subject">Subject</label>
                                <Input id="subject" placeholder="Message Subject" />
                            </div>
                             <div className="space-y-1">
                                <label htmlFor="message">Message</label>
                                <Textarea id="message" placeholder="Your message..." rows={5} />
                            </div>
                            <Button type="submit" className="w-full">Send Message</Button>
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
