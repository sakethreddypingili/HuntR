import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import PopularPlaces from '@/components/PopularPlaces';

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <PopularPlaces />
      </main>
    </>
  );
}
