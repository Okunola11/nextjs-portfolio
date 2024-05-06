import Link from "next/link";
import { socialMediaLinks } from "@/app/portfolio";
import { Button } from "@/components/ui/button";

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
    <div className="w-full flex gap-4 mb-2">
      {socialMediaLinks.github ? (
        <Button variant={"ghost"} size={"icon"}>
          <Link
            href={socialMediaLinks.github}
            className="text-3xl"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faGithub} />
          </Link>
        </Button>
      ) : null}

      {socialMediaLinks.linkedin ? (
        <Button variant={"ghost"} size={"icon"}>
          <Link
            href={socialMediaLinks.linkedin}
            className="text-blue-500 text-3xl"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </Link>
        </Button>
      ) : null}

      {socialMediaLinks.gmail ? (
        <Button variant={"ghost"} size={"icon"}>
          <Link
            href={`mailto:${socialMediaLinks.gmail}`}
            className="text-red-500 text-3xl"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faEnvelope} />
          </Link>
        </Button>
      ) : null}

      {socialMediaLinks.twitter ? (
        <Button variant={"ghost"} size={"icon"}>
          <Link
            href={socialMediaLinks.twitter}
            className="text-3xl"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faXTwitter} />
          </Link>
        </Button>
      ) : null}
    </div>
  );
}
