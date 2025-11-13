import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Verification from '@/components/Verification';

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Verification />
      </main>
    </>
  );
}
