import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

export default function ContactSection() {
  return (
    <footer
      id="contact"
      className="bg-black/90 py-[5rem] text-center text-white"
    >
      <div className="mx-auto max-w-5xl">
        <h1>Contact</h1>
        <hr className="my-4 border-white" />
        <h3 className="text-lg font-semibold md:text-2xl">Connect With Me</h3>
        <div className="flex flex-row items-center justify-center gap-6 pt-[2rem]">
          <a href="mailto:hoquej.dev@gmail.com" target="_blank">
            <FontAwesomeIcon icon={faEnvelope} className="icon" />
          </a>
          <a
            href="https://www.linkedin.com/in/jubayedul-hoque-aa5700253/"
            target="_blank"
          >
            <FontAwesomeIcon icon={faLinkedin} className="icon" />
          </a>
          <a href="https://github.com/hoqueJ" target="_blank">
            <FontAwesomeIcon icon={faGithub} className="icon" />
          </a>
        </div>
      </div>
    </footer>
  );
}
