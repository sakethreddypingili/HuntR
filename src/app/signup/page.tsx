
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { CheckCircle, Eye, Shield } from 'lucide-react';

export default function SignupPage() {
  const gradientButtonClasses = 'bg-gradient-to-br from-primary to-accent text-primary-foreground shadow-lg shadow-accent/30 transition-all duration-300 hover:from-accent hover:to-primary hover:shadow-primary/40 hover:-translate-y-1 w-full';

  return (
    <>
      <Navbar />
      <main className="flex items-center justify-center min-h-[calc(100vh-5rem)] bg-primary/5 px-4 animate-fade-in py-12">
         <div className="w-full max-w-4xl grid md:grid-cols-2 gap-8 md:gap-12 items-center">
             <div className="space-y-6 animate-slide-in-right order-2 md:order-1">
                <div className="text-center md:text-left">
                  <h2 className="text-3xl font-bold text-primary font-headline">A Better Way to Rent is Here</h2>
                  <p className="text-muted-foreground text-lg mt-2">
                      Tired of endless fees and fake listings? So were we. That's why we built HuntR.
                  </p>
                </div>
                <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                        <CheckCircle className="h-6 w-6 text-accent mt-1 flex-shrink-0" />
                        <div>
                            <h3 className="font-semibold">Zero Brokerage Fees</h3>
                            <p className="text-muted-foreground text-sm">Save thousands by connecting directly with property owners. No hidden charges, ever.</p>
                        </div>
                    </li>
                    <li className="flex items-start gap-3">
                        <Eye className="h-6 w-6 text-accent mt-1 flex-shrink-0" />
                        <div>
                            <h3 className="font-semibold">100% Verified Listings</h3>
                            <p className="text-muted-foreground text-sm">Every single property is physically verified by our team, so you can rent with complete confidence.</p>
                        </div>
                    </li>
                    <li className="flex items-start gap-3">
                        <Shield className="h-6 w-6 text-accent mt-1 flex-shrink-0" />
                        <div>
                            <h3 className="font-semibold">A Community of Trust</h3>
                            <p className="text-muted-foreground text-sm">Join a community built on transparency and respect for a safer, better rental experience.</p>
                        </div>
                    </li>
                </ul>
            </div>
             <Card className="w-full shadow-2xl shadow-primary/10 animate-fade-in-up order-1 md:order-2">
              <CardHeader className="text-center">
                <CardTitle className="text-3xl font-bold font-headline text-primary">Create Your Account</CardTitle>
                <CardDescription>Join HuntR to find your brokerage-free home today.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input id="name" type="text" placeholder="John Doe" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>                  <Input id="email" type="email" placeholder="you@example.com" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="password">Password</Label>
                  <Input id="password" type="password" required />
                </div>
              </CardContent>
              <CardFooter className="flex flex-col gap-4">
                <Button className={gradientButtonClasses}>Create Account</Button>
                <div className="text-center text-sm text-muted-foreground">
                  Already have an account?{' '}
                  <Link href="/login" className="underline text-primary font-semibold hover:text-accent">
                    Login
                  </Link>
                </div>
              </CardFooter>
            </Card>
        </div>
      </main>
    </>
  );
}
