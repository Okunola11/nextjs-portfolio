import Link from "next/link";
import "../hero/hero.css";
import emoji from "react-easy-emoji";
import DisplayLottie from "../hero/DisplayLottie";
import SocialMedia from "../hero/SocialMedia";
import { GradientButton } from "@/app/components/hero/GradientButton";
import { heroGreeting } from "@/app/portfolio";
import { ProfileImage } from "../hero/GradientProfile";
import { GenerateText } from "../hero/TextGenerate";

export default function HeroSection() {
  if (!heroGreeting.displayGreeting) {
    return null;
  }

  return (
    <section
      id="hero"
      className="mt-6 md:mt-8 flex flex-col-reverse md:flex-row w-full gap-8 justify-center self-center custom-min-height border-b"
    >
      <div className="flex-1">
        <div className="flex flex-col gap-2 w-full">
          <h1 className="text-center md:text-left text-4xl md:text-5xl font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
              {heroGreeting.title}
            </span>{" "}
            <span className="wave-emoji">{emoji("👋")}</span>
          </h1>

          <GenerateText words={heroGreeting.subtitle} />

          <SocialMedia />

          <div className="flex gap-3">
            <Link href="#contact">
              <GradientButton text="Contact me" />
            </Link>
            {/* Add resume link */}
            {/* {greeting.resumeLink && (
  <a
    href="/resume.pdf"
    download="Resume.pdf"
    className="download-link-button"
  >
    <Button text="Download my resume" />
  </a>
)} */}

            <GradientButton text="Download cv" />
            {/* </Link> */}
          </div>
        </div>
      </div>

      <div className="flex-1 flex justify-center">
        <ProfileImage />
      </div>
    </section>
  );
}
