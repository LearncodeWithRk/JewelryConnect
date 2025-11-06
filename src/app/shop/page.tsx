import { products } from '@/lib/data';
import { ProductCard } from '@/components/product-card';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Shop | JewelryConnect',
  description: 'Explore our curated collections of necklaces, earrings, rings, and bracelets. Find your next treasured piece at JewelryConnect.',
};

export default function ShopPage() {
  return (
    <div className="bg-background">
      <div className="container mx-auto px-4 py-16 lg:py-24">
        <div className="text-center mb-12">
          <h1 className="font-headline text-5xl md:text-6xl font-bold">Our Collections</h1>
          <p className="mt-2 text-lg text-muted-foreground">
            Hand-picked and designed with passion. Find the piece that speaks to you.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}
