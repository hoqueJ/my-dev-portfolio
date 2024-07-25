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
    {
      href: "#work-experience",
      text: "Work Experience",
    },
    // {
    //   href: "#projects",
    //   text: "Projects",
    // },
    {
      href: "#education",
      text: "Education",
    },
    {
      href: "#contacts",
      text: "Contacts",
    },
  ];

  return (
    <>
      <div className="hidden md:flex flex-row gap-5 md:absolute right-2 text-white">
        {navItems.map((navItem, index) => (
          <a key={index} href={navItem.href}>
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
        <div className="flex flex-col justify-center basis-full text-white">
          {navItems.map((navItem, index) => (
            <a
              key={index}
              href={navItem.href}
              className="text-center py-3 border-t border-gray-600"
            >
              {navItem.text}
            </a>
          ))}
        </div>
      )}
    </>
  );
}
