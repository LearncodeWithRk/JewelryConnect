'use client';

import Image from 'next/image';
import {
  Card,
  CardContent,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import type { Product } from '@/lib/data';
import { ShoppingCart, MessageSquare, CalendarPlus } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const { toast } = useToast();
  const router = useRouter();
  const productImage = PlaceHolderImages.find(
    (img) => img.id === product.imageId
  );

  const handleAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation();
    e.preventDefault();
    toast({
      title: 'Added to Cart!',
      description: `${product.name} has been added to your cart.`,
    });
  };

  const handleWhatsAppInquiry = (e: React.MouseEvent) => {
    e.stopPropagation();
    e.preventDefault();
    const message = `Hello Shimmer! I have a question about the product: ${product.name}.`;
    const whatsappUrl = `https://api.whatsapp.com/send/?phone=919599695872&text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappUrl, '_blank');
  }

  const handleBookingClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    e.preventDefault();
    router.push('/booking');
  }

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
           <div className="absolute top-2 right-2 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
            <Button variant="secondary" size="icon" onClick={handleAddToCart} aria-label={`Add ${product.name} to cart`} className="h-8 w-8">
                <ShoppingCart className="h-4 w-4" />
            </Button>
            <Button variant="secondary" size="icon" onClick={handleWhatsAppInquiry} aria-label={`Inquire about ${product.name} on WhatsApp`} className="h-8 w-8 bg-green-500 hover:bg-green-600 text-white">
                <MessageSquare className="h-4 w-4" />
            </Button>
            <Button variant="secondary" size="icon" onClick={handleBookingClick} aria-label={`Book consultation for ${product.name}`} className="h-8 w-8 bg-primary hover:bg-primary/90 text-primary-foreground">
                <CalendarPlus className="h-4 w-4" />
            </Button>
           </div>
        </div>
        <CardContent className="p-4">
          <h3 className="font-semibold text-lg">{product.name}</h3>
          <p className="text-muted-foreground">${product.price.toFixed(2)}</p>
        </CardContent>
      </Card>
    </Link>
  );
}
