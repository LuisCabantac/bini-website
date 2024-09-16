import VideosEmblaCarousel from "@/app/_components/VideosEmblaCarousel";
import VideosHeader from "@/app/_components/VideosHeader";

export default function LatestVideos({ videos }) {
  return (
    <section>
      <VideosHeader href="https://www.youtube.com/@BINIPH/videos">
        Latest videos
      </VideosHeader>
      <VideosEmblaCarousel slides={videos.items} section="latest-videos" />

      {/* <div className="flex justify-between items-center md:mb-6 mb-4">
        <h2 className={`${raleway.className} font-bold md:text-5xl text-4xl`}>
          Latest videos
        </h2>
        <Button href="https://www.youtube.com/@BINIPH/videos" size="medium">
          See all
        </Button>
      </div> */}
      {/* <ul className="flex gap-6 overflow-scroll w-full h-full rounded-lg">
        {playlist.map((playlist) => (
          <PlaylistCards playlist={playlist} key={playlist.id} />
        ))}
      </ul> */}
      {/* <ul className="md:flex flex-wrap md:gap-y-0 md:gap-x-14 basis-full">
        {playlist.map((playlist) => (
          <PlaylistCards playlist={playlist} key={playlist.id} />
        ))}
      </ul> */}
    </section>
  );
}
