import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Mail, MessageSquare, Phone } from 'lucide-react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { BackButton } from '@/components/back-button';

export const metadata: Metadata = {
  title: 'Contact Us | JewelryConnect',
  description: 'Get in touch with JewelryConnect for inquiries, collaborations, or support. Contact us via email, WhatsApp, or our contact form.',
};

const contactMethods = [
    {
        icon: <MessageSquare className="h-8 w-8 text-primary" />,
        title: "WhatsApp",
        value: "Chat with us",
        href: "https://wa.me/?text=Hi!%20I%20have%20a%20question.",
    },
    {
        icon: <Mail className="h-8 w-8 text-primary" />,
        title: "Email",
        value: "hello@jewelryconnect.com",
        href: "mailto:hello@jewelryconnect.com",
    },
    {
        icon: <Phone className="h-8 w-8 text-primary" />,
        title: "Phone",
        value: "+1 (555) 123-4567",
        href: "tel:+15551234567",
    }
]

export default function ContactPage() {
  return (
    <div className="bg-secondary">
      <div className="container mx-auto px-4 py-16 lg:py-24">
        <BackButton />
        <div className="text-center mb-12">
          <h1 className="font-headline text-5xl md:text-6xl font-bold">Get In Touch</h1>
          <p className="mt-2 text-lg text-muted-foreground">
            Have a question, a project in mind, or just want to say hello?
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16 text-center">
            {contactMethods.map(method => (
                 <Link href={method.href} target="_blank" rel="noopener noreferrer" key={method.title}>
                    <Card className="bg-background h-full shadow-md hover:shadow-xl hover:-translate-y-1 transition-all">
                        <CardHeader>
                            <div className="mx-auto w-fit p-4 bg-primary/10 rounded-full mb-2">
                            {method.icon}
                            </div>
                            <CardTitle className="font-headline text-2xl">{method.title}</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-primary font-semibold">{method.value}</p>
                        </CardContent>
                    </Card>
                 </Link>
            ))}
        </div>

        <div className="max-w-2xl mx-auto">
            <Card className="bg-background p-4 sm:p-8 border-t-4 border-primary">
                <CardHeader>
                    <CardTitle className="font-headline text-3xl text-center">Send a Message</CardTitle>
                </CardHeader>
                <CardContent>
                    <form className="space-y-6">
                        <div className="grid sm:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <Label htmlFor="name">Name</Label>
                                <Input id="name" placeholder="Your Name" />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="email">Email</Label>
                                <Input id="email" type="email" placeholder="Your Email" />
                            </div>
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="subject">Subject</Label>
                            <Input id="subject" placeholder="What's this about?" />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="message">Message</Label>
                            <Textarea id="message" placeholder="Your message..." rows={5} />
                        </div>
                        <div className="text-center">
                            <Button type="submit" size="lg" className="w-full sm:w-auto">Send Message</Button>
                        </div>
                    </form>
                </CardContent>
            </Card>
        </div>
      </div>
    </div>
  );
}
