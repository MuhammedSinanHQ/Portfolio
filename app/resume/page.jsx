"use client";

import {
  FaPython,
  FaDocker,
  FaGit,
  FaGithub,
} from "react-icons/fa";

import { SiPostgresql, SiStreamlit, SiTensorflow, SiTableau, SiPytorch} from "react-icons/si";

// about data
const about = {
  title: 'About me',
  description:
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique quasi aspernatur des",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Muhammed Sinan",
    },
    {
      fieldName: "Phone",
      fieldValue: "+91 7736871685",
    },
    {
      fieldName: "Projects",
      fieldValue: "7+ Years",
    },
    {
      fieldName: "Nationality",
      fieldValue: "Indian",
    },
    {
      fieldName: "Email",
      fieldValue: "realmuhammedsinan@gmail.com",
    },
    {
      fieldName: "Freelance",
      fieldValue: "Available",
    },
    {
      fieldName: "Languages",
      fieldValue: "English, Spanish, Malayalam, Tamil,  Hindi",
    },
    {
      fieldName: "Location",
      fieldValue: "Chennai, India",
    }
  ]
};


// experience data
const experience = {
  icon: '/assets/resume/badge.svg',
  title: 'My Projects',
  description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique quasi aspernatur des",
  items: [
    {
      company: "Company Name.",
      position: "position",
      duration: "duration",
    },
    {
      company: "Company Name.",
      position: "position",
      duration: "duration",
    },
    {
      company: "Company Name.",
      position: "position",
      duration: "duration",
    }
  ]
};

// education data
const education = {
  icon: '/assets/resume/cap.svg',
  title: 'My education',
  description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique quasi aspernatur des",
  items: [
    {
      institution: "Institution Name.",
      degree: "Degree Name",
      duration: "duration",
    },
    {
      institution: "institution Name.",
      degree: "degree name",
      duration: "duration",
    },
  ]
};

// skills data
const skills = {
  title: 'My Skills',
  description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique quasi aspernatur des",
  skillsList: [
    {
      icon: <FaPython />,
      name: "Python",
    },
    { 
      icon: <FaDocker/>,
      name: "Docker",
    },
    {
      icon: <FaGithub />,
      name: "GitHub",
    },
    {
      icon: <SiPostgresql/>,
      name: "PostgreSQL",
    }, 
    { 
      icon: <FaGit/>,
      name: "Git",
    },
    { 
      icon: <SiStreamlit/>,
      name: "Streamlit",
    },
    { 
      icon: <SiTensorflow/>,
      name: "TensorFlow",
    },
    { 
      icon: <SiTableau/>,
      name: "Tableau",
    },
    
    { 
      icon: <SiPytorch/>,
      name: "PyTorch",
    },

  ],
};

import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { motion } from "framer-motion";

const Resume = () => {
  return (
    <motion.div initial={{opacity: 0}} animate={{opacity: 1, transition: {delay: 2.4, duration: 0.4, ease: 'easeIn'}}}>
      <div className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0">
        <div className="container mx-auto">
          <Tabs 
          defaultValue="experience"
          className="flex flex-col xl:flex-row gap-[60px]">
            <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
              <TabsTrigger value="experience">Experience</TabsTrigger>
              <TabsTrigger value="education">Education</TabsTrigger>
              <TabsTrigger value="skills">Skills</TabsTrigger>
              <TabsTrigger value="about">About me</TabsTrigger>
            </TabsList>

            {/* content */}
            <div className="min-h-[70vh] w-full">
              {/* experience */}
              <TabsContent value="experience" className="w-full">
              experience
              </TabsContent>
            </div>
          </Tabs>
        </div>
      </div>
    </motion.div>
  );
};

export default Resume;