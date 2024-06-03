"use client";
import Image from "next/image";
import { features } from "@/lib/data";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { cn } from "@/lib/utils";

export default function SignUp() {
  const [email, setEmail] = useState("");
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const router = useRouter();

  const onSubmit = () => {
    if (email !== "") {
      const encodedEmail = encodeURIComponent(email);
      router.push(`/subscription-success?email=${encodedEmail}`);
    }
  };

  return (
    <article className="mx-auto grid max-w-[375px] grid-cols-1">
      <div className="h-auto w-full overflow-hidden">
        <Image
          src="../assets/images/illustration-sign-up-mobile.svg"
          width={375}
          height={375}
          alt="banner image"
          className="object-cover"
        />
      </div>
      <section className="px-6 text-nl-dark-slate-grey">
        <h1 className="mt-7 text-[2.50rem] font-bold">Stay updated!</h1>
        <p className="my-4">
          Join 60,000+ product managers receiving monthly updates on:
        </p>
        <ul className="mt-6">
          {features.map((feature, i) => (
            <li className="bg-list mt-3 bg-no-repeat pl-9" key={i}>
              {feature}
            </li>
          ))}
        </ul>
      </section>
      <form onSubmit={handleSubmit(onSubmit)} className="mt-10">
        <div className="flex flex-col">
          <div className="mb-2 flex justify-between text-[0.80rem] font-bold">
            <label htmlFor="email" className=" text-nl-dark-slate-grey">
              Email address
            </label>
            {errors.mail && (
              <p className="text-nl-tomato" role="alert">
                {errors.mail.message as string}
              </p>
            )}
          </div>
          <input
            {...register("mail", {
              required: "Valid email is required",
              pattern: {
                value: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
                message: "Please enter valid email",
              },
            })}
            aria-invalid={errors.mail ? "true" : "false"}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="email@company.com"
            className={cn(
              "form-input h-14 rounded-lg border-nl-grey/50 px-6 ring-nl-tomato  focus:ring-0 focus:ring-offset-0",
              {
                "bg-nl-tomato/20 text-nl-tomato focus:border-nl-tomato":
                  errors.mail,
                "focus:border-nl-dark-slate-grey": !errors.mail,
              },
            )}
          />
          <span aria-live="polite"></span>
        </div>
        <button
          type="submit"
          className="mb-10 mt-6 h-14 w-full rounded-lg bg-nl-dark-slate-grey font-bold text-nl-white"
        >
          Subscribe to monthly newsletter
        </button>
      </form>
    </article>
  );
}
