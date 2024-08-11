import WorkExperienceCard from "../sections/components/WorkExperienceCard";

type WorkExperience = {
  title: string;
  date: string;
  companyUrl?: string;
  responsibilities: string[];
};

export default function WorkExperienceSection() {
  const workExperiences: WorkExperience[] = [
    {
      title: "Junior Frontend Web Developer @ Wilayah Matrimonials",
      date: "2023 - Current",
      companyUrl: "https://www.wilayah-matrimonials.com",
      responsibilities: [
        "Working under close supervision of a project manager and senior developer ensuring quality code is written and best coding practices are being implemented",
        "Collaborating with other developers in order to build the most competitive online matrimonial platform",
        "Tasked with creating components for a React-based applicaton using custom CSS libraries",
        "Following project documentation and setup guides as and when required",
        "Working to deadlines to make sure that tickets are completed as per their requirements and on time",
        "Brain-storming new ideas and solutions for new and upcoming features",
        "Error debugging and making improvements to the codebase",
        "Maintaining regular communication with the team via standups to ensure every member is up-to-date with my tasks as well as any potential blockers or issues",
      ],
    },
  ];
  return (
    <main
      id="work-experience"
      className="my-[5rem] w-2/3 text-justify text-sm md:max-w-5xl md:text-base"
    >
      <h1>Work Experience</h1>
      <hr className="my-4 border-black" />
      <div className="flex flex-col items-center justify-center py-2">
        {workExperiences.map(
          (workExperience: WorkExperience, index: number) => (
            <WorkExperienceCard
              key={index}
              title={workExperience.title}
              date={workExperience.date}
              companyUrl={workExperience.companyUrl}
              responsibilities={workExperience.responsibilities}
            />
          ),
        )}
      </div>
    </main>
  );
}
