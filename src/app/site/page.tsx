import { Button } from '@/components/ui/button';
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/nextjs';


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      Main Page For All
      <SignedIn>
        <UserButton />
      </SignedIn>
      <SignedOut>
        <Button asChild>
          <SignInButton />
        </Button>
      </SignedOut>
    </main>
  );
}
