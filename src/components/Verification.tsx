
import { Card, CardContent, CardTitle, CardDescription } from '@/components/ui/card';
import { UserCheck, Footprints, FileText, Camera, MessageSquare } from 'lucide-react';

const verificationSteps = [
  {
    icon: <UserCheck className="h-10 w-10" />,
    title: '1. Owner Identity Verification',
    description: "Our process begins with the person, not the property. We rigorously confirm every owner's identity using government-issued ID proofs. This crucial first step ensures you're always dealing with a legitimate, identifiable individual, eliminating the risk of phantom landlords and online scams.",
  },
  {
    icon: <Footprints className="h-10 w-10" />,
    title: '2. On-Site Physical Visit',
    description: "A picture may be worth a thousand words, but a physical visit tells the true story. Our dedicated 'HuntR Scouts'—real people, not drones—visit each and every property. They walk through the space, verify dimensions, check amenities, and assess the overall condition and cleanliness, ensuring it meets our high standards.",
  },
   {
    icon: <Camera className="h-10 w-10" />,
    title: '3. Authentic Photo & Video',
    description: "No more deceptive wide-angle lenses or suspiciously bright photos. During the physical visit, our scouts capture high-resolution, unedited photos and videos. This provides an unbiased, real-time view of the space. What you see on our platform is an authentic representation of what you get.",
  },
  {
    icon: <FileText className="h-10 w-10" />,
    title: '4. Essential Document Check',
    description: "To add an extra layer of security and legitimacy, we conduct a basic but critical check of essential property documents, like ownership papers and utility bills. This helps us ensure there are no glaring red flags, ongoing disputes, or hidden legal issues that could complicate your tenancy.",
  },
   {
    icon: <MessageSquare className="h-10 w-10" />,
    title: '5. Continuous Community Feedback',
    description: 'Our verification is not a one-time event. We maintain a continuous feedback loop with our community of tenants. User-reported issues are investigated promptly, ensuring that owners maintain the quality of their properties and that our listings remain the most trustworthy in the market.',
  },
];

export default function Verification() {
  return (
    <section id="verification-section" className="py-16 sm:py-24 bg-primary/5 animate-fade-in">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 font-headline sm:text-5xl animate-slide-in-down">
            Our Commitment to Authenticity
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto animate-slide-in-up">
            We don't just list properties; we verify them. This is our promise to you.
          </p>
          <div className="mt-6 w-24 h-1.5 bg-accent mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {verificationSteps.map((step, index) => (
            <Card
              key={index}
              className="group text-center border-0 shadow-lg shadow-slate-200/50 transition-all duration-300 ease-in-out hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/10 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-8">
                <div className="mx-auto mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-accent/10 text-accent transition-all duration-500 ease-in-out group-hover:bg-primary group-hover:text-primary-foreground group-hover:scale-110 group-hover:rotate-12">
                  {step.icon}
                </div>
                <CardTitle className="text-xl font-bold text-gray-800 font-headline mb-3">
                  {step.title}
                </CardTitle>
                <CardDescription className="text-muted-foreground">{step.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
