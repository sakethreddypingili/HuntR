
import Navbar from '@/components/Navbar';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Briefcase, MapPin, BrainCircuit, HeartHandshake, Rocket } from 'lucide-react';
import Image from 'next/image';

const jobOpenings = [
  {
    title: 'Senior Frontend Engineer',
    location: 'Remote',
    department: 'Engineering',
    description: 'Build and maintain our user-facing features with React and Next.js. You will be a key part of our product development cycle, from ideation to deployment.',
  },
  {
    title: 'Product Manager, Tenant Experience',
    location: 'New York, NY',
    department: 'Product',
    description: 'Own the roadmap for our tenant-facing products. Conduct user research, define feature requirements, and work with design and engineering to deliver amazing experiences.',
  },
  {
    title: 'Lead HuntR Scout',
    location: 'Bangalore, IN',
    department: 'Operations',
    description: 'Manage a team of property verifiers (HuntR Scouts). You will be responsible for team training, quality control, and expanding our verification network.',
  },
  {
    title: 'Digital Marketing Specialist',
    location: 'Remote',
    department: 'Marketing',
    description: 'Drive user acquisition through various digital channels including SEO, SEM, and social media. Analyze campaign performance and optimize for growth.',
  }
];

const coreValues = [
    {
        icon: <Rocket className="h-10 w-10 text-primary" />,
        title: "Innovate Fearlessly",
        description: "We are pioneers, constantly pushing the boundaries of what's possible in the rental market to create a better future."
    },
    {
        icon: <HeartHandshake className="h-10 w-10 text-primary" />,
        title: "Operate with Integrity",
        description: "Trust is our currency. We are transparent, honest, and committed to doing the right thing for our users and our community."
    },
    {
        icon: <BrainCircuit className="h-10 w-10 text-primary" />,
        title: "Obsess Over the Customer",
        description: "We put our users at the center of everything we do, listening to their needs and striving to exceed their expectations."
    }
]

export default function CareersPage() {
  return (
    <>
      <Navbar />
      <div className="bg-primary/5 text-gray-800 animate-fade-in">
        <header className="bg-white py-16 md:py-24">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-primary font-headline animate-slide-in-down">Build the Future of Renting</h1>
            <p className="mt-4 text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto animate-slide-in-up">
              We're a passionate team on a mission to make renting simpler, more transparent, and more human. If you're excited by big challenges, we want to hear from you.
            </p>
          </div>
        </header>

        <main className="container mx-auto px-4 py-12 md:py-16">
          <section className="mb-16 md:mb-24">
            <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="animate-slide-in-left">
                     <h2 className="text-3xl font-bold text-gray-800 font-headline mb-6">Why Join HuntR?</h2>
                     <p className="text-lg text-muted-foreground mb-4">We're more than just a company; we're a community. We believe in empowering our team to do their best work. We offer competitive salaries, comprehensive benefits, and a culture that values collaboration, innovation, and work-life balance.</p>
                     <p className="text-lg text-muted-foreground">You'll have a direct impact on a product that's solving a real-world problem for millions of people. Your work will matter.</p>
                </div>
                 <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 animate-fade-in-up">
                    {coreValues.map((value, index) => (
                        <Card key={index} className="text-center bg-white shadow-lg hover:shadow-primary/20 hover:-translate-y-2 transition-all duration-300 p-6">
                           <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-primary/10 mb-4">
                             {value.icon}
                           </div>
                           <h3 className="text-lg font-bold text-primary mb-2">{value.title}</h3>
                           <p className="text-sm text-muted-foreground">{value.description}</p>
                        </Card>
                    ))}
                </div>
            </div>
          </section>

          <section id="open-positions" className="py-16 bg-white rounded-lg shadow-xl">
            <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-primary font-headline">Open Positions</h2>
                <p className="mt-3 text-lg text-muted-foreground">Find your place on our growing team.</p>
                 <div className="mt-6 w-24 h-1.5 bg-accent mx-auto rounded-full" />
            </div>
            <div className="space-y-6 max-w-4xl mx-auto">
              {jobOpenings.map((job, index) => (
                <Card key={index} className="transition-all duration-300 hover:shadow-lg hover:border-primary/50 animate-fade-in-up" style={{animationDelay: `${index * 0.1}s`}}>
                  <CardHeader>
                    <div className="flex flex-col sm:flex-row justify-between sm:items-center">
                        <CardTitle className="text-2xl font-bold text-gray-800 font-headline">{job.title}</CardTitle>
                        <div className="flex items-center gap-2 text-muted-foreground mt-2 sm:mt-0">
                            <Briefcase className="h-5 w-5" />
                            <span>{job.department}</span>
                        </div>
                    </div>
                    <CardDescription className="flex items-center gap-2 pt-2">
                        <MapPin className="h-5 w-5 text-gray-500" />
                        <span>{job.location}</span>
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">{job.description}</p>
                    <Button className="bg-gradient-to-br from-primary to-accent text-primary-foreground shadow-lg">Apply Now</Button>
                  </CardContent>
                </Card>
              ))}
            </div>
             <div className="text-center mt-12">
                <p className="text-muted-foreground">Don't see a role that fits? We're always looking for talented people.</p>
                <Button variant="link" className="text-primary font-bold text-lg">Get in touch</Button>
             </div>
          </section>
        </main>
      </div>
    </>
  );
}
