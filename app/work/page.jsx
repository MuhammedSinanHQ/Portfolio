"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import Link from "next/link";
import Image from "next/image";
import WorkSliderBtns from "@/components/WorkSliderBtns";

const projects = [
  {
    num: "01",
    category: "MLOps",
    title: "Comprehensive MLOps Workflow for Predictive Maintenance",
    description:
      "Designed a complete MLOps pipeline covering data ingestion, preprocessing, model training, evaluation, and deployment. Developed predictive maintenance models achieving 85%+ accuracy.",
    stack: [
      { name: "Python" },
      { name: "MLOps" },
      { name: "Scikit-learn" },
    ],
    image: "/assets/work/predictive_mlops_maintanence.jpeg",
    live: "",
    github: "https://github.com/MuhammedSinanHQ/predictive-maintenance-mlops",
  },
  {
    num: "02",
    category: "Computer Vision",
    title: "Real-Time Classroom Engagement Monitoring Using YOLOv5",
    description:
      "Built a real-time computer vision system to analyze classroom engagement. Achieved 90%+ precision for object detection using YOLOv5. Published in IEEE Conference.",
    stack: [
      { name: "Python" },
      { name: "YOLOv5" },
      { name: "OpenCV" },
    ],
    image: "/assets/work/Real-time_classroom_engagement_yolov5.jpeg",
    live: "",
    github: "https://github.com/MuhammedSinanHQ/Real_time_class_room_engagement_and_interaction_monitoring_using_YOLO-V5",
  },
  {
    num: "03",
    category: "Deep Learning",
    title: "Diabetic Retinopathy Severity Detection with XAI",
    description:
      "Deep learning classifier for diabetic retinopathy severity detection from retinal fundus images. 85%+ accuracy with Grad-CAM visualization for explainable AI.",
    stack: [
      { name: "Python" },
      { name: "TensorFlow" },
      { name: "Grad-CAM" },
    ],
    image: "/assets/work/diabetic_retinopathy_detection.jpeg",
    live: "",
    github: "https://github.com/MuhammedSinanHQ/diabetic-retinopathy-severity-xai",
  },
  {
    num: "04",
    category: "Deep Learning",
    title: "Face Emotion Recognition Using Deep Learning",
    description:
      "Real-time CNN-based facial emotion recognition system achieving 85%+ accuracy. Detects and classifies emotions from facial expressions in real-time.",
    stack: [
      { name: "Python" },
      { name: "TensorFlow" },
      { name: "OpenCV" },
    ],
    image: "/assets/work/Face_emotion_recognition.jpeg",
    live: "",
    github: "https://github.com/MuhammedSinanHQ/Face-emotion-detection",
  },
  {
    num: "05",
    category: "Machine Learning",
    title: "House Price Prediction",
    description:
      "Regression models achieving 90%+ R² score through feature engineering and hyperparameter tuning. Predicts house prices using various property features.",
    stack: [
      { name: "Python" },
      { name: "Scikit-learn" },
      { name: "Pandas" },
    ],
    image: "/assets/work/House_price_prediction.jpg",
    live: "",
    github: "https://github.com/MuhammedSinanHQ/House_Price_Prediction",
  },
];

const Work = () => {
  const [project, setProject] = useState(projects[0]);

  const handleSlideChange = (swiper) => {
    // get current slide index
    const currentIndex = swiper.activeIndex;
    // update project state based on current slide index
    setProject(projects[currentIndex]);
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 0.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px] h-[50%]">
              {/* outline num */}
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                {project.num}
              </div>
              {/* project category */}
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                {project.category} project
              </h2>
              {/* project title */}
              <h3 className="text-2xl font-bold leading-none text-white">
                {project.title}
              </h3>
              {/* project description */}
              <p className="text-white/60">{project.description}</p>
              {/* stack */}
              <ul className="flex gap-4">
                {project.stack.map((item, index) => {
                  return (
                    <li key={index} className="text-xl text-accent">
                      {item.name}
                      {index !== project.stack.length - 1 && ","}
                    </li>
                  );
                })}
              </ul>
              {/* border */}
              <div className="border border-white/20"></div>
              {/* buttons */}
              <div className="flex items-center gap-4">
                {/* live project button */}
                {project.live && (
                  <Link href={project.live}>
                    <TooltipProvider delayDuration={100}>
                      <Tooltip>
                        <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                          <BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Live project</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </Link>
                )}
                {/* github project button */}
                <Link href={project.github} target="_blank" rel="noopener noreferrer">
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsGithub className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Github repository</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full xl:w-[50%]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="xl:h-[520px] mb-12"
              onSlideChange={handleSlideChange}
            >
              {projects.map((project, index) => {
                return (
                  <SwiperSlide key={index} className="w-full">
                    <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20">
                      {/* overlay */}
                      <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
                      {/* image */}
                      <div className="relative w-full h-full">
                        <Image
                          src={project.image}
                          fill
                          className="object-cover"
                          alt=""
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
              {/* slider buttons */}
              <WorkSliderBtns
                containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
                btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Work;