

"use client";

import React from "react";
import SectionHeading from "./sectionheading";
import { motion } from "framer-motion";
// import { useSectionInView } from "@/lib/hooks";

export default function About() {
//   const { ref } = useSectionInView("About");

  return (
    <motion.section
    //   ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        I am a {" "}
        <span className="font-medium">final</span> year student pursuing B.tech in Computer Science from Vellore Institute of Technology.{" "} I am currently into 
        <span className="font-medium"> front-end web development</span>.{" "}
        <span className="italic">My favorite part of programming</span> is the
        problem-solving aspect and learning new technologies. I <span className="underline">love</span> the
        feeling of finally getting that red squibbly line out of the way. My core stack
        is{" "}
        <span className="font-medium">
          React, Next.js, Tailwind, Redux , Java (DSA)
        </span>
        . I am also familiar with TypeScript and Jest. I am always looking to
        learn new technologies. I am currently looking for a{" "}
        <span className="font-medium">full-time position</span> as a software
        developer.
      </p>

      <p>
        <span className="italic">When I'm not coding or reading docuentations</span>, I enjoy working out, reading novels, expanding my knowledge on various topics and meeting new people. I also enjoy{" "}
        <span className="font-medium">learning new things</span>.In general, I am currently
        learning about {" "}
        <span className="font-medium"> Indian politics and world affairs, </span> and keeping up with new happenings I'm also taking up jogging again, bit by bit.    
      </p>
    </motion.section>
  );
}