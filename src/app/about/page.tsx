import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowRight, Sparkles, Gem } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About | JewelryConnect',
  description: 'Learn about the passion, story, and expertise behind JewelryConnect. Discover the journey of a jewelry influencer dedicated to style.',
};


const aboutImage = PlaceHolderImages.find((img) => img.id === 'about-influencer');

export default function AboutPage() {
  return (
    <div className="bg-background">
      <div className="container mx-auto px-4 py-16 lg:py-24">
        
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="order-2 md:order-1">
            <h1 className="font-headline text-5xl md:text-6xl font-bold mb-6">
              A Passion Forged in Sparkle
            </h1>
            <p className="text-lg text-muted-foreground mb-4">
              Welcome to my world of jewelry! I'm [Your Name], the heart and soul behind JewelryConnect. For as long as I can remember, I've been captivated by the stories that jewelry tells—the heirlooms passed down through generations, the bold statements of individuality, and the subtle whispers of elegance.
            </p>
            <p className="text-lg text-muted-foreground mb-4">
              My journey began not in a studio, but by exploring my grandmother's jewelry box. Each piece was a treasure with a unique history. This ignited a lifelong passion that led me to study gemology and design, eventually sharing my love for jewelry with a growing online community.
            </p>
            <p className="text-lg text-muted-foreground mb-6">
              JewelryConnect is more than just a brand; it's a culmination of that journey. It's a place where I can share my expertise, help you find pieces that resonate with your personal style, and even collaborate on creating the custom jewelry of your dreams.
            </p>
            <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 group">
              <Link href="/booking">
                Start Your Style Journey <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
          <div className="order-1 md:order-2">
            <div className="aspect-w-4 aspect-h-5">
              {aboutImage && (
                <Image
                  src={aboutImage.imageUrl}
                  alt={aboutImage.description}
                  width={800}
                  height={1000}
                  className="rounded-lg shadow-2xl object-cover"
                  data-ai-hint={aboutImage.imageHint}
                />
              )}
            </div>
          </div>
        </div>

        <div className="mt-24 lg:mt-32 grid md:grid-cols-3 gap-8 text-center">
            <div className="flex flex-col items-center">
                <div className="flex items-center justify-center h-16 w-16 rounded-full bg-primary/20 text-primary mb-4">
                    <Sparkles className="h-8 w-8" />
                </div>
                <h3 className="font-headline text-2xl font-bold">Personal Styling</h3>
                <p className="text-muted-foreground mt-2">Discover pieces that truly represent you with one-on-one styling advice.</p>
            </div>
            <div className="flex flex-col items-center">
                <div className="flex items-center justify-center h-16 w-16 rounded-full bg-primary/20 text-primary mb-4">
                    <Gem className="h-8 w-8" />
                </div>
                <h3 className="font-headline text-2xl font-bold">Custom Designs</h3>
                <p className="text-muted-foreground mt-2">Bring your vision to life by collaborating on a unique, custom-made piece.</p>
            </div>
            <div className="flex flex-col items-center">
                <div className="flex items-center justify-center h-16 w-16 rounded-full bg-primary/20 text-primary mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-8 w-8 lucide lucide-shield-check"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"/><path d="m9 12 2 2 4-4"/></svg>
                </div>
                <h3 className="font-headline text-2xl font-bold">Community & Trust</h3>
                <p className="text-muted-foreground mt-2">Join a community built on a shared passion for quality, craftsmanship, and style.</p>
            </div>
        </div>
      </div>
    </div>
  );
}
