"use client";

import {
  FaPython,
  FaDocker,
  FaGit,
  FaGithub,
} from "react-icons/fa";

import {
  SiPostgresql,
  SiStreamlit,
  SiTensorflow,
  SiTableau,
  SiPytorch,
  SiMysql,
  SiMongodb,
  SiOpencv,
  SiJupyter,
} from "react-icons/si";

import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { motion } from "framer-motion";
import Image from "next/image";

/* ----------------------------- ABOUT DATA ----------------------------- */

const about = {
  title: "About me",
  description:
    "Aspiring Data Scientist and Machine Learning Engineer with strong academic foundations and hands-on experience in Machine Learning, Deep Learning, Computer Vision, and MLOps. Proven ability to design end-to-end ML systems, apply explainable AI techniques, and deliver measurable analytical outcomes.",
  info: [
    { fieldName: "Name", fieldValue: "Muhammed Sinan" },
    { fieldName: "Phone", fieldValue: "+91 7736871685" },
    { fieldName: "Email", fieldValue: "realmuhammedsinan@gmail.com" },
    { fieldName: "Nationality", fieldValue: "Indian" },
    { fieldName: "Location", fieldValue: "Chennai, India" },
    {
      fieldName: "Languages",
      fieldValue: "English, Malayalam, Tamil, Hindi",
    },
    { fieldName: "Freelance", fieldValue: "Available" },
    { fieldName: "Projects", fieldValue: "7+" },
  ],
};

/* ---------------------------- EDUCATION DATA --------------------------- */

const education = {
  title: "My Education",
  description:
    "Academic journey focused on Computer Science with specialization in Data Science and Machine Learning.",
  items: [
    {
      institution: "Vel Tech Rangarajan Dr. Sagunthala R&D Institute of Science & Technology",
      degree: "B.Tech — Computer Science and Engineering (Data Science Specialization)",
      duration: "Aug 2022 – Apr 2026",
      location: "Chennai, India",
      gpa: "CGPA: 8.0/10",
      coursework: "Machine Learning, Deep Learning, Data Structures and Algorithms, DBMS, Cloud Computing, Statistics",
    },
    {
      institution: "GHSS Tirurangadi",
      degree: "Higher Secondary Education — Science Stream",
      duration: "Jun 2021 – Mar 2022",
      location: "Kerala, India",
      gpa: "Percentage: 94% (Full A+)",
    },
  ],
};

/* ----------------------------- SKILLS DATA ----------------------------- */

const skills = {
  title: "My Skills",
  description:
    "Comprehensive toolkit for Data Science, Machine Learning, and MLOps development.",
  skillsList: [
    { icon: <FaPython />, name: "Python", type: "icon" },
    { icon: <SiTensorflow />, name: "TensorFlow", type: "icon" },
    { icon: <SiPytorch />, name: "PyTorch", type: "icon" },
    { icon: <SiOpencv />, name: "OpenCV", type: "icon" },
    { icon: "/assets/skills/Power-bi.svg", name: "Power BI", type: "svg" },
    { icon: <SiTableau />, name: "Tableau", type: "icon" },
    { icon: <SiStreamlit />, name: "Streamlit", type: "icon" },
    { icon: <SiMysql />, name: "MySQL", type: "icon" },
    { icon: <SiMongodb />, name: "MongoDB", type: "icon" },
    { icon: <SiPostgresql />, name: "PostgreSQL", type: "icon" },
    { icon: <FaDocker />, name: "Docker", type: "icon" },
    { icon: <FaGit />, name: "Git", type: "icon" },
    { icon: <FaGithub />, name: "GitHub", type: "icon" },
    { icon: <SiJupyter />, name: "Jupyter Notebook", type: "icon" },
  ],
};

/* ----------------------------- COMPONENT ------------------------------- */

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 0.4, duration: 0.4, ease: "easeIn" },
      }}
    >
      <div className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0">
        <div className="container mx-auto">
          <Tabs
            defaultValue="education"
            className="flex flex-col xl:flex-row gap-[60px]"
          >
            <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
              <TabsTrigger value="education">Education</TabsTrigger>
              <TabsTrigger value="skills">Skills</TabsTrigger>
              <TabsTrigger value="about">About Me</TabsTrigger>
            </TabsList>

            <div className="min-h-[70vh] w-full">
              {/* Education Tab */}
              <TabsContent value="education" className="w-full">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{education.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                    {education.description}
                  </p>
                  <div className="flex flex-col gap-6">
                    {education.items.map((item, index) => (
                      <div
                        key={index}
                        className="bg-[#232329] h-auto py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                      >
                        <span className="text-accent">{item.duration}</span>
                        <h3 className="text-xl max-w-[600px] min-h-[60px] text-center lg:text-left">
                          {item.degree}
                        </h3>
                        <div className="flex items-center gap-3">
                          <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                          <p className="text-white/60">{item.institution}</p>
                        </div>
                        {item.location && (
                          <p className="text-white/60">{item.location}</p>
                        )}
                        {item.gpa && (
                          <p className="text-white/60">{item.gpa}</p>
                        )}
                        {item.coursework && (
                          <p className="text-white/60 text-sm mt-2">
                            <span className="font-semibold">Key Coursework:</span> {item.coursework}
                          </p>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </TabsContent>

              {/* Skills Tab */}
              <TabsContent value="skills" className="w-full h-full">
                <div className="flex flex-col gap-[30px]">
                  <div className="flex flex-col gap-[30px] text-center xl:text-left">
                    <h3 className="text-4xl font-bold">{skills.title}</h3>
                    <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                      {skills.description}
                    </p>
                  </div>
                  <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                    {skills.skillsList.map((skill, index) => (
                      <li key={index}>
                        <div className="w-full h-[150px] bg-[#232329] rounded-xl flex flex-col justify-center items-center group hover:bg-accent transition-all duration-300">
                          {skill.type === "svg" ? (
                            <div className="relative w-16 h-16">
                              <Image
                                src={skill.icon}
                                alt={skill.name}
                                fill
                                className="object-contain"
                              />
                            </div>
                          ) : (
                            <div className="text-6xl group-hover:text-primary transition-all duration-300">
                              {skill.icon}
                            </div>
                          )}
                          <p className="mt-4 text-white/60 group-hover:text-primary transition-all duration-300">
                            {skill.name}
                          </p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </TabsContent>

              {/* About Me Tab */}
              <TabsContent value="about" className="w-full text-center xl:text-left">
                <div className="flex flex-col gap-[30px]">
                  <h3 className="text-4xl font-bold">{about.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                    {about.description}
                  </p>
                  <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 gap-x-8 max-w-[700px] mx-auto xl:mx-0">
                    {about.info.map((item, index) => (
                      <li
                        key={index}
                        className="flex flex-col xl:flex-row items-center justify-center xl:justify-start gap-4"
                      >
                        <span className="text-white/60 whitespace-nowrap">{item.fieldName}</span>
                        <span className="text-xl break-words xl:break-normal">{item.fieldValue}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </TabsContent>
            </div>
          </Tabs>
        </div>
      </div>
    </motion.div>
  );
};

export default Resume;
