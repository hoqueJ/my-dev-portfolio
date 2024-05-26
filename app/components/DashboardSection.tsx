"use client";

import { useTypewriter } from "react-simple-typewriter";

export default function Dashboard() {
  const [text] = useTypewriter({
    words: ["Jubayedul Hoque", "Web Developer"],
    loop: 0,
  });

  return (
    <main className="flex flex-col items-center text-center">
      <h1 className="h-14 text-4xl">{text}</h1>
      <p className="my-5 font-semibold">I will create the ultimate digital experience for you.</p>
      <p>
        I&apos;m a Web Developer who enjoys building beautiful, immersive
        websites and landing pages for businesses using the latest technologies
        to help enhance your brand&apos;s online presence, skyrocket sales, rank
        better in searches as well as optimise performance, security &
        reliability.
      </p>
    </main>
  );
}
