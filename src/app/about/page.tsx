import Navbar from '@/components/Navbar';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Building, Users, Heart } from 'lucide-react';

export default function AboutPage() {
  const aboutImage = PlaceHolderImages.find((img) => img.id === 'hero-background');

  return (
    <>
      <Navbar />
      <div className="bg-white text-gray-800">
        <header className="bg-primary/10 py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl font-bold text-primary font-headline">About HuntR</h1>
            <p className="mt-4 text-xl text-muted-foreground max-w-2xl mx-auto">
              Your trusted partner in finding a home, not just a house.
            </p>
          </div>
        </header>

        <main className="container mx-auto px-4 py-16">
          <section className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-800 font-headline mb-4">Our Mission</h2>
              <p className="text-lg text-muted-foreground mb-4">
                In a world of endless listings and overwhelming choices, HuntR was born from a simple idea: to make finding a home as joyful and stress-free as living in it. We are tired of fake listings, phantom owners, and the endless cycle of brokerage fees.
              </p>
              <p className="text-lg text-muted-foreground">
                Our mission is to connect genuine homeowners with verified tenants in a transparent, secure, and friendly environment. We believe that everyone deserves a place they can truly call home, and we're here to make that happen, one verified listing at a time.
              </p>
            </div>
            <div>
              {aboutImage && (
                <Image
                  src={aboutImage.imageUrl}
                  alt="A beautiful, modern living room"
                  width={600}
                  height={400}
                  className="rounded-lg shadow-2xl"
                  data-ai-hint={aboutImage.imageHint}
                />
              )}
            </div>
          </section>

          <section className="text-center py-20">
            <h2 className="text-3xl font-bold text-gray-800 font-headline mb-10">Why Choose Us?</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="p-6">
                <Building className="h-12 w-12 mx-auto text-accent mb-4" />
                <h3 className="text-xl font-bold mb-2">Verified Properties</h3>
                <p className="text-muted-foreground">Every single listing is physically verified by our team. What you see is what you get.</p>
              </div>
              <div className="p-6">
                <Users className="h-12 w-12 mx-auto text-accent mb-4" />
                <h3 className="text-xl font-bold mb-2">Direct Connection</h3>
                <p className="text-muted-foreground">We connect you directly with property owners, cutting out the middleman and the fees.</p>
              </div>
              <div className="p-6">
                <Heart className="h-12 w-12 mx-auto text-accent mb-4" />
                <h3 className="text-xl font-bold mb-2">Built on Trust</h3>
                <p className="text-muted-foreground">Our community is built on a foundation of trust and transparency for a safer rental experience.</p>
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}
