
import Navbar from '@/components/Navbar';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle, Users, BarChart, TrendingUp, ShieldCheck, Star, Sparkles, UserPlus } from 'lucide-react';
import Link from 'next/link';

export default function ForOwnersPage() {
  const gradientButtonClasses = 'bg-gradient-to-br from-primary to-accent text-primary-foreground shadow-lg shadow-accent/30 transition-all duration-300 hover:from-accent hover:to-primary hover:shadow-primary/40 hover:-translate-y-1';

  return (
    <>
      <Navbar />
      <div className="bg-primary/5 animate-fade-in">
        <header className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-5xl font-bold text-primary font-headline animate-slide-in-down">The Smart Way to Rent Your Property</h1>
          <p className="mt-4 text-xl text-muted-foreground max-w-3xl mx-auto animate-slide-in-up">
            Connect with a community of thousands of verified tenants. Find the perfect match for your property, hassle-free and with zero brokerage fees.
          </p>
          <div className="mt-8 animate-fade-in-up">
            <Button size="lg" asChild className={`h-14 rounded-full px-8 text-lg font-bold ${gradientButtonClasses}`}>
                <Link href="/owner-signup">List Your Property for Free</Link>
            </Button>
          </div>
        </header>

        <main className="container mx-auto px-4 pb-20">
          <section className="text-center mb-20">
            <h2 className="text-4xl font-bold text-gray-800 font-headline sm:text-5xl">
              Why Partner with HuntR?
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              We offer more than just a listing. We offer a partnership built on trust, transparency, and results.
            </p>
            <div className="mt-6 w-24 h-1.5 bg-accent mx-auto rounded-full" />
          </section>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            <Card className="text-center border-0 shadow-lg transition-all duration-300 ease-in-out hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/10 animate-fade-in-up" style={{animationDelay: '0.1s'}}>
              <CardHeader>
                <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-accent/10 text-accent">
                  <CheckCircle className="h-10 w-10" />
                </div>
              </CardHeader>
              <CardContent>
                <CardTitle className="text-xl font-bold text-gray-800 font-headline mb-3">High-Quality Tenants</CardTitle>
                <p className="text-muted-foreground">
                  Say goodbye to uncertainty. We verify the identity and background of every tenant, ensuring a secure and reliable renting process for you.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-lg transition-all duration-300 ease-in-out hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/10 animate-fade-in-up" style={{animationDelay: '0.2s'}}>
              <CardHeader>
                <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-accent/10 text-accent">
                  <BarChart className="h-10 w-10 -rotate-90" />
                </div>
              </CardHeader>
              <CardContent>
                <CardTitle className="text-xl font-bold text-gray-800 font-headline mb-3">Zero Brokerage, Ever</CardTitle>
                <p className="text-muted-foreground">
                  Our platform is 100% free for owners. Keep every penny of your rental income without paying any commission or hidden fees.
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center border-0 shadow-lg transition-all duration-300 ease-in-out hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/10 animate-fade-in-up" style={{animationDelay: '0.3s'}}>
              <CardHeader>
                <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-accent/10 text-accent">
                  <Sparkles className="h-10 w-10" />
                </div>
              </CardHeader>
              <CardContent>
                <CardTitle className="text-xl font-bold text-gray-800 font-headline mb-3">Effortless Listing</CardTitle>
                <p className="text-muted-foreground">
                  Our simple, guided process helps you create a beautiful, effective property listing in minutes. We handle the rest.
                </p>
              </CardContent>
            </Card>
          </div>
          
          <section className="bg-white p-12 rounded-lg shadow-xl mb-20">
             <h2 className="text-3xl font-bold text-center text-primary font-headline mb-10">Maximize Your Occupancy and Income</h2>
             <div className="grid md:grid-cols-2 gap-10 items-center">
                 <div className="space-y-6">
                    <div className="flex items-start gap-4 animate-slide-in-left" style={{animationDelay: '0.1s'}}>
                        <TrendingUp className="h-8 w-8 text-accent mt-1 flex-shrink-0"/>
                        <div>
                            <h3 className="text-lg font-bold">Fill Vacancies Faster</h3>
                            <p className="text-muted-foreground">Our large and growing pool of verified tenants means your property gets seen by the right people quickly, reducing costly downtime.</p>
                        </div>
                    </div>
                     <div className="flex items-start gap-4 animate-slide-in-left" style={{animationDelay: '0.2s'}}>
                        <ShieldCheck className="h-8 w-8 text-accent mt-1 flex-shrink-0"/>
                        <div>
                            <h3 className="text-lg font-bold">Rent with Confidence</h3>
                            <p className="text-muted-foreground">With our rigorous tenant verification and direct communication channels, you can rent out your property with complete peace of mind.</p>
                        </div>
                    </div>
                     <div className="flex items-start gap-4 animate-slide-in-left" style={{animationDelay: '0.3s'}}>
                        <Star className="h-8 w-8 text-accent mt-1 flex-shrink-0"/>
                        <div>
                            <h3 className="text-lg font-bold">Build Your Reputation</h3>
                            <p className="text-muted-foreground">Happy tenants can leave reviews, building your reputation as a trusted, high-quality landlord on the platform and attracting more great applicants.</p>
                        </div>
                    </div>
                 </div>
                 <div className="text-center animate-fade-in bg-primary/5 p-8 rounded-lg">
                     <UserPlus className="h-12 w-12 text-primary mx-auto mb-4" />
                     <p className="text-xl font-semibold mb-4">Ready to find your perfect tenant?</p>
                     <p className="text-muted-foreground mb-6">Join our community of trusted homeowners today. It’s free, easy, and rewarding.</p>
                     <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <Button asChild size="lg" className={gradientButtonClasses}>
                            <Link href="/owner-signup">Become a Partner</Link>
                        </Button>
                        <Button asChild size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10">
                            <Link href="/owner-login">Owner Login</Link>
                        </Button>
                     </div>
                 </div>
             </div>
          </section>

          <section className="text-center">
            <h2 className="text-3xl font-bold font-headline mb-4">Have Questions?</h2>
            <p className="text-muted-foreground mb-6 max-w-xl mx-auto">We're here to help. Check out our FAQ or contact our support team for assistance.</p>
            <Button variant="outline" size="lg" className="border-accent text-accent hover:bg-accent/10">
              Contact Support
            </Button>
          </section>

        </main>
      </div>
    </>
  );
}
