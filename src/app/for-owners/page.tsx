import Navbar from '@/components/Navbar';

export default function ForOwnersPage() {
  return (
    <>
      <Navbar />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold">For Property Owners</h1>
        <p className="mt-4 text-lg">
          List your property with HuntR and connect with verified tenants directly.
        </p>
      </main>
    </>
  );
}
