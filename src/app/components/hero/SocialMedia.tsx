import Link from "next/link";
import { socialMediaLinks } from "@/app/portfolio";

export default function SocialMedia() {
  if (!socialMediaLinks.display) {
    return null;
  }
  return (
    <div className="text-4xl">
      {socialMediaLinks.github ? (
        <Link
          href={socialMediaLinks.github}
          className="icon-button github"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-github"></i>
          <span></span>
        </Link>
      ) : null}

      {socialMediaLinks.linkedin ? (
        <Link
          href={socialMediaLinks.linkedin}
          className="icon-button linkedin"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-linkedin-in"></i>
          <span></span>
        </Link>
      ) : null}

      {socialMediaLinks.gmail ? (
        <Link
          href={`mailto:${socialMediaLinks.gmail}`}
          className="icon-button google"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fas fa-envelope"></i>
          <span></span>
        </Link>
      ) : null}

      {socialMediaLinks.twitter ? (
        <Link
          href={socialMediaLinks.twitter}
          className="icon-button twitter"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-twitter"></i>
          <span></span>
        </Link>
      ) : null}
    </div>
  );
}
