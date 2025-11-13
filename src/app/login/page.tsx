
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';

export default function LoginPage() {
  const gradientButtonClasses = 'bg-gradient-to-br from-primary to-accent text-primary-foreground shadow-lg shadow-accent/30 transition-all duration-300 hover:from-accent hover:to-primary hover:shadow-primary/40 hover:-translate-y-1 w-full';

  return (
    <>
      <Navbar />
      <main className="flex items-center justify-center min-h-[80vh] bg-primary/5 px-4 animate-fade-in">
        <div className="w-full max-w-4xl grid md:grid-cols-2 gap-8 items-center">
            <div className="hidden md:block animate-slide-in-left">
                <h2 className="text-3xl font-bold text-primary font-headline mb-4">Welcome Back!</h2>
                <p className="text-muted-foreground mb-6">
                    Log in to manage your listings, view applications, and connect with potential tenants. Your next great tenant is just a click away.
                </p>
                <div className="space-y-4">
                    <Badge variant="secondary" className="p-2">Manage Properties</Badge>
                    <Badge variant="secondary" className="p-2">View Tenant Profiles</Badge>
                    <Badge variant="secondary" className="p-2">Direct Messaging</Badge>
                </div>
            </div>
            <Card className="w-full shadow-2xl shadow-primary/10 animate-fade-in-up">
              <CardHeader className="text-center">
                <CardTitle className="text-3xl font-bold font-headline text-primary">Login to Your Account</CardTitle>
                <CardDescription>Enter your credentials to access your dashboard.</CardDescription>
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
                <div className="text-center text-sm">
                  Don't have an account?{' '}
                  <Link href="/signup" className="underline text-primary font-semibold">
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
