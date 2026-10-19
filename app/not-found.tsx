import Image from "next/image";
import { Button } from "@/components/ui/Button";

export const dynamic = "force-static";

export default function NotFound() {
  return (
    <main id="main" className="grid min-h-svh place-items-center px-4 py-12 text-center">
      <div className="w-full max-w-4xl">
        <div className="relative mx-auto aspect-[16/9] w-full max-w-3xl">
          <Image
            src="/images/404-Image.webp"
            alt="Page not found"
            fill
            priority
            sizes="(min-width: 768px) 768px, 100vw"
            className="object-contain"
          />
        </div>
        <h1 className="mt-6 text-2xl font-semibold">This page drifted off course.</h1>
        <p className="mx-auto mt-3 max-w-md text-muted">The page you&apos;re looking for doesn&apos;t exist or has moved.</p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Button href="/">Go to home</Button>
          <Button href="/contact" variant="soft" arrow={false}>
            Contact us
          </Button>
        </div>
      </div>
    </main>
  );
}
