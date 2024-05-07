import Link from "next/link";
import { socialMediaLinks } from "@/app/portfolio";
import { Button } from "@/components/ui/button";

import { FaXTwitter, FaLinkedin, FaGithub } from "react-icons/fa6";
import { SiGmail } from "react-icons/si";

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
            <FaGithub />
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
            <FaLinkedin />
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
            <SiGmail />
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
            <FaXTwitter />
          </Link>
        </Button>
      ) : null}
    </div>
  );
}
