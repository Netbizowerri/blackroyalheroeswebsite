import Header from '@/components/Header';
import Footer from '@/components/Footer';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import Image from 'next/image';

const faqs = [
    {
        question: "What is the Black Royal Heroes Hall of Fame?",
        answer: "It's a special event celebrating 200 years (1826-2026) of achievements by Black heroes and personalities who have made significant contributions to global history and development."
    },
    {
        question: "When and where is the event taking place?",
        answer: "The main event is scheduled for October 2026. The specific venue will be a major convention center, with details confirmed to registered attendees."
    },
    {
        question: "How can I nominate someone?",
        answer: "You can nominate a deserving individual by visiting our 'Nominate' page and filling out the nomination form. Nominations are free."
    },
    {
        question: "Is there a fee to attend the event?",
        answer: "While nominations and basic registration are free, attending the event requires purchasing a ticket/seat. We have several seating options available on our 'Register' page."
    },
    {
        question: "What is the deadline for nominations and ticket payments?",
        answer: "The firm deadline for all nominations and payments is August 30th, 2026. This allows us to make necessary arrangements for the event."
    },
    {
        question: "What is the refund policy?",
        answer: "Refunds can be requested before the August 30th, 2026 deadline. After this date, no refunds will be issued as we will have made financial commitments to vendors. Please see our Terms page for full details."
    },
     {
        question: "Can I transfer my ticket to someone else?",
        answer: "Yes, tickets are transferable. You must provide written notice to us before the August 30th, 2026 deadline with the new attendee's details."
    }
]

export default function FAQPage() {
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
                Frequently Asked Questions
                </h1>
                <p className="text-lg md:text-xl max-w-4xl mx-auto text-slate-200">
                    Find answers to common questions about the event.
                </p>
            </div>
        </section>

        <div className="container mx-auto px-4 py-16">
            <div className="max-w-4xl mx-auto">
                <Accordion type="single" collapsible className="w-full">
                    {faqs.map((faq, index) => (
                        <AccordionItem key={index} value={`item-${index}`}>
                            <AccordionTrigger className="text-left font-bold">{faq.question}</AccordionTrigger>
                            <AccordionContent className="text-muted-foreground">
                                {faq.answer}
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
