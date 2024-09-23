import { getVideos } from "@/app/_lib/data-service";

import AllVideos from "@/app/_components/AllVideos";
import PageNotFound from "@/app/_components/PageNotFound";

export default function Page({ params }) {
  async function getData(query, maxResults, type) {
    "use server";
    const data = await (params.allVideosId === "all-playlists" && !query
      ? getVideos(query, maxResults, type)
      : params.allVideosId === "all-videos" && !query
      ? getVideos(query, maxResults, type)
      : getVideos(query, maxResults, type));
    return data;
  }

  return (
    <div>
      {params.allVideosId === "all-videos" ||
      params.allVideosId === "all-playlists" ? (
        <AllVideos allVideosId={params.allVideosId} getData={getData} />
      ) : (
        <PageNotFound />
      )}
    </div>
  );
}
