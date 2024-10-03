"use client";

import React, { useState } from "react";

import { formBgTheme, formInputTheme, formLabelTheme } from "@/app/_lib/themes";

import Button from "@/app/_components/Button";

const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [isSignedUp, setIsSignedUp] = useState(false);

  function handleSetEmail(event: React.SyntheticEvent) {
    setEmail((event.target as HTMLInputElement).value);
  }

  function handleSignup(event: React.FormEvent<HTMLButtonElement>) {
    event.preventDefault();
    if (!email) return;
    if (emailPattern.test(email)) setIsSignedUp((signup) => !signup);
  }

  return (
    <div className="mt-4 w-full md:-mt-2 md:w-[30rem]">
      {isSignedUp ? (
        <p
          className={`${formLabelTheme} flex h-[4rem] items-center text-xl font-bold md:h-[6.5rem] md:justify-center md:text-2xl`}
        >
          Thank you for signing up!
        </p>
      ) : (
        <div>
          <p className="mb-2 mt-2 text-inherit md:ml-2 md:mt-0 md:text-lg">
            Get our Newsletter
          </p>

          <form
            className={`${formBgTheme} flex flex-1 items-center justify-between rounded-full`}
            onSubmit={handleSetEmail}
          >
            <input
              type="email"
              placeholder="Enter your email"
              className={`${formInputTheme} grow rounded-full px-6 py-2 outline-none focus:outline-0 md:py-0`}
              value={email}
              onChange={handleSetEmail}
            />
            <Button onClick={handleSignup} type="submit">
              Sign up
            </Button>
          </form>
        </div>
      )}
    </div>
  );
}
