import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Skill } from "@/typings";
import { urlFor } from "@/lib/sanity";

type Props = {
  directionLeft?: boolean;
  skill: Skill;
};

function Skill({ directionLeft, skill }: Props) {
  return (
    <div className="group relative flex cursor-pointer">
      <motion.div
        initial={{
          y: directionLeft ? -300 : 300,
          opacity: 0,
        }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="relative w-20 h-20 md:h-28 md:w-28 xl:w-32 xl:h-32"
      >
        <Image
          src={urlFor(skill?.image).url()}
          alt=""
          unoptimized={true}
          fill
          style={{ objectFit: "contain" }}
          className="relative rounded-full border border-gray-500 p-2 object-cover filter group-hover:grayscale transition duration-300 ease-in-out z-0"
        />
      </motion.div>
      <div className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white w-20 h-20 md:h-28 md:w-28 xl:w-32 xl:h-32 rounded-full">
        <div className="flex items-center justify-center h-full">
          <p className="text-3xl font-bold text-black opacity-100">
            {skill.progress}%
          </p>
        </div>
      </div>
    </div>
  );
}

export default Skill;
