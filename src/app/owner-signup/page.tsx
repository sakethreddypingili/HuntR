
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { CheckCircle, ShieldCheck, TrendingUp } from 'lucide-react';

export default function OwnerSignupPage() {
  const gradientButtonClasses = 'bg-gradient-to-br from-primary to-accent text-primary-foreground shadow-lg shadow-accent/30 transition-all duration-300 hover:from-accent hover:to-primary hover:shadow-primary/40 hover:-translate-y-1 w-full';

  return (
    <>
      <Navbar />
      <main className="flex items-center justify-center min-h-[calc(100vh-5rem)] bg-primary/5 px-4 animate-fade-in py-12 md:py-0">
         <div className="w-full max-w-4xl grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <Card className="w-full shadow-2xl shadow-primary/10 animate-fade-in-up md:order-2">
              <CardHeader className="text-center">
                <CardTitle className="text-3xl font-bold font-headline text-primary">Become a HuntR Partner</CardTitle>
                <CardDescription>Join our community of trusted property owners.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                 <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input id="name" type="text" placeholder="John Doe" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input id="email" type="email" placeholder="owner@example.com" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input id="phone" type="tel" placeholder="+1 234 567 890" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="password">Create Password</Label>
                  <Input id="password" type="password" required />
                </div>
              </CardContent>
              <CardFooter className="flex flex-col gap-4">
                <Button className={gradientButtonClasses}>Create Owner Account</Button>
                <div className="text-center text-sm text-muted-foreground">
                  Already have an account?{' '}
                  <Link href="/owner-login" className="underline text-primary font-semibold hover:text-accent">
                    Login
                  </Link>
                </div>
              </CardFooter>
            </Card>
             <div className="space-y-6 animate-slide-in-right md:order-1">
                <div className="md:hidden text-center">
                  <h2 className="text-3xl font-bold text-primary font-headline">Unlock Your Property's Potential</h2>
                </div>
                <div className="hidden md:block">
                  <h2 className="text-3xl font-bold text-primary font-headline">Unlock Your Property's Potential</h2>
                   <p className="text-muted-foreground text-lg mt-2">
                      Listing with HuntR means more than just finding a tenant. It means finding the *right* tenant, faster and with more security.
                  </p>
                </div>
                <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                        <TrendingUp className="h-6 w-6 text-accent mt-1 flex-shrink-0" />
                        <div>
                            <h3 className="font-semibold">Maximize Your Income</h3>
                            <p className="text-muted-foreground text-sm">With zero brokerage fees and reduced vacancy periods, you keep more of your money.</p>
                        </div>
                    </li>
                    <li className="flex items-start gap-3">
                        <ShieldCheck className="h-6 w-6 text-accent mt-1 flex-shrink-0" />
                        <div>
                            <h3 className="font-semibold">Rent Securely</h3>
                            <p className="text-muted-foreground text-sm">Our comprehensive tenant verification gives you peace of mind.</p>
                        </div>
                    </li>
                     <li className="flex items-start gap-3">
                        <CheckCircle className="h-6 w-6 text-accent mt-1 flex-shrink-0" />
                        <div>
                            <h3 className="font-semibold">Simple & Free</h3>
                            <p className="text-muted-foreground text-sm">It's completely free to list your property. Our team is here to help you succeed.</p>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
      </main>
    </>
  );
}
