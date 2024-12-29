"use client";

import "../header/header.css";

import Link from "next/link";
import { useState } from "react";
import { useEffect } from "react";

import { headerAvatar, heroGreeting } from "../../portfolio";
import { segwick } from "../../fonts";
import { AvatarIcon } from "@/app/components/header/HeaderAvatar";
import { SunIcon, MoonIcon } from "@radix-ui/react-icons";
import { Button } from "@/components/ui/button";

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
    event,
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
      <header className="sticky top-0 z-20 border-b bg-white drop-shadow-xl dark:bg-slate-950">
        <div className="mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto flex h-16 items-center justify-between">
            <div className="flex items-center gap-2 md:gap-4">
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
                  className={`px-2 text-xl font-bold ${segwick.className} bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent`}
                >
                  {heroGreeting.username}
                </span>
                <span className="text-neutral-500">/&gt;</span>
              </Link>
            </div>

            <div className="hidden md:block">
              <nav aria-label="Global">
                <ul className="flex items-center gap-6">
                  <li>
                    <Link
                      className="z-5 text-sm text-pink-950 transition hover:text-gray-500/75 dark:text-purple-300 dark:hover:text-white/75"
                      href="#"
                    >
                      Home
                    </Link>
                  </li>

                  <li>
                    <Link
                      className="z-5 text-sm text-pink-950 transition hover:text-gray-500/75 dark:text-purple-300 dark:hover:text-white/75"
                      href="#skills"
                    >
                      Skills
                    </Link>
                  </li>

                  <li>
                    <Link
                      className="z-5 text-sm text-pink-950 transition hover:text-gray-500/75 dark:text-purple-300 dark:hover:text-white/75"
                      href="#education"
                    >
                      Education
                    </Link>
                  </li>

                  <li>
                    <Link
                      className="z-5 text-sm text-pink-950 transition hover:text-gray-500/75 dark:text-purple-300 dark:hover:text-white/75"
                      href="#projects"
                    >
                      Projects
                    </Link>
                  </li>

                  <li>
                    <Link
                      className="z-5 text-sm text-pink-950 transition hover:text-gray-500/75 dark:text-purple-300 dark:hover:text-white/75"
                      href="#otherprojects"
                    >
                      Other Projects
                    </Link>
                  </li>

                  <li>
                    <Link
                      className="z-5 text-sm text-pink-950 transition hover:text-gray-500/75 dark:text-purple-300 dark:hover:text-white/75"
                      href="https://nextjs-mdx-blog-iota.vercel.app/"
                      target="_blank"
                    >
                      Blog
                    </Link>
                  </li>

                  <li>
                    <Link
                      className="z-5 text-sm text-pink-950 transition hover:text-gray-500/75 dark:text-purple-300 dark:hover:text-white/75"
                      href="#contact"
                    >
                      Contact Me
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>

            <Button
              variant={"ghost"}
              size={"icon"}
              className="dark:text-gray-200"
              onClick={toggleDarkMode}
            >
              {isDarkMode ? (
                <SunIcon width={20} height={20} />
              ) : (
                <MoonIcon width={20} height={20} />
              )}
            </Button>

            <Button
              variant={"ghost"}
              size={"icon"}
              onClick={toggleMenu}
              className="flex flex-col items-center justify-center md:hidden"
            >
              <span
                className={`duration-600 block h-0.5 w-6 rounded-sm bg-violet-600 transition-all ease-out dark:bg-violet-300 ${
                  isActive ? "translate-y-1 rotate-45" : "-translate-y-0.5"
                }`}
              ></span>
              <span
                className={`duration-600 my-0.5 block h-0.5 w-6 rounded-sm bg-violet-600 transition-all ease-out dark:bg-violet-300 ${
                  isActive ? "opacity-0" : "opacity-100"
                }`}
              ></span>
              <span
                className={`duration-600 block h-0.5 w-6 rounded-sm bg-violet-600 transition-all ease-out dark:bg-violet-300 ${
                  isActive ? "-translate-y-1 -rotate-45" : "translate-y-0.5"
                }`}
              ></span>
            </Button>
          </div>
        </div>
        <nav
          id="menu"
          className={`nav open-menu w-full text-center transition duration-500 ease-in-out dark:bg-[#000e1f]/50 ${
            isActive ? "block" : "hidden"
          }`}
        >
          <ul className="flex flex-col gap-2 p-4 md:flex-row md:space-x-4">
            <li className="border-b p-1">
              <Link
                href="#"
                className="px-4 py-2 text-purple-500 hover:text-gray-300 dark:text-white"
                onClick={handleLinkClick}
              >
                Home
              </Link>
            </li>
            <li className="border-b p-1">
              <Link
                href="#skills"
                className="px-4 py-2 text-purple-500 hover:text-gray-300 dark:text-white"
                onClick={handleLinkClick}
              >
                Skills
              </Link>
            </li>
            <li className="border-b p-1">
              <Link
                href="#education"
                className="px-4 py-2 text-purple-500 hover:text-gray-300 dark:text-white"
                onClick={handleLinkClick}
              >
                Education
              </Link>
            </li>
            <li className="border-b p-1">
              <Link
                href="#projects"
                className="px-4 py-2 text-purple-500 hover:text-gray-300 dark:text-white"
                onClick={handleLinkClick}
              >
                Projects
              </Link>
            </li>
            <li className="border-b p-1">
              <Link
                href="#otherprojects"
                className="px-4 py-2 text-purple-500 hover:text-gray-300 dark:text-white"
                onClick={handleLinkClick}
              >
                Other Projects
              </Link>
            </li>
            <li className="border-b p-1">
              <Link
                href="https://nextjs-mdx-blog-iota.vercel.app/"
                className="px-4 py-2 text-purple-500 hover:text-gray-300 dark:text-white"
                target="_blank"
                onClick={handleLinkClick}
              >
                Blog
              </Link>
            </li>
            <li>
              <Link
                href="#contact"
                className="px-4 py-2 text-purple-500 hover:text-gray-300 dark:text-white"
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
