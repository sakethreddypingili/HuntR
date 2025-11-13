import Navbar from '@/components/Navbar';

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold">About Us</h1>
        <p className="mt-4 text-lg">
          This is the about page for HuntR. We are dedicated to helping you find your next home without any brokerage fees.
        </p>
      </main>
    </>
  );
}
