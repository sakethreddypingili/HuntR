
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { CheckCircle } from 'lucide-react';

export default function LoginPage() {
  const gradientButtonClasses = 'bg-gradient-to-br from-primary to-accent text-primary-foreground shadow-lg shadow-accent/30 transition-all duration-300 hover:from-accent hover:to-primary hover:shadow-primary/40 hover:-translate-y-1 w-full';

  return (
    <>
      <Navbar />
      <main className="flex items-center justify-center min-h-[calc(100vh-5rem)] bg-primary/5 px-4 animate-fade-in py-12">
        <div className="w-full max-w-4xl grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="space-y-6 animate-slide-in-left order-2 md:order-1">
                <div className="text-center md:text-left">
                  <h2 className="text-3xl font-bold text-primary font-headline">Welcome Back!</h2>
                  <p className="text-muted-foreground text-lg mt-2">
                      Log in to continue your search for the perfect brokerage-free home. Your saved listings and conversations are waiting for you.
                  </p>
                </div>
                <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                        <CheckCircle className="h-6 w-6 text-accent mt-1 flex-shrink-0" />
                        <div>
                            <h3 className="font-semibold">Access Saved Homes</h3>
                            <p className="text-muted-foreground text-sm">Pick up right where you left off. Your favorite properties are just a click away.</p>
                        </div>
                    </li>
                    <li className="flex items-start gap-3">
                        <CheckCircle className="h-6 w-6 text-accent mt-1 flex-shrink-0" />
                        <div>
                            <h3 className="font-semibold">Chat With Owners</h3>
                            <p className="text-muted-foreground text-sm">Continue your conversations with property owners directly and securely.</p>
                        </div>
                    </li>
                </ul>
            </div>
            <Card className="w-full shadow-2xl shadow-primary/10 animate-fade-in-up order-1 md:order-2">
              <CardHeader className="text-center">
                <CardTitle className="text-3xl font-bold font-headline text-primary">Tenant Login</CardTitle>
                <CardDescription>Enter your credentials to access your account.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
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
                <Button className={gradientButtonClasses}>Login</Button>
                <div className="text-center text-sm text-muted-foreground">
                  Don't have an account?{' '}
                  <Link href="/signup" className="underline text-primary font-semibold hover:text-accent">
                    Sign Up
                  </Link>
                </div>
              </CardFooter>
            </Card>
        </div>
      </main>
    </>
  );
}
