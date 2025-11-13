
import Link from 'next/link';
import { Home, Facebook, Twitter, Instagram, Linkedin, Youtube } from 'lucide-react';
import { Button } from './ui/button';
import Image from 'next/image';

const footerSections = [
  {
    title: 'HuntR',
    links: [
      { label: 'About Us', href: '/about' },
      { label: 'How We Verify', href: '/how-we-verify' },
      { label: 'For Owners', href: '/for-owners' },
      { label: 'Careers', href: '#' },
      { label: 'Testimonials', href: '#' },
    ],
  },
  {
    title: 'Support',
    links: [
      { label: 'FAQs', href: '#' },
      { label: 'Contact Us', href: '#' },
      { label: 'Sitemap', href: '#' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { label: 'Terms & Conditions', href: '#' },
      { label: 'Privacy Policy', href: '#' },
    ],
  },
];

const socialLinks = [
  { icon: <Facebook className="h-6 w-6" />, href: '#', name: 'Facebook' },
  { icon: <Twitter className="h-6 w-6" />, href: '#', name: 'Twitter' },
  { icon: <Instagram className="h-6 w-6" />, href: '#', name: 'Instagram' },
  { icon: <Linkedin className="h-6 w-6" />, href: '#', name: 'LinkedIn' },
  { icon: <Youtube className="h-6 w-6" />, href: '#', name: 'YouTube' },
];

export default function Footer() {
  const gradientText = 'bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent';

  return (
    <footer className="bg-black text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        {/* Pre-footer section */}
        <div className="grid md:grid-cols-2 gap-8 items-center border-t border-b border-gray-700 py-8 mb-12">
            <div className="text-center md:text-left">
                <h3 className="text-2xl font-bold text-white">Find a Property</h3>
                <p className="text-muted-foreground mt-2">Select from thousands of options, without brokerage.</p>
                <Button asChild variant="outline" className="mt-4 border-accent text-accent hover:bg-accent/10">
                    <Link href="/">Find Now</Link>
                </Button>
            </div>
            <div className="text-center md:text-left md:border-l border-gray-700 md:pl-8">
                <h3 className="text-2xl font-bold text-white">List Your Property</h3>
                <p className="text-muted-foreground mt-2">For Free. Without any brokerage.</p>
                 <Button asChild variant="outline" className="mt-4 border-primary text-primary hover:bg-primary/10">
                    <Link href="/for-owners">Free Posting</Link>
                </Button>
            </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
          {/* Logo and company info */}
          <div className="col-span-2 lg:col-span-1 mb-8 md:mb-0">
             <Link href="/" className="flex items-center gap-2 text-2xl font-bold text-white mb-4">
                <Home className="h-7 w-7 text-primary" />
                <span className="font-headline">HuntR.</span>
            </Link>
            <p className="text-muted-foreground text-sm">
                Your trusted partner in finding a home, not just a house.
            </p>
          </div>

          {/* Link sections */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h4 className="font-bold text-lg mb-4 text-primary">{section.title}</h4>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="text-muted-foreground hover:text-accent transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* App store and social links */}
        <div className="mt-12 flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex gap-4">
                <Link href="#" aria-label="Get it on Google Play">
                    <Image src="/google-play.png" alt="Get it on Google Play" width={135} height={40} className="hover:opacity-80 transition-opacity" />
                </Link>
                 <Link href="#" aria-label="Download on the App Store">
                    <Image src="/app-store.png" alt="Download on the App Store" width={120} height={40} className="hover:opacity-80 transition-opacity" />
                </Link>
            </div>
            <div className="flex gap-4">
                {socialLinks.map((social) => (
                    <Link key={social.name} href={social.href} aria-label={social.name} className="text-muted-foreground hover:text-primary transition-colors">
                        {social.icon}
                    </Link>
                ))}
            </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 border-t border-gray-800 pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} HuntR Technologies Inc. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
