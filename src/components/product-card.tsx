'use client';

import Image from 'next/image';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import type { Product } from '@/lib/data';
import { ShoppingCart } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const { toast } = useToast();
  const productImage = PlaceHolderImages.find(
    (img) => img.id === product.imageId
  );

  const handleAddToCart = () => {
    toast({
      title: 'Added to Cart!',
      description: `${product.name} has been added to your cart.`,
    });
  };

  return (
    <Card className="overflow-hidden group flex flex-col border-stone-200/60 shadow-sm hover:shadow-lg transition-shadow duration-300">
      <div className="aspect-square overflow-hidden relative">
        {productImage && (
          <Image
            src={productImage.imageUrl}
            alt={product.name}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            data-ai-hint={productImage.imageHint}
          />
        )}
      </div>
      <CardHeader className="flex-grow">
        <CardTitle className="font-body text-xl">{product.name}</CardTitle>
        <CardDescription className="text-sm pt-1">{product.description}</CardDescription>
      </CardHeader>
      <CardFooter className="flex justify-between items-center">
        <p className="text-xl font-bold text-accent">${product.price.toFixed(2)}</p>
        <Button variant="outline" size="icon" onClick={handleAddToCart} aria-label={`Add ${product.name} to cart`}>
          <ShoppingCart className="h-5 w-5" />
        </Button>
      </CardFooter>
    </Card>
  );
}
