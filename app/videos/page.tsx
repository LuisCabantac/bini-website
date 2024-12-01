import MusicVideos from "@/components/MusicVideos";
import Playlist from "@/components/Playlist";
import LatestVideos from "@/components/LatestVideos";

export const metadata = {
  title: "Videos",
};

export default function Page() {
  return (
    <div className="mb-12 mt-12 flex flex-col gap-12 md:mb-20 md:mt-14 md:gap-16">
      <MusicVideos />
      <LatestVideos />
      <Playlist />
    </div>
  );
}
