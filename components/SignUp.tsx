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
    <article className="mx-auto grid max-w-[375px] grid-cols-1 sm:max-w-[958px] sm:grid-cols-[auto_44%] sm:place-items-center sm:content-center sm:rounded-[2rem] sm:bg-nl-white sm:py-6">
      <div className="h-auto w-full overflow-hidden pr-6 sm:col-start-2">
        <picture className="sm:flex sm:justify-end">
          <source
            media="(min-width: 640px)"
            srcSet="./assets/images/illustration-sign-up-desktop.svg"
          />
          <Image
            src="./assets/images/illustration-sign-up-mobile.svg"
            width={400}
            height={400}
            alt="banner image"
            className="object-cover"
          />
        </picture>
      </div>
      <section className="mx-auto px-6 text-nl-dark-slate-grey sm:row-start-1 sm:grid sm:grid-cols-1 sm:place-items-center">
        <div className="sm:px-[36px]">
          <h1 className="mt-7 text-[2.50rem] font-bold sm:mt-0 sm:text-[3.575rem] sm:leading-[1.25]">
            Stay updated!
          </h1>
          <p className="my-4 sm:mt-4">
            Join 60,000+ product managers receiving monthly updates on:
          </p>
          <ul className="mt-6 sm:mt-6">
            {features.map((feature, i) => (
              <li className="bg-list mt-2 bg-no-repeat pl-9 sm:mt-3" key={i}>
                {feature}
              </li>
            ))}
          </ul>
          <form onSubmit={handleSubmit(onSubmit)} className="mt-10 sm:mt-10">
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
                  "form-input h-14 rounded-lg border-nl-grey/50 px-6 ring-nl-tomato  transition-all duration-500 focus:ring-0 focus:ring-offset-0",
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
              className="nl-hover mb-10 mt-6 h-14 w-full rounded-lg bg-nl-dark-slate-grey font-bold text-nl-white sm:mb-0"
            >
              <span className="nl-hover-content">
                Subscribe to monthly newsletter
              </span>
            </button>
          </form>
        </div>
      </section>
    </article>
  );
}
