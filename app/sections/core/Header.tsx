import Image from "next/image";
import Logo from "/public/logo-dark-full.png";
import Navbar from "./Navbar";

export default function Header() {
  return (
    <header className="relative top-0 z-[20] mx-auto flex w-full flex-wrap items-center justify-between bg-stone-400">
      <div>
        <Image
          src={Logo}
          alt="portfolio-logo"
          width={100}
          quality={100}
          placeholder="blur"
        />
      </div>
      <Navbar />
    </header>
  );
}
