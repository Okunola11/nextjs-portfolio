import AnimatedMessage from "../contact/AnimatedDisplay";
import ContactForm from "../contact/ContactForm";
import { contactSection } from "@/app/portfolio";
import SocialMedia from "../hero/SocialMedia";

export default function ContactSection() {
  return (
    <section
      className="custom-min-height my-3 md:my-4 py-2 md:py-4 scroll-mt-20"
      id="contact"
    >
      <h1 className="text-4xl md:text-5xl mb-6">{contactSection.title}</h1>
      <div className="grid md:grid-cols-2">
        <div className="mb-10 md:mb-0">
          <AnimatedMessage />
          <SocialMedia />
        </div>
        <div>
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
