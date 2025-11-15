
import Navbar from '@/components/Navbar';
import Verification from '@/components/Verification';

export default function HowWeVerifyPage() {
  return (
    <>
      <Navbar />
      <div className="bg-white">
        <header className="bg-primary/10 py-16 md:py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-primary font-headline animate-slide-in-down">The HuntR Verification Promise</h1>
            <p className="mt-4 text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto animate-slide-in-up">
              Trust is the cornerstone of a great rental experience. Discover the rigorous, multi-step process we use to ensure every listing is authentic and every interaction is secure.
            </p>
          </div>
        </header>
        <main>
          <Verification />
        </main>
      </div>
    </>
  );
}
