import Image from "next/image";

import Logo from "./logo-dark-full.png";

export default function Navbar() {
  return (
    <nav>
      <Image
        src={Logo}
        alt="My Portfolio Logo"
        width={100}
        quality={100}
        placeholder="blur"
      />
      <h1 className="text-lg">PORTFOLIO</h1>
      <a href="">About Me</a>
      <a href="">Work Experience</a>
      {/* <a href="">Projects</a> */}
      <a href="">Education</a>
      <a href="">Contacts</a>
    </nav>
  );
}
