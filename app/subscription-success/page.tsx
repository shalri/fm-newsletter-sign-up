import ThankYou from "@/components/ThankYou";
import { Suspense } from "react";

export default function ThankYouPage() {
  return (
    <main>
      <Suspense fallback={<div className="loader" />}>
        <ThankYou />
      </Suspense>
    </main>
  );
}
