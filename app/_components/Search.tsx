import { formBgTheme, formInputTheme } from "@/app/_lib/themes";

import React from "react";
import Button from "@/app/_components/Button";

export default function Search({
  query,
  handleSubmit,
  type,
}: {
  query: React.LegacyRef<HTMLInputElement>;
  handleSubmit: (event: React.SyntheticEvent) => void;
  type: string;
}) {
  return (
    <form
      className={`${formBgTheme} flex flex-1 items-center justify-between rounded-full`}
      onSubmit={handleSubmit}
    >
      <input
        type="search"
        placeholder={`Search ${type === "all-videos" ? "videos" : "playlists"}`}
        className={`${formInputTheme} grow rounded-full px-6 py-2 outline-none focus:outline-0 md:py-0`}
        ref={query}
      />
      <Button type="submit">Search</Button>
    </form>
  );
}
