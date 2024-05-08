import EducationLayout from "../education/EducationLayout";
import { educationSection } from "@/app/portfolio";

export default function EducationSection() {
  if (educationSection.display) {
    return (
      <section
        className="custom-min-height my-3 md:my-4 py-2 md:py-4 border-b scroll-mt-20"
        id="education"
      >
        <h1 className="text-4xl md:text-5xl mb-6">Education</h1>
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
