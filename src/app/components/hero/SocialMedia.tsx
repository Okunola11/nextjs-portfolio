import Link from "next/link";
import { socialMediaLinks } from "@/app/portfolio";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import XIcon from "@mui/icons-material/X";
import MailOutlinedIcon from "@mui/icons-material/MailOutlined";

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
          <GitHubIcon fontSize="large" />
        </Link>
      ) : null}

      {socialMediaLinks.linkedin ? (
        <Link
          href={socialMediaLinks.linkedin}
          className="text-blue-500"
          target="_blank"
          rel="noopener noreferrer"
        >
          <LinkedInIcon fontSize="large" />
        </Link>
      ) : null}

      {socialMediaLinks.gmail ? (
        <Link
          href={`mailto:${socialMediaLinks.gmail}`}
          className="text-red-500"
          target="_blank"
          rel="noopener noreferrer"
        >
          <MailOutlinedIcon fontSize="large" />
        </Link>
      ) : null}

      {socialMediaLinks.twitter ? (
        <Link
          href={socialMediaLinks.twitter}
          className=""
          target="_blank"
          rel="noopener noreferrer"
        >
          <XIcon fontSize="large" />
        </Link>
      ) : null}
    </div>
  );
}
