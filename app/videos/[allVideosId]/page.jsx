import { getVideos } from "@/app/videos/actions";

import AllVideos from "@/app/_components/AllVideos";
import PageNotFound from "@/app/_components/PageNotFound";

export default function Page({ params }) {
  async function getData(order, query, maxResults, type) {
    "use server";
    const data = await (params.allVideosId === "all-playlists" && !query
      ? getVideos(order, query, maxResults, type)
      : params.allVideosId === "all-videos" && !query
      ? getVideos(order, query, maxResults, type)
      : getVideos(order, query, maxResults, type));
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
