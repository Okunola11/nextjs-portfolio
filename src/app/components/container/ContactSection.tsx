import AnimatedMessage from "../contact/AnimatedDisplay";
import ContactForm from "../contact/ContactForm";
import { contactSection } from "@/app/portfolio";
import SocialMedia from "../hero/SocialMedia";

export default function ContactSection() {
  return (
    <section
      className="custom-min-height my-3 scroll-mt-20 py-2 md:my-4 md:py-4"
      id="contact"
    >
      <h1 className="mb-6 text-4xl md:text-5xl">{contactSection.title}</h1>
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
