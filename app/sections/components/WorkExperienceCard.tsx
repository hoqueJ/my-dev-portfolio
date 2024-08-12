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
    <div className="my-3 flex w-full flex-col rounded-md border border-solid border-stone-400 bg-stone-300 p-3 text-left text-black shadow-md hover:shadow-xl">
      <h3 className="font-semibold">{title}</h3>
      <small className="italic">{date}</small>
      <p className="mb-3 text-sm">{companyUrl}</p>

      <p className="my-1 font-semibold">Responsibilities:</p>
      <div>
        {responsibilities.map((responsibility: string, index: number) => (
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
            <li className="my-1">{responsibility}</li>
          </ul>
        ))}
      </div>
    </div>
  );
}
