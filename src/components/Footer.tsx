export default function Footer() {
  return (
    <footer className="border-t border-border mt-12 py-8 text-muted-foreground">
      <div className="container mx-auto text-center">
        <div className="mb-4">
          <h3 className="text-lg font-headline text-foreground mb-2">Related Links</h3>
          <ul className="flex justify-center space-x-4">
            <li><a href="#" className="hover:text-primary transition-colors">National Museum of African American History</a></li>
            <li><a href="#" className="hover:text-primary transition-colors">The King Center</a></li>
            <li><a href="#" className="hover:text-primary transition-colors">NAACP</a></li>
          </ul>
        </div>
        <p className="text-sm">&copy; {new Date().getFullYear()} Black Royal Heroes Tribute. All Rights Reserved.</p>
      </div>
    </footer>
  );
}
