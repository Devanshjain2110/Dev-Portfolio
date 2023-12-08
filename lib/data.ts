import React from "react";

import QueryPDF from "@/public/QueryPDF.png";
import BhookhLagiHai from "@/public/Bhookh_Lagi_Hai.png";
import Slima from "@/public/Slima.png";
import { Cloud, Laptop2 } from "lucide-react";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Certifications",
    hash: "#certifications",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const certificationsData = [
  {
    title: "AWS Cloud Practitioner",
    link : "https://www.credly.com/badges/ae367ea3-5710-44a9-82d5-59e274a79183/public_url",
    tech : 'AWS',
    description:
      "AWS Cloud Practitioner certified professional with foundational knowledge in cloud computing, demonstrating proficiency in AWS services and principles.",
    icon: React.createElement(Cloud),
    date: "2023",
  },
  {
    title: "Namaste React by Akshay Saini",
    link : "https://drive.google.com/drive/folders/1B_l8yrbmy3X9PIvbG6enhVqKV7qxMjSv",
  tech : 'React',
    description:"Namaste React by Akshay Saini is an insightful online course that provides a comprehensive guide to mastering React.js for web development.",
    icon: React.createElement(Laptop2),
    date: "2023",
  },

] as const;

export const projectsData = [
  {
    title: "QueryPDF",
    description:
      "A SAAS product with an AI powered chatbot which allows user to interact with PDFs by asking questions and letting intelligent bot provide relevant insightful answers",
    tags: ["Next.js", "TypeScript", "Trpc", "Prisma",'Pinecone','Tailwind'],
    imageUrl: QueryPDF,
    link : 'https://query-pdf.vercel.app/'
  },
  {
    title: "Bhookh Lagi Hai?",
    description:
      "Developed a high-performance and responsive food ordering app, leveraging Swiggy’s live API to deliver real-time data to users",
    tags: ["React", "React-Router", 'Redux-Toolkit', "Javascript", "Tailwind", "DaisyUI", 'Jest'],
    imageUrl: BhookhLagiHai,
    link : 'https://bhookh-lagi-hai.vercel.app/'
  },
  {
    title: "Slima",
    description:
      "Developed a scalable and performant video streaming app powered by Live Youtube Api",
    tags: ["React", "React", "React-router", "Redux-toolkit", "Tailwindcss"],
    imageUrl: Slima,
    link : 'https://github.com/Devanshjain2110/Slima'  
  },
] as const;

export const skillsData = [
  "React",
  "Next.js",
  "TypeScript",
  'Java',
  "Trpc",
  'zod',
  "Framer Motion",
  "Tailwind",
  'shadcn',
  'daisyui',
  'jest',
  "JavaScript",
  'KindeAuth',
  'Resend',
  'Firebase',
  "Git",
  "Redux Toolkit",
  "HTML",
  "CSS",

] as const;