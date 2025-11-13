
import Navbar from '@/components/Navbar';

export default function TermsAndConditionsPage() {
  const SectionTitle = ({ children }: { children: React.ReactNode }) => (
    <h2 className="text-2xl md:text-3xl font-bold text-primary font-headline mt-10 mb-4">{children}</h2>
  );
  
  const Paragraph = ({ children }: { children: React.ReactNode }) => (
    <p className="text-muted-foreground mb-4 leading-relaxed">{children}</p>
  );

  return (
    <>
      <Navbar />
      <div className="bg-white text-gray-800 animate-fade-in">
        <header className="bg-primary/5 py-16 md:py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-primary font-headline animate-slide-in-down">Terms & Conditions</h1>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto animate-slide-in-up">
              Last Updated: {new Date().toLocaleDateString()}
            </p>
          </div>
        </header>

        <main className="container mx-auto px-4 py-12 md:py-16 max-w-4xl">
          <Paragraph>
            Welcome to HuntR! These Terms and Conditions ("Terms") govern your use of the HuntR website, mobile applications, and services (collectively, the "Services"). By accessing or using our Services, you agree to be bound by these Terms and our Privacy Policy. If you do not agree to these Terms, you may not use our Services.
          </Paragraph>

          <SectionTitle>1. Use of Our Services</SectionTitle>
          <Paragraph>
            HuntR provides a platform to connect property owners ("Owners") with potential tenants ("Tenants"). You must be at least 18 years old to use our Services. You agree to use the Services only for lawful purposes and in accordance with these Terms. You are responsible for all activities that occur under your account.
          </Paragraph>

          <SectionTitle>2. Account Registration</SectionTitle>
          <Paragraph>
            To access certain features, you must create an account. You agree to provide accurate, current, and complete information during the registration process. You are responsible for safeguarding your password and agree not to disclose it to any third party.
          </Paragraph>

          <SectionTitle>3. Verification Process</SectionTitle>
          <Paragraph>
            HuntR employs a verification process for both Owners and properties to build a trustworthy community. While we strive to ensure the accuracy of our listings, we do not guarantee the identity of any user or the condition of any property. You are encouraged to perform your own due diligence.
          </Paragraph>

          <SectionTitle>4. User Conduct</SectionTitle>
          <Paragraph>
            You agree not to engage in any of the following prohibited activities: posting false, misleading, or fraudulent information; harassing, abusing, or harming another person; using the platform for any commercial purpose not expressly permitted by HuntR; scraping or collecting data from our Services without permission.
          </Paragraph>

          <SectionTitle>5. Zero Brokerage Policy</SectionTitle>
          <Paragraph>
            HuntR is a "zero brokerage" platform. This means we do not charge any commission or brokerage fees to either Tenants or Owners for connecting on our platform. All financial transactions for rent, security deposits, etc., are handled directly between the Tenant and the Owner. HuntR is not a party to any rental agreement.
          </Paragraph>

          <SectionTitle>6. Disclaimers</SectionTitle>
          <Paragraph>
            The Services are provided "as is" without warranty of any kind. We do not warrant that the Services will meet your requirements or be available on an uninterrupted, secure, or error-free basis. We make no warranty regarding the quality, accuracy, timeliness, truthfulness, completeness or reliability of any content.
          </Paragraph>

          <SectionTitle>7. Limitation of Liability</SectionTitle>
          <Paragraph>
            To the maximum extent permitted by law, HuntR shall not be liable for any incidental, special, exemplary or consequential damages, including lost profits, loss of data or goodwill, service interruption, computer damage or system failure arising out of or in connection with these terms or from the use of or inability to use the Services.
          </Paragraph>

          <SectionTitle>8. Changes to Terms or Services</SectionTitle>
          <Paragraph>
            We may modify the Terms at any time. If we do so, we'll let you know by posting the modified Terms on the site or through other communications. It's important that you review the Terms whenever we modify them because if you continue to use the Services after we have posted modified Terms, you are indicating to us that you agree to be bound by the modified Terms.
          </Paragraph>

          <SectionTitle>9. Contact Information</SectionTitle>
          <Paragraph>
            If you have any questions about these Terms, please contact us at legal@huntr.com.
          </Paragraph>
        </main>
      </div>
    </>
  );
}
