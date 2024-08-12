import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretRight } from "@fortawesome/free-solid-svg-icons";

type Props = {
  instituteName: string;
  fieldOfStudy: string;
  date: string;
  topics: string[];
};

export default function EducationCard({
  instituteName,
  fieldOfStudy,
  date,
  topics,
}: Props) {
  return (
    <div className="my-3 flex w-full flex-col rounded-md border border-solid border-stone-400 bg-stone-300 p-3 text-left text-black shadow-md hover:shadow-xl">
      <h3 className="font-semibold">{instituteName}</h3>
      <small className="my-1">{fieldOfStudy}</small>
      <p className="mb-3 text-sm italic">{date}</p>
      <p className="my-1 font-semibold">Topics covered:</p>
      <div>
        {topics.map((topic: string, index: number) => (
          <ul
            key={index}
            className="my-1 flex flex-row items-center justify-start"
          >
            <FontAwesomeIcon
              icon={faCaretRight}
              height={20}
              width={20}
              className="mr-2"
            />
            <li className="my-1">{topic}</li>
          </ul>
        ))}
      </div>
    </div>
  );
}
