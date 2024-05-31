import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretRight } from "@fortawesome/free-solid-svg-icons";

type Props = {
  title: string;
  date: string;
  companyUrl?: string;
  responsibilities: string[];
};

export default function WorkExperienceCard({
  title,
  date,
  companyUrl,
  responsibilities,
}: Props) {
  return (
    <div className="flex flex-col w-full my-3 p-3 text-left border border-solid border-black rounded-md">
      <h3 className="font-semibold">{title}</h3>
      <small className="italic">{date}</small>
      <p className="text-sm mb-3">{companyUrl}</p>

      <p className="my-1 font-semibold">Responsibilities:</p>
      <div>
        {responsibilities.map((responsibility: string, index: number) => (
          <ul
            key={index}
            className="flex flex-row justify-start items-center my-1"
          >
            <FontAwesomeIcon
              icon={faCaretRight}
              height={20}
              width={20}
              className="mr-2"
            />
            <li className="my-1">{responsibility}</li>
          </ul>
        ))}
      </div>
    </div>
  );
}
