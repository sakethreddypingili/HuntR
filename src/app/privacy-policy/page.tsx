
import Navbar from '@/components/Navbar';

export default function PrivacyPolicyPage() {
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
            <h1 className="text-4xl md:text-5xl font-bold text-primary font-headline animate-slide-in-down">Privacy Policy</h1>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto animate-slide-in-up">
              Your privacy is important to us.
            </p>
          </div>
        </header>

        <main className="container mx-auto px-4 py-12 md:py-16 max-w-4xl">
          <Paragraph>
            HuntR Technologies Inc. ("HuntR", "we", "us", or "our") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our website and services (the "Services"). Please read this policy carefully.
          </Paragraph>

          <SectionTitle>1. Information We Collect</SectionTitle>
          <Paragraph>
            We may collect personal information that you provide to us directly, such as your name, email address, phone number, and government-issued ID for verification purposes. We also collect information automatically when you use our Services, such as your IP address, browser type, and usage data. Property owners may also provide property documents for verification.
          </Paragraph>

          <SectionTitle>2. How We Use Your Information</SectionTitle>
          <Paragraph>
            We use the information we collect to:
            <ul className="list-disc list-inside text-muted-foreground mt-2 space-y-2">
                <li>Provide, operate, and maintain our Services.</li>
                <li>Create and manage your account, and verify your identity.</li>
                <li>Facilitate communication between Tenants and Owners.</li>
                <li>Improve, personalize, and expand our Services.</li>
                <li>Communicate with you, including for customer service and marketing purposes.</li>
                <li>Process your transactions and prevent transactional fraud.</li>
            </ul>
          </Paragraph>

          <SectionTitle>3. How We Share Your Information</SectionTitle>
          <Paragraph>
            We do not sell your personal information. We may share your information in the following situations:
            <ul className="list-disc list-inside text-muted-foreground mt-2 space-y-2">
                <li><strong>With Other Users:</strong> When you communicate with other users (e.g., a Tenant contacting an Owner), we will share relevant information to facilitate that communication.</li>
                <li><strong>With Service Providers:</strong> We may share information with third-party vendors and service providers that perform services for us (e.g., identity verification services, cloud hosting).</li>
                <li><strong>For Legal Reasons:</strong> We may disclose your information if required to do so by law or in response to valid requests by public authorities.</li>
            </ul>
          </Paragraph>
          
          <SectionTitle>4. Data Security</SectionTitle>
          <Paragraph>
            We use administrative, technical, and physical security measures to help protect your personal information. While we have taken reasonable steps to secure the personal information you provide to us, please be aware that despite our efforts, no security measures are perfect or impenetrable.
          </Paragraph>

          <SectionTitle>5. Your Data Protection Rights</SectionTitle>
          <Paragraph>
            Depending on your location, you may have the following rights regarding your personal information:
            <ul className="list-disc list-inside text-muted-foreground mt-2 space-y-2">
                <li>The right to access – You have the right to request copies of your personal data.</li>
                <li>The right to rectification – You have the right to request that we correct any information you believe is inaccurate.</li>
                <li>The right to erasure – You have the right to request that we erase your personal data, under certain conditions.</li>
            </ul>
          </Paragraph>

          <SectionTitle>6. Changes to This Privacy Policy</SectionTitle>
          <Paragraph>
            We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page. You are advised to review this Privacy Policy periodically for any changes.
          </Paragraph>
          
          <SectionTitle>7. Contact Us</SectionTitle>
          <Paragraph>
            If you have any questions about this Privacy Policy, please contact us at privacy@huntr.com.
          </Paragraph>
        </main>
      </div>
    </>
  );
}
