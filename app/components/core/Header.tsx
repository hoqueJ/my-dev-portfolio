import Image from "next/image";
import Logo from "./logo-dark-full.png";
import Navbar from "./Navbar";

export default function Header() {
  return (
    <header className="bg-gray-700 sticky top-0 z-[20] mx-auto flex flex-wrap w-full items-center justify-between">
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
