import Navbar from '@/components/Navbar';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle, Users, BarChart } from 'lucide-react';

export default function ForOwnersPage() {
  const gradientButtonClasses = 'bg-gradient-to-br from-primary to-accent text-primary-foreground shadow-lg shadow-accent/30 transition-all duration-300 hover:from-accent hover:to-primary hover:shadow-primary/40 hover:-translate-y-1';

  return (
    <>
      <Navbar />
      <div className="bg-primary/5">
        <header className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-5xl font-bold text-primary font-headline">List Your Property with HuntR</h1>
          <p className="mt-4 text-xl text-muted-foreground max-w-3xl mx-auto">
            Connect with thousands of verified tenants and find the perfect match for your property, hassle-free.
          </p>
          <div className="mt-8">
            <Button size="lg" className={`h-14 rounded-full px-8 text-lg font-bold ${gradientButtonClasses}`}>
              List Your Property Today
            </Button>
          </div>
        </header>

        <main className="container mx-auto px-4 pb-20">
          <section className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 font-headline sm:text-5xl">
              Why List with Us?
            </h2>
            <div className="mt-6 w-24 h-1.5 bg-accent mx-auto rounded-full" />
          </section>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center border-0 shadow-lg transition-all duration-300 ease-in-out hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/10">
              <CardHeader>
                <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-accent/10 text-accent">
                  <CheckCircle className="h-10 w-10" />
                </div>
              </CardHeader>
              <CardContent>
                <CardTitle className="text-xl font-bold text-gray-800 font-headline mb-3">Verified Tenants</CardTitle>
                <p className="text-muted-foreground">
                  Say goodbye to uncertainty. We verify the identity and background of tenants to ensure a secure renting process for you.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-lg transition-all duration-300 ease-in-out hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/10">
              <CardHeader>
                <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-accent/10 text-accent">
                  <Users className="h-10 w-10" />
                </div>
              </CardHeader>
              <CardContent>
                <CardTitle className="text-xl font-bold text-gray-800 font-headline mb-3">Direct Communication</CardTitle>
                <p className="text-muted-foreground">
                  No more middlemen. Communicate directly with potential tenants, schedule viewings, and finalize deals on your own terms.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-lg transition-all duration-300 ease-in-out hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/10">
              <CardHeader>
                <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-accent/10 text-accent">
                  <BarChart className="h-10 w-10" />
                </div>
              </CardHeader>
              <CardContent>
                <CardTitle className="text-xl font-bold text-gray-800 font-headline mb-3">Zero Brokerage Fees</CardTitle>
                <p className="text-muted-foreground">
                  Our platform is completely free for owners. Keep 100% of your rental income without paying any commission or brokerage fees.
                </p>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </>
  );
}
