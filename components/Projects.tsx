import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { urlFor } from "@/sanity";
import { Project } from "@/typings";

type Props = {
  projects: Project[];
};

function Projects({ projects }: Props) {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="relative h-screen flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Projects
      </h3>

      <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#2878B8]/80 z-2">
        {projects?.map((project, i) => (
          <div
            key={project?._id}
            className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-10 md:p-44 h-screen "
          >
            <motion.div
              initial={{ y: -100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 1.2 }}
              viewport={{ once: true }}
              className="relative w-52 h-52 md:w-72 xl:w-96"
            >
              <Image
                src={urlFor(project?.image).url()}
                alt=""
                unoptimized={true}
                fill
                style={{ objectFit: "contain" }}
              />
            </motion.div>

            <div className="space-y-10 px-0 md:px-10 max-w-6xl flex flex-col items-center justify-center">
              <h4 className="text-2xl md:text-3xl font-semibold text-center">
                <span className="underline decoration-[#2878B8]/50">
                  Case Study of {i + 1} of {projects.length}:
                </span>{" "}
                {project?.title}
              </h4>

              <div className="relative flex items-center space-x-2 justify-center">
                {project?.technologies.map((technology) => (
                  <div key={technology._id} className="relative h-10 w-10">
                    <Image
                      src={urlFor(technology?.image).url()}
                      alt=""
                      unoptimized={true}
                      fill
                      style={{ objectFit: "contain" }}
                      className="rounded-full"
                    />
                  </div>
                ))}
              </div>

              <p className="md:text-lg text-center md:text-left">
                {project?.summary}
              </p>

              <a href={project?.linkToBuild}>
                <button className="heroButton">{project.title}</button>
              </a>
            </div>
          </div>
        ))}
      </div>
      <div className="w-full absolute top-[30%] bg-[#2878B8]/10 left-0 h-[450px] -skew-y-12" />
      {/* // for the background diagonal wallpaper */}
    </motion.div>
  );
}

export default Projects;
