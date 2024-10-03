import React from "react";

import { secondaryBtnTheme } from "@/app/_lib/themes";

import ButtonLink from "@/app/_components/ButtonLink";
import HeaderTitle from "@/app/_components/HeaderTitle";

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
      <ButtonLink href={href} btnTheme={secondaryBtnTheme}>
        See all
      </ButtonLink>
    </div>
  );
}
