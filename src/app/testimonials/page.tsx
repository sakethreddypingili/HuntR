
import Navbar from '@/components/Navbar';
import { Card, CardContent } from '@/components/ui/card';
import { Star } from 'lucide-react';
import Image from 'next/image';

const tenantTestimonials = [
  {
    name: 'Priya S.',
    location: 'Koramangala, Bangalore',
    quote: 'HuntR was a lifesaver! I was tired of dealing with brokers and fake listings. I found a verified, beautiful 1BHK in just three days. The direct chat with the owner was amazing. 100% recommend!',
    rating: 5,
    avatar: 'https://picsum.photos/seed/priya/100/100',
    imageHint: 'happy woman'
  },
  {
    name: 'Rohan M.',
    location: 'Bandra, Mumbai',
    quote: "Finally, a platform that respects your time and money. The verification process gave me so much confidence. No brokerage meant I could afford a better place. The app is super easy to use.",
    rating: 5,
    avatar: 'https://picsum.photos/seed/rohan/100/100',
    imageHint: 'smiling man'
  },
   {
    name: 'Anjali K.',
    location: 'HSR Layout, Bangalore',
    quote: "I was skeptical at first, but HuntR is the real deal. The pictures were exactly what the flat looked like in person. It's the most transparent rental experience I've ever had.",
    rating: 5,
    avatar: 'https://picsum.photos/seed/anjali/100/100',
    imageHint: 'professional woman'
  },
];

const ownerTestimonials = [
  {
    name: 'Mr. Sharma',
    property: '2BHK in Indiranagar',
    quote: "Listing my property on HuntR was incredibly easy. I found a wonderful, verified family as tenants within a week. Not paying any commission is a huge bonus. The platform gives me full control.",
    rating: 5,
    avatar: 'https://picsum.photos/seed/sharma/100/100',
    imageHint: 'property owner'
  },
  {
    name: 'Deepa V.',
    property: 'PG in Marathahalli',
    quote: 'The quality of tenant applications I received was much higher than on other sites. The verification process filters out non-serious inquiries, saving me a lot of time and effort. Highly recommended for owners!',
    rating: 5,
    avatar: 'https://picsum.photos/seed/deepa/100/100',
    imageHint: 'landlord'
  },
    {
    name: 'Rajesh P.',
    property: 'Flat in Jayanagar',
    quote: 'As a first-time landlord, I was nervous. HuntR\'s team was very supportive, and the platform made everything from listing to communicating with tenants seamless. I feel much more secure.',
    rating: 5,
    avatar: 'https://picsum.photos/seed/rajesh/100/100',
    imageHint: 'happy landlord'
  },
];

const StarRating = ({ rating }: { rating: number }) => (
  <div className="flex gap-1">
    {[...Array(5)].map((_, i) => (
      <Star key={i} className={`h-5 w-5 ${i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} />
    ))}
  </div>
);


export default function TestimonialsPage() {
  return (
    <>
      <Navbar />
      <div className="bg-primary/5 text-gray-800 animate-fade-in">
        <header className="bg-white py-16 md:py-20 text-center">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold text-primary font-headline animate-slide-in-down">Don't Just Take Our Word For It</h1>
            <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto animate-slide-in-up">
              Hear from the growing community of happy tenants and trusted owners who have found a better way to rent with HuntR.
            </p>
          </div>
        </header>

        <main className="container mx-auto px-4 py-12 md:py-16">
          <section id="tenant-testimonials" className="mb-16 md:mb-24">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-primary font-headline mb-10">What Our Tenants Say</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {tenantTestimonials.map((testimonial, index) => (
                <Card key={index} className="bg-white border-0 shadow-xl rounded-lg p-6 flex flex-col justify-between transform hover:-translate-y-2 transition-transform duration-300 animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                  <CardContent className="p-0">
                    <StarRating rating={testimonial.rating} />
                    <p className="text-muted-foreground my-4 text-lg">&ldquo;{testimonial.quote}&rdquo;</p>
                  </CardContent>
                  <div className="flex items-center gap-4 mt-4">
                    <Image src={testimonial.avatar} alt={testimonial.name} width={50} height={50} className="rounded-full" data-ai-hint={testimonial.imageHint} />
                    <div>
                      <p className="font-bold text-gray-800">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </section>
          
          <section id="owner-testimonials" className="py-16 bg-white rounded-lg shadow-2xl">
             <div className="container mx-auto px-4">
                <h2 className="text-3xl md:text-4xl font-bold text-center text-accent font-headline mb-10">What Our Owners Say</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {ownerTestimonials.map((testimonial, index) => (
                    <Card key={index} className="bg-primary/5 border-primary/20 shadow-lg rounded-lg p-6 flex flex-col justify-between transform hover:-translate-y-2 transition-transform duration-300 animate-fade-in-up" style={{ animationDelay: `${(index + 3) * 0.1}s` }}>
                      <CardContent className="p-0">
                        <StarRating rating={testimonial.rating} />
                        <p className="text-muted-foreground my-4 text-lg">&ldquo;{testimonial.quote}&rdquo;</p>
                      </CardContent>
                      <div className="flex items-center gap-4 mt-4">
                         <Image src={testimonial.avatar} alt={testimonial.name} width={50} height={50} className="rounded-full" data-ai-hint={testimonial.imageHint} />
                        <div>
                          <p className="font-bold text-gray-800">{testimonial.name}</p>
                          <p className="text-sm text-muted-foreground">{testimonial.property}</p>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}
