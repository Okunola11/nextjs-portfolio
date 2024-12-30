import Link from "next/link";
import "../hero/hero.css";
import emoji from "react-easy-emoji";
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
      className="custom-min-height mt-6 flex w-full flex-col-reverse justify-center gap-8 self-center border-b pb-2 md:mt-8 md:flex-row md:py-4"
    >
      <div className="flex-1">
        <div className="flex w-full flex-col gap-2">
          <h1 className="text-center text-4xl font-extrabold md:text-left md:text-5xl">
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
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
            {/* Button won't be displayed if no resume download link */}
            {heroGreeting.resumeLink && (
              <Link href={heroGreeting.resumeLink} download="Resume.pdf">
                <GradientButton text="Download cv" />
              </Link>
            )}
          </div>
        </div>
      </div>

      <div className="flex flex-1 justify-center">
        <ProfileImage />
      </div>
    </section>
  );
}
