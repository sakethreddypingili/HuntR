import Link from 'next/link';
import Navbar from '@/components/Navbar';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

export default function SignupPage() {
  const gradientButtonClasses = 'bg-gradient-to-br from-primary to-accent text-primary-foreground shadow-lg shadow-accent/30 transition-all duration-300 hover:from-accent hover:to-primary hover:shadow-primary/40 hover:-translate-y-1 w-full';

  return (
    <>
      <Navbar />
      <main className="flex items-center justify-center min-h-[80vh] bg-primary/5 px-4">
        <Card className="w-full max-w-md shadow-2xl shadow-primary/10">
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
      </main>
    </>
  );
}
