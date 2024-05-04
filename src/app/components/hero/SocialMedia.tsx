import Link from "next/link";
import { socialMediaLinks } from "@/app/portfolio";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faXTwitter,
  faLinkedin,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

export default function SocialMedia() {
  if (!socialMediaLinks.display) {
    return null;
  }
  return (
    <div className="text-4xl w-full flex gap-4 mb-2">
      {socialMediaLinks.github ? (
        <Link
          href={socialMediaLinks.github}
          className="icon-button github"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faGithub} />
        </Link>
      ) : null}

      {socialMediaLinks.linkedin ? (
        <Link
          href={socialMediaLinks.linkedin}
          className="text-blue-500"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faLinkedin} />
        </Link>
      ) : null}

      {socialMediaLinks.gmail ? (
        <Link
          href={`mailto:${socialMediaLinks.gmail}`}
          className="text-red-500"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faEnvelope} />
        </Link>
      ) : null}

      {socialMediaLinks.twitter ? (
        <Link
          href={socialMediaLinks.twitter}
          className=""
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faXTwitter} />
        </Link>
      ) : null}
    </div>
  );
}
