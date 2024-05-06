"use client";

import { useState } from "react";
import { FormEvent } from "react";

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
            <button
              type="submit"
              className="bg-primary-500 hover:bg-primary-600 text-white font-medium py-2.5 px-5 rounded-lg w-full"
            >
              Send Message
            </button>
          </form>
        ));
  }

  return content;
}
