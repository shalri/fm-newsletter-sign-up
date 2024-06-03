"use client";

import { useRouter, useSearchParams } from "next/navigation";

export default function ThankYou() {
  const searchParams = useSearchParams();
  const emailParam = searchParams.get("email");
  const email = emailParam ? decodeURIComponent(emailParam) : "unknown email";
  const router = useRouter();

  const handleDismiss = () => {
    router.push("/");
  };

  return (
    <section>
      {/* TODO: image should be a bg? */}
      {/*  <Image /> */}
      <h1 className="text-2xl text-nl-dark-slate-grey">
        Thanks for subscribing!
      </h1>
      <p>
        A confirmatin email has been sent to {email}. Please opent it and click
        the button insided to confirm your subscription.
      </p>
      <button onClick={handleDismiss}>Dismiss message</button>
    </section>
  );
}
