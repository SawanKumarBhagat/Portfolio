import Head from "next/head";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import WorkExperience from "@/components/Experience";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import ContactMe from "@/components/ContactMe";
import Link from "next/link";
import Image from "next/image";
import { Experience, PageInfo, Project, Skill, Social } from "@/typings";
import { GetStaticProps } from "next";
import { fetchPageInfo } from "@/utils/fetchPageInfo";
import { fetchExperiences } from "@/utils/fetchExperiences";
import { fetchSkills } from "@/utils/fetchSkills";
import { fetchSocials } from "@/utils/fetchSocials";
import { fetchProjects } from "@/utils/fetchProjects";
import { urlFor } from "@/lib/sanity";

type Props = {
  pageInfo: PageInfo;
  experiences: Experience[];
  skills: Skill[];
  projects: Project[];
  socials: Social[];
};

export default function Home({
  projects,
  skills,
  socials,
  pageInfo,
  experiences,
}: Props) {
  return (
    <div className="bg-[rgb(36,36,36)] text-[#e0e0e0] h-screen snap-y snap-mandatory overflow-y-scroll z-0 scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#2878B8]/80">
      <Head>
        <title>{"Sawan's Portfolio"}</title>
      </Head>
      <Header socials={socials} />
      <section id="hero" className="snap-start">
        <Hero pageInfo={pageInfo} />
      </section>
      <section id="about" className="snap-center">
        <About pageInfo={pageInfo} />
      </section>
      {/* <section id="experience" className="snap-center">
        <WorkExperience experiences={experiences} />
      </section> */}
      <section id="skills" className="snap-start">
        <Skills skills={skills} />
      </section>
      <section id="projects" className="snap-start">
        <Projects projects={projects} />
      </section>
      <section id="contact" className="snap-start">
        <ContactMe pageInfo={pageInfo} />
      </section>
      <Link href="#hero">
        <footer className="sticky bottom-5 w-full cursor-pointer">
          <div className="flex items-center justify-center">
            <div className="relative h-10 w-10">
              <Image
                src={urlFor(pageInfo?.heroImage).url()}
                alt=""
                unoptimized={true}
                fill
                style={{ objectFit: "contain" }}
                className="rounded-full filter grayscale hover:grayscale-0 cursor-pointer"
              />
            </div>
          </div>
        </footer>
      </Link>
    </div>
  );
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const pageInfo: PageInfo = await fetchPageInfo();
  const experiences: Experience[] = await fetchExperiences();
  const skills: Skill[] = await fetchSkills();
  const socials: Social[] = await fetchSocials();
  const projects: Project[] = await fetchProjects();

  return {
    props: {
      pageInfo,
      experiences,
      skills,
      projects,
      socials,
    },
    revalidate: 10, // to refresh the data in every 10 seconds
  };
};
