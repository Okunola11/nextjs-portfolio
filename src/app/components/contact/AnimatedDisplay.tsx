"use client";

import { contactSection } from "@/app/portfolio";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";

export default function AnimatedMessage() {
  const msg1 = contactSection.subtitle.msg1;
  const msg2 = contactSection.subtitle.msg2;
  const msg3 = contactSection.subtitle.msg3;
  const msg4 = contactSection.subtitle.msg4;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="col-span-8 place-self-center justify-self-start text-center sm:text-left"
    >
      <h1 className="8xl mb-4 font-bold text-purple-600 dark:text-purple-300 lg:leading-normal">
        <TypeAnimation
          sequence={[msg1, 1000, msg2, 1000, msg3, 1000, msg4, 1000]}
          wrapper="span"
          speed={50}
          repeat={Infinity}
        />
      </h1>
    </motion.div>
  );
}
