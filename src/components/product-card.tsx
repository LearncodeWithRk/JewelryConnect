'use client';

import Image from 'next/image';
import {
  Card,
  CardContent,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import type { Product } from '@/lib/data';
import { ShoppingCart } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import Link from 'next/link';

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const { toast } = useToast();
  const productImage = PlaceHolderImages.find(
    (img) => img.id === product.imageId
  );

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    toast({
      title: 'Added to Cart!',
      description: `${product.name} has been added to your cart.`,
    });
  };

  return (
    <Link href="#" className="group">
      <Card className="overflow-hidden group flex flex-col border-none shadow-none bg-transparent text-center">
        <div className="aspect-square overflow-hidden relative rounded-lg">
          {productImage && (
            <Image
              src={productImage.imageUrl}
              alt={product.name}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
              data-ai-hint={productImage.imageHint}
            />
          )}
           <Button variant="secondary" size="icon" onClick={handleAddToCart} aria-label={`Add ${product.name} to cart`} className="absolute top-2 right-2 h-8 w-8 opacity-0 group-hover:opacity-100 transition-opacity">
            <ShoppingCart className="h-4 w-4" />
          </Button>
        </div>
        <CardContent className="p-4">
          <h3 className="font-semibold text-lg">{product.name}</h3>
          <p className="text-muted-foreground">${product.price.toFixed(2)}</p>
        </CardContent>
      </Card>
    </Link>
  );
}
