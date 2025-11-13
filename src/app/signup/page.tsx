import Navbar from '@/components/Navbar';

export default function SignupPage() {
  return (
    <>
      <Navbar />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold">Sign Up</h1>
        <p className="mt-4 text-lg">
          Create an account to start your search for a brokerage-free home.
        </p>
      </main>
    </>
  );
}
