import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function TermsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8 pt-24 md:pt-32">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold font-headline mb-8 text-primary">Terms and Conditions</h1>
          <div className="space-y-6 text-muted-foreground">
            <p><strong>Last Updated:</strong> {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
            
            <p>Please read these Terms and Conditions ("Terms") carefully before using the Black Royal Heroes Hall of Fame 2026 website (the "Service") operated by us.</p>
            <p>Your access to and use of the Service is conditioned on your acceptance of and compliance with these Terms. These Terms apply to all visitors, users, and others who access or use the Service.</p>

            <h2 className="text-2xl font-bold font-headline text-foreground pt-4">1. Registration and Payments</h2>
            <p>By registering for the event, you agree to provide accurate and complete information. All payments for seats/tickets must be completed during online registration before the promotional deadline as stated on the registration page.</p>

            <h2 className="text-2xl font-bold font-headline text-foreground pt-4">2. Refund and Transfer Policy</h2>
            <p>Refund requests will only be considered if submitted in writing before the promotional deadline of August 30th, 2026. No refunds will be issued after this date. Approved refunds will be processed within 14 working days. Tickets are transferable to another individual provided written notice is given before the deadline.</p>

            <h2 className="text-2xl font-bold font-headline text-foreground pt-4">3. Event Conduct</h2>
            <p>We reserve the right to refuse entry to or remove any person from the event for any reason, including but not limited to, behavior that is disruptive, disrespectful, or dangerous. All attendees must comply with all applicable laws and venue rules.</p>
            
            <h2 className="text-2xl font-bold font-headline text-foreground pt-4">4. Intellectual Property</h2>
            <p>The Service and its original content, features, and functionality are and will remain the exclusive property of Black Royal Heroes Hall of Fame and its licensors. The content on this website, including text, graphics, logos, and images, is protected by copyright and other intellectual property laws.</p>

            <h2 className="text-2xl font-bold font-headline text-foreground pt-4">5. Limitation of Liability</h2>
            <p>In no event shall Black Royal Heroes Hall of Fame, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of or inability to access or use the Service.</p>

            <h2 className="text-2xl font-bold font-headline text-foreground pt-4">6. Changes to Terms</h2>
            <p>We reserve the right, at our sole discretion, to modify or replace these Terms at any time. We will provide notice of any changes by posting the new Terms on this page.</p>
            
            <h2 className="text-2xl font-bold font-headline text-foreground pt-4">7. Contact Us</h2>
            <p>If you have any questions about these Terms, please contact us at <a href="mailto:blackroyalheroes@gmail.com" className="text-primary hover:underline">blackroyalheroes@gmail.com</a>.</p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
