"use client";
import React from "react";
import { BackgroundGradient } from "@/components/ui/background-gradient";
import MyImage from "./MyImage";

export function ProfileImage() {
  return (
    <div>
      <BackgroundGradient
        className="rounded-[22px] max-w-sm p-4 sm:p-10 bg-white dark:bg-zinc-900"
        containerClassName="max-w-sm w-[300px] md:w-[500px]"
      >
        <MyImage />
        <button className="rounded-full pl-4 pr-1 py-1 text-white flex items-center space-x-1 bg-black mt-4 text-xs font-bold dark:bg-zinc-800">
          <span>Waasi</span>
          <span className="bg-zinc-700 rounded-full text-[0.6rem] px-2 py-0 text-white">
            💻
          </span>
        </button>
      </BackgroundGradient>
    </div>
  );
}
