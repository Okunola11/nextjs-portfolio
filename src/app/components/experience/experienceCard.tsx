import { Experience } from "../../../../types";
import { HiOutlineBuildingOffice2 } from "react-icons/hi2";
import { CiCalendar } from "react-icons/ci";
import { FaChevronRight, FaGlobe, FaMapPin } from "react-icons/fa";

export default function ExperienceCard({
  experience,
}: {
  experience: Experience;
}) {
  const JobTypeIcon =
    experience.jobType?.toLowerCase() === "remote" ? FaGlobe : FaMapPin;

  return (
    <div className="group relative min-h-[480px] rounded-xl border bg-white p-6 shadow-lg transition-all duration-300 ease-in-out hover:translate-y-[-4px] hover:shadow-xl dark:border-gray-700 dark:bg-gray-800 lg:max-w-sm xl:max-w-lg">
      <div className="mb-4 flex items-center space-x-2">
        <HiOutlineBuildingOffice2 className="h-6 w-6 text-pink-500" />
        <h5 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
          {experience.company}
        </h5>
      </div>

      <div className="mb-3 flex flex-wrap items-center gap-2">
        <span className="inline-flex items-center rounded-md bg-pink-50 px-3 py-1 text-sm font-medium text-pink-700 ring-1 ring-inset ring-pink-600/20 dark:bg-pink-900/30 dark:text-pink-300">
          {experience.role}
        </span>

        {experience.jobType && (
          <span className="inline-flex items-center gap-1 rounded-md bg-blue-50 px-3 py-1 text-sm font-medium text-blue-700 ring-1 ring-inset ring-blue-600/20 dark:bg-blue-900/30 dark:text-blue-300">
            <JobTypeIcon className="h-3 w-3" />
            {experience.jobType}
          </span>
        )}
      </div>

      <div className="mb-4 flex items-center space-x-2 text-gray-600 dark:text-gray-400">
        <CiCalendar className="h-4 w-4" />
        <span className="text-sm">{experience.date}</span>
      </div>

      <p className="mb-4 text-base leading-relaxed text-gray-700 dark:text-gray-300">
        {experience.desc}
      </p>

      {experience.descBullets && (
        <ul className="space-y-2 pl-5">
          {experience.descBullets.map((item, i) => (
            <li key={i} className="flex items-start space-x-2">
              <FaChevronRight className="mt-1 h-4 w-4 flex-shrink-0 text-pink-500" />
              <span className="text-sm text-gray-600 dark:text-gray-400">
                {item}
              </span>
            </li>
          ))}
        </ul>
      )}

      <div className="absolute inset-x-0 bottom-0 h-2 rounded-b-xl bg-gradient-to-r from-pink-500 to-purple-500 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
    </div>
  );
}
