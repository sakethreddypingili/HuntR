'use client';

import * as React from 'react';
import { Home, Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

const navLinks = [
  { href: '#', label: 'Home', active: true },
  { href: '#verification-section', label: 'How We Verify', active: false },
  { href: '#', label: 'About Us', active: false },
];

export default function Navbar() {
  const gradientButtonClasses =
    'bg-gradient-to-br from-primary to-accent text-primary-foreground shadow-lg shadow-accent/30 transition-all duration-300 hover:from-accent hover:to-primary hover:shadow-primary/40 hover:-translate-y-0.5';

  return (
    <nav className="sticky top-0 z-50 w-full bg-white/90 shadow-sm backdrop-blur-md">
      <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-6">
        <a className="flex items-center gap-2 text-2xl font-bold text-gray-800" href="#">
          <Home className="h-7 w-7 text-primary" />
          <span className="font-headline">HuntR.</span>
        </a>

        <div className="hidden items-center gap-2 lg:flex">
          {navLinks.map((link) => (
            <Button
              key={link.label}
              variant={link.active ? 'default' : 'ghost'}
              asChild
              className={`rounded-full px-4 font-semibold ${
                link.active ? 'bg-accent text-accent-foreground hover:bg-accent/90' : 'hover:bg-primary/10'
              }`}
            >
              <a href={link.href}>{link.label}</a>
            </Button>
          ))}
          <div className="mx-2 h-6 w-px bg-border" />
          <Button variant="outline" asChild className="rounded-full border-primary text-primary font-semibold hover:bg-primary hover:text-primary-foreground">
            <a href="#">For Owners</a>
          </Button>
          <Button asChild className={`rounded-full px-5 ${gradientButtonClasses}`}>
            <a href="#">Login/Signup</a>
          </Button>
        </div>

        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="lg:hidden">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right">
            <div className="flex flex-col gap-4 p-6">
              <a className="flex items-center gap-2 text-2xl font-bold text-gray-800 mb-4" href="#">
                <Home className="h-7 w-7 text-primary" />
                <span className="font-headline">HuntR.</span>
              </a>
              {navLinks.map((link) => (
                <Button
                  key={link.label}
                  variant={link.active ? 'default' : 'ghost'}
                  asChild
                  className={`justify-start rounded-full px-4 text-lg font-semibold ${
                    link.active ? 'bg-accent text-accent-foreground' : ''
                  }`}
                >
                  <a href={link.href}>{link.label}</a>
                </Button>
              ))}
              <hr className="my-4"/>
              <Button variant="outline" asChild className="rounded-full text-lg border-primary text-primary font-semibold">
                <a href="#">For Owners</a>
              </Button>
              <Button asChild className={`rounded-full text-lg ${gradientButtonClasses}`}>
                <a href="#">Login/Signup</a>
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
}
