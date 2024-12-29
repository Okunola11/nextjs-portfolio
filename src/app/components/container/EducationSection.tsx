import EducationLayout from "../education/EducationLayout";
import { educationSection } from "@/app/portfolio";

export default function EducationSection() {
  if (educationSection.display) {
    return (
      <section
        className="custom-min-height my-3 scroll-mt-20 border-b py-2 md:my-4 md:py-4"
        id="education"
      >
        <h1 className="mb-6 text-4xl md:text-5xl">Education</h1>
        {/* <div className=""> */}
        {educationSection.schools.map((school, index) => (
          <EducationLayout key={index} school={school} />
        ))}
        {/* </div> */}
      </section>
    );
  }
  return null;
}
