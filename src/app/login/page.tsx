import Navbar from '@/components/Navbar';

export default function LoginPage() {
  return (
    <>
      <Navbar />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold">Login</h1>
        <p className="mt-4 text-lg">
          Login to your HuntR account to manage your profile and properties.
        </p>
      </main>
    </>
  );
}
