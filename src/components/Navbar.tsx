'use client';

import * as React from 'react';
import { Home } from 'lucide-react';
import { Button } from '@/components/ui/button';

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

        <div className="hidden md:flex items-center gap-2">
          {navLinks.map((link) => (
            <Button
              key={link.label}
              variant={link.active ? 'default' : 'ghost'}
              asChild
              className={`rounded-full px-4 font-semibold ${
                link.active
                  ? 'bg-accent text-accent-foreground hover:bg-accent/90'
                  : 'text-primary hover:bg-primary/10'
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
        <div className="md:hidden">
          {/* Add a mobile menu button here if needed in the future */}
        </div>
      </div>
    </nav>
  );
}
