"use client";

import { useEffect, useState } from "react";
import { useSpring, animated } from "@react-spring/web";
import Image from "next/image";
import Link from "next/link";
import ConfettiExplosion from "react-confetti-explosion";
import { useSearchParams } from "next/navigation";

export default function ThankYou() {
  const [isExploding, setIsExploding] = useState(false);
  const searchParams = useSearchParams();
  const emailParam = searchParams.get("email");
  const email = emailParam ? decodeURIComponent(emailParam) : "unknown email";

  const props = useSpring({
    from: { opacity: 0, transform: "scale(0.8)" },
    to: { opacity: 1, transform: "scale(1)" },
    config: { tension: 120, friction: 15 },
    // onRest: () => setIsExploding(true),
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      console.log("Setting isExploding to true");
      setIsExploding(true);
    }, 1000); // Trigger confetti after 1 second

    return () => clearTimeout(timer); // Cleanup timer on unmount
  }, []);

  return (
    <animated.section
      style={props}
      className="grid min-h-dvh grid-cols-1 content-between px-6 text-nl-dark-slate-grey sm:h-[520px] sm:min-h-0 sm:max-w-[505px] sm:content-start sm:rounded-[2rem] sm:bg-nl-white sm:px-16"
    >
      {isExploding && (
        <ConfettiExplosion
          force={0.6}
          duration={3000}
          particleCount={250}
          width={1600}
        />
      )}
      <div className="pt-[150px] sm:pt-12">
        {/* {isExploding && <ConfettiExplosion force={0.6} duration={3000} particleCount={150} />} */}
        <div className="h-[64px] w-[64px]">
          <Image
            src="./assets/images/icon-success.svg"
            width={100}
            height={100}
            alt="success"
          />
        </div>
        <h1 className="mt-[38px] text-[2.50rem] font-bold leading-[1] sm:mt-10 sm:text-[3.5rem]">
          Thanks for subscribing!
        </h1>
        <p className="mt-6 text-nl-charcoal-grey">
          A confirmatin email has been sent to <strong>{email}</strong>. Please
          open it and click the button insided to confirm your subscription.
        </p>
      </div>
      <Link
        href="/"
        className="nl-hover mb-10 mt-6 flex h-14 w-full items-center justify-center rounded-lg font-bold text-nl-white sm:mb-0 sm:mt-10 "
      >
        <span className="nl-hover-content">Dismiss message</span>
      </Link>
    </animated.section>
  );
}
