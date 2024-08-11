import EducationCard from "../sections/components/EducationCard";

type Education = {
  instituteName: string;
  fieldOfStudy: string;
  date: string;
  topics: string[];
};
export default function EducationSection() {
  const education: Education[] = [
    {
      instituteName:
        "HyperionDev Skills Bootcamp - (Co-certified by the University of Nottingham, UK)",
      fieldOfStudy: "Full-Stack Web Development",
      date: "November 2022 - March 2023",
      topics: [
        "HTML",
        "CSS",
        "JavaScript",
        "React",
        "NodeJS",
        "DOM Manipulation",
        "Responsive Web Design",
        "Debugging and Error Handling",
        "Asynchronous Programming",
        "Event Handling",
        "Functional Programming",
        "Object-Oriented Programming",
        "Express Web Framework",
        "Introduction to Databases (MongoDB)",
        "Database Interaction",
        "Authentication with JWT",
      ],
    },
  ];
  return (
    <main
      id="education"
      className="my-[5rem] w-2/3 text-justify text-sm md:max-w-5xl md:text-base"
    >
      <h1>Education</h1>
      <hr className="my-4 border-black" />
      <div className="flex flex-col items-center justify-center py-2">
        {education.map((education: Education, index: number) => (
          <EducationCard
            key={index}
            instituteName={education.instituteName}
            fieldOfStudy={education.fieldOfStudy}
            date={education.date}
            topics={education.topics}
          />
        ))}
      </div>
    </main>
  );
}
