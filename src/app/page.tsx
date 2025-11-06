import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';
import {
  Card,
  CardContent,
} from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { ArrowRight, Star, ShoppingBag, Truck, Package, Award, Gem } from 'lucide-react';
import type { Metadata } from 'next';
import { WhatsappBookingForm } from '@/components/whatsapp-booking-form';

export const metadata: Metadata = {
  title: 'Shimmer - Luxury Collections',
  description: 'Discover luxury jewelry collections. Shimmer offers exquisite designs and high-quality craftsmanship.',
};

const heroImage = PlaceHolderImages.find((img) => img.id === 'hero-banner-new');

const featureItems = [
    { icon: <Truck className="h-8 w-8 text-primary" />, title: "Free Shipping", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
    { icon: <Award className="h-8 w-8 text-primary" />, title: "Exclusive Design", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
    { icon: <Package className="h-8 w-8 text-primary" />, title: "Good Packaging", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
    { icon: <ShoppingBag className="h-8 w-8 text-primary" />, title: "Highest Quality", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
]

export default function Home() {

  const radiantRefinementImage = PlaceHolderImages.find((img) => img.id === 'radiant-refinement');
  const radiantRefinementDetailImage = PlaceHolderImages.find((img) => img.id === 'radiant-refinement-detail');
  const collectionEarringImage = PlaceHolderImages.find((img) => img.id === 'collection-earring');
  const collectionRingImage = PlaceHolderImages.find((img) => img.id === 'collection-ring');
  const collectionNecklaceImage = PlaceHolderImages.find((img) => img.id === 'collection-necklace');

  const videoImage = PlaceHolderImages.find((img) => img.id === 'video-placeholder');
  const typeRingImage = PlaceHolderImages.find(img => img.id === 'type-ring');
  const typeNecklaceImage = PlaceHolderImages.find(img => img.id === 'type-necklace');
  const typeBraceletImage = PlaceHolderImages.find(img => img.id === 'type-bracelet');

  const brandLogos = [
    { name: 'VOGUE' },
    { name: 'GLAMOUR' },
    { name: 'ELLE' },
    { name: 'BAZAAR' },
    { name: 'InStyle' },
  ];

  return (
    <div className="flex flex-col bg-background text-foreground">
      {/* Hero Section */}
      <section className="relative h-auto md:h-[90vh] w-full text-white flex items-center justify-center py-20 md:py-0">
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
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 container mx-auto px-4 grid md:grid-cols-2 gap-8 items-center">
            <div className="max-w-xl">
                <h1 className="font-headline text-5xl md:text-7xl font-bold tracking-tight">
                Our Luxury Collections
                </h1>
                <p className="mt-4 text-lg text-neutral-200">
                    Discover exquisite designs and high-quality craftsmanship. Book a consultation via WhatsApp today.
                </p>
                <Button asChild variant="outline" size="lg" className="mt-6 bg-transparent hover:bg-white hover:text-black border-white text-white">
                  <Link href="/shop">View Collection</Link>
                </Button>
            </div>
            <div className="flex flex-col items-center gap-4">
              <WhatsappBookingForm />
            </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featureItems.map(item => (
                 <div key={item.title} className="text-center flex flex-col items-center">
                    <div className='bg-secondary p-4 rounded-full mb-4'>{item.icon}</div>
                    <h3 className="font-headline text-2xl font-bold">{item.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground">{item.description}</p>
                </div>
            ))}
          </div>
        </div>
      </section>

       {/* Radiant Refinement Section */}
      <section className="py-16 lg:py-24 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative">
                {radiantRefinementImage && (
                    <Image src={radiantRefinementImage.imageUrl} alt={radiantRefinementImage.description} width={500} height={600} className="rounded-lg shadow-lg object-cover" data-ai-hint={radiantRefinementImage.imageHint} />
                )}
                <div className="absolute top-4 left-4 bg-black/50 text-white px-3 py-1 rounded-full flex items-center gap-1 text-xs">
                    <Star className="w-4 h-4" fill="white" />
                    <span>(5/5)</span>
                </div>
            </div>
            <div>
              <h2 className="font-headline text-5xl font-bold mb-6">The Art Of Radiant Refinement</h2>
              <p className="text-muted-foreground mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu.
              </p>
              <Button asChild variant="outline" size="lg" className="mt-4">
                <Link href="/about">Learn More</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>


      {/* Our Collection Section */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-1/4">
              <h2 className="font-headline text-5xl font-bold mb-4">Our Collection</h2>
              <p className="text-muted-foreground mb-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
              </p>
              <Button asChild variant="outline">
                <Link href="/shop">See More</Link>
              </Button>
            </div>
            <div className="md:w-3/4 grid grid-cols-1 sm:grid-cols-3 gap-8">
              <Card className="border-none shadow-none bg-transparent">
                  {collectionEarringImage && <Image src={collectionEarringImage.imageUrl} alt="Gold Earring" width={300} height={300} className="rounded-lg object-cover w-full aspect-square" data-ai-hint={collectionEarringImage.imageHint} />}
                  <CardContent className="p-4 text-center">
                      <h3 className="font-semibold text-lg">Gold Earring</h3>
                      <p className="text-muted-foreground">$240,00</p>
                  </CardContent>
              </Card>
              <Card className="border-none shadow-none bg-transparent">
                  {collectionRingImage && <Image src={collectionRingImage.imageUrl} alt="Diamond Ring" width={300} height={300} className="rounded-lg object-cover w-full aspect-square" data-ai-hint={collectionRingImage.imageHint} />}
                  <CardContent className="p-4 text-center">
                      <h3 className="font-semibold text-lg">Diamond Ring</h3>
                      <p className="text-muted-foreground">$240,00</p>
                  </CardContent>
              </Card>
              <Card className="border-none shadow-none bg-transparent">
                  {collectionNecklaceImage && <Image src={collectionNecklaceImage.imageUrl} alt="Gold Necklace" width={300} height={300} className="rounded-lg object-cover w-full aspect-square" data-ai-hint={collectionNecklaceImage.imageHint} />}
                  <CardContent className="p-4 text-center">
                      <h3 className="font-semibold text-lg">Gold Necklace</h3>
                      <p className="text-muted-foreground">$240,00</p>
                  </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Choose the Type Section */}
      <section className="py-16 lg:py-24 bg-secondary">
          <div className='container mx-auto px-4'>
            <div className='grid md:grid-cols-2 gap-12 items-center'>
                <div className='relative'>
                    {videoImage && <Image src={videoImage.imageUrl} alt={videoImage.description} width={600} height={400} className='rounded-lg shadow-lg' data-ai-hint={videoImage.imageHint}/>}
                    <div className='absolute inset-0 flex items-center justify-center'>
                        <Button variant='outline' size='icon' className='h-20 w-20 rounded-full bg-white/50 backdrop-blur-sm border-white'>
                            <svg className='w-8 h-8' viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>
                        </Button>
                    </div>
                </div>
                <div>
                    <h2 className='font-headline text-5xl font-bold mb-4'>Choose The Type!</h2>
                    <p className='text-muted-foreground mb-8'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar leo.</p>
                    <div className='flex gap-4'>
                        <Link href='/shop' className='text-center group'>
                            {typeRingImage && <Image src={typeRingImage.imageUrl} alt='Ring' width={120} height={120} className='rounded-full object-cover aspect-square mb-2 shadow-md' data-ai-hint={typeRingImage.imageHint} />}
                            <p className='font-semibold'>Ring</p>
                            <ArrowRight className='h-5 w-5 mx-auto opacity-0 group-hover:opacity-100 transition-opacity' />
                        </Link>
                         <Link href='/shop' className='text-center group'>
                            {typeNecklaceImage && <Image src={typeNecklaceImage.imageUrl} alt='Necklace' width={120} height={120} className='rounded-full object-cover aspect-square mb-2 shadow-md' data-ai-hint={typeNecklaceImage.imageHint} />}
                            <p className='font-semibold'>Necklace</p>
                            <ArrowRight className='h-5 w-5 mx-auto opacity-0 group-hover:opacity-100 transition-opacity' />
                        </Link>
                         <Link href='/shop' className='text-center group'>
                            {typeBraceletImage && <Image src={typeBraceletImage.imageUrl} alt='Bracelet' width={120} height={120} className='rounded-full object-cover aspect-square mb-2 shadow-md' data-ai-hint={typeBraceletImage.imageHint} />}
                            <p className='font-semibold'>Bracelet</p>
                            <ArrowRight className='h-5 w-5 mx-auto opacity-0 group-hover:opacity-100 transition-opacity' />
                        </Link>
                    </div>
                </div>
            </div>
          </div>
      </section>

       {/* Logo Cloud */}
       <section className="py-12 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="flex justify-around items-center flex-wrap gap-8">
            {brandLogos.map((logo) => (
              <div key={logo.name} className="text-center">
                <p className="text-2xl font-bold text-muted-foreground tracking-widest">{logo.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
