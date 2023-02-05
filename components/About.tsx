import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { PageInfo } from "@/typings";
import { urlFor } from "@/lib/sanity";

type Props = {
  pageInfo: PageInfo;
};

function About({pageInfo}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl justify-center m-auto items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        About
      </h3>
      <motion.div
        initial={{ x: -200, opacity: 0 }}
        transition={{ duration: 1.2 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        className="relative flex-shrink-0 mb-10 md:mb-0 w-60 h-60 md:w-64 md:h-64 xl:w-[500px] xl:h-[600px]"
      >
        <Image
          src={urlFor(pageInfo?.profilePic).url()}
          alt=""
          unoptimized={true}
          fill
          style={{objectFit:"cover"}}
          className="rounded-full md:rounded-lg"
        />
      </motion.div>

      <div className="space-y-10 px-0 md:px-10">
        <h4 className="text-3xl md:text-4xl font-semibold">
          Here is a{" "}
          <span className="underline decoration-[#2878B8]">little</span>{" "}
          background
        </h4>
        <div className="text-sm sm:text-base space-y-2">
          <p>
            {pageInfo?.backgroundInformation}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

export default About;
