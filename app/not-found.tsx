import { Button } from "@/components/ui/Button";
import { Logo } from "@/components/ui/Logo";

export default function NotFound() {
  return (
    <main id="main" className="grid min-h-svh place-items-center px-4 text-center">
      <div>
        <div className="flex justify-center">
          <Logo size={80} />
        </div>
        <p className="mt-10 font-display text-[clamp(72px,14vw,160px)] font-extrabold leading-none tracking-[-0.05em] text-gradient-warm">404</p>
        <h1 className="mt-4 text-2xl font-semibold">This page drifted off course.</h1>
        <p className="mx-auto mt-3 max-w-md text-muted">The page you&apos;re looking for doesn&apos;t exist or has moved.</p>
        <Button href="/" className="mt-8">
          Back to home
        </Button>
      </div>
    </main>
  );
}
