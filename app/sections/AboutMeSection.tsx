import { Poppins } from "next/font/google";

const poppins = Poppins({ subsets: ["latin"], weight: "100" });
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
    "Linux",
    "Docker",
  ];
  return (
    <main
      id="about-me"
      className="my-[5rem] w-2/3 text-justify text-sm md:max-w-5xl md:text-base"
    >
      <h1>About Me</h1>
      <hr className="my-4 border-black" />
      <p className="my-4">
        Hi, my name&apos;s Jubayedul. Thanks for taking the time out to check
        out my portfolio! I&apos;m a Junior Frontend Web Developer, I enjoy
        building amazing websites and landing pages that are attractive,
        immersive and perform well. I am currently learning Backend development
        as well as Database Interaction and Cloud in order to expand my skills.
      </p>
      <p className="my-4">
        My goal is to become a skilled Full Stack Programmer, proficient in both
        Frontend and Backend Web Development and able to write clean, functional
        code which can be tested and quality approved with automated scripts.
      </p>
      <p className="my-4">
        Below is a list of technologies I am familiar with or currently use:
      </p>
      <div className="flex flex-row flex-wrap items-center justify-between">
        {technologies.map((technology: string, index: number) => (
          <div key={index} className="card">
            <p className={poppins.className}>{technology}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
