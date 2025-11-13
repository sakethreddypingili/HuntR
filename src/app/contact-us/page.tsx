
'use client';

import Navbar from '@/components/Navbar';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Card, CardContent } from '@/components/ui/card';
import { Mail, Phone, MapPin } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

export default function ContactUsPage() {
    const { toast } = useToast();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        toast({
            title: "Message Sent!",
            description: "Thanks for reaching out. We'll get back to you shortly.",
        });
        (e.target as HTMLFormElement).reset();
    }

  return (
    <>
      <Navbar />
      <div className="bg-white text-gray-800 animate-fade-in">
        <header className="bg-primary/5 py-16 md:py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-primary font-headline animate-slide-in-down">Get in Touch</h1>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto animate-slide-in-up">
              We’re here to help. Whether you have a question about a property, need support, or just want to say hello, we'd love to hear from you.
            </p>
          </div>
        </header>

        <main className="container mx-auto px-4 py-12 md:py-16">
            <div className="grid md:grid-cols-2 gap-12">
                <div className="animate-slide-in-left">
                     <h2 className="text-3xl font-bold font-headline text-gray-800 mb-6">Contact Information</h2>
                     <div className="space-y-6">
                        <div className="flex items-start gap-4">
                            <div className="bg-accent/10 p-4 rounded-full text-accent">
                                <MapPin className="h-6 w-6"/>
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold">Our Office</h3>
                                <p className="text-muted-foreground">123 HuntR Avenue, Koramangala, <br/>Bangalore, Karnataka 560034, India</p>
                            </div>
                        </div>
                         <div className="flex items-start gap-4">
                            <div className="bg-accent/10 p-4 rounded-full text-accent">
                                <Mail className="h-6 w-6"/>
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold">Email Us</h3>
                                <p className="text-muted-foreground">General Inquiries: <a href="mailto:hello@huntr.com" className="text-primary hover:underline">hello@huntr.com</a></p>
                                <p className="text-muted-foreground">Support: <a href="mailto:support@huntr.com" className="text-primary hover:underline">support@huntr.com</a></p>
                            </div>
                        </div>
                         <div className="flex items-start gap-4">
                            <div className="bg-accent/10 p-4 rounded-full text-accent">
                                <Phone className="h-6 w-6"/>
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold">Call Us</h3>
                                <p className="text-muted-foreground">Mon-Fri, 9am-6pm IST: <a href="tel:+911234567890" className="text-primary hover:underline">+91 12345 67890</a></p>
                            </div>
                        </div>
                     </div>
                </div>

                <Card className="shadow-xl animate-fade-in-up">
                    <CardContent className="p-8">
                        <h2 className="text-3xl font-bold font-headline text-primary mb-6">Send us a Message</h2>
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="space-y-2">
                                <Label htmlFor="name">Full Name</Label>
                                <Input id="name" placeholder="John Doe" required />
                            </div>
                             <div className="space-y-2">
                                <Label htmlFor="email">Email</Label>
                                <Input id="email" type="email" placeholder="you@example.com" required />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="message">Message</Label>
                                <Textarea id="message" placeholder="How can we help you?" required rows={5}/>
                            </div>
                             <Button type="submit" size="lg" className="w-full bg-gradient-to-br from-primary to-accent text-primary-foreground shadow-lg">Send Message</Button>
                        </form>
                    </CardContent>
                </Card>
            </div>

            <div className="mt-20 animate-fade-in">
                 <h2 className="text-3xl font-bold text-center font-headline text-gray-800 mb-8">Our Location</h2>
                 <div className="rounded-lg overflow-hidden shadow-2xl">
                    <iframe 
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15553.77810356519!2d77.6200238477051!3d12.943354395610217!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae144ed898fc67%3A0x1100f20963595b30!2sKoramangala%2C%20Bengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1678886543210!5m2!1sen!2sin" 
                        width="100%" 
                        height="450" 
                        style={{border:0}} 
                        allowFullScreen={true}
                        loading="lazy" 
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                 </div>
            </div>
        </main>
      </div>
    </>
  );
}
