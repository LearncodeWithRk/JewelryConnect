import { products } from '@/lib/data';
import { ProductCard } from '@/components/product-card';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Collections | Shimmer',
  description: 'Explore our curated collections of necklaces, earrings, rings, and bracelets. Find your next treasured piece at Shimmer.',
};

export default function ShopPage() {
  return (
    <div className="bg-background">
      <div className='bg-secondary'>
        <div className="container mx-auto px-4 py-16 lg:py-24">
            
            <div className='text-center'>
                <h1 className="font-headline text-5xl md:text-6xl font-bold">Our Collections</h1>
                <p className="mt-2 text-lg text-muted-foreground max-w-2xl mx-auto">
                    Hand-picked and designed with passion. Find the piece that speaks to you from our curated selection of fine jewelry.
                </p>
            </div>
        </div>
      </div>
      <div className="container mx-auto px-4 py-16 lg:py-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}
