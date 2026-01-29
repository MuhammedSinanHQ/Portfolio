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
} from "react-icons/si";

import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { motion } from "framer-motion";

/* ----------------------------- ABOUT DATA ----------------------------- */

const about = {
  title: "About me",
  description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique quasi aspernatur des",
  info: [
    { fieldName: "Name", fieldValue: "Muhammed Sinan" },
    { fieldName: "Phone", fieldValue: "+91 7736871685" },
    { fieldName: "Projects", fieldValue: "7+" },
    { fieldName: "Nationality", fieldValue: "Indian" },
    { fieldName: "Email", fieldValue: "realmuhammedsinan@gmail.com" },
    { fieldName: "Freelance", fieldValue: "Available" },
    {
      fieldName: "Languages",
      fieldValue: "English, Spanish, Malayalam, Tamil, Hindi",
    },
    { fieldName: "Location", fieldValue: "Chennai, India" },
  ],
};

/* ---------------------------- EDUCATION DATA --------------------------- */

const education = {
  title: "My Education",
  description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique quasi aspernatur des",
  items: [
    {
      institution: "Institution Name",
      degree: "Degree Name",
      duration: "Duration",
    },
    {
      institution: "Institution Name",
      degree: "Degree Name",
      duration: "Duration",
    },
  ],
};

/* ----------------------------- SKILLS DATA ----------------------------- */

const skills = {
  title: "My Skills",
  description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique quasi aspernatur des",
  skillsList: [
    { icon: <FaPython />, name: "Python" },
    { icon: <FaDocker />, name: "Docker" },
    { icon: <FaGithub />, name: "GitHub" },
    { icon: <SiPostgresql />, name: "PostgreSQL" },
    { icon: <FaGit />, name: "Git" },
    { icon: <SiStreamlit />, name: "Streamlit" },
    { icon: <SiTensorflow />, name: "TensorFlow" },
    { icon: <SiTableau />, name: "Tableau" },
    { icon: <SiPytorch />, name: "PyTorch" },
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
              <TabsContent value="education">
                <h2>{education.title}</h2>
              </TabsContent>

              <TabsContent value="skills">
                <h2>{skills.title}</h2>
              </TabsContent>

              <TabsContent value="about">
                <h2>{about.title}</h2>
              </TabsContent>
            </div>
          </Tabs>
        </div>
      </div>
    </motion.div>
  );
};

export default Resume;
