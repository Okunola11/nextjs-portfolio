"use client";
import React from "react";
import { HoverBorderGradient } from "../../../components/ui/hover-border-gradient";

type Props = {
  text: string;
};

export function GradientButton({ text }: Props) {
  return (
    <div>
      <HoverBorderGradient
        containerClassName="rounded-2xl hover:-translate-y-1 transform transition duration-200 hover:shadow-md"
        as="button"
        className="flex items-center space-x-2 bg-gradient-to-tr from-purple-500 to-cyan-500 text-white"
      >
        <span>{text}</span>
      </HoverBorderGradient>
    </div>
  );
}
