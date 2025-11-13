import { Card, CardContent, CardTitle } from '@/components/ui/card';
import { UserCheck, Footprints, FileText } from 'lucide-react';

const verificationSteps = [
  {
    icon: <UserCheck className="h-10 w-10" />,
    title: '1. Owner Identity',
    description: 'We collect government ID proofs from every property owner to ensure you are dealing with the real deal.',
  },
  {
    icon: <Footprints className="h-10 w-10" />,
    title: '2. Physical Visit',
    description: 'Our "HuntR Scouts" physically visit the location to verify amenities, cleanliness, and room conditions.',
  },
  {
    icon: <FileText className="h-10 w-10" />,
    title: '3. Legal Check',
    description: 'We do a basic check on property documents to ensure there are no disputes or hidden legal issues.',
  },
];

export default function Verification() {
  return (
    <section id="verification-section" className="py-16 sm:py-24 bg-primary/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 font-headline sm:text-5xl">
            How We Verify
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            We ensure every listing is 100% authentic so you stay safe.
          </p>
          <div className="mt-6 w-24 h-1.5 bg-accent mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {verificationSteps.map((step, index) => (
            <Card
              key={index}
              className="group text-center border-0 shadow-lg shadow-slate-200/50 transition-all duration-300 ease-in-out hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/10"
            >
              <CardContent className="p-8">
                <div className="mx-auto mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-accent/10 text-accent transition-all duration-500 ease-in-out group-hover:bg-primary group-hover:text-primary-foreground group-hover:[transform:rotateY(360deg)]">
                  {step.icon}
                </div>
                <CardTitle className="text-xl font-bold text-gray-800 font-headline mb-3">
                  {step.title}
                </CardTitle>
                <p className="text-muted-foreground">{step.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
