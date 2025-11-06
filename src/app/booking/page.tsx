import { ChatInterface } from '@/components/chat-interface';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Sparkles, Gem, ShieldCheck, MessageSquare } from 'lucide-react';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Book a Consultation | JewelryConnect',
  description: 'Schedule a one-on-one consultation for personal styling, custom jewelry design, or general inquiries. Chat with our AI or connect on WhatsApp.',
};

const consultationOptions = [
    {
        icon: <Sparkles className="h-8 w-8 text-primary" />,
        title: 'Personal Styling',
        description: 'Find the perfect jewelry to match your style, occasion, and personality. Let\'s elevate your look together.',
    },
    {
        icon: <Gem className="h-8 w-8 text-primary" />,
        title: 'Custom Design',
        description: 'Have a unique idea? Let\'s collaborate to create a one-of-a-kind piece that tells your story.',
    },
    {
        icon: <ShieldCheck className="h-8 w-8 text-primary" />,
        title: 'Jewelry Care & Tips',
        description: 'Learn how to properly care for your precious items to ensure they last a lifetime.',
    }
];

export default function BookingPage() {
  return (
    <div className="bg-secondary">
      <div className="container mx-auto px-4 py-16 lg:py-24">
        
        <div className="text-center mb-12">
          <h1 className="font-headline text-5xl md:text-6xl font-bold">Book a Consultation</h1>
          <p className="mt-2 text-lg text-muted-foreground">
            Let's connect! Choose a consultation type or start a chat below.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
            {consultationOptions.map(option => (
                <Card key={option.title} className="text-center bg-background shadow-md">
                    <CardHeader>
                        <div className="mx-auto w-fit p-4 bg-primary/10 rounded-full mb-2">
                           {option.icon}
                        </div>
                        <CardTitle className="font-headline text-2xl">{option.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-muted-foreground">{option.description}</p>
                    </CardContent>
                </Card>
            ))}
        </div>
        
        <div className="grid lg:grid-cols-1 gap-12 items-start">
            <div className="bg-background p-8 rounded-lg shadow-xl border text-center max-w-2xl mx-auto">
                <h2 className="font-headline text-3xl mb-4">Prefer a Direct Chat?</h2>
                <p className="text-muted-foreground mb-6">
                    Click the button below to open a conversation directly in WhatsApp. I'll get back to you as soon as possible to arrange your consultation.
                </p>
                <Button asChild size="lg" className="bg-green-500 hover:bg-green-600 text-white group">
                    <Link href="https://wa.me/?text=Hi!%20I'm%20interested%20in%20booking%20a%20jewelry%20consultation." target="_blank" rel="noopener noreferrer">
                        <MessageSquare className="mr-2 h-5 w-5" />
                        Chat on WhatsApp
                    </Link>
                </Button>
                 <div className="mt-8 text-sm text-muted-foreground space-y-4">
                    <h3 className="font-semibold text-lg text-foreground">What to Expect:</h3>
                    <p>✓ Quick responses for initial inquiries.</p>
                    <p>✓ Automated reminders for your scheduled appointment.</p>
                    <p>✓ Personalized follow-ups after our session.</p>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
}
