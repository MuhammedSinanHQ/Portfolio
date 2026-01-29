"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import MagneticButton from "@/components/MagneticButton";

const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    description: "+91-7736871685",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "realmuhammedsinan@gmail.com",
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "Location",
    description: "Chennai, India",
  },
];

const Contact = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 0.4, duration: 0.4, ease: "easeIn" },
      }}
      className="py-6"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          {/* form */}
          <div className="xl:w-[54%] order-2 xl:order-none">
            <form className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl relative overflow-hidden hover:shadow-[0_0_30px_rgba(0,255,153,0.2)] transition-all duration-500">
              {/* Glow effect border */}
              <div className="absolute inset-0 bg-gradient-to-r from-accent/20 via-accent/10 to-accent/20 opacity-0 hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              <h3 className="text-4xl text-accent">Let's work together</h3>
              <p className="text-white/60">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt sit illo esse commodi.
              </p>
              {/* input */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input type="firstname" placeholder="First name" />
                <Input type="lastname" placeholder="Last name" />
                <Input type="email" placeholder="Email address" />
                <Input type="phone" placeholder="Phone number" />
              </div>
              {/* select */}
              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select a service" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Select a service</SelectLabel>
                    <SelectItem value="ml">Machine Learning Solutions</SelectItem>
                    <SelectItem value="viz">Data Visualization & BI Dashboards</SelectItem>
                    <SelectItem value="mlops">MLOps Solutions</SelectItem>
                    <SelectItem value="db">Database Design & SQL Development</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
              {/* textarea */}
              <Textarea
                className="h-[200px]"
                placeholder="Type your message here."
              />
              {/* btn */}
              <MagneticButton>
                <Button size="md" className="max-w-40 hover:shadow-[0_0_20px_rgba(0,255,153,0.5)] transition-all duration-300">
                  Send message
                </Button>
              </MagneticButton>
            </form>
          </div>
          {/* info */}
          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
            <ul className="flex flex-col gap-10">
              {info.map((item, index) => {
                return (
                  <li key={index} className="flex items-center gap-6">
                    <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                      <div className="text-[28px]">{item.icon}</div>
                    </div>
                    <div className="flex-1">
                      <p className="text-white/60">{item.title}</p>
                      <h3 className="text-xl">{item.description}</h3>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
};


export default Contact;