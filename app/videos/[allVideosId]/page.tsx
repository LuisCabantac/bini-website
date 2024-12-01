import AllVideos from "@/components/AllVideos";
import PageNotFound from "@/components/PageNotFound";

export const metadata = {
  title: "All",
};

export default function Page({ params }) {
  return (
    <>
      {params.allVideosId === "all-videos" ||
      params.allVideosId === "all-playlists" ? (
        <AllVideos allVideosId={params.allVideosId} />
      ) : (
        <PageNotFound />
      )}
    </>
  );
}
