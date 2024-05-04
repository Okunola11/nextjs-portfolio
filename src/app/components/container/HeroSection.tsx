import Link from "next/link";
import "../hero/hero.css";
import emoji from "react-easy-emoji";
import DisplayLottie from "../hero/DisplayLottie";
import SocialMedia from "../hero/SocialMedia";
import { GradientButton } from "@/app/components/hero/GradientButton";
import { heroGreeting } from "@/app/portfolio";
import { ProfileImage } from "../hero/GradientProfile";

export default function HeroSection() {
  if (!heroGreeting.displayGreeting) {
    return null;
  }

  return (
    <section
      id="hero"
      className="mt-4 md:mt-8 flex flex-col-reverse md:flex-row w-full gap-8 justify-center self-center"
    >
      <div className="flex-1">
        <div className="flex flex-col gap-2 w-full">
          <h1 className="text-3xl text-center md:text-left">
            {heroGreeting.title}{" "}
            <span className="wave-emoji">{emoji("👋")}</span>
          </h1>
          <p className="text-xl md:text-xl">{heroGreeting.subtitle}</p>
          <SocialMedia />

          <div className="flex gap-3">
            <GradientButton text="Contact me" />
            {/* <Link href={require("./resume.pdf")}> */}
            <GradientButton text="Download cv" />
            {/* </Link> */}
          </div>
        </div>
      </div>

      <div className="flex-1 grid place-content-center">
        <ProfileImage />
      </div>
    </section>
  );
}
