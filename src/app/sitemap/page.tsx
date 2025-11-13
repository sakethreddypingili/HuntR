
import Navbar from '@/components/Navbar';
import Link from 'next/link';
import { Home, User, Building, Search, Lock, Info, FileText, Briefcase, Star, MessageCircleQuestion, Map } from 'lucide-react';

const sitemapLinks = [
  {
    category: 'Main',
    icon: <Home className="h-6 w-6 text-primary" />,
    links: [
      { href: '/', label: 'Home Page' },
      { href: '/about', label: 'About Us' },
      { href: '/how-we-verify', label: 'How We Verify' },
      { href: '/testimonials', label: 'Testimonials' },
      { href: '/careers', label: 'Careers' },
    ],
  },
  {
    category: 'For Tenants',
    icon: <User className="h-6 w-6 text-primary" />,
    links: [
      { href: '/signup', label: 'Tenant Sign Up' },
      { href: '/login', label: 'Tenant Login' },
      { href: '#', label: 'Search Properties' },
    ],
  },
  {
    category: 'For Owners',
    icon: <Building className="h-6 w-6 text-primary" />,
    links: [
      { href: '/for-owners', label: 'Why List With Us' },
      { href: '/owner-signup', label: 'Owner Sign Up' },
      { href: '/owner-login', label: 'Owner Login' },
    ],
  },
  {
    category: 'Support & Legal',
    icon: <Info className="h-6 w-6 text-primary" />,
    links: [
      { href: '/faqs', label: 'FAQs' },
      { href: '#', label: 'Contact Us' },
      { href: '/terms-and-conditions', label: 'Terms & Conditions' },
      { href: '/privacy-policy', label: 'Privacy Policy' },
    ],
  },
];

export default function SitemapPage() {
  return (
    <>
      <Navbar />
      <div className="bg-white text-gray-800 animate-fade-in">
        <header className="bg-primary/5 py-16 md:py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-primary font-headline animate-slide-in-down">Sitemap</h1>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto animate-slide-in-up">
              Navigate through all the pages on HuntR. Find exactly what you're looking for.
            </p>
          </div>
        </header>

        <main className="container mx-auto px-4 py-12 md:py-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {sitemapLinks.map((section, index) => (
              <div key={section.category} className="animate-fade-in-up" style={{animationDelay: `${index * 0.1}s`}}>
                <div className="flex items-center gap-3 mb-4">
                  {section.icon}
                  <h2 className="text-2xl font-bold font-headline text-gray-800">{section.category}</h2>
                </div>
                <ul className="space-y-3">
                  {section.links.map((link) => (
                    <li key={link.href}>
                      <Link href={link.href} className="flex items-center gap-2 text-muted-foreground hover:text-accent hover:underline transition-colors">
                         <span className="text-accent">&rarr;</span> {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </main>
      </div>
    </>
  );
}
