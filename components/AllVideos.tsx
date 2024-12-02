"use client";

import React, { useState, useRef } from "react";
import { useQuery } from "@tanstack/react-query";

import { getVideos } from "@/lib/actions";

import ButtonLink from "@/components/ButtonLink";
import ListAll from "@/components/ListAll";
import Search from "@/components/Search";
import Spinner from "@/components/Spinner";

export default function AllVideos({ allVideosId }) {
  const [query, setQuery] = useState<string>("");
  const queryRef = useRef(null);

  const { data: result, isLoading } = useQuery({
    queryKey: ["search", allVideosId, query],
    queryFn: () =>
      getVideos(
        query ? "relevance" : "date",
        query,
        query ? 9 : 18,
        allVideosId,
      ),
  });

  function handleSubmit(event: React.SyntheticEvent) {
    event.preventDefault();
    const currentQuery: string = queryRef.current?.value;
    setQuery(currentQuery);
  }

  return (
    <div className="mb-12 md:mb-20">
      <ButtonLink
        href="/videos"
        btnTheme="text-[#245055] hover:text-[#3a6266] hover:bg-transparent"
      >
        <div className="mt-3 flex items-center justify-center gap-1 md:mt-1">
          <svg className="w-[0.85rem]" viewBox="0 0 532 532">
            <path
              fill="currentColor"
              d="M355.66 11.354c13.793-13.805 36.208-13.805 50.001 0 13.785 13.804 13.785 36.238 0 50.034L201.22 266l204.442 204.61c13.785 13.805 13.785 36.239 0 50.044-13.793 13.796-36.208 13.796-50.002 0a5994246.277 5994246.277 0 0 0-229.332-229.454 35.065 35.065 0 0 1-10.326-25.126c0-9.2 3.393-18.26 10.326-25.2C172.192 194.973 332.731 34.31 355.66 11.354Z"
            />
          </svg>
          Back
        </div>
      </ButtonLink>
      <div className="md:flex md:items-center md:justify-between md:gap-20">
        <h1 className="mb-4 mt-4 text-4xl font-bold md:mb-6 md:mt-6 md:text-5xl">
          {allVideosId === "all-videos" ? "All videos" : "All playlists"}
        </h1>
        <Search
          query={queryRef}
          handleSubmit={handleSubmit}
          type={allVideosId}
        />
      </div>

      {result ? (
        <ul className="grid gap-y-4 pt-6 md:grid-cols-2 md:gap-5 md:pt-0">
          {result.map((video, i) => (
            <ListAll
              key={i}
              content={video}
              section={allVideosId === "all-playlists" ? "playlist" : "videos"}
            />
          ))}
        </ul>
      ) : isLoading ? (
        <Spinner />
      ) : (
        <p className="flex h-[20rem] items-center justify-center text-xl font-bold md:text-2xl">
          No results found
        </p>
      )}
    </div>
  );
}
