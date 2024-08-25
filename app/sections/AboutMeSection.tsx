import { Poppins } from "next/font/google";

const poppins = Poppins({ subsets: ["latin"], weight: "100" });
export default function AboutMeSection() {
  const knownTechnologies: string[] = [
    "Linux (Basic)",
    "HTML",
    "CSS",
    "JavaScript",
    "TypeScript",
    "React",
    "Git",
    "GitHub",
  ];

  const learningTechnologies: string[] = [
    "Linux (Inter.)",
    "NextJS",
    "NodeJS",
    "Express",
    "Docker",
    "Cloud (AWS)",
  ];
  return (
    <main
      id="about-me"
      className="my-[5rem] w-2/3 text-justify text-sm text-white md:max-w-5xl md:text-base"
    >
      <h1>About Me</h1>
      <hr />
      <p className="my-4">
        Hi, my name&apos;s Jubayedul. Thanks for taking the time out to check
        out my portfolio! I&apos;m a Junior Web Developer, I enjoy building
        amazing websites, landing pages and applications that are attractive,
        immersive and perform well.
      </p>
      <p className="my-4">
        I&apos;m currently learning about Database Interaction using Postgres
        for SQL Databases, MongoDB for NoSQL as well as Cloud Computing services
        such as AWS in order to expand my skills in Backend development.
      </p>
      <p className="my-4">
        My goal is to become a skilled Full Stack Programmer, proficient in both
        Frontend and Backend Web Development and be able to write clean,
        functional code which can be tested and quality approved with automated
        scripts.
      </p>
      <p className="my-6">Below are technologies that I know:</p>
      <div className="flex flex-row flex-wrap items-center justify-between">
        {knownTechnologies.map((knownTechnology: string, index: number) => (
          <div key={index} className="card">
            <p className={poppins.className}>{knownTechnology}</p>
          </div>
        ))}
      </div>
      <p className="my-6">Some of the technologies I am currently learning:</p>
      <div className="flex flex-row flex-wrap items-center justify-between">
        {learningTechnologies.map(
          (learningTechnology: string, index: number) => (
            <div key={index} className="card">
              <p className={poppins.className}>{learningTechnology}</p>
            </div>
          ),
        )}
      </div>
    </main>
  );
}
