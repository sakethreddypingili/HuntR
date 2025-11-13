
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { CheckCircle } from 'lucide-react';

export default function SignupPage() {
  const gradientButtonClasses = 'bg-gradient-to-br from-primary to-accent text-primary-foreground shadow-lg shadow-accent/30 transition-all duration-300 hover:from-accent hover:to-primary hover:shadow-primary/40 hover:-translate-y-1 w-full';

  return (
    <>
      <Navbar />
      <main className="flex items-center justify-center min-h-[90vh] bg-primary/5 px-4 animate-fade-in">
         <div className="w-full max-w-4xl grid md:grid-cols-2 gap-8 items-center">
            <Card className="w-full shadow-2xl shadow-primary/10 animate-fade-in-up">
              <CardHeader className="text-center">
                <CardTitle className="text-3xl font-bold font-headline text-primary">Create an Account</CardTitle>
                <CardDescription>Join HuntR to find your brokerage-free home today.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input id="name" type="text" placeholder="John Doe" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="you@example.com" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="password">Password</Label>
                  <Input id="password" type="password" required />
                </div>
              </CardContent>
              <CardFooter className="flex flex-col gap-4">
                <Button className={gradientButtonClasses}>Create Account</Button>
                <div className="text-center text-sm">
                  Already have an account?{' '}
                  <Link href="/login" className="underline text-primary font-semibold">
                    Login
                  </Link>
                </div>
              </CardFooter>
            </Card>
             <div className="hidden md:block space-y-6 animate-slide-in-right">
                <h2 className="text-3xl font-bold text-primary font-headline">Why Join HuntR?</h2>
                <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                        <CheckCircle className="h-6 w-6 text-accent mt-1 flex-shrink-0" />
                        <div>
                            <h3 className="font-semibold">Zero Brokerage</h3>
                            <p className="text-muted-foreground text-sm">Save thousands by connecting directly with property owners. No hidden fees, ever.</p>
                        </div>
                    </li>
                    <li className="flex items-start gap-3">
                        <CheckCircle className="h-6 w-6 text-accent mt-1 flex-shrink-0" />
                        <div>
                            <h3 className="font-semibold">100% Verified Listings</h3>
                            <p className="text-muted-foreground text-sm">Every property is physically verified by our team, so you can rent with confidence.</p>
                        </div>
                    </li>
                    <li className="flex items-start gap-3">
                        <CheckCircle className="h-6 w-6 text-accent mt-1 flex-shrink-0" />
                        <div>
                            <h3 className="font-semibold">A Community of Trust</h3>
                            <p className="text-muted-foreground text-sm">Join a community built on transparency and respect for a better rental experience.</p>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
      </main>
    </>
  );
}
