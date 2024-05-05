import Image from "next/image";
import "./education.css";

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
      `Image of ${school.schoolName} is missing in education section`
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
          <h5 className="text-xl font-bold md:text-2xl mb-1">
            {school.schoolName}
          </h5>
          <h5 className="text-base md:text-xl font-bold mb-2">
            {school.subHeader}
          </h5>
          <p className="dark:text-[#868e96] text-xs mb-2">{school.duration}</p>

          <div className="flex items-center mb-2 animate-bounce">
            <div className="rounded pl-4 pr-1 py-1 text-white space-x-1 bg-black text-xs font-bold dark:bg-zinc-800">
              <span>Grade</span>
              <span className="bg-white rounded-xl text-[0.6rem] px-2 py-[1px] text-zinc-700">
                {school.grade}
              </span>
            </div>
          </div>

          <ul className="list-disc ml-10 text-base dark:text-[#868e96]">
            <GetDescBullets descBullets={school.descBullets} />
          </ul>
        </div>
      </div>
      <div className="education-layout-border h-7 my-5 text-purple-200"></div>
    </div>
  );
}
