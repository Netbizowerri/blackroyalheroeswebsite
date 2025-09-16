'use client';

import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle } from 'lucide-react';
import Image from 'next/image';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import CheckoutForm from '@/components/CheckoutForm';

export const seatingOptions = [
  {
    title: 'Royal Seats – Diamond Ticket',
    price: '$350.00',
    imageUrl: 'https://i.ibb.co/MxC8WqLc/Royal-Black-Hero-Tickets.png',
    imageHint: 'diamond ticket',
    benefits: [
      'VIP Royal Seating at all events',
      'Exclusive Gala Night Access',
      'Premium Networking',
      'Special Recognition Package',
    ],
  },
  {
    title: 'Corporate Seats – Gold Ticket',
    price: '$275.00',
    imageUrl: 'https://i.ibb.co/4wpSp2kv/Royal-Black-Hero-Tickets-1.png',
    imageHint: 'gold ticket',
    benefits: [
      'Premium Corporate Seating',
      'Access to All Main Events',
      'Cultural Showcase Entry',
      'Corporate Recognition',
    ],
  },
  {
    title: 'General Seats – GEN Ticket',
    price: '$225.00',
    imageUrl: 'https://i.ibb.co/5hxKzKqQ/Royal-Black-Hero-Tickets-2.png',
    imageHint: 'general ticket',
    benefits: [
      'General Admission Seating',
      'Access to All Public Ceremonies',
      'Cultural Exhibitions Entry',
      'Royal Night Attendance',
    ],
  },
];

const terms = [
    {
        title: "Payments",
        content: "All payments for seats/tickets must be completed during online registration before the promotional deadline."
    },
    {
        title: "Refund Policy",
        content: "Refund requests will only be entertained if submitted before the promotional deadline (30th August 2026). Refunds will not be processed once the deadline has passed due to advance commitments made for the event. Approved refunds will be processed within 14 working days."
    },
    {
        title: "Non-Attendance",
        content: "Participants who fail to attend after the deadline are not eligible for refunds. Seat/ticket privileges are transferable to another individual provided written notice is given before the deadline."
    },
    {
        title: "Confirmation",
        content: "Successful registration and payment entitles participants to receive their Receipt, Invitation, and Official Ticket via email."
    }
];

export type SeatingOption = typeof seatingOptions[0];

export default function RegisterPage() {
  const [selectedTicket, setSelectedTicket] = useState<SeatingOption | null>(null);
  const [animatingIndex, setAnimatingIndex] = useState<number | null>(null);
  const [showThankYou, setShowThankYou] = useState(false);

  const handleCheckoutSuccess = () => {
    setSelectedTicket(null); // Close the checkout form dialog
    setShowThankYou(true); // Open the thank you dialog
  };

  const handleSelectSeat = (option: SeatingOption, index: number) => {
    setAnimatingIndex(index);
    setTimeout(() => {
      setSelectedTicket(option);
      setAnimatingIndex(null);
    }, 200); // Animation duration
  };

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
                Choose Your Seat – Secure Your Place
                </h1>
                <p className="text-lg md:text-xl max-w-4xl mx-auto text-slate-200">
                  Nomination & Registration are FREE. Attendance requires seat/ticket selection.
                </p>
            </div>
        </section>

        <div className="container mx-auto px-4 py-16">
            <div className="text-center mb-8">
              <p className="text-lg max-w-3xl mx-auto text-muted-foreground">
                All payments must be completed during registration to receive:
              </p>
              <ul className="mt-4 text-primary list-none space-y-1">
                  <li>Official Receipt for Payment</li>
                  <li>Official Invitation to the Event</li>
                  <li>Participation Ticket (based on seat chosen)</li>
              </ul>
            </div>
            
            <section className="my-16">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {seatingOptions.map((option, index) => (
                  <Card key={option.title} className="flex flex-col">
                    <CardHeader>
                      <div className="relative aspect-video w-full rounded-md overflow-hidden mb-4">
                        <Image
                            src={option.imageUrl}
                            alt={option.title}
                            fill
                            className="object-cover"
                            data-ai-hint={option.imageHint}
                        />
                      </div>
                      <CardTitle className="font-headline text-2xl">{option.title}</CardTitle>
                      <CardDescription className="text-3xl font-bold text-primary">{option.price}</CardDescription>
                    </CardHeader>
                    <CardContent className="flex-grow">
                      <ul className="space-y-3">
                        {option.benefits.map((benefit) => (
                          <li key={benefit} className="flex items-start">
                            <CheckCircle className="w-5 h-5 mr-2 text-primary flex-shrink-0 mt-1" />
                            <span>{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                    <CardFooter>
                      <Button
                        className={`w-full transition-transform duration-200 ${
                          animatingIndex === index ? 'scale-90' : ''
                        }`}
                        size="lg"
                        onClick={() => handleSelectSeat(option, index)}>
                          Select Seat
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </section>

            <section className="my-16 p-8 bg-secondary/30 rounded-lg">
                <h2 className="text-3xl font-bold font-headline mb-6 text-center">Terms & Conditions (Payment & Refunds)</h2>
                <div className="space-y-4">
                    {terms.map(term => (
                        <div key={term.title}>
                            <h3 className="font-bold text-lg text-primary">{term.title}</h3>
                            <p className="text-muted-foreground">{term.content}</p>
                        </div>
                    ))}
                </div>
            </section>
        </div>

        <Dialog open={!!selectedTicket} onOpenChange={(isOpen) => !isOpen && setSelectedTicket(null)}>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>Secure Your Seat</DialogTitle>
                </DialogHeader>
                {selectedTicket && (
                    <CheckoutForm ticket={selectedTicket} onCheckoutSuccess={handleCheckoutSuccess} />
                )}
            </DialogContent>
        </Dialog>

        {/* Thank You Dialog */}
        <Dialog open={showThankYou} onOpenChange={setShowThankYou}>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Thank You!</DialogTitle>
              <DialogDescription className="pt-4 text-muted-foreground">
                Thank you for your booking! We have received your details. Please check your email shortly for payment instructions to finalize your seat reservation.
              </DialogDescription>
            </DialogHeader>
            <div className="grid grid-cols-2 gap-4 pt-4">
              <Button asChild variant="outline">
                <Link href="/">Homepage</Link>
              </Button>
              <Button asChild><Link href="/nominate">Nominate a Hero</Link></Button>
            </div>
          </DialogContent>
        </Dialog>

      </main>
      <Footer />
    </div>
  );
}
