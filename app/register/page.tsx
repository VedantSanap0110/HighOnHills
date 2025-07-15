import RegisterForm from "@/components/RegisterForm";

export default function RegisterPage() {
  return (
    <main className="max-w-3xl mx-auto py-12 px-4">
      <h1 className="text-4xl font-bold mb-8 text-center text-purple-700">Trip Registration</h1>
      <RegisterForm />
    </main>
  );
}
