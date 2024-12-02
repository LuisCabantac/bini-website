import React from "react";

import Button from "@/components/Button";

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
      className="flex items-center justify-center rounded-full bg-[#eefafb]"
      onSubmit={handleSubmit}
    >
      <input
        type="search"
        placeholder={`Search ${type === "all-videos" ? "videos" : "playlists"}`}
        className="grow rounded-full bg-[#eefafb] px-6 py-3 outline-none placeholder:text-[#99beb3] focus:outline-0 md:py-0"
        ref={query}
      />
      <Button type="submit">Search</Button>
    </form>
  );
}
