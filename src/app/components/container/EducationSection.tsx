import EducationLayout from "../education/EducationLayout";
import { educationSection } from "@/app/portfolio";

export default function EducationSection() {
  if (educationSection.display) {
    return (
      <section
        className="custom-min-height mt-6 md:mt-8 border-b"
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
