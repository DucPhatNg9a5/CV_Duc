import Link from "next/link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { config } from '@fortawesome/fontawesome-svg-core';
config.autoAddCss = false;

export default function Footer(props) {
  return (
    <div className="bg-blue-900 py-2 text-center w-full fixed bottom-0">
      <Link
        href="https://www.linkedin.com/in/ducphatnguyensait/"
        target="_blank"
        rel="noopener noreferrer"
        title="Linkedin"
        className="mx-4 hover:text-green-600"
      >
        <FontAwesomeIcon icon={faLinkedin} className="fa-2xl" />
      </Link>

      <Link
        href="https://ducphatng9a5.github.io/CV_2022/"
        target="_blank"
        rel="noopener noreferrer"
        title="My personal website"
        className="mx-4 hover:text-green-600"
      >
        <FontAwesomeIcon icon={faGlobe}  className="fa-2xl"/>
      </Link>

      <Link
        href="https://github.com/DucPhatNg9a5/"
        target="_blank"
        rel="noopener noreferrer"
        title="Github"
        className="mx-4 hover:text-green-600"
      >
        <FontAwesomeIcon icon={faGithub} className="fa-2xl" />
      </Link>

      <p className="copyright footer-link">© 2023 Duc Phat Nguyen.</p>
    </div>
  );
}
