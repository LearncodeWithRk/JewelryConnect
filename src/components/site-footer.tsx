import Link from 'next/link';
import { Gem, Instagram, Facebook, Twitter, Youtube } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';

export function SiteFooter() {
  return (
    <footer className="bg-secondary text-foreground">
      <div className="container mx-auto py-12 px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="flex flex-col">
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <Gem className="h-8 w-8 text-primary" />
              <span className="font-bold font-headline text-xl">Shimmer</span>
            </Link>
            <p className="text-muted-foreground text-sm">
              Your personal guide to the world of fine jewelry.
            </p>
            <div className="flex space-x-4 mt-4">
              <Link href="#" aria-label="Instagram">
                <Instagram className="h-6 w-6 text-muted-foreground hover:text-primary transition-colors" />
              </Link>
              <Link href="#" aria-label="Facebook">
                <Facebook className="h-6 w-6 text-muted-foreground hover:text-primary transition-colors" />
              </Link>
              <Link href="#" aria-label="Twitter">
                <Twitter className="h-6 w-6 text-muted-foreground hover:text-primary transition-colors" />
              </Link>
              <Link href="#" aria-label="Youtube">
                <Youtube className="h-6 w-6 text-muted-foreground hover:text-primary transition-colors" />
              </Link>
            </div>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-sm text-muted-foreground hover:text-primary">About</Link></li>
              <li><Link href="/shop" className="text-sm text-muted-foreground hover:text-primary">Collections</Link></li>
              <li><Link href="/blog" className="text-sm text-muted-foreground hover:text-primary">Blog</Link></li>
              <li><Link href="/contact" className="text-sm text-muted-foreground hover:text-primary">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Consultations</h3>
            <ul className="space-y-2">
              <li><Link href="/booking" className="text-sm text-muted-foreground hover:text-primary">Personal Styling</Link></li>
              <li><Link href="/booking" className="text-sm text-muted-foreground hover:text-primary">Custom Design</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Newsletter</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Get updates on new collections, style tips, and exclusive discounts.
            </p>
            <form className="flex gap-2">
              <Input type="email" placeholder="Enter your email" className="bg-background" />
              <Button type="submit" variant="default">Subscribe</Button>
            </form>
          </div>
        </div>
        <div className="border-t mt-8 pt-6 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Shimmer. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
