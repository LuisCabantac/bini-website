import Image from "next/image";
import Button from "./Button";

function PlaylistCards({ playlist }) {
  const {
    id,
    snippet: {
      title,
      thumbnails: { standard },
    },
  } = playlist;

  return (
    <li className="h-[16rem] flex flex-col justify-center items-center gap-2">
      <div className="relative md:h-[12.3rem] h-[13rem] md:w-[22rem] w-[22rem] rounded-xl overflow-hidden image-container">
        <a href={`https://www.youtube.com/playlist?list=${id}`} target="_blank">
          <Image
            src={standard.url}
            alt={title}
            style={{ objectFit: "cover" }}
            blurDataURL
            fill
            className=" md:rounded-l-xl rounded-xl hover:scale-[1.3] transition-transform origin-[50%_50%]"
          />
        </a>
      </div>
      <p className="z-20 text-base">{title}</p>
    </li>
    // <li className="md:h-[17rem] md:mb-0 mb-4 flex md:flex-row flex-col md:items-center md:gap-5 gap-2">
    //   <div className="relative md:h-[13rem] h-[12rem] md:w-[22rem] w-full md:rounded-xl overflow-hidden image-container">
    //     <a href={`https://www.youtube.com/playlist?list=${id}`} target="_blank">
    //       <Image
    //         src={standard.url}
    //         alt={title}
    //         style={{ objectFit: "cover" }}
    //         blurDataURL
    //         fill
    //         className="md:rounded-l-xl rounded-xl hover:scale-[1.3] transition-transform origin-[50%_50%]"
    //       />
    //     </a>
    //   </div>
    // </li>
  );
}

export default PlaylistCards;
