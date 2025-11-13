import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Verification from '@/components/Verification';
import About from '@/components/About';

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
