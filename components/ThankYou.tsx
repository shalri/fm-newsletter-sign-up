"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";

export default function ThankYou() {
  const searchParams = useSearchParams();
  const emailParam = searchParams.get("email");
  const email = emailParam ? decodeURIComponent(emailParam) : "unknown email";

  return (
    <section className="grid min-h-dvh grid-cols-1 content-between px-6 text-nl-dark-slate-grey">
      {/* <div className="min-h-[26.5%] w-full border-black" /> */}
      <div className="pt-[150px]">
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
