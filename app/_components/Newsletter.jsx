"use client";

import { useState } from "react";
import Button from "./Button";

const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [isSignedUp, setIsSignedUp] = useState(false);

  function handleSetEmail(event) {
    setEmail(event.target.value);
  }

  function handleSignup() {
    if (!email) return;
    if (emailPattern.test(email)) setIsSignedUp((signup) => !signup);
  }

  return (
    <div className="w-full md:w-[30rem] md:-mt-2 mt-4">
      {isSignedUp ? (
        <p className="font-bold md:text-2xl text-xl flex md:justify-center items-center text-[#245055] md:h-[6.5rem] h-[4rem]">
          Thank you for signing up!
        </p>
      ) : (
        <div>
          <p className="md:text-lg md:ml-2 md:mt-0 mt-2 mb-2 text-inherit">
            Get our Newsletter
          </p>

          <form
            className="flex flex-1 justify-between items-center bg-[#eefafb] rounded-full"
            onSubmit={handleSetEmail}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-9 pl-4 stroke-[#99beb3]"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
              />
            </svg>

            <input
              type="email"
              placeholder="Enter your email"
              className="bg-[#eefafb] px-2 md:py-0 py-2 focus:outline-0 grow rounded-full placeholder:text-[#99beb3]"
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
