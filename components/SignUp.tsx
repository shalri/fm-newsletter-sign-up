"use client";
import Image from "next/image";
import { features } from "@/lib/data";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function SignUp() {
  const [email, setEmail] = useState("");
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email !== "") {
      const encodedEmail = encodeURIComponent(email);
      router.push(`/subscription-success?email=${encodedEmail}`);
    }
  };

  return (
    <article className="grid max-w-[450px] grid-cols-1">
      <div className="w-full">
        <Image
          src="../assets/images/illustration-sign-up-desktop.svg"
          width={450}
          height={450}
          alt="banner image"
          className="object-contain"
        />
      </div>
      <h1 className="text-4xl font-bold text-nl-dark-slate-grey">
        Stay updated!
      </h1>
      <p>Join 60,000+ product managers receiving monthly updates on:</p>
      <ul className="">
        {features.map((feature, i) => (
          <li key={i}>{feature}</li>
        ))}
      </ul>
      <form>
        <div>
          <label htmlFor="email">Email address</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="email@company.com"
          />
          <span aria-live="polite"></span>
        </div>
        <button onClick={handleSubmit}>Subscribe to monthly newsletter</button>
      </form>
    </article>
  );
}
