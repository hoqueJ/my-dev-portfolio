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
    <div className="flex flex-col w-full my-3 p-3 text-left border border-solid border-black rounded-md shadow-md hover:shadow-lg">
      <h3 className="font-semibold">{instituteName}</h3>
      <small className="my-1">{fieldOfStudy}</small>
      <p className="text-sm mb-3 italic">{date}</p>

      <p className="my-1 font-semibold">Topics covered:</p>
      <div>
        {topics.map((topic: string, index: number) => (
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
            <li className="my-1">{topic}</li>
          </ul>
        ))}
      </div>
    </div>
  );
}
