"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faX } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  type NavItems = {
    href: string;
    text: string;
  };

  const navItems: NavItems[] = [
    {
      href: "#about-me",
      text: "About Me",
    },
    // {
    //   href: "#work-experience",
    //   text: "Work Experience",
    // },
    // {
    //   href: "#projects",
    //   text: "Projects",
    // },
    {
      href: "#education",
      text: "Education",
    },
    {
      href: "#contact",
      text: "Contact",
    },
  ];

  return (
    <>
      <div className="right-2 hidden flex-row gap-5 text-white md:absolute md:flex">
        {navItems.map((navItem, index) => (
          <a
            key={index}
            href={navItem.href}
            className="hover:text-mosslands transition duration-500 ease-in hover:border-b-2 hover:border-white"
          >
            {navItem.text}
          </a>
        ))}
      </div>
      <div>
        <button className="md:hidden" onClick={toggleNavbar}>
          {isOpen ? (
            <FontAwesomeIcon
              icon={faX}
              height={50}
              width={50}
              className="text-white"
            />
          ) : (
            <FontAwesomeIcon
              icon={faBars}
              height={50}
              width={50}
              className="text-white"
            />
          )}
        </button>
      </div>
      {isOpen && (
        <div className="bg-mosslands flex basis-full flex-col justify-center text-white">
          {navItems.map((navItem, index) => (
            <a
              key={index}
              href={navItem.href}
              className="border-night-sky border-t py-3 text-center transition duration-500 ease-in"
              onClick={() => {
                setIsOpen(!isOpen);
              }}
            >
              {navItem.text}
            </a>
          ))}
        </div>
      )}
    </>
  );
}
