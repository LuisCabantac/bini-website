import Image from "next/image";

export default function GalleryCards({
  images,
  padding,
  height,
  openZoomedImage,
}) {
  return (
    <div className={`flex flex-col md:gap-4 gap-2 ${padding}`}>
      {images.map((item) => (
        <div
          key={item.id}
          onClick={() => openZoomedImage(item.url)}
          className={`md:w-full ${height} w-full h-[18rem]`}
        >
          <div className="relative w-full h-full">
            <Image
              src={item.url}
              alt={item.name}
              fill
              className="object-cover rounded-lg"
              placeholder="blur"
            />
          </div>
        </div>
      ))}
    </div>
  );
}
