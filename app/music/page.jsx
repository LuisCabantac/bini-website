import LatestRelease from "@/app/_components/LatestRelease";
import Albums from "@/app/_components/Albums";
import Singles from "@/app/_components/Singles";

export const metadata = {
  title: "Music",
};

export default async function Page() {
  return (
    <div className="md:mt-14 mt-12 md:mb-20 mb-12 flex flex-col md:gap-16 gap-12">
      <LatestRelease />
      <Albums />
      <Singles />
    </div>
  );
}
