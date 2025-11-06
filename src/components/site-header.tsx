'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, Gem, ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useState } from 'react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"


const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About Us' },
  { href: '/shop', label: 'Collections' },
];

export function SiteHeader() {
  const pathname = usePathname();
  const [isSheetOpen, setSheetOpen] = useState(false);

  const NavLink = ({ href, label, className }: { href: string; label: string; className?: string }) => {
    const isActive = pathname === href;
    return (
      <Link
        href={href}
        onClick={() => setSheetOpen(false)}
        className={cn(
          'text-lg md:text-sm font-medium transition-colors hover:text-primary',
          isActive ? 'text-primary' : 'text-foreground/80',
          className
        )}
      >
        {label}
      </Link>
    );
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-20 items-center justify-between">
        <Link href="/" className="mr-6 flex items-center space-x-2">
          <Gem className="h-8 w-8 text-primary" />
          <span className="font-bold font-headline text-2xl">Shimmer</span>
        </Link>
        <nav className="hidden md:flex gap-6 items-center">
          {navLinks.map((link) => (
            <NavLink key={link.href} {...link} />
          ))}
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center gap-1 text-sm font-medium text-foreground/80 hover:text-primary transition-colors focus:outline-none">
              Pages <ChevronDown className='h-4 w-4' />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-background text-foreground">
              <DropdownMenuItem asChild><Link href="/blog">Blog</Link></DropdownMenuItem>
              <DropdownMenuItem asChild><Link href="/contact">Contact</Link></DropdownMenuItem>
              <DropdownMenuItem asChild><Link href="/booking">Booking</Link></DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </nav>
        <div className="flex items-center justify-end space-x-4">
          <div className="md:hidden">
            <Sheet open={isSheetOpen} onOpenChange={setSheetOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle Menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="bg-background text-foreground">
                <Link href="/" className="mr-6 flex items-center space-x-2 mb-8">
                  <Gem className="h-6 w-6 text-primary" />
                  <span className="font-bold font-headline text-lg text-foreground">Shimmer</span>
                </Link>
                <nav className="flex flex-col gap-6">
                  {navLinks.map((link) => (
                    <NavLink key={link.href} {...link} className="text-foreground/80 hover:text-primary"/>
                  ))}
                   <DropdownMenu>
                    <DropdownMenuTrigger className="flex items-center gap-1 text-lg md:text-sm font-medium text-foreground/80 hover:text-primary transition-colors focus:outline-none">
                      Pages <ChevronDown className='h-4 w-4' />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="bg-background text-foreground">
                      <DropdownMenuItem asChild><Link href="/blog">Blog</Link></DropdownMenuItem>
                      <DropdownMenuItem asChild><Link href="/contact">Contact</Link></DropdownMenuItem>
                       <DropdownMenuItem asChild><Link href="/booking">Booking</Link></DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
          <Button asChild className="hidden md:flex rounded-full bg-primary text-primary-foreground hover:bg-primary/90">
            <Link href="/contact">Contact Us</Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
