import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function PrivacyPolicyPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8 pt-24 md:pt-32">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold font-headline mb-8 text-primary">Privacy Policy</h1>
          <div className="space-y-6 text-muted-foreground">
            <p><strong>Last Updated:</strong> {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
            
            <p>Black Royal Heroes Hall of Fame ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website.</p>

            <h2 className="text-2xl font-bold font-headline text-foreground pt-4">1. Information We Collect</h2>
            <p>We may collect personal information from you such as your name, email address, phone number, and payment information when you register for an event, nominate a hero, or otherwise interact with our website. We may also collect non-personal information, such as browser type, operating system, and web pages visited to help us manage our website.</p>

            <h2 className="text-2xl font-bold font-headline text-foreground pt-4">2. Use of Your Information</h2>
            <p>We may use the information we collect from you to:</p>
            <ul className="list-disc list-inside space-y-2 pl-4">
              <li>Process your registration and payments.</li>
              <li>Send you information about the event.</li>
              <li>Respond to your inquiries and customer service requests.</li>
              <li>Improve our website and services.</li>
              <li>Send you promotional emails about future events, with your consent.</li>
            </ul>

            <h2 className="text-2xl font-bold font-headline text-foreground pt-4">3. Disclosure of Your Information</h2>
            <p>We do not sell, trade, or otherwise transfer your personally identifiable information to outside parties. This does not include trusted third parties who assist us in operating our website, conducting our business, or servicing you, so long as those parties agree to keep this information confidential.</p>

            <h2 className="text-2xl font-bold font-headline text-foreground pt-4">4. Data Security</h2>
            <p>We implement a variety of security measures to maintain the safety of your personal information. Your personal information is contained behind secured networks and is only accessible by a limited number of persons who have special access rights to such systems, and are required to keep the information confidential.</p>

            <h2 className="text-2xl font-bold font-headline text-foreground pt-4">5. Changes to This Privacy Policy</h2>
            <p>We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page. You are advised to review this Privacy Policy periodically for any changes.</p>

            <h2 className="text-2xl font-bold font-headline text-foreground pt-4">6. Contact Us</h2>
            <p>If you have any questions about this Privacy Policy, please contact us at <a href="mailto:blackroyalheroes@gmail.com" className="text-primary hover:underline">blackroyalheroes@gmail.com</a>.</p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
