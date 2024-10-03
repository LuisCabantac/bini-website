import { raleway } from "@/app/_lib/fonts";
import React from "react";

export default function HeaderTitle({
  type,
  children,
}: {
  type: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      {type === "h1" ? (
        <h1
          className={`${raleway.className} mb-4 text-4xl font-bold md:mb-6 md:text-6xl`}
        >
          {children}
        </h1>
      ) : (
        <h2 className={`${raleway.className} text-3xl font-bold md:text-5xl`}>
          {children}
        </h2>
      )}
    </div>
  );
}
