'use client';

import * as React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

export default function Navbar() {
  const pathname = usePathname();

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/how-we-verify', label: 'How We Verify' },
    { href: '/about', label: 'About Us' },
  ];

  const gradientButtonClasses =
    'bg-gradient-to-br from-primary to-accent text-primary-foreground shadow-lg shadow-accent/30 transition-all duration-300 hover:from-accent hover:to-primary hover:shadow-primary/40 hover:-translate-y-0.5';

  return (
    <nav className="sticky top-0 z-50 w-full bg-gray-900/90 shadow-md backdrop-blur-md">
      <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2 text-2xl font-bold text-white">
          <Home className="h-7 w-7 text-primary" />
          <span className="font-headline">HuntR.</span>
        </Link>

        <div className="hidden items-center gap-2 md:flex">
          {navLinks.map((link) => {
            const isActive = (link.href === '/' && pathname === '/') || (link.href !== '/' && pathname.startsWith(link.href));
            return (
              <Button
                key={link.label}
                variant="ghost"
                asChild
                className={cn(
                  'rounded-full px-4 font-semibold transition-all duration-300',
                  isActive
                    ? 'bg-accent text-white hover:bg-primary'
                    : 'bg-gray-700 text-blue-300 border border-transparent hover:bg-gray-600 hover:text-green-300 hover:border-green-300'
                )}
              >
                <Link href={link.href}>{link.label}</Link>
              </Button>
            );
          })}
          <div className="mx-2 h-6 w-px bg-gray-600" />
          <Button variant="outline" asChild className="rounded-full border-primary text-primary font-semibold hover:bg-primary hover:text-primary-foreground">
            <Link href="/for-owners">For Owners</Link>
          </Button>
          <Button variant="ghost" asChild className="rounded-full bg-gray-700 text-blue-300 font-semibold hover:bg-gray-600 hover:text-green-300">
            <Link href="/login">Login</Link>
          </Button>
          <Button asChild className={cn('rounded-full px-5', gradientButtonClasses)}>
            <Link href="/signup">Signup</Link>
          </Button>
        </div>
      </div>
    </nav>
  );
}
