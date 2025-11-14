
'use client';

import * as React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

export default function Navbar() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/how-we-verify', label: 'How We Verify' },
    { href: '/about', label: 'About Us' },
    { href: '/for-owners', label: 'For Property Owners' },
  ];

  const isMainLinkActive = navLinks.some((link) => (link.href === '/' && pathname === '/') || (link.href !== '/' && pathname.startsWith(link.href)));

  const isLoginActive = pathname.startsWith('/login');
  const isSignupActive = pathname.startsWith('/signup');

  return (
    <nav className="sticky top-0 z-50 w-full bg-black shadow-md">
      <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-6">
        <Link
          href="/"
          className="flex items-center gap-2 rounded-lg border-2 border-yellow-400 p-0.5 text-2xl font-bold text-white shadow-[0_0_10px_theme(colors.yellow.400)] transition-all duration-300 ease-in-out hover:scale-110 hover:rotate-[-5deg] hover:shadow-[0_0_20px_theme(colors.yellow.400)]"
        >
          <Home className="h-7 w-7 text-primary" />
          <span className="font-headline">HuntR.</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => {
            const isActive = !isLoginActive && !isSignupActive && ((link.href === '/' && pathname === '/') || (link.href !== '/' && pathname.startsWith(link.href)));
            return (
              <Button
                key={link.label}
                variant="ghost"
                asChild
                className={cn(
                  'rounded-full px-4 font-semibold transition-all duration-300 border-2',
                  isActive
                    ? 'bg-green-600 text-white border-blue-500'
                    : 'bg-black text-white border-gray-600 hover:bg-gray-700 hover:text-white hover:border-blue-500'
                )}
              >
                <Link href={link.href}>{link.label}</Link>
              </Button>
            );
          })}
          <div className="mx-2 h-6 w-px bg-gray-600" />
           
          <Button
            asChild
            className={cn(
              'rounded-full px-5 font-semibold border-2 transition-transform duration-300',
              isLoginActive
                ? 'bg-gradient-to-br from-blue-600 to-green-500 text-white border-yellow-400'
                : 'bg-black text-white border-white',
              'hover:from-green-500 hover:to-blue-600 hover:-translate-y-0.5'
            )}
          >
            <Link href="/login">Login</Link>
          </Button>

          <Button
            asChild
            className={cn(
              'rounded-full px-5 font-semibold border-2 transition-transform duration-300',
              isSignupActive
                ? 'bg-gradient-to-br from-blue-600 to-green-500 text-white border-yellow-400' 
                : isLoginActive
                ? 'bg-black text-white border-white'
                : 'bg-green-600 text-white border-blue-500',
              'hover:from-green-500 hover:to-blue-600 hover:-translate-y-0.5'
            )}
          >
            <Link href="/signup">Signup</Link>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-white hover:bg-gray-700"
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-black bg-opacity-95 backdrop-blur-sm absolute top-20 left-0 w-full">
          <div className="container mx-auto flex flex-col items-center gap-4 px-4 py-8">
            {navLinks.map((link) => {
               const isActive = !isLoginActive && !isSignupActive && ((link.href === '/' && pathname === '/') || (link.href !== '/' && pathname.startsWith(link.href)));
              return (
                <Button
                  key={`mobile-${link.label}`}
                  variant="ghost"
                  asChild
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={cn(
                    'w-full text-center text-lg py-6 rounded-lg font-semibold transition-all duration-300 border-2',
                    isActive ? 'bg-green-600 text-white border-blue-500' : 'bg-transparent text-gray-300 border-gray-700 hover:bg-gray-700 hover:text-white'
                  )}
                >
                  <Link href={link.href}>{link.label}</Link>
                </Button>
              );
            })}
             <div className="w-full h-px bg-gray-700 my-4" />
            <Button 
                asChild 
                onClick={() => setIsMobileMenuOpen(false)} 
                className={cn(
                    'w-full text-center text-lg py-6 rounded-lg font-semibold border-2 transition-all duration-300', 
                    isLoginActive 
                        ? 'bg-gradient-to-br from-blue-600 to-green-500 text-white border-yellow-400' 
                        : 'bg-black text-white border-white',
                    'hover:from-green-500 hover:to-blue-600'
                )}
            >
              <Link href="/login">Login</Link>
            </Button>
             <Button 
                asChild 
                onClick={() => setIsMobileMenuOpen(false)} 
                className={cn(
                    'w-full text-center text-lg py-6 rounded-lg font-semibold border-2 transition-all duration-300', 
                    isSignupActive
                        ? 'bg-gradient-to-br from-blue-600 to-green-500 text-white border-yellow-400' 
                        : isLoginActive
                        ? 'bg-black text-white border-white'
                        : 'bg-green-600 text-white border-blue-500',
                    'hover:from-green-500 hover:to-blue-600'
                )}
            >
              <Link href="/signup">Signup</Link>
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}
