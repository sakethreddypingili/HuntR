
import { Card, CardContent, CardTitle, CardDescription } from '@/components/ui/card';
import { UserCheck, Footprints, FileText, Camera, MessageSquare } from 'lucide-react';

const verificationSteps = [
  {
    icon: <UserCheck className="h-10 w-10" />,
    title: '1. Owner Identity Verification',
    description: 'We start by confirming the owner\'s identity. We collect and verify government-issued ID proofs from every property owner. This foundational step ensures you are always dealing with a legitimate, identifiable individual, eliminating the risk of scams.',
  },
  {
    icon: <Footprints className="h-10 w-10" />,
    title: '2. On-Site Physical Visit',
    description: 'A picture may be worth a thousand words, but a physical visit is priceless. Our dedicated "HuntR Scouts" visit each property in person. They walk through the space, check the amenities, assess cleanliness, and verify that the living conditions match the listing\'s claims.',
  },
   {
    icon: <Camera className="h-10 w-10" />,
    title: '3. Photo & Video Authentication',
    description: 'During the physical visit, our scouts take high-resolution, unedited photos and videos of the property. This provides an unbiased, real-time view of the space, so what you see on our platform is exactly what you get. No more doctored images or misleading angles.',
  },
  {
    icon: <FileText className="h-10 w-10" />,
    title: '4. Essential Document Check',
    description: 'To provide an extra layer of security, we conduct a basic check of essential property documents. This helps us ensure there are no glaring red flags, ongoing disputes, or hidden legal issues that could complicate your tenancy.',
  },
   {
    icon: <MessageSquare className="h-10 w-10" />,
    title: '5. Continuous Feedback Loop',
    description: 'Our verification process doesn’t end with the listing. We maintain a continuous feedback loop with our community of tenants. Regular feedback helps us ensure that owners maintain the quality of their properties, and we act swiftly on any reported discrepancies.',
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
            We believe trust is built on transparency. That's why we developed a comprehensive, multi-step verification process to ensure every listing on HuntR is 100% authentic, safe, and ready for you to call home.
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
