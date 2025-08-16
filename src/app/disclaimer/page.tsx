import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function DisclaimerPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8 pt-24 md:pt-32">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold font-headline mb-8 text-primary">Disclaimer</h1>
          <div className="space-y-6 text-muted-foreground">
            <p><strong>Last Updated:</strong> {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
            
            <p>The information provided by Black Royal Heroes Hall of Fame ("we," "us," or "our") on this website is for general informational purposes only. All information on the site is provided in good faith, however, we make no representation or warranty of any kind, express or implied, regarding the accuracy, adequacy, validity, reliability, availability, or completeness of any information on the site.</p>
            
            <h2 className="text-2xl font-bold font-headline text-foreground pt-4">External Links Disclaimer</h2>
            <p>The site may contain (or you may be sent through the site) links to other websites or content belonging to or originating from third parties. Such external links are not investigated, monitored, or checked for accuracy, adequacy, validity, reliability, availability, or completeness by us. We do not warrant, endorse, guarantee, or assume responsibility for the accuracy or reliability of any information offered by third-party websites linked through the site.</p>
            
            <h2 className="text-2xl font-bold font-headline text-foreground pt-4">Professional Disclaimer</h2>
            <p>The site cannot and does not contain legal or financial advice. The information is provided for general informational and educational purposes only and is not a substitute for professional advice. Accordingly, before taking any actions based upon such information, we encourage you to consult with the appropriate professionals. The use or reliance of any information contained on this site is solely at your own risk.</p>
            
            <h2 className="text-2xl font-bold font-headline text-foreground pt-4">Event Information</h2>
            <p>Details regarding the Black Royal Heroes Hall of Fame 2026 event, including dates, venues, schedules, and participants, are subject to change without notice. We will endeavor to provide timely updates on our website, but we are not liable for any inconvenience or loss resulting from such changes.</p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
