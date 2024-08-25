"use client";

import { useTypewriter } from "react-simple-typewriter";

export default function Dashboard() {
  const [text] = useTypewriter({
    words: ["Jubayedul Hoque", "Web Developer"],
    loop: 0,
  });

  return (
    <main className="flex h-full flex-col items-center bg-night-sky p-24 text-center text-white md:h-screen md:items-start md:p-48 md:text-left">
      <h1 className="my-4 h-14 w-screen md:w-full">{text}</h1>
      <p className="my-6 text-lg font-extralight text-mosslands md:text-2xl">
        I will create the ultimate digital experience for you.
      </p>
      <p className="my-6 text-sm md:text-lg">
        I&apos;m a Web Developer who enjoys building beautiful, immersive
        websites and landing pages for businesses using the latest technologies
        to help enhance your brand&apos;s online presence, boost sales, rank
        better in searches as well as optimise performance, security &
        reliability.
      </p>
    </main>
  );
}
