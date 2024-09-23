import { formBgTheme, formInputTheme } from "@/app/_lib/themes";

import Button from "@/app/_components/Button";

export default function Search({ query, handleFetch, type, handleSetQuery }) {
  return (
    <form
      className={`${formBgTheme} flex flex-1 justify-between items-center rounded-full`}
      onSubmit={handleFetch}
    >
      <input
        type="search"
        placeholder={`Search ${type === "all-videos" ? "videos" : "playlists"}`}
        className={`${formInputTheme} px-6 md:py-0 py-2 focus:outline-0 grow rounded-full outline-none`}
        value={query}
        onChange={handleSetQuery}
      />
      <Button type="submit">Search</Button>
    </form>
  );
}
