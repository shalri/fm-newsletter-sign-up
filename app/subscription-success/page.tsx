import ThankYou from "@/components/ThankYou";
import { Suspense } from "react";

export default function ThankYouPage() {
  return (
    <main>
      <Suspense fallback={<div>loading..</div>}>
        <ThankYou />
      </Suspense>
    </main>
  );
}
