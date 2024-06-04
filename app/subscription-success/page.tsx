import ThankYou from "@/components/ThankYou";
import { Suspense } from "react";

export default function ThankYouPage() {
  return (
    <main className="min-h-dvh grid-cols-1 content-center">
      <Suspense fallback={<div className="loader" />}>
        <ThankYou />
      </Suspense>
    </main>
  );
}
