
import Navbar from '@/components/Navbar';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const tenantFaqs = [
  {
    question: "Is HuntR really free for tenants? What's the catch?",
    answer: "Yes, it's 100% free for tenants! There are no hidden fees or charges. We make money by offering premium services to property owners, not by charging you brokerage. You can browse, connect, and finalize your home without paying us a single rupee."
  },
  {
    question: "How do I know the listings are real and not fake?",
    answer: "This is our core promise. Every single listing on HuntR is physically visited and verified by our team of 'HuntR Scouts.' We check the property, take authentic photos, and verify the owner's identity. If it's on HuntR, it's real."
  },
  {
    question: "How do I contact a property owner?",
    answer: "Once you find a property you like, you can use our secure chat feature to connect directly with the verified owner. No need to share your phone number until you're comfortable. This keeps your information private and avoids spam calls."
  },
  {
    question: "What happens after I connect with an owner?",
    answer: "From there, you communicate directly with the owner to schedule a visit, negotiate rent, and finalize the rental agreement. HuntR facilitates the connection, but the rental agreement is between you and the owner."
  }
];

const ownerFaqs = [
  {
    question: "How much does it cost to list my property on HuntR?",
    answer: "Listing your property on HuntR is completely free. We do not charge any fees for listing, and we do not take any commission on the rent you receive. Our goal is to help you find the best tenant, hassle-free."
  },
  {
    question: "What is the verification process for owners and properties?",
    answer: "After you submit your listing, our team will contact you to schedule a physical visit. A HuntR Scout will visit your property to take photos and verify its condition and amenities. We also verify your identity and ownership documents to build trust with potential tenants."
  },
  {
    question: "How do I manage inquiries from tenants?",
    answer: "You will receive inquiries through our secure messaging system on your owner dashboard. You can chat with potential tenants, answer their questions, and schedule visits all within the platform, keeping your personal contact details private until you choose to share them."
  },
  {
    question: "Am I obligated to rent to tenants found through HuntR?",
    answer: "No. HuntR connects you with a pool of verified, high-intent tenants. However, you have complete control over who you choose to rent your property to. You can screen applicants and make the final decision based on your criteria."
  }
]

export default function FaqsPage() {
  return (
    <>
      <Navbar />
      <div className="bg-white text-gray-800 animate-fade-in">
        <header className="bg-primary/5 py-16 md:py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-primary font-headline animate-slide-in-down">Frequently Asked Questions</h1>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto animate-slide-in-up">
              Have questions? We've got answers. Everything you need to know about the HuntR experience.
            </p>
          </div>
        </header>

        <main className="container mx-auto px-4 py-12 md:py-16">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="animate-fade-in-up">
              <h2 className="text-3xl font-bold font-headline text-gray-800 mb-6">For Tenants</h2>
              <Accordion type="single" collapsible className="w-full">
                {tenantFaqs.map((faq, index) => (
                   <AccordionItem value={`item-${index}`} key={index}>
                    <AccordionTrigger className="text-lg font-semibold text-left">{faq.question}</AccordionTrigger>
                    <AccordionContent className="text-muted-foreground leading-relaxed">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
            <div className="animate-fade-in-up" style={{animationDelay: '0.2s'}}>
              <h2 className="text-3xl font-bold font-headline text-gray-800 mb-6">For Owners</h2>
              <Accordion type="single" collapsible className="w-full">
                {ownerFaqs.map((faq, index) => (
                   <AccordionItem value={`item-${index}`} key={index}>
                    <AccordionTrigger className="text-lg font-semibold text-left">{faq.question}</AccordionTrigger>
                    <AccordionContent className="text-muted-foreground leading-relaxed">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
