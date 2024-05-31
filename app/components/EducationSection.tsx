import EducationCard from "./core/EducationCard";

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
    <main className="w-full mt-[5rem] text-center">
      <h1 className="mb-5">Education</h1>
      <hr className="my-4 border-black" />
      <div className="flex flex-col justify-center items-center py-2">
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
