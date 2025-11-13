
import Navbar from '@/components/Navbar';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Building, Users, Heart, Zap } from 'lucide-react';

export default function AboutPage() {
  const aboutImage = PlaceHolderImages.find((img) => img.id === 'hero-background');

  return (
    <>
      <Navbar />
      <div className="bg-white text-gray-800 animate-fade-in">
        <header className="bg-primary/10 py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl font-bold text-primary font-headline animate-slide-in-down">About HuntR</h1>
            <p className="mt-4 text-xl text-muted-foreground max-w-2xl mx-auto animate-slide-in-up">
              Your trusted partner in finding a home, not just a house.
            </p>
          </div>
        </header>

        <main className="container mx-auto px-4 py-16">
          <section className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <div className="animate-slide-in-left">
              <h2 className="text-3xl font-bold text-gray-800 font-headline mb-4">Our Mission</h2>
              <p className="text-lg text-muted-foreground mb-4">
                In a world of endless listings and overwhelming choices, HuntR was born from a simple idea: to make finding a home as joyful and stress-free as living in it. We are tired of fake listings, phantom owners, and the endless cycle of brokerage fees.
              </p>
              <p className="text-lg text-muted-foreground">
                Our mission is to connect genuine homeowners with verified tenants in a transparent, secure, and friendly environment. We believe that everyone deserves a place they can truly call home, and we're here to make that happen, one verified listing at a time.
              </p>
            </div>
            <div className="animate-slide-in-right">
              {aboutImage && (
                <Image
                  src={aboutImage.imageUrl}
                  alt="A beautiful, modern living room"
                  width={600}
                  height={400}
                  className="rounded-lg shadow-2xl transform hover:scale-105 transition-transform duration-300"
                  data-ai-hint={aboutImage.imageHint}
                />
              )}
            </div>
          </section>
          
          <section className="text-center py-20 bg-primary/5 rounded-lg">
            <h2 className="text-3xl font-bold text-gray-800 font-headline mb-10">Why Choose Us?</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="p-6 transform hover:-translate-y-2 transition-transform duration-300">
                <Building className="h-12 w-12 mx-auto text-accent mb-4" />
                <h3 className="text-xl font-bold mb-2">Verified Properties</h3>
                <p className="text-muted-foreground">Every single listing is physically verified by our team. What you see is what you get, ensuring peace of mind and no surprises.</p>
              </div>
              <div className="p-6 transform hover:-translate-y-2 transition-transform duration-300">
                <Users className="h-12 w-12 mx-auto text-accent mb-4" />
                <h3 className="text-xl font-bold mb-2">Direct Connection</h3>
                <p className="text-muted-foreground">We connect you directly with property owners, cutting out the middleman and the unnecessary fees. It's transparent and efficient.</p>
              </div>
              <div className="p-6 transform hover:-translate-y-2 transition-transform duration-300">
                <Heart className="h-12 w-12 mx-auto text-accent mb-4" />
                <h3 className="text-xl font-bold mb-2">Built on Trust</h3>
                <p className="text-muted-foreground">Our community is built on a foundation of trust and transparency. We foster a safe rental experience for both tenants and owners.</p>
              </div>
            </div>
          </section>

           <section className="py-20">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="animate-slide-in-left">
                <Zap className="h-16 w-16 text-primary mb-4" />
                <h2 className="text-3xl font-bold text-gray-800 font-headline mb-4">Our Vision for the Future</h2>
                <p className="text-lg text-muted-foreground mb-4">
                  We're not just stopping at verified listings. We envision a future where the entire rental process is seamless. From virtual tours and digital agreements to hassle-free rent payments, we are constantly innovating to make your housing journey better.
                </p>
                <p className="text-lg text-muted-foreground">
                  Join us as we redefine the rental landscape, making it more human, transparent, and trustworthy for everyone involved.
                </p>
              </div>
               <div className="animate-slide-in-right">
                <Image
                  src="https://picsum.photos/seed/about2/600/400"
                  alt="A person happily unlocking their new apartment"
                  width={600}
                  height={400}
                  className="rounded-lg shadow-2xl transform hover:scale-105 transition-transform duration-300"
                  data-ai-hint="happy new home"
                />
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}
