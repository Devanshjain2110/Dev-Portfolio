"use client";

import SectionHeading from "./sectionheading";
import { motion } from "framer-motion";
import { useSectionInView } from "../customHooks/useSectionInView";
import { sendEmail } from "@/actions/sendEmail";
import SubmitButton from "./submitButton";
import toast from "react-hot-toast";


function Contact() {
  const { ref } = useSectionInView("Contact");


  return (
    <motion.section
      id="contact"
      className="mb-20 sm:mb-28 w-[min(100%,38rem)] text-center"
      ref={ref}
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
      viewport={{
        once: true,
      }}
    >
      <SectionHeading>Contact Me</SectionHeading>
      <p className="text-gray-700 -mt-5">
        Please contact me directly at{" "}
        <a className="underline" href="mailto:devanshjain2904@gmail.com">
          devanshjain2904@gmail.com
        </a>{" "}
        or through this form.
      </p>

      <form className="mt-10 flex flex-col" action={async (formData) => {
        const {data, error} = await sendEmail(formData)
          if(error){
           toast.error(error)
              return;

          }
         toast.success('Email sent successfully')
        }}>
        <input
          className="h-14 rounded-lg px-4 borderBlack"
          name="senderEmail"
          type="email"
          placeholder="Your email"
          required
          maxLength={500}
        />
        <textarea
          className="h-52 my-3 rounded-lg borderBlack p-4"
          name="message"
          placeholder="Your message"
          required
          maxLength={5000}
        />
        <SubmitButton />
      </form>
    </motion.section>
  );
}

export default Contact;
