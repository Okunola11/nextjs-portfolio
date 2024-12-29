"use client";
import React from "react";
import { BackgroundGradient } from "@/components/ui/background-gradient";
import MyImage from "./MyImage";

export function ProfileImage() {
  return (
    <div>
      <BackgroundGradient
        className="max-w-sm rounded-[22px] bg-white p-4 dark:bg-zinc-900 sm:p-10"
        containerClassName="max-w-sm w-[300px] md:w-[500px]"
      >
        <MyImage />
        <button className="mt-4 flex items-center space-x-1 rounded-full bg-black py-1 pl-4 pr-1 text-xs font-bold text-white dark:bg-zinc-800">
          <span>Waasi</span>
          <span className="rounded-full bg-zinc-700 px-2 py-0 text-[0.6rem] text-white">
            💻
          </span>
        </button>
      </BackgroundGradient>
    </div>
  );
}
