import { raleway } from "@/app/_lib/fonts";

export default function HeaderTitle({ type, children }) {
  return (
    <div>
      {type === "h1" ? (
        <h1
          className={`${raleway.className} font-bold md:text-6xl text-4xl md:mb-6 mb-4`}
        >
          {children}
        </h1>
      ) : (
        <h2 className={`${raleway.className} font-bold md:text-5xl text-3xl`}>
          {children}
        </h2>
      )}
    </div>
  );
}
