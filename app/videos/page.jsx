import MusicVideos from "@/app/_components/MusicVideos";
import Playlist from "@/app/_components/Playlist";
import LatestVideos from "@/app/_components/LatestVideos";

export const metadata = {
  title: "Videos",
};

export default function Page() {
  return (
    <div className="md:mt-14 mt-12 md:mb-20 mb-12 flex flex-col md:gap-16 gap-12">
      <MusicVideos />
      <LatestVideos />
      <Playlist />
    </div>
  );
}
