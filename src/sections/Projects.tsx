import darkSaasLandingPage from "@/assets/images/dark-saas-landing-page.png";
import lightSaasLandingPage from "@/assets/images/light-saas-landing-page.png";
import aiStartupLandingPage from "@/assets/images/ai-startup-landing-page.png";
import Image from "next/image";
import CheckCircleIcon from "@/assets/icons/check-circle.svg";
import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
import grainImage from "@/assets/images/grain.jpg";
import { SectionHeader } from "@/components/SectionHeader";
import Card from "@/components/Card";

const portfolioProjects = [
  {
    company: "China Construction Bank",
    year: "2024",
    title: "AI Platform  Page",
    results: [
      { title: "One-stop Machine Learning Platform" },
      {
        title: "Comprehensive graphical modeling support",
      },
      { title: "Machine learning pipeline" },
    ],
    link: "https://youtu.be/4k7IdSLxh6w",
    image: darkSaasLandingPage,
  },
  {
    company: "Innovative Co",
    year: "2020",
    title: "Smart Prison",
    results: [
      { title: "Improve management efficiency" },
      { title: "Integrate intelligent hardware" },
      { title: "Smart big screen and digital twin" },
    ],
    link: "https://youtu.be/7hi5zwO75yc",
    image: lightSaasLandingPage,
  },
  {
    company: "NetEase Technology Co",
    year: "2018",
    title: "Smart Hospital",
    results: [
      { title: "Improve the level of inventory management" },
      { title: "Optimize material procurement management" },
      { title: "Assist in control and accounting" },
    ],
    link: "https://youtu.be/Z7I5uSRHMHg",
    image: aiStartupLandingPage,
  },
];

export const ProjectsSection = () => {
  return (
    <section id="project" className="pb-5 pt-[52px] md:pt-0 lg:py-24 lg:pt-16">
      <div className="container">
        <SectionHeader
          eyebrow="Real-world Results"
          title="Featured Projects"
          description="See how I transformed concepts into engaging digital experiences."
        />
        {/* 项目经验 */}
        <div className="mt-9 md:mt-14 md:px-1 flex flex-col gap-20">
          {portfolioProjects.map((project, projectIndex) => (
            <Card
              key={project.title}
              className="px-8 pt-8 pb-0 md:pt-12 md:px-10 lg:pt-10 lg:px-20 sticky"
              style={{ top: `calc(64px + ${projectIndex * 40}px` }}
            >
              <div className="lg:grid lg:grid-cols-2 lg:gap-16">
                <div className="lg:pb-16">
                  <div className="bg-gradient-to-r from-emerald-300 to-sky-400 inline-flex gap-2 font-bold uppercase tracking-widest text-sm text-transparent bg-clip-text">
                    <span>{project.company}</span>
                    <span>&bull;</span>
                    <span>{project.year}</span>
                  </div>
                  <h3 className="font-serif text-2xl mt-2 md:mt-5 md:text-4xl">
                    {project.title}
                  </h3>
                  <hr className=" border-t-2 border-white/5 mt-4 md:mt-5" />
                  <ul className="flex flex-col gap-4 mt-4">
                    {project.results.map((result) => (
                      <li
                        className="flex gap-2 text-sm md:text-base text-white/50"
                        key={result.title}
                      >
                        <CheckCircleIcon className="size-5" />
                        <span>{result.title}</span>
                      </li>
                    ))}
                  </ul>
                  {/* <a href={project.link}>
                    <button className="bg-white text-gray-950 h-12 w-full md:w-auto px-6 rounded-xl font-semibold inline-flex items-center justify-center gap-2 mt-8">
                      <span>Visit Live Site</span>
                      <ArrowUpRightIcon className="size-4" />
                    </button>
                  </a> */}
                </div>
                <div className="relative">
                  <Image
                    src={project.image}
                    alt={project.title}
                    className="mt-8 -mb-4 md:-mb-0 lg:mt-0 lg:absolute lg:h-full lg:max-w-none lg:w-auto"
                  />
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
