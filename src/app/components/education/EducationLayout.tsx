import Image from "next/image";
import "./education.css";
import { School } from "../../../../types";

type Descprops = {
  descBullets: string[];
};

type Props = {
  school: School;
};

export default function EducationLayout({ school }: Props) {
  const GetDescBullets = ({ descBullets }: Descprops) => {
    return descBullets
      ? descBullets.map((item, i) => <li key={i}>{item}</li>)
      : null;
  };

  if (!school.logo)
    console.error(
      `Image of ${school.schoolName} is missing in education section`,
    );
  return (
    <div className="education-layout">
      <div className="flex flex-col gap-4">
        {school.logo && (
          <div>
            <Image
              className="rounded-full"
              src={school.logo}
              alt={school.schoolName}
              width={100}
              height={100}
            />
          </div>
        )}
        <div className="flex flex-col">
          <h5 className="mb-1 text-xl font-bold md:text-2xl">
            {school.schoolName}
          </h5>
          <h5 className="mb-2 text-base font-bold md:text-xl">
            {school.subHeader}
          </h5>
          <p className="mb-2 text-xs dark:text-[#868e96]">{school.duration}</p>

          <div className="mb-2 flex animate-bounce items-center">
            <div className="space-x-1 rounded bg-black py-1 pl-4 pr-1 text-xs font-bold text-white dark:bg-zinc-800">
              <span>Grade</span>
              <span className="rounded-xl bg-white px-2 py-[1px] text-[0.6rem] text-zinc-700">
                {school.grade}
              </span>
            </div>
          </div>

          <ul className="ml-10 list-disc text-base dark:text-[#868e96]">
            <GetDescBullets descBullets={school.descBullets} />
          </ul>
        </div>
      </div>
      <div className="education-layout-border my-5 h-7 text-purple-200"></div>
    </div>
  );
}
