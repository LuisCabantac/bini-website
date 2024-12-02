import React from "react";

import ButtonLink from "@/components/ButtonLink";
import HeaderTitle from "@/components/HeaderTitle";

export default function VideosHeader({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <div className="mb-4 flex items-center justify-between md:mb-6">
      <HeaderTitle type="h2">{children}</HeaderTitle>
      <ButtonLink
        href={href}
        btnTheme="px-4 py-2 bg-transparent border-2 border-[#245055] text-[#245055] hover:text-[#3a6266] hover:border-[#3a6266]"
      >
        See all
      </ButtonLink>
    </div>
  );
}
