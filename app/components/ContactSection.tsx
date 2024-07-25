import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

export default function ContactSection() {
  return (
    <footer id="contacts" className="mt-[5rem] mb-[5rem] text-center">
      <h1 className="mb-5">Contact</h1>
      <hr className="my-4 border-black" />
      <h3 className="text-2xl font-semibold">Connect With Me</h3>
      <div className="flex flex-row justify-center items-center gap-6 pt-[2rem]">
        <a href="mailto:hoquej.dev@gmail.com" target="_blank">
          <FontAwesomeIcon icon={faEnvelope} height={35} width={35} />
        </a>
        <a
          href="https://www.linkedin.com/in/jubayedul-hoque-aa5700253/"
          target="_blank"
        >
          <FontAwesomeIcon icon={faLinkedin} height={35} width={35} />
        </a>
        <a href="https://github.com/hoqueJ" target="_blank">
          <FontAwesomeIcon icon={faGithub} height={35} width={35} />
        </a>
      </div>
    </footer>
  );
}
