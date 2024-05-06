"use client";

import "../header/header.css";

import Link from "next/link";
import { useState } from "react";
import { useEffect } from "react";

import { headerAvatar, heroGreeting } from "../../portfolio";
import { segwick } from "../../fonts";
import { AvatarIcon } from "@/app/components/header/HeaderAvatar";

export default function Header() {
  const [isActive, setIsActive] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);

  const toggleMenu = () => {
    setIsActive(!isActive);
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  // Function to close the nav bar and navigate if a link is clicked on the mobile view
  const handleLinkClick: React.MouseEventHandler<HTMLAnchorElement> = (
    event
  ) => {
    event.preventDefault();
    setIsActive(false);
    // Extracting the URL from the href attribute of the anchor element
    const url = event.currentTarget.href;
    // Navigating to the URL
    window.location.href = url;
  };

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const targetElement = event.target as Element | null;
      // this is important because event.target doesnt exist on MouseEvent
      if (targetElement && !targetElement.closest(".nav") && isActive) {
        setIsActive(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isActive]);

  return (
    //from-gray-900 via-blue-900 to-gray-900
    <>
      <header className="bg-white dark:bg-slate-950 border-b sticky top-0 drop-shadow-xl z-20">
        <div className="mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex gap-2 items-center md:gap-4">
              <Link className="text-gray-500 dark:text-white" href="">
                <span className="sr-only">Okunola Abdulwasiu</span>
                <AvatarIcon
                  imgSrc={headerAvatar.image}
                  fallback={headerAvatar.fallback}
                />
              </Link>
              <Link href="/">
                <span className="text-neutral-500"> &lt;</span>
                <span
                  className={`font-bold text-xl px-2 ${segwick.className} text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600`}
                >
                  {heroGreeting.username}
                </span>
                <span className="text-neutral-500">/&gt;</span>
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
          className={`nav open-menu bg-[#000e1f]/50 text-center w-full transition duration-300 ease-in-out ${
            isActive ? "block" : "hidden"
          }`}
        >
          <ul className="flex flex-col md:flex-row md:space-x-4 p-4 gap-2">
            <li className="border-b p-1">
              <Link
                href="#skills"
                className="text-white hover:text-gray-300 py-2 px-4"
                onClick={handleLinkClick}
              >
                Skills
              </Link>
            </li>
            <li className="border-b p-1">
              <Link
                href="#education"
                className="text-white hover:text-gray-300 py-2 px-4"
                onClick={handleLinkClick}
              >
                Education
              </Link>
            </li>
            <li className="border-b p-1">
              <Link
                href="#projects"
                className="text-white hover:text-gray-300 py-2 px-4"
                onClick={handleLinkClick}
              >
                Projects
              </Link>
            </li>
            <li className="border-b p-1">
              <Link
                href="#resume"
                className="text-white hover:text-gray-300 py-2 px-4"
                onClick={handleLinkClick}
              >
                Resume
              </Link>
            </li>
            <li className="border-b p-1">
              <Link
                href="#contact"
                className="text-white hover:text-gray-300 py-2 px-4"
                onClick={handleLinkClick}
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
