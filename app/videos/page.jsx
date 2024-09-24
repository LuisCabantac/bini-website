import { getMusicVideos, getVideos, getPlaylists } from "@/app/videos/actions";

import MusicVideos from "@/app/_components/MusicVideos";
import Playlist from "@/app/_components/Playlist";
import LatestVideos from "@/app/_components/LatestVideos";

export const metadata = {
  title: "Videos",
};

export default async function Page() {
  const [musicVideos, latestVideos, playlistVideos] = await Promise.all([
    getMusicVideos(),
    getVideos("date", "", 6, "video"),
    getPlaylists(6),
  ]);

  return (
    <div className="md:mt-14 mt-12 md:mx-16 mx-6 md:mb-20 mb-12 flex flex-col md:gap-16 gap-12">
      <MusicVideos musicVideos={musicVideos} />
      <LatestVideos videos={latestVideos} />
      <Playlist videos={playlistVideos} />
    </div>
  );
}
