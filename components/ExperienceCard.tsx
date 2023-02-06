import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Experience } from "@/typings";
import { urlFor } from "@/sanity";

type Props = {
  experience: Experience;
};

function ExperienceCard({ experience }: Props) {
  return (
    <article className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[600px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 opacity-40 hover:opacity-100 cursor-pointer transition-opacity duration-200  ">
      <motion.div
        initial={{
          y: -100,
          opacity: 0,
        }}
        transition={{ duration: 1.2 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        className="relative w-28 h-28 md:w-32 md:h-32 xl:w-36 xl:h-36"
      >
        <Image
          src={urlFor(experience?.companyImage).url()}
          alt=""
          unoptimized={true}
          fill
          style={{ objectFit: "cover" }}
          className="rounded-full"
        />
      </motion.div>

      <div className="px-0 md:px-10">
        <h4 className="text-4xl font-light">{experience?.jobTitle}</h4>
        <p className="font-bold text-2xl mt-1">{experience?.comapany}</p>
        <div className="flex space-x-2 my-2">
          {experience.technologies.map((technology) => (
            <div
              key={technology._id}
              className="relative h-10 w-10 object-cover"
            >
              <Image
                // className="rounded-full"
                src={urlFor(technology?.image).url()}
                alt=""
                unoptimized={true}
                fill
                style={{ objectFit: "contain" }}
              />
            </div>
          ))}
        </div>
        <p className="uppercase py-5 text-gray-300">
          {new Date(experience.dateStarted).toDateString()} -{" "}
          {experience.isCurrentlyWorkingHere
            ? "Present"
            : new Date(experience.dateEnded).toDateString()}
        </p>
        <ul className="list-disc space-y-4 ml-5 text-lg max-h-96 pr-5 overflow-y-scroll scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#2878B8]/80">
          {experience?.points.map((point, i) => (
            <li key={i}>{point}</li>
          ))}
        </ul>
      </div>
    </article>
  );
}

export default ExperienceCard;
