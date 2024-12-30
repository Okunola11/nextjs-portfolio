"use client";

import { useState } from "react";
import { FormEvent } from "react";
import { Button } from "@/components/ui/button";

export default function ContactForm() {
  const [emailSubmitted, setEmailSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
  };

  let content;

  {
    emailSubmitted
      ? (content = (
          <p className="mt-2 text-sm text-green-500">
            Email sent successfully!
          </p>
        ))
      : (content = (
          <form className="flex flex-col" onSubmit={handleSubmit}>
            <div className="mb-6">
              <label
                htmlFor="email"
                className="mb-2 block text-sm font-medium dark:text-white"
              >
                Your email
              </label>
              <input
                name="email"
                type="email"
                id="email"
                required
                className="block w-full rounded-lg border border-[#33353F] bg-[#f5f5f5] p-3 text-sm placeholder-zinc-400 dark:text-gray-900"
                placeholder="john@gmail.com"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="subject"
                className="mb-2 block text-sm font-medium dark:text-white"
              >
                Subject
              </label>
              <input
                name="subject"
                type="text"
                id="subject"
                required
                className="block w-full rounded-lg border border-[#33353F] bg-[#f5f5f5] p-3 text-sm placeholder-zinc-400 dark:text-gray-900"
                placeholder="Hey there"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="message"
                className="mb-2 block text-sm font-medium dark:text-white"
              >
                Message
              </label>
              <textarea
                name="message"
                id="message"
                cols={30}
                rows={10}
                className="block w-full rounded-lg border border-[#33353F] bg-[#f5f5f5] p-3 text-sm placeholder-zinc-400 dark:text-gray-900"
                placeholder="Hi, waasi..."
              />
            </div>
            <div>
              <Button
                variant={"default"}
                size={"default"}
                className="bg-purple-500 text-white"
              >
                Send message
              </Button>
            </div>
          </form>
        ));
  }

  return content;
}
