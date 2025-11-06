import { PlaceHolderImages } from '@/lib/placeholder-images';
import { testimonials, products } from '@/lib/data';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Sparkles, ArrowRight } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'JewelryConnect - Your Personal Jewelry Stylist',
  description: 'Captivating jewelry, personal styling, and expert consultations. Discover your signature sparkle with JewelryConnect.',
};


const heroImage = PlaceHolderImages.find((img) => img.id === 'hero-banner');

export default function Home() {
  const featuredProducts = products.slice(0, 4);

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[60vh] md:h-[80vh] w-full">
        {heroImage && (
          <Image
            src={heroImage.imageUrl}
            alt={heroImage.description}
            fill
            className="object-cover"
            priority
            data-ai-hint={heroImage.imageHint}
          />
        )}
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white p-4">
          <h1 className="font-headline text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter drop-shadow-lg">
            Discover Your Signature Sparkle
          </h1>
          <p className="mt-4 max-w-2xl text-lg md:text-xl text-neutral-200">
            From timeless classics to modern designs, get personalized styling advice from a passionate jewelry expert.
          </p>
          <Button asChild size="lg" className="mt-8 bg-primary text-primary-foreground hover:bg-primary/90 text-lg group">
            <Link href="/booking">
              Book a Consultation <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 lg:py-24 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-headline text-4xl md:text-5xl font-bold">What My Clients Say</h2>
            <p className="mt-2 text-lg text-muted-foreground">Stories of style and confidence.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => {
              const avatarImage = PlaceHolderImages.find((img) => img.id === testimonial.avatarId);
              return (
                <Card key={testimonial.id} className="bg-background border-none shadow-lg transform hover:-translate-y-2 transition-transform duration-300">
                  <CardContent className="pt-6">
                    <p className="italic text-muted-foreground">"{testimonial.quote}"</p>
                  </CardContent>
                  <CardFooter className="flex items-center gap-4">
                    {avatarImage && (
                       <Avatar>
                        <AvatarImage src={avatarImage.imageUrl} alt={testimonial.name} data-ai-hint={avatarImage.imageHint} />
                        <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                      </Avatar>
                    )}
                    <div>
                      <p className="font-semibold">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                    </div>
                  </CardFooter>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Highlight Products Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-headline text-4xl md:text-5xl font-bold">Featured Pieces</h2>
            <p className="mt-2 text-lg text-muted-foreground">A curated selection of my favorite jewelry.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.map((product) => {
              const productImage = PlaceHolderImages.find((img) => img.id === product.imageId);
              return (
                <Card key={product.id} className="overflow-hidden group border-none shadow-lg">
                  <Link href={`/shop`}>
                    <div className="aspect-square overflow-hidden">
                      {productImage && (
                        <Image
                          src={productImage.imageUrl}
                          alt={product.name}
                          width={400}
                          height={400}
                          className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                          data-ai-hint={productImage.imageHint}
                        />
                      )}
                    </div>
                    <CardHeader>
                      <CardTitle className="font-body text-xl group-hover:text-primary transition-colors">{product.name}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-lg font-semibold text-accent">${product.price.toFixed(2)}</p>
                    </CardContent>
                  </Link>
                </Card>
              );
            })}
          </div>
          <div className="text-center mt-12">
            <Button asChild variant="outline" size="lg">
              <Link href="/shop">Explore All Collections</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
