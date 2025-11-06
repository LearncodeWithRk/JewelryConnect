'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { Calendar } from '@/components/ui/calendar';
import { CalendarIcon, MessageSquare } from 'lucide-react';
import { format } from 'date-fns';
import { cn } from '@/lib/utils';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';

export function WhatsappBookingForm() {
  const [name, setName] = useState('');
  const [collection, setCollection] = useState('');
  const [date, setDate] = useState<Date | undefined>(undefined);

  const handleBooking = (e: React.FormEvent) => {
    e.preventDefault();

    const formattedDate = date ? format(date, 'PPP') : 'Not specified';
    const message = `Hello Shimmer! I'd like to book a consultation.\n\nName: ${name}\nLuxury Collection: ${collection}\nPreferred Date: ${formattedDate}`;
    const whatsappUrl = `https://api.whatsapp.com/send/?phone=919599695872&text=${encodeURIComponent(
      message
    )}`;

    window.open(whatsappUrl, '_blank');
  };

  return (
    <Card className="bg-black/40 backdrop-blur-md border-neutral-400 text-white">
      <CardHeader>
        <CardTitle className="text-2xl font-headline text-center">
          Book a Consultation
        </CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleBooking} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">Name</Label>
            <Input
              id="name"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="bg-white/10 border-neutral-400 focus:ring-primary"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="collection">Luxury Collection</Label>
            <Select onValueChange={setCollection} value={collection}>
              <SelectTrigger
                id="collection"
                className="bg-white/10 border-neutral-400 focus:ring-primary"
              >
                <SelectValue placeholder="Select a collection" />
              </SelectTrigger>
              <SelectContent className='bg-background text-foreground'>
                <SelectItem value="Necklaces">Necklaces</SelectItem>
                <SelectItem value="Rings">Rings</SelectItem>
                <SelectItem value="Bracelets">Bracelets</SelectItem>
                <SelectItem value="Earrings">Earrings</SelectItem>
                <SelectItem value="Full Set">Full Set</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="booking-date">Booking Date</Label>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  id="booking-date"
                  variant={'outline'}
                  className={cn(
                    'w-full justify-start text-left font-normal bg-white/10 border-neutral-400 hover:bg-white/20 hover:text-white',
                    !date && 'text-muted-foreground'
                  )}
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {date ? format(date, 'PPP') : <span>Pick a date</span>}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0 bg-background text-foreground" align="start">
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  initialFocus
                />
              </PopoverContent>
            </Popover>
          </div>
          <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
            <MessageSquare className="mr-2 h-4 w-4" />
            Book on WhatsApp
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
