"use client";
import { TextGenerateEffect } from "@/components/ui/text-generate";

type Props = {
  words: string;
};

export function GenerateText({ words }: Props) {
  return <TextGenerateEffect words={words} className="font-light" />;
}
