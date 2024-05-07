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
          <p className="text-green-500 text-sm mt-2">
            Email sent successfully!
          </p>
        ))
      : (content = (
          <form className="flex flex-col" onSubmit={handleSubmit}>
            <div className="mb-6">
              <label
                htmlFor="email"
                className="dark:text-white block mb-2 text-sm font-medium"
              >
                Your email
              </label>
              <input
                name="email"
                type="email"
                id="email"
                required
                className="bg-[#f5f5f5] border border-[#33353F] placeholder-zinc-400 text-sm rounded-lg block w-full p-3 dark:text-gray-900"
                placeholder="john@gmail.com"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="subject"
                className="dark:text-white block text-sm mb-2 font-medium"
              >
                Subject
              </label>
              <input
                name="subject"
                type="text"
                id="subject"
                required
                className="bg-[#f5f5f5] border border-[#33353F] placeholder-zinc-400 text-sm rounded-lg block w-full p-3 dark:text-gray-900"
                placeholder="Hey there"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="message"
                className="dark:text-white block text-sm mb-2 font-medium"
              >
                Message
              </label>
              <textarea
                name="message"
                id="message"
                cols={30}
                rows={10}
                className="bg-[#f5f5f5] border border-[#33353F] placeholder-zinc-400 text-sm rounded-lg block w-full p-3 dark:text-gray-900"
                placeholder="Hi, waasi..."
              />
            </div>
            <div>
              <Button
                variant={"default"}
                size={"default"}
                className="bg-purple-600 dark:bg-purple-500 text-white"
              >
                Send message
              </Button>
            </div>
          </form>
        ));
  }

  return content;
}
