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
        containerClassName="rounded-2xl"
        as="button"
        className="bg-gradient-to-tr from-purple-500 to-cyan-500 text-white flex items-center space-x-2"
      >
        <span>{text}</span>
      </HoverBorderGradient>
    </div>
  );
}
