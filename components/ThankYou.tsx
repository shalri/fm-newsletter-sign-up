"use client";

import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

export default function ThankYou() {
  const searchParams = useSearchParams();
  const emailParam = searchParams.get("email");
  const email = emailParam ? decodeURIComponent(emailParam) : "unknown email";

  return (
    <section className="grid min-h-dvh grid-cols-1 content-center px-6 text-nl-dark-slate-grey sm:h-[520px] sm:min-h-0 sm:max-w-[505px] sm:rounded-[2rem] sm:bg-nl-white">
      <div className="pt-0">
        <div className="h-[64px] w-[64px]">
          <Image
            src="./assets/images/icon-success.svg"
            width={100}
            height={100}
            alt="success"
          />
        </div>
        <h1 className="mt-[38px] text-[2.50rem] font-bold leading-[1]">
          Thanks for subscribing!
        </h1>
        <p className="mt-6 text-nl-charcoal-grey">
          A confirmatin email has been sent to <strong>{email}</strong>. Please
          open it and click the button insided to confirm your subscription.
        </p>
      </div>
      <Link
        href="/"
        className="nl-hover mb-10 mt-6 flex h-14 w-full items-center justify-center rounded-lg font-bold text-nl-white "
      >
        <span className="nl-hover-content">Dismiss message</span>
      </Link>
    </section>
  );
}
