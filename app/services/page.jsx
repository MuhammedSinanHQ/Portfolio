"use client";

import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";
import { Description } from "@radix-ui/react-dialog";


const services = [
  {
    num: '01',
    title: 'Data Visualization & BI Dashboards',
    description: 'Lorem ipsum  aliquam quas nulla ab illum nam?',
    href: ""
  },
  {
    num: '02',
    title: 'Full-Stack MLOps Solutions',
    description: 'Lorem ipsum  aliquam quas nulla ab illum nam?',
    href: ""
  },
  {
    num: '03',
    title: 'Database Design & SQL Development',
    description: 'Lorem ipsum  aliquam quas nulla ab illum nam?',
    href: ""
  },
  {
    num: '04',
    title: 'Machine Learning & Predictive Analytics',
    description: 'Lorem ipsum  aliquam quas nulla ab illum nam?',
    href: ""
  },
];

import { animate, motion } from "framer-motion";


const Services = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
  <div className="container mx-auto">
    <motion.div 
    initial={{opacity: 0}}
     animate={{
      opacity: 1, transition:
      {delay: 2.4, duration: 0.4, ease: "easeIn" },
    }}
    className="grid grid-cols-1  md:grid-cols-2 gap-[60px]"
    >
      {services.map((service, index)=> {
        return (
        <div key={index} className="flex-1 flex flex-col justify-center gap-6 group">
          {/* top */}
          <div className="w-full flex justify-between items-center">
            <div className="text-5xl font-extrabold text-outline text-transparent 
            group-hover:text-outline-hover transition-all duration-500">
              {service.num}</div>
            <Link href={service.href}>
            <BsArrowDownRight />
            </Link>
          </div>
          {/* title */}
          <h2>{service.title}</h2>
          {/* description */}
          <p>{service.description}</p>
          {/* border */}
          <div className="border-b border-white/20 w-full"></div>
          </div>
        );
          })}
          </motion.div>
          </div>
     </section>
  );
};

export default Services;