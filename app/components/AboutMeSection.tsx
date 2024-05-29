import React from "react";

export default function AboutMeSection() {
  const technologies: string[] = [
    "HTML",
    "CSS",
    "JavaScript",
    "TypeScript",
    "ReactJS",
    "NextJS",
    "NodeJS",
    "MongoDB",
    "Git",
    "GitHub",
    "Docker",
  ];
  return (
    <main className="text-center">
      <h1>About Me</h1>
      <p>
        Hi, my name&apos;s Jubayedul. Thanks for taking out the time to check
        out my portfolio 😊! I&apos;m a Junior Frontend Web Developer, I enjoy
        building amazing websites and landing pages that are attractive,
        immersive and perform well. I am currently learning Backend development
        as well as Database Interaction on the Cloud in order to expand my
        skills.
      </p>
      <p>
        My goal is to become a skilled Full Stack Programmer, proficient in both
        Frontend and Backend Web Development and able to write clean, functional
        code which can be tested and quality approved with automated scripts.
      </p>
      <p>
        Below is a list of technologies I am familiar with or currently use:
      </p>
      <div className="grid grid-rows-3 grid-flow-col gap-4">
        {technologies.map((technology: string, index: number) => (
          <div key={index} className="card">
            <p>{technology}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
