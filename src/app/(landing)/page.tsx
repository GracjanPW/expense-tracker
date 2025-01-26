import { signIn } from "@/auth";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center h-[40rem]">
      <div className="text-center flex flex-col items-center space-y-4">
        <h1 className="text-4xl font-bold">
          Track your expenses with{' '}
          <span className="text-blue-500">Expense Tracker</span>
        </h1>
        <p className="text-lg mt-4">
          Sign in with GitHub to start tracking your expenses
        </p>
        <form
          action={async () => {
            'use server';
            await signIn('github');
          }}
        >
          <Button className="mt-4" size={'lg'}>
            Get Started
          </Button>
        </form>
      </div>
    </section>
  );
}
