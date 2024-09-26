"use client";

import { useState, useEffect, useCallback } from "react";

import { tertiaryBtnTheme } from "@/app/_lib/themes";

import ButtonLink from "@/app/_components/ButtonLink";
import ListAll from "@/app/_components/ListAll";
import Search from "@/app/_components/Search";

export default function AllVideos({ allVideosId, getData }) {
  const [query, setQuery] = useState("");
  const [result, setResult] = useState([]);

  const fetchVideos = useCallback(
    async (order, query, maxResults, type) => {
      const data = await getData(order, query, maxResults, type);
      setResult(data.items);
    },
    [getData]
  );

  useEffect(() => {
    allVideosId === "all-videos"
      ? fetchVideos("date", "", 9, "video")
      : fetchVideos("date", "", 9, "playlist");
  }, [fetchVideos, allVideosId]);

  function handleFetch(event) {
    event.preventDefault();
    if (query) {
      allVideosId === "all-videos"
        ? fetchVideos("relevance", query, 18, "video")
        : fetchVideos("relevance", query, 18, "playlist");
    } else {
      allVideosId === "all-videos"
        ? fetchVideos("date", "", 9, "video")
        : fetchVideos("date", "", 9, "playlist");
    }
  }

  function handleSetQuery(event) {
    setQuery(event.target.value);
  }

  return (
    <div className="md:mx-16 mx-6 md:mb-20 mb-12">
      <ButtonLink href="/videos" btnTheme={tertiaryBtnTheme}>
        <div className="flex justify-center items-center gap-1 md:mt-1 mt-3">
          <svg className="w-[0.85rem]" viewBox="0 0 532 532">
            <path
              fill="currentColor"
              d="M355.66 11.354c13.793-13.805 36.208-13.805 50.001 0 13.785 13.804 13.785 36.238 0 50.034L201.22 266l204.442 204.61c13.785 13.805 13.785 36.239 0 50.044-13.793 13.796-36.208 13.796-50.002 0a5994246.277 5994246.277 0 0 0-229.332-229.454 35.065 35.065 0 0 1-10.326-25.126c0-9.2 3.393-18.26 10.326-25.2C172.192 194.973 332.731 34.31 355.66 11.354Z"
            />
          </svg>
          Back
        </div>
      </ButtonLink>
      <div className="md:flex md:gap-20 md:justify-between md:items-center">
        <h1 className="md:mt-6 mt-4 font-bold md:text-6xl text-4xl md:mb-6 mb-4">
          {allVideosId === "all-videos" ? "All videos" : "All playlists"}
        </h1>
        <Search
          query={query}
          handleFetch={handleFetch}
          type={allVideosId}
          handleSetQuery={handleSetQuery}
        />
      </div>

      {result.length > 0 ? (
        <ul className="flex flex-wrap justify-between items-center md:gap-y-6 gap-y-4 md:pt-0 pt-6">
          {result.map((video, i) => (
            <ListAll
              key={i}
              content={video}
              section={allVideosId === "all-playlists" ? "playlist" : "videos"}
            />
          ))}
        </ul>
      ) : (
        <p className="h-[20rem] flex justify-center items-center font-bold md:text-2xl text-xl">
          No search results found
        </p>
      )}
    </div>
  );
}
