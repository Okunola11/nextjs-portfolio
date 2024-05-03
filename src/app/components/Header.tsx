"use client";

import Link from "next/link";
import { useState } from "react";
import { useEffect } from "react";

import { heroGreeting } from "../portfolio";
import { segwick } from "../fonts";

export default function Header() {
  const [isActive, setIsActive] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);

  const toggleMenu = () => {
    setIsActive(!isActive);
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  return (
    //from-gray-900 via-blue-900 to-gray-900
    <>
      <header className="bg-white dark:bg-slate-950 p-1 sticky top-0 drop-shadow-xl z-20">
        <div className="mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex gap-2 items-center md:gap-4">
              <Link className="text-gray-500 dark:text-white" href="">
                <span className="sr-only">Okunola Abdulwasiu</span>
                {/* AVATAR TO BE PLACED HERE */}
              </Link>
              {/* <h1 className="text-gray-900 dark:text-white font-bold text-xl hidden md:block">
                <Link href="/">{heroGreeting.username}</Link>
              </h1> */}
              <Link href="/">
                <span className="text-[#868e96]"> &lt;</span>
                <span className={`font-bold text-xl px-2 ${segwick.className}`}>
                  {heroGreeting.username}
                </span>
                <span className="text-gray-500">/&gt;</span>
              </Link>
            </div>

            <div className="hidden md:block">
              <nav aria-label="Global">
                <ul className="flex items-center gap-6 text-sm">
                  <li>
                    <Link
                      className="text-gray-900 transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75 text-lg z-5"
                      href="#skills"
                    >
                      Skills
                    </Link>
                  </li>

                  <li>
                    <Link
                      className="text-gray-900 transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75 text-lg z-5"
                      href="#education"
                    >
                      Education
                    </Link>
                  </li>

                  <li>
                    <Link
                      className="text-gray-900 transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75 text-lg z-5"
                      href="#projects"
                    >
                      Projects
                    </Link>
                  </li>

                  <li>
                    <Link
                      className="text-gray-900 transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75 text-lg z-5"
                      href="#resume"
                    >
                      Resume
                    </Link>
                  </li>

                  <li>
                    <Link
                      className="text-gray-900 transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75 text-lg z-5"
                      href="#contact"
                    >
                      Contact Me
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>

            <button
              className="text-gray-800 dark:text-gray-200 text-xl"
              onClick={toggleDarkMode}
            >
              {isDarkMode ? <p>Light</p> : <p>dark</p>}
            </button>

            {/* <div className="flex items-center justify-center gap-3 md:gap-6">
              <Link
                className="text-gray-800 dark:text-gray-200 text-3xl md:hidden"
                href="/"
              >
                <HomeRoundedIcon style={{ fontSize: 30 }} />
              </Link>
              <Link
                className="text-gray-800 dark:text-gray-200 text-xl"
                href="https://twitter.com/AbdulAyo4"
                target="_blank"
              >
                <XIcon />
              </Link>
              <Link
                className="text-gray-800 dark:text-gray-200 text-xl"
                href="https://github.com/okunola11"
                target="_blank"
              >
                <GitHubIcon />
              </Link>
              <Link
                className="text-gray-800 dark:text-gray-200 text-xl"
                href="https://www.linkedin.com/in/waas"
                target="_blank"
              >
                <LinkedInIcon />
              </Link>
              <button
                className="text-gray-800 dark:text-gray-200 text-xl"
                onClick={toggleDarkMode}
              >
                {isDarkMode ? (
                  <LightModeOutlinedIcon />
                ) : (
                  <DarkModeTwoToneIcon />
                )}
              </button>
            </div> */}

            <button
              onClick={toggleMenu}
              className="flex flex-col justify-center items-center md:hidden"
            >
              <span
                className={`bg-gray-800 dark:bg-gray-200 block transition-all duration-300 ease-out 
                  h-0.5 w-6 rounded-sm ${
                    isActive ? "rotate-45 translate-y-1" : "-translate-y-0.5"
                  }`}
              ></span>
              <span
                className={`bg-gray-800 dark:bg-gray-200 block transition-all duration-300 ease-out 
                  h-0.5 w-6 rounded-sm my-0.5 ${
                    isActive ? "opacity-0" : "opacity-100"
                  }`}
              ></span>
              <span
                className={`bg-gray-800 dark:bg-gray-200 block transition-all duration-300 ease-out 
                  h-0.5 w-6 rounded-sm ${
                    isActive ? "-rotate-45 -translate-y-1" : "translate-y-0.5"
                  }`}
              ></span>
            </button>
          </div>
        </div>
        <nav
          id="menu"
          className={`bg-[#000e1f]/50 text-center w-full transition duration-300 ease-in-out ${
            isActive ? "block" : "hidden"
          }`}
        >
          <ul className="flex flex-col md:flex-row md:space-x-4 p-4 gap-2">
            <li>
              <Link
                href="#skills"
                className="text-white hover:text-gray-300 py-2 px-4"
              >
                Skills
              </Link>
            </li>
            <li>
              <Link
                href="#education"
                className="text-white hover:text-gray-300 py-2 px-4"
              >
                Education
              </Link>
            </li>
            <li>
              <Link
                href="#projects"
                className="text-white hover:text-gray-300 py-2 px-4"
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                href="#resume"
                className="text-white hover:text-gray-300 py-2 px-4"
              >
                Resume
              </Link>
            </li>
            <li>
              <Link
                href="#contact"
                className="text-white hover:text-gray-300 py-2 px-4"
              >
                Contact Me
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
