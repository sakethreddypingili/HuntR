
import Navbar from '@/components/Navbar';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Building, Users, Heart, Zap, Target, Eye } from 'lucide-react';

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
              Your trusted partner in finding a home, not just a house. We're rebuilding the rental experience on a foundation of trust.
            </p>
          </div>
        </header>

        <main className="container mx-auto px-4 py-16">
          <section className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <div className="animate-slide-in-left">
              <h2 className="text-3xl font-bold text-gray-800 font-headline mb-4">Our Story</h2>
              <p className="text-lg text-muted-foreground mb-4">
                In a world of endless listings and overwhelming choices, HuntR was born from a simple, frustrating idea: finding a home shouldn't be harder than living in it. We were tired of fake listings, phantom owners, bait-and-switch scams, and the endless cycle of brokerage fees that benefit everyone but the renter and the owner.
              </p>
              <p className="text-lg text-muted-foreground">
                We decided to create a platform where reality matches the pictures, where you can connect directly with verified individuals, and where the process is as transparent and joyful as the feeling of unlocking your new front door.
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

          <section className="py-20 grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-in-left order-2 md:order-1">
                 <Image
                  src="https://picsum.photos/seed/vision/600/400"
                  alt="A person looking out over a city skyline"
                  width={600}
                  height={400}
                  className="rounded-lg shadow-2xl transform hover:scale-105 transition-transform duration-300"
                  data-ai-hint="city skyline future"
                />
            </div>
            <div className="order-1 md:order-2 animate-slide-in-right">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-accent/10 p-3 rounded-full"><Target className="h-8 w-8 text-accent" /></div>
                <h2 className="text-3xl font-bold text-gray-800 font-headline">Our Mission</h2>
              </div>
              <p className="text-lg text-muted-foreground mb-6">
                To connect genuine homeowners with verified tenants in a transparent, secure, and friendly environment. We believe that everyone deserves a place they can truly call home, and we're here to make that happen, one verified listing at a time.
              </p>
              <div className="flex items-center gap-4 mb-4">
                 <div className="bg-primary/10 p-3 rounded-full"><Eye className="h-8 w-8 text-primary" /></div>
                 <h2 className="text-3xl font-bold text-gray-800 font-headline">Our Vision</h2>
              </div>
              <p className="text-lg text-muted-foreground">
                We envision a future where the entire rental process is seamless. From virtual tours and digital agreements to hassle-free rent payments, we are constantly innovating to make your housing journey better, safer, and more human.
              </p>
            </div>
          </section>
          
          <section className="text-center py-20 bg-primary/5 rounded-lg">
            <h2 className="text-3xl font-bold text-gray-800 font-headline mb-10">Why We Do What We Do</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="p-6 transform hover:-translate-y-2 transition-transform duration-300 animate-fade-in-up" style={{animationDelay: '0.1s'}}>
                <Building className="h-12 w-12 mx-auto text-accent mb-4" />
                <h3 className="text-xl font-bold mb-2">Verified Properties</h3>
                <p className="text-muted-foreground">Because you deserve to rent with confidence. What you see is what you get, ensuring peace of mind and no unpleasant surprises.</p>
              </div>
              <div className="p-6 transform hover:-translate-y-2 transition-transform duration-300 animate-fade-in-up" style={{animationDelay: '0.2s'}}>
                <Users className="h-12 w-12 mx-auto text-accent mb-4" />
                <h3 className="text-xl font-bold mb-2">Direct Connection</h3>
                <p className="text-muted-foreground">We cut out the middleman and unnecessary fees. Direct communication builds trust and saves you money.</p>
              </div>
              <div className="p-6 transform hover:-translate-y-2 transition-transform duration-300 animate-fade-in-up" style={{animationDelay: '0.3s'}}>
                <Heart className="h-12 w-12 mx-auto text-accent mb-4" />
                <h3 className="text-xl font-bold mb-2">Built on Trust</h3>
                <p className="text-muted-foreground">The rental market can be stressful. We foster a safe, supportive community for both tenants and owners.</p>
              </div>
            </div>
          </section>

           <section className="py-20 text-center">
            <div className="animate-fade-in">
                <Zap className="h-16 w-16 text-primary mx-auto mb-4" />
                <h2 className="text-3xl font-bold text-gray-800 font-headline mb-4">Join Our Journey</h2>
                <p className="text-lg text-muted-foreground mb-4 max-w-3xl mx-auto">
                  We're more than a platform; we're a community of people who believe in a better way to rent. Whether you're looking for a home or have one to offer, you're part of the change.
                </p>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                  Join us as we redefine the rental landscape, making it more human, transparent, and trustworthy for everyone involved.
                </p>
              </div>
          </section>
        </main>
      </div>
    </>
  );
}
