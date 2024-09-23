"use client";

import { useState } from "react";

import { formBgTheme, formInputTheme, formLabelTheme } from "@/app/_lib/themes";

import Button from "@/app/_components/Button";

const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [isSignedUp, setIsSignedUp] = useState(false);

  function handleSetEmail(event) {
    setEmail(event.target.value);
  }

  function handleSignup(event) {
    event.preventDefault();
    if (!email) return;
    if (emailPattern.test(email)) setIsSignedUp((signup) => !signup);
  }

  return (
    <div className="w-full md:w-[30rem] md:-mt-2 mt-4">
      {isSignedUp ? (
        <p
          className={`${formLabelTheme} font-bold md:text-2xl text-xl flex md:justify-center items-center md:h-[6.5rem] h-[4rem]`}
        >
          Thank you for signing up!
        </p>
      ) : (
        <div>
          <p className="md:text-lg md:ml-2 md:mt-0 mt-2 mb-2 text-inherit">
            Get our Newsletter
          </p>

          <form
            className={`${formBgTheme} flex flex-1 justify-between items-center rounded-full`}
            onSubmit={handleSetEmail}
          >
            <input
              type="email"
              placeholder="Enter your email"
              className={`${formInputTheme} px-6 md:py-0 py-2 focus:outline-0 grow rounded-full outline-none`}
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
