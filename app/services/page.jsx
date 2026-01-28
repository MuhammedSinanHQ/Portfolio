"use client";

import { BsArrowDownRight } from "react-icons/bs";
import { motion } from "framer-motion";

const services = [
  {
    num: "01",
    title: "Data Visualization & BI Dashboards",
    description:
      "I turn messy datasets into clear, decision-ready dashboards using Power BI, Tableau, and Streamlit. From automated reporting to interactive visual analytics, I focus on clarity, accuracy, and business impact — not just pretty charts.",
    href: "https://www.microsoft.com/en-us/power-platform/products/power-bi",
  },
  {
    num: "02",
    title: "Full-Stack MLOps Solutions",
    description:
      "I design end-to-end machine learning pipelines — from data ingestion and model training to deployment and monitoring. My focus is reproducibility, experiment tracking, and scalable ML systems that don’t break after the demo.",
    href: "https://mlflow.org/",
  },
  {
    num: "03",
    title: "Database Design & SQL Development",
    description:
      "I build efficient relational database schemas and write optimized SQL for analytics and applications. My approach prioritizes data integrity, performance, and clean query design for real-world workloads.",
    href: "https://www.postgresql.org/",
  },
  {
    num: "04",
    title: "Machine Learning & Predictive Analytics",
    description:
      "I develop and evaluate machine learning models for prediction and classification, with a strong focus on feature engineering, validation, and explainability. My goal is models that are accurate, interpretable, and usable in production.",
    href: "https://scikit-learn.org/stable/",
  },
];

const Services = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 0.4, duration: 0.4, ease: "easeIn" },
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
        >
          {services.map((service, index) => (
            <div
              key={index}
              className="flex flex-col justify-center gap-6 group"
            >
              {/* Top Row */}
              <div className="w-full flex justify-between items-center">
                <div
                  className="text-5xl font-extrabold text-outline text-transparent
                  group-hover:text-outline-hover transition-all duration-500"
                >
                  {service.num}
                </div>

                <a
                  href={service.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-[70px] h-[70px] rounded-full
                  bg-white group-hover:bg-accent transition-all duration-500
                  flex justify-center items-center hover:-rotate-45"
                >
                  <BsArrowDownRight className="text-primary text-3xl" />
                </a>
              </div>

              {/* Title */}
              <h2
                className="text-[42px] font-bold leading-none text-white
                group-hover:text-accent transition-all duration-500"
              >
                {service.title}
              </h2>

              {/* Description */}
              <p className="text-white/60">{service.description}</p>

              {/* Divider */}
              <div className="border-b border-white/20 w-full"></div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
