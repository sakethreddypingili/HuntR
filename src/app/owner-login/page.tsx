
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { List, MessageSquare, BarChart } from 'lucide-react';

export default function OwnerLoginPage() {
  const gradientButtonClasses = 'bg-gradient-to-br from-primary to-accent text-primary-foreground shadow-lg shadow-accent/30 transition-all duration-300 hover:from-accent hover:to-primary hover:shadow-primary/40 hover:-translate-y-1 w-full';

  return (
    <>
      <Navbar />
      <main className="flex items-center justify-center min-h-[calc(100vh-5rem)] bg-primary/5 px-4 animate-fade-in py-12 md:py-0">
        <div className="w-full max-w-4xl grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="space-y-6 animate-slide-in-left">
                <div className="md:hidden text-center">
                  <h2 className="text-3xl font-bold text-primary font-headline">Welcome Back, Partner!</h2>
                </div>
                <div className="hidden md:block">
                  <h2 className="text-3xl font-bold text-primary font-headline">Welcome Back, Partner!</h2>
                  <p className="text-muted-foreground text-lg mt-2">
                      Log in to manage your listings, view tenant applications, and connect with potential renters. Your next great tenant is just a click away.
                  </p>
                </div>
                <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                        <List className="h-6 w-6 text-accent mt-1 flex-shrink-0" />
                        <div>
                            <h3 className="font-semibold">Manage Your Properties</h3>
                            <p className="text-muted-foreground text-sm">Update availability, photos, and details for all your listings in one place.</p>
                        </div>
                    </li>
                    <li className="flex items-start gap-3">
                        <MessageSquare className="h-6 w-6 text-accent mt-1 flex-shrink-0" />
                        <div>
                            <h3 className="font-semibold">Connect with Tenants</h3>
                            <p className="text-muted-foreground text-sm">Securely message applicants, schedule viewings, and build relationships.</p>
                        </div>
                    </li>
                    <li className="flex items-start gap-3">
                        <BarChart className="h-6 w-6 text-accent mt-1 flex-shrink-0" />
                        <div>
                            <h3 className="font-semibold">Track Performance</h3>
                            <p className="text-muted-foreground text-sm">View insights on your listing views and inquiries to optimize your rental strategy.</p>
                        </div>
                    </li>
                </ul>
            </div>
            <Card className="w-full shadow-2xl shadow-primary/10 animate-fade-in-up">
              <CardHeader className="text-center">
                <CardTitle className="text-3xl font-bold font-headline text-primary">Owner Login</CardTitle>
                <CardDescription>Access your property dashboard.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="owner@example.com" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="password">Password</Label>
                  <Input id="password" type="password" required />
                </div>
              </CardContent>
              <CardFooter className="flex flex-col gap-4">
                <Button className={gradientButtonClasses}>Login to Dashboard</Button>
                <div className="text-center text-sm text-muted-foreground">
                  Not a partner yet?{' '}
                  <Link href="/owner-signup" className="underline text-primary font-semibold hover:text-accent">
                    List Your Property
                  </Link>
                </div>
              </CardFooter>
            </Card>
        </div>
      </main>
    </>
  );
}
